"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const SKILLS_LIST = [
  {
    name: "Git",
    level: "Proficient",
    tier: 2,
    category: "DevOps & Tools",
    icon: "🌿",
    highlight: "Version Control",
    description: "Branching, merge conflict resolution, rebase workflows, and commit management.",
  },
  {
    name: "GitHub",
    level: "Proficient",
    tier: 2,
    category: "DevOps & Tools",
    icon: "🐙",
    highlight: "Collaboration & Repos",
    description: "Pull requests, code reviews, repo administration, and team collaboration.",
  },
  {
    name: "Java",
    level: "Proficient",
    tier: 2,
    category: "Languages",
    icon: "☕",
    highlight: "Core & OOP",
    description: "Strong object-oriented design, robust data structures, and backend logic.",
  },
  {
    name: "SQL",
    level: "Proficient",
    tier: 2,
    category: "Database",
    icon: "🗄️",
    highlight: "Relational Queries",
    description: "Complex queries, aggregations, relational schemas, indexing, and data modeling.",
  },
  {
    name: "C",
    level: "Foundational",
    tier: 1,
    category: "Languages",
    icon: "⚙️",
    highlight: "Core Syntax & Memory",
    description: "Structured programming principles, memory layout, control flow, and pointers.",
  },
  {
    name: "Python",
    level: "Proficient",
    tier: 2,
    category: "Languages",
    icon: "🐍",
    highlight: "Scripting & AI",
    description: "Automation, algorithms, scripting, and data manipulation pipelines.",
  },
  {
    name: "AWS",
    level: "Proficient",
    tier: 2,
    category: "Cloud",
    icon: "☁️",
    highlight: "Cloud Infrastructure",
    description: "Core cloud architecture concepts, EC2 compute instances, S3 storage, and IAM.",
  },
  {
    name: "Linux",
    level: "Proficient",
    tier: 2,
    category: "Systems & CLI",
    icon: "🐧",
    highlight: "CLI & System Admin",
    description: "Bash scripting, file permission management, process control, and server navigation.",
  },
  {
    name: "AI-Native Developer",
    level: "Proficient",
    tier: 2,
    category: "AI & Modern Engineering",
    icon: "🤖",
    highlight: "Completed Specialization",
    statusBadge: "Completed • Active Practitioner",
    description: "LLM-assisted workflows, prompt engineering, agentic tools, and AI-accelerated delivery.",
  },
];

const LEVEL_CONFIG = {
  Foundational: {
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    meterColor: "bg-amber-500",
    label: "Foundational",
    description: "Solid conceptual base & syntax knowledge",
  },
  Proficient: {
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    meterColor: "bg-blue-600",
    label: "Proficient",
    description: "Practical, project-ready working competency",
  },
  Advanced: {
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    meterColor: "bg-emerald-600",
    label: "Advanced",
    description: "Deep production-grade expertise & architecture",
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Languages", "Database", "Cloud", "Systems & CLI", "DevOps & Tools", "AI & Modern Engineering"];

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20 px-4 max-w-6xl mx-auto w-full min-w-0 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-3 border border-blue-200">
          Core Competencies
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Technical Skills
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Evaluated using industry-standard formal proficiency benchmarks:{" "}
          <span className="font-semibold text-amber-700">Foundational</span>,{" "}
          <span className="font-semibold text-blue-700">Proficient</span>, and{" "}
          <span className="font-semibold text-emerald-700">Advanced</span>.
        </p>

        {/* Formal Tier Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs md:text-sm">
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="font-semibold">Foundational</span> (1/3)
          </div>
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg text-blue-900">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="font-semibold">Proficient</span> (2/3)
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-emerald-900">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span className="font-semibold">Advanced</span> (3/3)
          </div>
        </div>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full min-w-0">
        {filteredSkills.map((skill, index) => {
          const config = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG.Proficient;
          const isAI = skill.name === "AI-Native Developer";

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between ${
                isAI
                  ? "border-blue-400 ring-2 ring-blue-500/20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div>
                {/* Top Header: Icon & Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${config.badgeClass}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* AI Special Tag */}
                {skill.statusBadge && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {skill.statusBadge}
                  </div>
                )}

                {/* Highlight Chip */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                    {skill.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* 3-Tier Visual Indicator Meter */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="font-medium">Proficiency Tier</span>
                  <span className="font-semibold text-gray-700">
                    {skill.tier === 1 && "Foundational (Level 1)"}
                    {skill.tier === 2 && "Proficient (Level 2)"}
                    {skill.tier === 3 && "Advanced (Level 3)"}
                  </span>
                </div>

                {/* 3 Discrete Progress Blocks */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      skill.tier >= 1 ? config.meterColor : "bg-gray-200"
                    }`}
                  />
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      skill.tier >= 2 ? config.meterColor : "bg-gray-200"
                    }`}
                  />
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      skill.tier >= 3 ? config.meterColor : "bg-gray-200"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
