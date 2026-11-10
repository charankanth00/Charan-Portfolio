"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "journey", label: "Journey", icon: "🚀" },
    { id: "interests", label: "Interests", icon: "💡" },
  ];

  const skillsData = [
    { name: "Git", level: "Proficient", tier: 2, icon: "🌿", category: "DevOps & Tools" },
    { name: "GitHub", level: "Proficient", tier: 2, icon: "🐙", category: "DevOps & Tools" },
    { name: "Java", level: "Proficient", tier: 2, icon: "☕", category: "Languages" },
    { name: "SQL", level: "Proficient", tier: 2, icon: "🗄️", category: "Database" },
    { name: "C", level: "Foundational", tier: 1, icon: "⚙️", category: "Languages" },
    { name: "Python", level: "Proficient", tier: 2, icon: "🐍", category: "Languages" },
    { name: "AWS", level: "Proficient", tier: 2, icon: "☁️", category: "Cloud" },
    { name: "Linux", level: "Proficient", tier: 2, icon: "🐧", category: "Systems & CLI" },
    {
      name: "AI-Native Developer",
      level: "Proficient",
      tier: 2,
      icon: "🤖",
      category: "AI & Modern Dev",
      status: "Completed Specialization",
    },
  ];

  const levelBadges = {
    Foundational: {
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
      meterClass: "bg-amber-500",
      label: "Foundational (1/3)",
    },
    Proficient: {
      badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
      meterClass: "bg-blue-600",
      label: "Proficient (2/3)",
    },
    Advanced: {
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
      meterClass: "bg-emerald-600",
      label: "Advanced (3/3)",
    },
  };

  const tabContent = {
    overview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          I am a driven software developer with working proficiency in{" "}
          <strong className="text-blue-600">Core Java</strong>,{" "}
          <strong className="text-blue-600">Python</strong>,{" "}
          <strong className="text-blue-600">SQL</strong>, and{" "}
          <strong className="text-blue-600">Cloud Infrastructure (AWS)</strong>. I also have foundational roots in <strong className="text-gray-800">C</strong> and a completed specialization as an{" "}
          <strong className="text-indigo-600">AI-Native Developer</strong>.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          I combine strong analytical thinking with modern developer toolchains (Git, GitHub, Linux) and AI-augmented workflows to solve real-world problems and write scalable, reliable software.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <motion.div
            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 rounded-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
              <span>🎯</span> Current Focus
            </h4>
            <p className="text-gray-600 text-sm">
              Applying AI-native engineering principles, sharpening Core Java OOP architectures, and deploying reliable cloud-backed applications on AWS.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100 rounded-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
              <span>📈</span> Career Objective
            </h4>
            <p className="text-gray-600 text-sm">
              To contribute effectively as a versatile software engineer, architecting clean systems and leveraging modern AI-assisted toolchains for impactful products.
            </p>
          </motion.div>
        </div>
      </motion.div>
    ),

    skills: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-gray-100">
          <span className="text-sm font-semibold text-gray-700">
            All 9 Technical Competencies (3-Level Formal Standard)
          </span>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Foundational
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> Proficient
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Advanced
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => {
            const config = levelBadges[skill.level] || levelBadges.Proficient;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base leading-tight">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-gray-500">{skill.category}</span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${config.badgeClass}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {skill.status && (
                  <div className="mb-2">
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                      ✓ {skill.status}
                    </span>
                  </div>
                )}

                {/* 3-tier visual meter */}
                <div className="mt-3 pt-2 border-t border-gray-200/70">
                  <div className="flex justify-between items-center text-[11px] text-gray-500 mb-1.5">
                    <span>Proficiency</span>
                    <span className="font-medium text-gray-700">{config.label}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div
                      className={`h-1.5 rounded-full ${
                        skill.tier >= 1 ? config.meterClass : "bg-gray-200"
                      }`}
                    />
                    <div
                      className={`h-1.5 rounded-full ${
                        skill.tier >= 2 ? config.meterClass : "bg-gray-200"
                      }`}
                    />
                    <div
                      className={`h-1.5 rounded-full ${
                        skill.tier >= 3 ? config.meterClass : "bg-gray-200"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    ),

    journey: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="relative pl-2">
          {[
            {
              year: "2024",
              title: "AI-Native Developer & Cloud Upskilling",
              event: "Completed AI-Native Developer specialization, working with LLMs, agentic developer workflows, and AWS/Linux environments.",
              icon: "🤖",
            },
            {
              year: "2024",
              title: "Core Java & Database Mastery",
              event: "Strengthened Object-Oriented Programming in Java, mastered advanced SQL querying, schema optimization, and Python scripting.",
              icon: "☕",
            },
            {
              year: "2023 - 2024",
              title: "DevOps & Collaborative Workflows",
              event: "Adopted Git & GitHub best practices, branching strategies, code reviews, and Linux command-line tooling.",
              icon: "🌿",
            },
            {
              year: "2023",
              title: "Foundational Programming",
              event: "Started programming journey with C language, logic building, memory concepts, and foundational algorithms.",
              icon: "⚙️",
            },
          ].map((item, index) => (
            <motion.div
              key={`${item.year}-${index}`}
              className="flex items-start space-x-4 pb-6 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-600 text-sm bg-blue-50 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                  <span className="font-semibold text-gray-800 text-base">
                    {item.title}
                  </span>
                </div>
                <div className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {item.event}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),

    interests: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: "🤖", title: "AI & LLMs", desc: "Agentic AI workflows & prompt design" },
          { icon: "☁️", title: "Cloud Tech", desc: "AWS architecture & containerization" },
          { icon: "♟️", title: "Chess", desc: "Strategic planning and deep tactical focus" },
          { icon: "🎮", title: "Gaming", desc: "Complex strategy and logic puzzles" },
          { icon: "📚", title: "Continuous Learning", desc: "Emerging tech, documentation & papers" },
          { icon: "🐧", title: "Open Source", desc: "Linux environments & community projects" },
          { icon: "✏️", title: "Sketching", desc: "Expressing creative perspective" },
          { icon: "🎵", title: "Music", desc: "Soundtracks for deep focus programming" },
        ].map((interest, index) => (
          <motion.div
            key={interest.title}
            className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-center cursor-pointer hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="text-3xl mb-2">{interest.icon}</div>
            <h4 className="font-bold text-gray-800 text-sm mb-1">{interest.title}</h4>
            <p className="text-xs text-gray-500 leading-snug">{interest.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto w-full overflow-hidden">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-3 border border-blue-200">
          Get To Know Me
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          About Me
        </h2>
      </motion.div>

      {/* Interactive Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content Box */}
      <motion.div
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10"
        layout
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
