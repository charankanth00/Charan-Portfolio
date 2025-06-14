"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // container for staggered children
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };
  // individual item animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="hero" // Add this line
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[90vh] flex items-center justify-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.9) 100%), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}            // fade-in on mount
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center max-w-4xl mx-auto px-6 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src="/globe.svg"
          alt="Charan's Logo"
          className="mx-auto mb-12 w-40 h-40 rounded-full shadow-2xl bg-white/95 p-4 hover:scale-110 hover:rotate-6 hover:shadow-blue-500/30 transition-all duration-500 ring-4 ring-blue-400/20"
          variants={item}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          variants={item}
        >
          Core Java, SQL & Frontend Enthusiast
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-400 mb-8 text-center"
          variants={item}
        >
          Skilled in Core Java, SQL, HTML, CSS, and JavaScript. A problem-solver who loves playing chess, drawing, music, and strategy games. Ready to bring creativity and logic to your team.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          variants={item}
        >
          <a
            href="#projects"
            className="px-12 py-5 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-slate-900 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/25 transition-all duration-300 transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-400">
            🚀 Open to Work! Ready to contribute to innovative projects and join a dynamic team.
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          variants={item}
        >
          {/* bouncing arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mx-auto text-blue-400 animate-bounce hover:animate-pulse cursor-pointer hover:text-cyan-400 hover:drop-shadow-lg hover:drop-shadow-cyan-400/50 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}