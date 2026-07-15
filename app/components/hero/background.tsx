"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-0 z-0 will-change-transform"
    >
      <img
        src="/bg-1.png"
        alt="Hero background"
        className="h-full w-full object-cover object-center lg:object-right"
      />
      <div className="absolute inset-0 bg-[#180e08]/75 lg:hidden" />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(24,14,8,0.96) 0%, rgba(24,14,8,0.78) 38%, rgba(24,14,8,0.22) 68%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(24,14,8,0.92) 0%, rgba(24,14,8,0.40) 30%, transparent 55%)",
        }}
      />
    </motion.div>
  );
}