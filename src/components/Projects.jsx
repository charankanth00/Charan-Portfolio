"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Vizag Bus AI",
    category: "Full-Stack AI Transit System",
    description:
      "A real-time public transit tracking and intelligent commuter assistance platform. Integrates live crowd telemetry from ticketing machines, Google Gemma AI-driven conversational route guidance, automated passenger grievance filing, and an interactive administrative analytics dashboard.",
    technologies: ["FastAPI", "Python", "Gemma AI", "JavaScript", "SQLite", "REST APIs"],
    link: "https://vizagbus-ai-backend.onrender.com",
    github: "https://github.com/charankanth00/vizag-bus-AI",
    isExternalLive: true,
    badge: "Featured AI Project",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    title: "Portfolio Website",
    category: "Frontend & Interactive UI",
    description:
      "A modern, responsive personal portfolio built with Next.js 15, React 19, and Tailwind CSS. Features smooth Framer Motion animations, interactive 3D perspective cards, comprehensive showcase of engineering projects, certifications, and technical skills.",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "JavaScript"],
    link: "#hero",
    github: "https://github.com/charankanth00",
    isExternalLive: false,
    badge: "Current Application",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto w-full overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.p
        className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-base"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        A selection of real-world applications engineered with modern web frameworks, AI models, and scalable architectures.
      </motion.p>

      {/* Balanced 2-column grid layout for the two projects */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group relative flex flex-col h-full"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 flex flex-col justify-between h-full transition-all duration-300"
              animate={{
                scale: hoveredIndex === index ? 1.02 : 1,
              }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)",
              }}
            >
              {/* Subtle accent hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 pointer-events-none"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                {/* Top badges & category */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                    Stack & Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-50 text-slate-700 border border-slate-200/80 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons - always visible, distinct contrast, never blends into background */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  {/* Live Demo Button */}
                  <a
                    href={project.link}
                    target={project.isExternalLive ? "_blank" : "_self"}
                    rel={project.isExternalLive ? "noopener noreferrer" : ""}
                    style={{ color: "#ffffff" }}
                    className="live-demo-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 !text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    {project.isExternalLive ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Live Demo</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span>Live Preview</span>
                      </>
                    )}
                  </a>

                  {/* View Code Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 hover:text-black rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:translate-y-0"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
