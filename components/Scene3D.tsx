"use client";

import { useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

interface Scene3DProps {
  avatarUrl: string;
  photoUrl: string;
}

// ── Helper: build a flat hexagon Shape ─────────────────────────────
function buildHexShape(w: number, h: number): THREE.Shape {
  const shape = new THREE.Shape();
  const pts: [number, number][] = [
    [0,      h / 2],
    [w / 2,  h / 4],
    [w / 2, -h / 4],
    [0,     -h / 2],
    [-w / 2, -h / 4],
    [-w / 2,  h / 4],
  ];
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

// ── Helper: build a hex ring (outer – inner hole) ──────────────────
function buildHexRingShape(w: number, h: number, thickness: number): THREE.Shape {
  const f = 1 - thickness;
  const outer = buildHexShape(w, h);
  const inner = new THREE.Path();
  const pts: [number, number][] = [
    [0,           (h * f) / 2],
    [(w * f) / 2,  (h * f) / 4],
    [(w * f) / 2, -(h * f) / 4],
    [0,           -(h * f) / 2],
    [-(w * f) / 2, -(h * f) / 4],
    [-(w * f) / 2,  (h * f) / 4],
  ];
  inner.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) inner.lineTo(pts[i][0], pts[i][1]);
  inner.closePath();
  outer.holes.push(inner);
  return outer;
}

// ── Avatar → Real Photo fade reveal (hexagonal) ───────────────────
function HexPhotoReveal({ avatarUrl, photoUrl }: { avatarUrl: string; photoUrl: string }) {
  const avatarTexture = useLoader(THREE.TextureLoader, avatarUrl);
  const photoTexture  = useLoader(THREE.TextureLoader, photoUrl);

  // Flip so texture isn't upside-down on ShapeGeometry
  avatarTexture.flipY = false;
  photoTexture.flipY  = false;

  const W = 3.4, H = 4.2;
  const hexGeo = useMemo(() => new THREE.ShapeGeometry(buildHexShape(W, H), 32), []);

  const avatarRef = useRef<THREE.Mesh>(null);
  const revealT   = useRef(0);
  const revealed  = useRef(false);

  useFrame((state) => {
    if (state.clock.elapsedTime > 2.5) revealed.current = true;
    if (revealed.current && revealT.current < 1) {
      revealT.current = Math.min(revealT.current + 0.007, 1);
    }
    if (avatarRef.current) {
      (avatarRef.current.material as THREE.MeshBasicMaterial).opacity = 1 - revealT.current;
    }
  });

  return (
    <>
      {/* Real photo — always behind */}
      <mesh geometry={hexGeo} position={[0, 0, -0.01]}>
        <meshBasicMaterial map={photoTexture} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
      {/* Cute avatar — fades out */}
      <mesh ref={avatarRef} geometry={hexGeo} position={[0, 0, 0.01]}>
        <meshBasicMaterial map={avatarTexture} toneMapped={false} transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

// ── Glowing hexagonal border ring ─────────────────────────────────
function HexBorderRing() {
  const W = 3.6, H = 4.4;
  const geo = useMemo(() => new THREE.ShapeGeometry(buildHexRingShape(W, H, 0.04), 32), []);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // gentle pulse
      const pulse = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.5;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geo} position={[0, 0, 0.06]}>
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#0ea5e9"
        emissiveIntensity={2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ── Outer spinning halo torus ─────────────────────────────────────
function SpinningHalo({ radius, speed, thickness, color, emissive, tiltX = 0 }: {
  radius: number; speed: number; thickness: number; color: string; emissive: string; tiltX?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
      ref.current.rotation.x = tiltX;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -0.4]}>
      <torusGeometry args={[radius, thickness, 2, 120]} />
      <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={2.5} transparent opacity={0.55} />
    </mesh>
  );
}

// ── Small sphere orbiting the photo ───────────────────────────────
function OrbitSphere({ radius, speed, offset, y = 0, color }: {
  radius: number; speed: number; offset: number; y?: number; color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t * 0.7) * 0.6 + y;
      ref.current.position.z = Math.sin(t) * 0.9;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} />
    </mesh>
  );
}

// ── Corner wireframe decorations ──────────────────────────────────
function FloatingShapes() {
  const ico1   = useRef<THREE.Mesh>(null);
  const ico2   = useRef<THREE.Mesh>(null);
  const torus1 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ico1.current)   ico1.current.rotation.y   = t * 0.45;
    if (ico2.current) { ico2.current.rotation.x   = t * 0.35; ico2.current.rotation.z = t * 0.28; }
    if (torus1.current){ torus1.current.rotation.x = t * 0.55; torus1.current.rotation.y = t * 0.18; }
  });

  return (
    <>
      <Float speed={2}   rotationIntensity={1}   floatIntensity={1.6} position={[-3.2, 2.2, -1.2]}>
        <mesh ref={ico1}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#0ea5e9" wireframe emissive="#0ea5e9" emissiveIntensity={0.6} />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1.8} floatIntensity={2}   position={[3.2, 2.6, -1.4]}>
        <mesh ref={ico2}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#e0f2fe" wireframe emissive="#7dd3fc" emissiveIntensity={0.45} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.2} position={[-2.8, -2.6, -0.9]}>
        <mesh ref={torus1}>
          <torusGeometry args={[0.36, 0.1, 16, 60]} />
          <meshStandardMaterial color="#0ea5e9" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>

      {/* Metallic sphere bottom-right */}
      <Float speed={1.3} floatIntensity={1.4} position={[3.0, -2.2, -0.4]}>
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.04} metalness={0.95} />
        </mesh>
      </Float>

      {/* Tiny glow dots */}
      <Float speed={3}   floatIntensity={3}   position={[1.4, 3.2, -2]}>
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={2.5} />
        </mesh>
      </Float>
      <Float speed={2.5} floatIntensity={2.5} position={[-1.8, -3.0, -1.5]}>
        <mesh>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={2.5} />
        </mesh>
      </Float>
    </>
  );
}

// ── Fallback ──────────────────────────────────────────────────────
function SceneFallback() {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#0ea5e9" wireframe />
    </mesh>
  );
}

// ── Interactive Group reacting to Mouse & Scroll ───────────────────
function InteractiveGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    // 1. Mouse Tracking Parallax
    const targetMouseRotY = state.pointer.x * 0.45;
    const targetMouseRotX = -state.pointer.y * 0.45;

    // 2. Scroll Tracking Rotation & Position
    const targetScrollRotY = scrollYRef.current * 0.0025;
    const targetScrollRotX = scrollYRef.current * 0.0005;
    const targetZ = Math.max(-5, -scrollYRef.current * 0.003);
    const targetY = -scrollYRef.current * 0.001;

    // Smoothly interpolate (lerp) for fluid motion
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetMouseRotY + targetScrollRotY, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetMouseRotX + targetScrollRotX, 0.05);
    ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, targetZ, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);
  });

  return (
    <group ref={ref} position={[0.4, 0, 0]}>
      {children}
    </group>
  );
}

// ── Main export ───────────────────────────────────────────────────
export default function Scene3D({ avatarUrl, photoUrl }: Scene3DProps) {
  return (
    <div className="h-[520px] w-full lg:h-[720px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0.5, 0, 8], fov: 46 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]}   intensity={1.4} color="#ffffff" />
        <directionalLight position={[-4, -3, -4]} intensity={0.8} color="#0ea5e9" />
        <pointLight       position={[0, 2, 4]}   intensity={0.7} color="#38bdf8" />
        <pointLight       position={[0, -2, 3]}  intensity={0.4} color="#7dd3fc" />

        {/* ── Photo (hex shape, wrapped in InteractiveGroup) ── */}
        <InteractiveGroup>
          <Suspense fallback={<SceneFallback />}>
            <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.35}>
              <HexPhotoReveal avatarUrl={avatarUrl} photoUrl={photoUrl} />
            </Float>
            <Environment preset="city" />
          </Suspense>

          {/* Border & halos live inside same group so they match photo position */}
          <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.35}>
            <HexBorderRing />
          </Float>

          <SpinningHalo radius={2.8} speed={0.14}  thickness={0.05} color="#38bdf8" emissive="#0ea5e9" />
          <SpinningHalo radius={3.3} speed={-0.09} thickness={0.03} color="#7dd3fc" emissive="#38bdf8" tiltX={Math.PI / 5} />

          <OrbitSphere radius={2.55} speed={0.7}  offset={0}               color="#0ea5e9" />
          <OrbitSphere radius={2.55} speed={0.7}  offset={Math.PI}         color="#38bdf8" />
          <OrbitSphere radius={2.3}  speed={1.1}  offset={Math.PI / 2}     color="#7dd3fc" y={0.2} />
          <OrbitSphere radius={2.3}  speed={1.1}  offset={(3 * Math.PI)/2} color="#0ea5e9" y={-0.2} />
        </InteractiveGroup>

        <FloatingShapes />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.6}
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
