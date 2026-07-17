"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import Tilt from "react-parallax-tilt";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the About section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations for 3D parallax feel
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="mx-auto max-w-5xl px-6 py-20 relative z-10 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bio Text */}
        <motion.div 
          style={{ y: textY }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          <SectionHeading index="01 — About" title="Background" />
          <p className="text-lg leading-relaxed text-ink-muted">
            {profile.longBio}
          </p>
          <div className="border-l-2 border-ember pl-4 py-2 font-mono text-sm text-ink-muted/80">
            &ldquo;Building practical, modern solutions with thoughtful code and a problem-first mindset.&rdquo;
          </div>
        </motion.div>

        {/* Right Side: 3D interactive Image */}
        <motion.div 
          style={{ y: imageY, rotateX: rotateX }}
          className="md:col-span-5 flex justify-center [perspective:1000px]"
        >
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="var(--ember)"
            glarePosition="all"
            glareBorderRadius="12px"
            className="w-full max-w-[280px] aspect-[4/5] relative rounded-2xl border border-line bg-surface/50 p-2 backdrop-blur-md shadow-2xl hover:shadow-ember/10 transition-shadow duration-500 cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-xl bg-bg border border-line/50 group">
              <Image
                src="/about-photo.jpeg"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 font-mono text-[9px] text-ink-muted opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {"// SYSTEM_ID: "}{profile.apprenticeId}
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

