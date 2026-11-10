"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const education = [
	{
		degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering (CSE)",
		institution: "JNTUG-V",
		year: "2021 - 2025",
		gpa: "7.18 CGPA",
		description:
			"Specialized in Computer Science and Engineering with aggregate of 7.18 CGPA. Focused on data structures, algorithms, object-oriented programming, and modern software development.",
		achievements: [
			"Computer Science & Engineering (CSE Branch)",
			"Aggregated with 7.18 CGPA",
			"Completed AI with Python & Full Stack Java Internships",
			"Active contributor to software and web projects",
		],
		courses: [
			"Data Structures & Algorithms",
			"Core Java & OOP",
			"Database Management (DBMS)",
			"Operating Systems",
			"Computer Networks",
			"Python & Machine Learning",
		],
		location: "Vizianagaram, Andhra Pradesh",
	},
	{
		degree: "Intermediate (MPC)",
		institution: "Aditya Junior College",
		year: "2019 - 2021",
		gpa: "84%",
		description:
			"Specialized in Mathematics, Physics, and Chemistry (MPC) with an aggregate score of 84%, fostering strong analytical and mathematical problem-solving skills.",
		achievements: [
			"Secured 84% in Board of Intermediate Education",
			"Specialization in Mathematics, Physics & Chemistry",
		],
		courses: ["Mathematics", "Physics", "Chemistry", "English"],
		location: "Andhra Pradesh, India",
	},
	{
		degree: "Secondary School Certificate (SSC - 10th Standard)",
		institution: "Sri Maharshi School",
		year: "2018 - 2019",
		gpa: "9.2 CGPA",
		description:
			"Completed secondary education with distinction, securing a 9.2 CGPA with strong foundational excellence in mathematics and general sciences.",
		achievements: [
			"Secured 9.2 CGPA in SSC Board Examinations",
			"Distinction in Mathematics and Science",
		],
		courses: ["Mathematics", "Science", "Social Studies", "English", "Hindi/Telugu"],
		location: "Andhra Pradesh, India",
	},
];

export default function Education() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [expandedCard, setExpandedCard] = useState(null);

	return (
		<section id="education" className="py-16 px-4 max-w-6xl mx-auto w-full overflow-hidden">
			<motion.h2
				className="text-4xl md:text-5xl font-bold mb-16 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Education
			</motion.h2>

			{/* Timeline container */}
			<div className="relative">
				{/* Timeline line */}
				<div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>

				<div className="space-y-12">
					{education.map((edu, index) => (
						<motion.div
							key={edu.degree}
							className={`relative flex items-center ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							}`}
							onHoverStart={() => setHoveredIndex(index)}
							onHoverEnd={() => setHoveredIndex(null)}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.15 }}
						>
							{/* Timeline dot */}
							<motion.div
								className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"
								animate={{
									scale: hoveredIndex === index ? 1.5 : 1,
									borderColor:
										hoveredIndex === index ? "#6366f1" : "#3b82f6",
									boxShadow:
										hoveredIndex === index
											? "0 0 20px rgba(99, 102, 241, 0.5)"
											: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
								}}
								transition={{ duration: 0.3 }}
							/>

							{/* Card */}
							<motion.div
								className={`ml-12 sm:ml-16 md:ml-0 ${
									index % 2 === 0 ? "md:mr-8 md:ml-0" : "md:ml-8"
								} md:w-5/12 flex-1 md:flex-initial min-w-0`}
								animate={{
									scale:
										hoveredIndex === index
											? 1.05
											: hoveredIndex !== null
											? 0.95
											: 1,
									opacity:
										hoveredIndex === index
											? 1
											: hoveredIndex !== null
											? 0.7
											: 1,
								}}
								transition={{ duration: 0.3 }}
							>
								<motion.div
									className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 cursor-pointer"
									onClick={() =>
										setExpandedCard(
											expandedCard === index ? null : index
										)
									}
									whileHover={{
										boxShadow:
											"0 25px 50px -12px rgba(99, 102, 241, 0.25)",
										rotateY: index % 2 === 0 ? 2 : -2,
									}}
									transition={{ duration: 0.3 }}
								>
									{/* Gradient overlay */}
									<motion.div
										className={`absolute inset-0 bg-gradient-to-br ${
											index === 0
												? "from-blue-500/10 to-indigo-600/10"
												: index === 1
												? "from-indigo-500/10 to-purple-600/10"
												: "from-purple-500/10 to-pink-600/10"
										} opacity-0`}
										animate={{
											opacity: hoveredIndex === index ? 1 : 0,
										}}
										transition={{ duration: 0.3 }}
									/>

									{/* Year badge */}
									<motion.div
										className={`absolute top-4 right-4 px-3 py-1 ${
											index === 0
												? "bg-blue-100 text-blue-600"
												: index === 1
												? "bg-indigo-100 text-indigo-600"
												: "bg-purple-100 text-purple-600"
										} rounded-full text-sm font-semibold`}
										animate={{
											scale: hoveredIndex === index ? 1.1 : 1,
											rotate: hoveredIndex === index ? 5 : 0,
										}}
										transition={{ duration: 0.3 }}
									>
										{edu.year}
									</motion.div>

									<div className="p-6 relative z-10">
										{/* Degree title */}
										<motion.h3
											className="text-xl font-bold mb-2 text-gray-800 pr-20"
											animate={{
												scale: hoveredIndex === index ? 1.05 : 1,
											}}
											transition={{ duration: 0.3 }}
										>
											{edu.degree}
										</motion.h3>

										{/* Institution */}
										<p className="text-gray-600 font-medium mb-2">
											{edu.institution}
										</p>

										{/* GPA */}
										<motion.div
											className="flex items-center gap-4 mb-3"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.2 }}
										>
											<span className="text-sm text-gray-500">
												GPA/Score:
											</span>
											<span className="font-semibold text-green-600">
												{edu.gpa}
											</span>
											<span className="text-sm text-gray-500">
												📍 {edu.location}
											</span>
										</motion.div>

										{/* Description */}
										<p className="text-gray-600 text-sm mb-4">
											{edu.description}
										</p>

										{/* Achievements - slide in on hover */}
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height:
													expandedCard === index ? "auto" : 0,
												opacity:
													expandedCard === index ? 1 : 0,
											}}
											transition={{ duration: 0.4 }}
											className="overflow-hidden"
										>
											<div className="border-t border-gray-100 pt-4 mt-4">
												<h4 className="font-semibold text-gray-800 mb-2">
													🏆 Achievements:
												</h4>
												<ul className="space-y-1 mb-4">
													{edu.achievements.map((achievement) => (
														<li
															key={achievement}
															className="text-sm text-gray-600 flex items-center"
														>
															<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
															{achievement}
														</li>
													))}
												</ul>

												<h4 className="font-semibold text-gray-800 mb-2">
													📚 Key Courses:
												</h4>
												<div className="flex flex-wrap gap-2">
													{edu.courses.map((course) => (
														<span
															key={course}
															className={`px-2 py-1 ${
																index === 0
																	? "bg-blue-50 text-blue-600"
																	: index === 1
																	? "bg-indigo-50 text-indigo-600"
																	: "bg-purple-50 text-purple-600"
															} rounded-full text-xs font-medium`}
														>
															{course}
														</span>
													))}
												</div>
											</div>
										</motion.div>

										{/* Click to expand indicator */}
										<motion.div
											className="flex items-center justify-center mt-4 pt-3 border-t border-gray-100"
											animate={{
												opacity: hoveredIndex === index ? 1 : 0.6,
											}}
										>
											<motion.span
												className="text-xs text-gray-500 flex items-center gap-1"
												animate={{
													y: expandedCard === index ? 0 : [0, -2, 0],
												}}
												transition={{
													duration: 1.5,
													repeat:
														expandedCard !== index
															? Infinity
															: 0,
												}}
											>
												{expandedCard === index
													? "Click to collapse"
													: "Click to expand"}
												<motion.span
													animate={{
														rotate:
															expandedCard === index
																? 180
																: 0,
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}