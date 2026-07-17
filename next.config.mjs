/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    // Allows profile photos hosted on external URLs; apprentices can add
    // their own domains here if using next/image with a remote photo.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
