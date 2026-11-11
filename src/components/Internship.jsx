"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const internships = [
  {
    role: "Artificial Intelligence (AI) with Python Intern",
    company: "Indo German Institute of Advanced Technology (IGIAT)",
    duration: "June 2023 - July 2023",
    type: "Internship Training Programme",
    location: "Visakhapatnam, India",
    description:
      "Completed an intensive internship training programme in Artificial Intelligence (AI) with Python at the Indo German Institute of Advanced Technology (IGIAT). Developed real-time computer vision systems, trained facial recognition models using the LBPH algorithm, built augmented reality filters, and engineered interactive image processing tools. Awarded 'Outstanding Performance' citation by the institute.",
    github:
      "https://github.com/charankanth00/Internshiip-facedetection-pythonwithAI.git",
    liveDemo: null, // Desktop OpenCV application requiring local webcam / GUI
    companyLogo: "🤖",
    certificateImage: "/certificates/Python with AI.jpeg",
    certificateMeta: {
      issuer: "Indo German Institute of Advanced Technology (IGIAT)",
      regNo: "216F1A0542",
      dates: "27/06/2023 – 23/07/2023",
      performance: "Rated Outstanding Performance",
      director: "B. Vinod Kumar (Director)",
    },
    technologies: [
      "Python 3",
      "OpenCV",
      "Haar Cascades",
      "LBPH Algorithm",
      "NumPy",
      "Pillow (PIL)",
      "Pandas",
      "Computer Vision",
    ],
    responsibilities: [
      "Engineered real-time webcam and static image face detection using pre-trained Haar Cascade XML classifiers with bounding box tracking",
      "Trained custom facial recognition models with the LBPH (Local Binary Patterns Histograms) algorithm for live webcam person identification",
      "Developed an AR video processing suite featuring virtual facial accessories (glasses & mustache overlays) and real-time filters (sepia, invert, portrait blur)",
      "Created an interactive color detection utility using OpenCV and Pandas to map pixel RGB values from mouse clicks to 860+ named colors",
      "Implemented webcam video recording, dynamic resolution scaling, and image preprocessing pipelines with NumPy and Pillow",
    ],
    achievements: [
      "Recognized by IGIAT leadership with 'Outstanding Performance' during the internship training program",
      "Successfully delivered 5 complete computer vision submodules with modular architecture and detailed execution guides",
      "Achieved high-accuracy facial identification through serialized label mappings and custom model training (.pickle & .yml)",
      "Published a well-documented open-source repository covering image processing, dataset preparation, and AR filters",
    ],
    projectsBuilt: [
      {
        name: "Face Detection on Images",
        desc: "Static image Haar Cascade classifier with automated bounding box rendering",
      },
      {
        name: "Real-Time Face Detection",
        desc: "Live webcam frame-by-frame face tracking with optimized FPS",
      },
      {
        name: "Face Recognition Pipeline",
        desc: "LBPH model training pipeline on custom datasets with real-time recognition",
      },
      {
        name: "AR Suite & Video Filters",
        desc: "Live video accessories (glasses & mustache), sepia/invert/blur filters & video recording",
      },
      {
        name: "Interactive Color Detection",
        desc: "Mouse double-click pixel color identifier mapped to an 860+ color dataset",
      },
    ],
  },
];

export default function Internship() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  return (
    <section id="internship" className="scroll-mt-24 py-16 px-4 max-w-5xl mx-auto w-full min-w-0 overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Internship Experience
      </motion.h2>

      <motion.p
        className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-base"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Verified engineering experience in Artificial Intelligence, Computer Vision, and Python with official certification.
      </motion.p>

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
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300"
              animate={{
                scale: hoveredIndex === index ? 1.01 : 1,
              }}
              whileHover={{
                boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.2)",
              }}
            >
              {/* Subtle animated gradient background accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-600/5 opacity-0 pointer-events-none"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-4 sm:p-6 md:p-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex items-start gap-4">
                    {/* Company/Role Icon */}
                    <motion.div
                      className="text-4xl p-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-100 shadow-sm flex items-center justify-center shrink-0"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {intern.companyLogo}
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {intern.role}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        {intern.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                          📅 {intern.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                          ⏰ {intern.type}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                          📍 {intern.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status & Performance Badges */}
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 self-start">
                    <span className="px-3.5 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-200 shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Completed
                    </span>
                    <span className="px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold border border-purple-200 shadow-sm flex items-center gap-1.5">
                      ⭐ Outstanding Performance
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {intern.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {intern.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200/60 rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: GitHub Repo + Desktop Notice */}
                <div className="pt-2 pb-4 flex flex-wrap items-center gap-3">
                  {intern.github && (
                    <a
                      href={intern.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: "#ffffff" }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-black !text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
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
                      <span>View GitHub Repository</span>
                    </a>
                  )}

                  {/* Desktop App notice badge managing lack of web live demo */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-amber-50 text-amber-800 border border-amber-200/80 rounded-xl text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Desktop & Real-Time Webcam App (Run locally with Python & OpenCV)</span>
                  </div>
                </div>

                {/* Expanded content toggle */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCard === index ? "auto" : 0,
                    opacity: expandedCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-100 pt-6 space-y-6 mt-2">
                    {/* Official Certificate Section inside the toggle */}
                    <div className="p-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl border border-blue-100/80 shadow-sm">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                            <span>📜</span> Official Internship Certificate
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">
                            Issued by Indo German Institute of Advanced Technology (IGIAT) • Reg. No: 216F1A0542
                          </p>
                        </div>

                        <a
                          href={intern.certificateImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: "#ffffff" }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 !text-white text-xs font-semibold rounded-xl shadow-md transition-all hover:scale-105 shrink-0"
                        >
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
                          <span>Open Full Certificate</span>
                        </a>
                      </div>

                      {/* Clickable Cropped & Enhanced Certificate Preview */}
                      <div
                        className="relative group/cert rounded-xl overflow-hidden border border-gray-200/90 shadow-md bg-white cursor-pointer hover:shadow-xl transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCertModal(intern.certificateImage);
                        }}
                      >
                        <img
                          src={intern.certificateImage}
                          alt="IGIAT Internship Certificate - Artificial Intelligence with Python"
                          className="w-full max-h-[360px] object-contain mx-auto group-hover/cert:scale-[1.01] transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover/cert:opacity-100 transition-opacity bg-black/75 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                            🔍 Click to Enlarge
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Projects Built during Internship */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                        <span>📦</span> Projects Built During Internship:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {intern.projectsBuilt.map((proj, pIndex) => (
                          <div
                            key={pIndex}
                            className="p-3 bg-gray-50/80 rounded-xl border border-gray-100"
                          >
                            <p className="font-semibold text-gray-800 text-sm">
                              {proj.name}
                            </p>
                            <p className="text-gray-600 text-xs mt-1">
                              {proj.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                        <span>🎯</span> Key Responsibilities & Implementations:
                      </h4>
                      <ul className="space-y-2.5">
                        {intern.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            className="text-gray-700 text-sm flex items-start leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: respIndex * 0.05 }}
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                        <span>🏆</span> Key Outcomes & Milestones:
                      </h4>
                      <ul className="space-y-2.5">
                        {intern.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="text-gray-700 text-sm flex items-start leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: achIndex * 0.05 }}
                          >
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Expand / Collapse Button */}
                <div
                  className="flex items-center justify-center mt-6 pt-4 border-t border-gray-100 cursor-pointer select-none"
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                >
                  <span className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                    {expandedCard === index
                      ? "Collapse Internship Details"
                      : "Expand Full Internship Details & Certificate"}
                    <motion.span
                      animate={{
                        rotate: expandedCard === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      ▼
                    </motion.span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Certificate */}
      <AnimatePresence>
        {selectedCertModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertModal(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm">
                  IGIAT Internship Certificate — Artificial Intelligence with Python
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedCertModal(null)}
                >
                  ✕ Close
                </button>
              </div>
              <div className="p-2">
                <img
                  src={selectedCertModal}
                  alt="Full Certificate Preview"
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
