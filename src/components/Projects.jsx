"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
	{
		title: "Job Recommendation System",
		description:
			"An ML-powered platform that uses NLP and machine learning to provide personalized job recommendations based on resume and job description analysis.",
		technologies: [
			"Python",
			"Machine Learning",
			"NLP",
			"Streamlit",
			"Pandas",
			"Matplotlib",
		],
		link: "#", // Replace with your live demo link
		github: "#", // Replace with your GitHub repository link
	},
	{
		title: "Portfolio Website",
		description:
			"A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
		technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
		link: "#",
		github: "#",
	},
];

export default function Projects() {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
			<motion.h2
				className="text-4xl md:text-5xl font-bold mb-12 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Projects
			</motion.h2>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						className="group relative"
						onHoverStart={() => setHoveredIndex(index)}
						onHoverEnd={() => setHoveredIndex(null)}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<motion.div
							className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 h-full"
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
							transition={{ duration: 0.3, ease: "easeOut" }}
							whileHover={{
								boxShadow:
									"0 25px 50px -12px rgba(99, 102, 241, 0.25)",
							}}
						>
							{/* Animated gradient overlay */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0"
								animate={{
									opacity: hoveredIndex === index ? 1 : 0,
								}}
								transition={{ duration: 0.3 }}
							/>

							{/* Content */}
							<div className="p-6 relative z-10">
								<motion.h3
									className="text-xl font-bold mb-3 text-gray-800"
									animate={{
										scale: hoveredIndex === index ? 1.1 : 1,
									}}
									transition={{ duration: 0.3 }}
								>
									{project.title}
								</motion.h3>

								<p className="text-gray-600 mb-4 line-clamp-3">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action buttons - slide in on hover */}
								<motion.div
									className="flex gap-3"
									initial={{ y: 20, opacity: 0 }}
									animate={{
										y: hoveredIndex === index ? 0 : 20,
										opacity: hoveredIndex === index ? 1 : 0,
									}}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									<a
										href={project.link}
										className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-red-500 hover:to-indigo-300 transition-all duration-200"
									>
										Live Demo
									</a>
									<a
										href={project.github}
										className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
									>
										View Code
									</a>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>
		</section>
	);
}