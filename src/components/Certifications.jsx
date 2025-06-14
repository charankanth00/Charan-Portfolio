"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; // If using Next.js, else use <img>

const certifications = [
	{
		name: "Full Stack Java ",
		issuer: "SkillDzire",
		year: "2024",
		description:
			"Comprehensive certification covering Core java, SQL, HTML, CSS, JavaScript, and modern frontend frameworks including React and Vue.js.",
		skills: ["Core Java", "SQL","HTML5", "CSS3", "JavaScript", "React"],
		link: "/certificates/java fullstack certificate.png", // Correct path
		icon: "🎯",
		color: "from-blue-500 to-cyan-500",
	},
	{
		name: "Artificial Intelligence(AI) with Python ",
		issuer: "IGIAT",
		year: "2023",
		description:
			"Advanced Face Recognition Technologies and patterns.",
		skills: ["OpenCV","Pillows","Python","Panda","Matplotlib","NumPy"],
		link: "/certificates/Python with AI.jpeg", // Correct extension and path
		icon: "⚛️",
		color: "from-purple-500 to-pink-500",
	},
	{
		name: "Java Full Stack Developer",
		issuer: "Jspiders",
		year: "2025",
		description: "Comprehensive learning of Java backend development, database handling, and full-stack integration using modern technologies.",
		skills: ["Core Java", "SQL", "Java Programming","Web Development", "Spring Boot", "Hibernate"],
		link: "Still GOing",
		icon: "🧠",
		color: "from-emerald-500 to-teal-500",
	},
];

export default function Certifications() {
	const [expandedCard, setExpandedCard] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalImg, setModalImg] = useState(null);

	const toggleCard = (index) => {
		setExpandedCard(expandedCard === index ? null : index);
	};

	const handleViewCertificate = (cert) => {
		setModalImg(cert.link);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setModalImg(null);
	};

	return (
		<section id="certifications" className="py-20 px-4 max-w-7xl mx-auto">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
					Certifications
				</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Professional certifications that validate my expertise in modern web
					development
				</p>
			</motion.div>

			<div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
				{certifications.map((cert, index) => (
					<motion.div
						key={cert.name}
						className="group relative"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						{/* Main Card */}
						<motion.div
							className={`
								relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100
								hover:shadow-2xl transition-all duration-500 cursor-pointer
								${
									expandedCard === index
										? "ring-2 ring-blue-500 shadow-2xl"
										: ""
								}
							`}
							onClick={() => toggleCard(index)}
							whileHover={{ y: -5 }}
							layout
						>
							{/* Header with gradient */}
							<div
								className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden`}
							>
								<div className="absolute inset-0 bg-black/10"></div>
								<div className="absolute top-4 right-4 text-3xl opacity-80">
									{cert.icon}
								</div>
								<motion.div
									className="absolute inset-0 bg-white/20"
									initial={false}
									animate={{
										scale: expandedCard === index ? 1.1 : 1,
										opacity: expandedCard === index ? 0.3 : 0,
									}}
									transition={{ duration: 0.3 }}
								/>
							</div>

							{/* Content */}
							<div className="p-6">
								{/* Certificate Title */}
								<div className="mb-4">
									<h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
										{cert.name}
									</h3>
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 font-medium">
											{cert.issuer}
										</span>
										<span
											className={`px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${cert.color}`}
										>
											{cert.year}
										</span>
									</div>
								</div>

								{/* Skills Preview */}
								<div className="mb-4">
									<div className="flex flex-wrap gap-2">
										{cert.skills.slice(0, 3).map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
											>
												{skill}
											</span>
										))}
										{cert.skills.length > 3 && (
											<span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
												+{cert.skills.length - 3} more
											</span>
										)}
									</div>
								</div>

								{/* Expand/Collapse indicator */}
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">
										{expandedCard === index
											? "Click to collapse"
											: "Click to view details"}
									</span>
									<motion.div
										animate={{ rotate: expandedCard === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className="text-gray-400"
									>
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</motion.div>
								</div>

								{/* Expanded Content */}
								<motion.div
									initial={false}
									animate={{
										height: expandedCard === index ? "auto" : 0,
										opacity: expandedCard === index ? 1 : 0,
									}}
									transition={{ duration: 0.4, ease: "easeInOut" }}
									className="overflow-hidden"
								>
									<div className="pt-6 border-t border-gray-100 mt-4 space-y-4">
										{/* Description */}
										<div>
											<h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
												<span className="text-blue-500">📋</span>
												Description
											</h4>
											<p className="text-gray-600 text-sm leading-relaxed">
												{cert.description}
											</p>
										</div>

										{/* All Skills */}
										<div>
											<h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
												<span className="text-green-500">🚀</span>
												Skills Covered
											</h4>
											<div className="flex flex-wrap gap-2">
												{cert.skills.map((skill) => (
													<span
														key={skill}
														className={`px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${cert.color}`}
													>
														{skill}
													</span>
												))}
											</div>
										</div>

										{/* Action Button */}
										<div className="pt-2">
											{cert.link === "Still GOing" ? (
												<span
													className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg
													bg-gradient-to-r ${cert.color} text-white font-semibold text-sm
													hover:shadow-lg hover:scale-105 transition-all duration-200
													focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
													cursor-not-allowed`}
												>
													<span className="mr-2">⏳</span>
													Still Going
												</span>
											) : (
												<button
													onClick={() => handleViewCertificate(cert)}
													className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg
													bg-gradient-to-r ${cert.color} text-white font-semibold text-sm
													hover:shadow-lg hover:scale-105 transition-all duration-200
													focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
												>
													<span className="mr-2">🏆</span>
													View Certificate
												</button>
											)}
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>
			{/* Modal */}
			{modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white rounded-lg p-4 max-w-2xl w-full relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
							{modalImg && (
                                <img
                                    src={modalImg}
                                    alt="Certificate"
                                    className="max-h-[70vh] w-auto rounded shadow-lg"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
			{/* Background pattern */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-50"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full opacity-50"></div>
			</div>
		</section>
	);
}