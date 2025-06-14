"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Core Java", level: 90, category: "Backend" },
  { name: "Sql", level: 85, category: "Database" },
  { name: "Java-Programming", level: 80, category: "Backend" },
  { name: "HTML", level: 45, category: "Frontend" },
  { name: "CSS", level: 45, category: "Frontend" },
  { name: "Java Script", level: 45, category: "Frontend" },
  // { name: "Node.js", level: 75, category: "Backend" },
  { name: "Git", level: 45, category: "Tools" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group relative"
            onHoverStart={() => setHoveredSkill(index)}
            onHoverEnd={() => setHoveredSkill(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="relative p-4 rounded-xl bg-white shadow-md border border-gray-100 text-center cursor-pointer overflow-hidden"
              animate={{
                scale: hoveredSkill === index ? 1.1 : hoveredSkill !== null ? 0.9 : 1,
                opacity: hoveredSkill === index ? 1 : hoveredSkill !== null ? 0.6 : 1,
              }}
              transition={{ duration: 0.3 }}
              whileHover={{
                boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.3)",
                rotateY: 5,
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0"
                animate={{
                  opacity: hoveredSkill === index ? 0.1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Skill name */}
              <motion.h3 
                className="font-semibold text-gray-800 mb-2 relative z-10"
                animate={{
                  color: hoveredSkill === index ? "#3b82f6" : "#1f2937",
                }}
              >
                {skill.name}
              </motion.h3>
              
              {/* Skill level - appears on hover */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: hoveredSkill === index ? "auto" : 0,
                  opacity: hoveredSkill === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="text-sm text-gray-600 mb-2">{skill.level}%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredSkill === index ? `${skill.level}%` : 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </motion.div>
              
              {/* Category badge */}
              <motion.span
                className="absolute top-2 right-2 px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                initial={{ scale: 0 }}
                animate={{
                  scale: hoveredSkill === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {skill.category}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}