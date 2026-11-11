"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  // Upward reveal item variant
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out
      },
    },
  };

  // Profile avatar scale-up variant
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 18,
      },
    },
  };

  const coreSkills = [
    { label: "Core Java & OOP", icon: "☕" },
    { label: "AI & Computer Vision", icon: "🤖" },
    { label: "Python & OpenCV", icon: "🐍" },
    { label: "Next.js & React", icon: "⚛️" },
    { label: "AWS & Cloud", icon: "☁️" },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center justify-center py-12 sm:py-16 md:py-24 overflow-hidden rounded-2xl sm:rounded-3xl my-2 sm:my-3 text-white shadow-2xl bg-[#0a0f1d] border border-slate-800/80"
    >
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary Indigo/Blue Orb */}
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600/25 to-indigo-500/20 blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Cyan/Emerald Orb */}
        <motion.div
          className="absolute -bottom-28 -right-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-cyan-500/20 via-sky-500/15 to-transparent blur-[110px]"
          animate={{
            x: [0, -35, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Engineering Grid Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Availability Status Pill */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 backdrop-blur-md shadow-lg shadow-black/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Available for Software Engineering Roles & AI Projects
            </span>
          </div>
        </motion.div>

        {/* Profile Picture with Formal Precision Frame */}
        <motion.div variants={avatarVariants} className="relative mb-8">
          {/* Ambient Soft Breathing Aura */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 via-indigo-500/30 to-cyan-500/40 blur-xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.75, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Precision Rotating Ring */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 p-1 rounded-full">
            <motion.div
              className="absolute inset-0 rounded-full p-[2px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #6366f1, #06b6d4, #10b981, #3b82f6)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-[#0a0f1d]" />
            </motion.div>

            {/* Profile Avatar Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-700/60 shadow-2xl group">
              <motion.img
                src="/charan_kanth.png"
                alt="Guru Charan Kanth Swamy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* Verified Engineer Badge */}
            <div
              className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg border-2 border-[#0a0f1d]"
              title="Verified Developer & AI Specialist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Formal Greeting and Name Headline */}
        <motion.div variants={itemVariants} className="space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Guru Charan Kanth
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 tracking-tight">
            Software Engineer &amp; AI-Native Developer
          </h2>
        </motion.div>

        {/* Professional Summary */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed font-normal"
        >
          Specialized in building scalable software with{" "}
          <span className="text-white font-medium">Core Java</span>, Computer
          Vision and AI applications with{" "}
          <span className="text-white font-medium">Python &amp; OpenCV</span>, and
          high-performance modern web platforms using{" "}
          <span className="text-white font-medium">Next.js &amp; Tailwind CSS</span>.
        </motion.p>

        {/* Interactive Competency Chips */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2.5 mt-6 mb-8 max-w-2xl"
        >
          {coreSkills.map((skill, index) => (
            <motion.span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-200 cursor-default shadow-sm"
              whileHover={{ y: -2, scale: 1.04 }}
            >
              <span>{skill.icon}</span>
              <span>{skill.label}</span>
            </motion.span>
          ))}
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action Button */}
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base !text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-blue-400/20 transition-all duration-300 w-full sm:w-auto"
            style={{ color: "#ffffff" }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>

          {/* Secondary Action Button */}
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base !text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 backdrop-blur-md shadow-md transition-all duration-300 w-full sm:w-auto"
            style={{ color: "#ffffff" }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>

        {/* Social / Direct Connect Bar */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mt-8 text-slate-400"
        >
          <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1">
            Connect:
          </span>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/charanbandaru/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 !text-slate-300 hover:!text-white transition-all duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/charankanth00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 !text-slate-300 hover:!text-white transition-all duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:charanbandaru869@gmail.com"
            aria-label="Direct Email"
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 !text-slate-300 hover:!text-white transition-all duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Minimalist Formal Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-slate-400 opacity-80 hover:opacity-100 transition-opacity"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 cursor-pointer group"
            aria-label="Scroll down to about section"
          >
            <div className="w-5 h-8 rounded-full border-2 border-slate-600/80 group-hover:border-blue-400 transition-colors flex justify-center p-1">
              <motion.div
                className="w-1 h-2 rounded-full bg-blue-400"
                animate={{
                  y: [0, 8, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-[11px] tracking-widest uppercase font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
              Scroll down
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
