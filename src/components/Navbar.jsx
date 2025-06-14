"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "internship", label: "Internship" },
	{ id: "certifications", label: "Certifications" },
	{ id: "education", label: "Education" },
	{ id: "contact", label: "Contact" },
];

export default function Navbar() {
	const [active, setActive] = useState("hero");
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 120;
			let current = "hero";
			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (el && el.offsetTop <= scrollPosition) {
					current = section.id;
				}
			}
			setActive(current);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = () => setMenuOpen(false);

	return (
		<nav
			className={`w-full sticky top-0 z-50 transition-all duration-300 ${
				scrolled
					? "backdrop-blur-lg bg-white/95 shadow-xl border-b border-gray-200/50"
					: "backdrop-blur-md bg-white/80 shadow-md"
			}`}
		>
			<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
				<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
					Charan
				</span>
				<ul className="hidden md:flex gap-8 text-base font-medium bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
					{sections.map((section) => (
						<li key={section.id}>
							<a
								href={`#${section.id}`}
								className={`relative px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
									active === section.id
										? "text-blue-600 font-bold bg-white/30 shadow-md"
										: "text-gray-700 hover:text-blue-600"
								}`}
							>
								{section.label}
								{active === section.id && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
										layoutId="activeTab"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
							</a>
						</li>
					))}
				</ul>
				<button
					className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					<span
						className={`block h-0.5 w-6 bg-accent mb-1 transition-transform duration-300 ${
							menuOpen ? "rotate-45 translate-y-2" : ""
						}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-accent mb-1 transition-opacity duration-300 ${
							menuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-accent transition-transform duration-300 ${
							menuOpen ? "-rotate-45 -translate-y-2" : ""
						}`}
					/>
				</button>
			</div>
			{menuOpen && (
				<ul
					className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200/50"
					style={{ backgroundColor: "#ffffff" }}
				>
					{sections.map((section) => (
						<li key={section.id}>
							<a
								href={`#${section.id}`}
								className={`block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:pl-6 ${
									active === section.id
										? "text-blue-600 font-bold bg-blue-50 border-l-4 border-blue-500"
										: "text-gray-700 hover:text-blue-600"
								}`}
								onClick={handleNavClick}
							>
								{section.label}
							</a>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
}