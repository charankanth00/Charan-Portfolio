"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const tabs = [
    { id: "overview", label: "Overview", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "journey", label: "Journey", icon: "🚀" },
    { id: "interests", label: "Interests", icon: "💡" }
  ];

  const skills = [
    { name: "Core Java", level: 90, color: "bg-blue-500" },
    { name: "SQL", level: 85, color: "bg-yellow-500" },
    { name: "java-Programming", level: 80, color: "bg-purple-500" },
    { name: "HTML - CSS", level: 45, color: "bg-green-500" },
    // { name: "TypeScript", level: 70, color: "bg-blue-600" }
  ];

  const tabContent = {
    overview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <p className="text-lg leading-relaxed text-gray-600">
         I'm a passionate developer with a strong foundation in Core Java, SQL, programming, HTML, CSS, and JavaScript. I enjoy solving problems and building solutions through logical thinking and clean code. Beyond coding, I have a keen interest in playing chess, drawing, music, and engaging in strategy and puzzle games.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="p-6 bg-blue-50 rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="font-bold text-blue-600 mb-2">🎯 Current Focus</h4>
            <p className="text-gray-600">Strengthening my Core Java and SQL skills through projects and practice.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-green-50 rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="font-bold text-green-600 mb-2">📈 Goal</h4>
            <p className="text-gray-600">To become a skilled full-stack developer and actively contribute to open-source projects.</p>
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
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative"
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className={`h-3 rounded-full ${skill.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <AnimatePresence>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm z-10"
                >
                  {skill.level}% Proficient
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    ),
    journey: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="relative">
          {[
  { year: "2024", event: "Started building advanced SQL queries and data operations", icon: "🗄️" },
  { year: "2024", event: "Learned Core Java and practiced object-oriented concepts", icon: "☕" },
  { year: "2023", event: "Began my coding journey with HTML/CSS", icon: "🧑‍💻" }
].map((item, index) => (
  <motion.div
    key={`${item.year}-${index}`} 
    className="flex items-center space-x-4 pb-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
      {item.icon}
    </div>
    <div>
      <div className="font-bold text-blue-600">{item.year}</div>
      <div className="text-gray-600">{item.event}</div>
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
        className="grid md:grid-cols-3 gap-4"
      >
        {[
          { icon: "🎮", title: "Gaming", desc: "Strategy and puzzle games" },
          { icon: "📚", title: "Learning", desc: "New technologies and frameworks" },
          { icon: "🎵", title: "Music", desc: "Coding with good beats" },
          //{ icon: "☕", title: "Coffee", desc: "Fuel for late-night coding" },
          //{ icon: "🏃‍♂️", title: "Fitness", desc: "Staying active and healthy" },
          //{ icon: "🎨", title: "Design", desc: "UI/UX and visual aesthetics" },
          { icon: "♟️", title: "Chess", desc: "Improving focus and strategic thinking" },
          { icon: "✏️", title: "Drawing", desc: "Expressing creativity through sketches" }
        ].map((interest, index) => (
          <motion.div
            key={interest.title}
            className="p-4 bg-gray-50 rounded-xl text-center cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-3xl mb-2">{interest.icon}</div>
            <h4 className="font-bold text-gray-800">{interest.title}</h4>
            <p className="text-sm text-gray-600">{interest.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    )
  };

  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Interactive Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
        layout
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}