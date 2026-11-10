"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const nqtScores = {
  exam: "TCS iON NQT - IT",
  date: "July 2026",
  regNo: "22071505873",
  totalScore: 1985.16,
  totalMax: 3000,
  totalPercent: 66.17,
  scorecardPdf: "/tcs-nqt-scorecard.pdf",
  sections: [
    {
      name: "Part A – Foundation",
      maxMarks: 1800,
      obtained: 1213.90,
      percent: 67.44,
      color: "from-blue-500 to-cyan-500",
      subjects: [
        { name: "Numerical Ability", score: 421.18, max: 600 },
        { name: "Verbal Ability", score: 291.90, max: 600 },
        { name: "Reasoning Ability", score: 500.82, max: 600 },
      ],
    },
    {
      name: "Part B – Advanced",
      maxMarks: 600,
      obtained: 314.42,
      percent: 52.40,
      color: "from-indigo-500 to-purple-500",
      subjects: [
        { name: "Advanced Quantitative & Reasoning", score: 314.42, max: 600 },
      ],
    },
    {
      name: "Programming (Hands-On)",
      maxMarks: 600,
      obtained: 456.84,
      percent: 76.14,
      color: "from-emerald-500 to-teal-500",
      subjects: [{ name: "Java", score: 456.84, max: 600 }],
    },
  ],
};

// Animated circular progress ring
function ScoreRing({ percent, size = 120, strokeWidth = 10, color, label, delay = 0 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          {/* Progress ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#gradient-${label.replace(/\s+/g, "")})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (percent / 100) * circumference }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id={`gradient-${label.replace(/\s+/g, "")}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color[0]} />
              <stop offset="100%" stopColor={color[1]} />
            </linearGradient>
          </defs>
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.8 }}
          >
            {percent}%
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-600 text-center leading-tight max-w-[120px]">
        {label}
      </span>
    </motion.div>
  );
}

// Animated horizontal bar
function ScoreBar({ name, score, max, delay = 0 }) {
  const percent = ((score / max) * 100).toFixed(1);
  return (
    <motion.div
      className="space-y-1"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-gray-500">
          {score} / {max}
        </span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <section id="achievements" className="py-20 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Achievements & Test Scores
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Standardized assessments and competitive scores that validate my technical aptitude
        </p>
      </motion.div>

      {/* TCS NQT Card */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 sm:px-8 py-6 sm:py-8 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-3xl">🏆</span>
                  <h3 className="text-2xl md:text-3xl font-bold">{nqtScores.exam}</h3>
                </motion.div>
                <motion.p
                  className="text-blue-100 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Tata Consultancy Services · {nqtScores.date}
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-center bg-white/15 backdrop-blur-sm rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3">
                  <div className="text-2xl sm:text-3xl font-bold">{nqtScores.totalPercent}%</div>
                  <div className="text-xs text-blue-100 uppercase tracking-wider">Overall Score</div>
                </div>
                <a
                  href={nqtScores.scorecardPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-200 text-sm font-medium !text-white text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Scorecard
                </a>
              </motion.div>
            </div>
          </div>

          {/* Score Rings */}
          <div className="px-4 sm:px-8 py-8 sm:py-10">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 mb-10">
              <ScoreRing
                percent={nqtScores.sections[0].percent}
                label="Foundation"
                color={["#3b82f6", "#06b6d4"]}
                delay={0}
              />
              <ScoreRing
                percent={nqtScores.sections[1].percent}
                label="Advanced"
                color={["#6366f1", "#a855f7"]}
                delay={0.15}
              />
              <ScoreRing
                percent={nqtScores.sections[2].percent}
                label="Programming"
                color={["#10b981", "#14b8a6"]}
                delay={0.3}
                size={140}
                strokeWidth={12}
              />
              <ScoreRing
                percent={nqtScores.totalPercent}
                label="Overall"
                color={["#f59e0b", "#ef4444"]}
                delay={0.45}
                size={140}
                strokeWidth={12}
              />
            </div>

            {/* Expandable Section Breakdown */}
            <div className="space-y-4">
              {nqtScores.sections.map((section, sIndex) => (
                <motion.div
                  key={section.name}
                  className="rounded-2xl border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: sIndex * 0.1 }}
                >
                  {/* Section Header (clickable) */}
                  <button
                    className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-300 ${
                      expandedSection === sIndex
                        ? "bg-gradient-to-r " + section.color + " text-white"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                    }`}
                    onClick={() =>
                      setExpandedSection(expandedSection === sIndex ? null : sIndex)
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold">{section.name}</span>
                      <span
                        className={`text-sm px-2 py-0.5 rounded-full font-medium ${
                          expandedSection === sIndex
                            ? "bg-white/20 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {section.obtained} / {section.maxMarks}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">{section.percent}%</span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: expandedSection === sIndex ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </button>

                  {/* Section Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === sIndex ? "auto" : 0,
                      opacity: expandedSection === sIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 space-y-4 bg-white">
                      {section.subjects.map((sub, subIndex) => (
                        <ScoreBar
                          key={sub.name}
                          name={sub.name}
                          score={sub.score}
                          max={sub.max}
                          delay={subIndex * 0.1}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
