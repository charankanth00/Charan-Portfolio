"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const internships = [
  // {
  //   role: "Frontend Developer Intern",
  //   company: "Tech Solutions Pvt Ltd",
  //   duration: "Janavary 2024 - Aprial 2024",
  //   type: "Full-time",
  //   location: "Remote",
  //   description:
  //     "Worked on building responsive web interfaces using React and Tailwind CSS. Collaborated with the backend team to integrate REST APIs and improved UI performance.",
  //   responsibilities: [
  //     "Developed responsive web applications using React.js",
  //     "Collaborated with backend developers for API integration",
  //     "Improved application performance by 30%",
  //     "Participated in code reviews and agile ceremonies",
  //   ],
  //   technologies: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
  //   achievements: [
  //     "Reduced page load time by 25%",
  //     "Implemented 5+ new features",
  //     "Received excellent feedback from mentor",
  //   ],
  //   companyLogo: "🏢",
  // },
  {
  role: "Artificial Intelligence Intern",
  company: "Indo German Institute of Technology (IGIT)",
  duration: "January 2024 - March 2024",
  type: "Full-time",
  location: "Visakhapatnam, India",
  description:
    "Worked on computer vision projects focused on face recognition and image classification using Python-based AI libraries.",
  responsibilities: [
    "Implemented face recognition models using OpenCV and Pillow",
    "Performed image classification and data visualization using NumPy and Pandas",
    "Analyzed image datasets and tuned preprocessing pipelines",
    "Applied core machine learning concepts in real-world scenarios"
  ],
  technologies: ["Python", "OpenCV", "Pillow", "NumPy", "Pandas", "Matplotlib"],
  achievements: [
    "Improved face recognition accuracy through model optimization",
    "Built and tested multiple image datasets for classification tasks",
    "Strengthened Python and AI problem-solving skills through hands-on work"
  ],
  companyLogo: "🤖"
},
];

export default function Internship() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="internship" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Internship Experience
      </motion.h2>

      <div className="space-y-8">
        {internships.map((intern, index) => (
          <motion.div
            key={intern.role + intern.company}
            className="group relative"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 cursor-pointer"
              onClick={() =>
                setExpandedCard(expandedCard === index ? null : index)
              }
              animate={{
                scale:
                  hoveredIndex === index
                    ? 1.02
                    : hoveredIndex !== null
                    ? 0.98
                    : 1,
                opacity:
                  hoveredIndex === index
                    ? 1
                    : hoveredIndex !== null
                    ? 0.8
                    : 1,
              }}
              transition={{ duration: 0.3 }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index === 0
                    ? "from-blue-500/5 to-indigo-600/5"
                    : "from-indigo-500/5 to-purple-600/5"
                } opacity-0`}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-6 md:p-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    {/* Company logo */}
                    <motion.div
                      className="text-4xl"
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {intern.companyLogo}
                    </motion.div>

                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-gray-800 mb-1"
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {intern.role}
                      </motion.h3>
                      <p className="text-lg font-semibold text-blue-600 mb-1">
                        {intern.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span>📅 {intern.duration}</span>
                        <span>⏰ {intern.type}</span>
                        <span>📍 {intern.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <motion.span
                    className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium self-start"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Completed
                  </motion.span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {intern.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {intern.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 ${
                          index === 0
                            ? "bg-blue-50 text-blue-600"
                            : "bg-indigo-50 text-indigo-600"
                        } rounded-full text-sm font-medium`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Expanded content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCard === index ? "auto" : 0,
                    opacity: expandedCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-100 pt-6 space-y-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        🎯 Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {intern.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            className="text-gray-600 flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        🏆 Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {intern.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="text-gray-600 flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Expand indicator */}
                <motion.div
                  className="flex items-center justify-center mt-6 pt-4 border-t border-gray-100"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.6,
                  }}
                >
                  <motion.span
                    className="text-sm text-gray-500 flex items-center gap-2"
                    animate={{
                      y: expandedCard === index ? 0 : [0, -2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: expandedCard !== index ? Infinity : 0,
                    }}
                  >
                    {expandedCard === index
                      ? "Click to collapse details"
                      : "Click to view details"}
                    <motion.span
                      animate={{
                        rotate: expandedCard === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}