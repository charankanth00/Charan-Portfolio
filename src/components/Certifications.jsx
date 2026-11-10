"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const certifications = [
	{
		name: "Artificial Intelligence (AI) with Python",
		program: "Internship Training Programme",
		issuer: "Indo German Institute of Advanced Technology (IGIAT)",
		year: "2023",
		dateText: "June 27 – July 23, 2023",
		certId: "Reg No: 216F1A0542",
		performance: "Outstanding Performance",
		description:
			"Completed comprehensive internship training in Artificial Intelligence with Python at IGIAT. Engineered computer vision pipelines with OpenCV, real-time webcam face detection, trained LBPH face recognition models, and interactive image processing tools. Awarded an 'Outstanding Performance' citation.",
		skills: [
			"Python 3",
			"Artificial Intelligence",
			"OpenCV",
			"Computer Vision",
			"Machine Learning",
			"Haar Cascades",
		],
		image: "/certificates/Python with AI.jpeg",
		link: "/certificates/Python with AI.jpeg",
		pdfLink: null,
		icon: "🤖",
		color: "from-blue-600 via-indigo-600 to-indigo-700",
		badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
	},
	{
		name: "Full Stack Java — Internship Programme",
		program: "Short-term Internship (2 Months)",
		issuer: "SkillDzire & APSCHE (Approved by AICTE)",
		year: "2024",
		dateText: "Issued: 28-Jun-2024",
		certId: "Certificate ID: SDST-08584",
		performance: "AICTE & APSCHE Approved",
		description:
			"Successfully completed a 2-month short-term internship programme titled 'Full Stack Java' organized by SkillDzire in collaboration with Andhra Pradesh State Council of Higher Education (APSCHE) and approved by AICTE. Covered core Java OOP architecture, database management with SQL, and modern full-stack web architectures.",
		skills: [
			"Core Java",
			"Full Stack Java",
			"SQL / Database",
			"OOP Principles",
			"Web Development",
			"REST APIs",
		],
		image: "/certificates/java fullstack certificate.png",
		link: "/certificates/guru_charan_kanth_swamy_fullstack_java_certificate.pdf",
		pdfLink: "/certificates/guru_charan_kanth_swamy_fullstack_java_certificate.pdf",
		icon: "☕",
		color: "from-emerald-600 via-teal-600 to-teal-700",
		badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
	},
];

export default function Certifications() {
	const [expandedCard, setExpandedCard] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	const toggleCard = (index) => {
		setExpandedCard(expandedCard === index ? null : index);
	};

	return (
		<section id="certifications" className="py-20 px-4 max-w-6xl mx-auto w-full overflow-hidden">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
					Certifications & Credentials
				</h2>
				<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
					Verified credentials and official industry certifications validating engineering proficiency in Artificial Intelligence, Python, and Full Stack Java.
				</p>
			</motion.div>

			{/* Symmetrical 2-column grid layout for the 2 certificates */}
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
				{certifications.map((cert, index) => (
					<motion.div
						key={cert.name}
						className="group relative flex flex-col h-full"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.15 }}
					>
						{/* Main Card */}
						<motion.div
							className={`
								relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100
								hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full
								${expandedCard === index ? "ring-2 ring-blue-500 shadow-2xl" : ""}
							`}
							whileHover={{ y: -4 }}
						>
							{/* Header banner with gradient */}
							<div
								className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden flex items-center justify-between px-6 text-white`}
							>
								<div className="absolute inset-0 bg-black/10"></div>
								<div className="relative z-10">
									<span className="text-xs font-semibold uppercase tracking-wider text-white/90 block mb-1">
										{cert.program}
									</span>
									<span className="text-xs bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-medium">
										📅 {cert.dateText}
									</span>
								</div>
								<div className="text-4xl opacity-90 relative z-10 filter drop-shadow">
									{cert.icon}
								</div>
							</div>

							{/* Content */}
							<div className="p-6 md:p-7 flex flex-col flex-1">
								{/* Issuer and ID badge */}
								<div className="flex flex-wrap items-center justify-between gap-2 mb-3">
									<span className="text-xs font-semibold text-blue-600">
										{cert.issuer}
									</span>
									<span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 font-mono rounded-md border border-gray-200">
										{cert.certId}
									</span>
								</div>

								{/* Title */}
								<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
									{cert.name}
								</h3>

								{/* Performance badge */}
								<div className="mb-4">
									<span
										className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cert.badgeColor}`}
									>
										<span>⭐</span>
										<span>{cert.performance}</span>
									</span>
								</div>

								{/* Clickable Certificate Thumbnail Preview */}
								<div
									className="relative group/thumb rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 mb-4 cursor-pointer hover:shadow-md transition-all duration-200"
									onClick={() => setSelectedImage(cert.image)}
								>
									<img
										src={cert.image}
										alt={cert.name}
										className="w-full h-44 object-cover object-top group-hover/thumb:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center">
										<span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity bg-black/80 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md backdrop-blur-sm">
											🔍 Click to Preview Full Certificate
										</span>
									</div>
								</div>

								{/* Skills Tags */}
								<div className="mb-4">
									<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
										Verified Competencies:
									</div>
									<div className="flex flex-wrap gap-1.5">
										{cert.skills.map((skill) => (
											<span
												key={skill}
												className="px-2.5 py-1 bg-slate-50 text-slate-700 border border-slate-200/80 rounded-lg text-xs font-medium"
											>
												{skill}
											</span>
										))}
									</div>
								</div>

								{/* Expand/Collapse details toggle */}
								<div
									className="flex items-center justify-between pt-3 border-t border-gray-100 cursor-pointer select-none"
									onClick={() => toggleCard(index)}
								>
									<span className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors">
										{expandedCard === index
											? "Hide programme description"
											: "Read programme description"}
									</span>
									<motion.div
										animate={{ rotate: expandedCard === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className="text-gray-400"
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
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</motion.div>
								</div>

								{/* Expanded Description */}
								<motion.div
									initial={false}
									animate={{
										height: expandedCard === index ? "auto" : 0,
										opacity: expandedCard === index ? 1 : 0,
									}}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="overflow-hidden"
								>
									<div className="pt-3 pb-1 text-xs md:text-sm text-gray-600 leading-relaxed border-b border-gray-100 mb-2">
										{cert.description}
									</div>
								</motion.div>

								{/* Action Buttons */}
								<div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
									<a
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#ffffff" }}
										className={`
											inline-flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl
											bg-gradient-to-r ${cert.color} !text-white font-semibold text-xs md:text-sm
											hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer
										`}
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
										<span>
											{cert.pdfLink ? "Open PDF Certificate" : "View Certificate"}
										</span>
									</a>

									<button
										type="button"
										onClick={() => setSelectedImage(cert.image)}
										className="px-3.5 py-2.5 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 hover:text-black rounded-xl text-xs md:text-sm font-semibold transition-all shadow-sm cursor-pointer"
										style={{ background: "#ffffff", padding: "0.625rem 0.875rem" }}
									>
										Preview
									</button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* Fullscreen Certificate Image Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-3"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center justify-between p-2 border-b border-gray-100 mb-2">
								<h3 className="font-bold text-gray-800 text-sm">
									Official Certificate Verification Preview
								</h3>
								<button
									type="button"
									className="text-gray-500 hover:text-gray-800 p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-xs font-semibold"
									onClick={() => setSelectedImage(null)}
									style={{ background: "#f3f4f6", padding: "0.4rem 0.8rem", color: "#374151" }}
								>
									✕ Close
								</button>
							</div>
							<div className="p-2 flex items-center justify-center bg-gray-50 rounded-xl">
								<img
									src={selectedImage}
									alt="Certificate Preview"
									className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
