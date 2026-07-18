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
     
    
    </motion.div>
  );
}