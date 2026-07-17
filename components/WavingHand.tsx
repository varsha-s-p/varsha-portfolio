"use client";

import { motion } from "framer-motion";

export default function WavingHand() {
  return (
    <motion.span
      className="inline-block origin-bottom-right"
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      👋
    </motion.span>
  );
}
