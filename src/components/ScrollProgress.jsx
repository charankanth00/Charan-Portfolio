"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform-origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}