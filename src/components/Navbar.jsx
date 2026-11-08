"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "internship", label: "Internship" },
	{ id: "certifications", label: "Certifications" },
	{ id: "achievements", label: "Achievements" },
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
				<a
					href="#hero"
					className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center hover:opacity-90 transition-opacity"
				>
					Charan
				</a>

				{/* Desktop navigation */}
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

				{/* Mobile Hamburger Toggle Button */}
				<button
					type="button"
					className="navbar-toggle md:hidden flex items-center justify-center w-10 h-10 !p-0 !bg-white hover:!bg-gray-100 !text-gray-800 rounded-xl border border-gray-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					style={{ background: "#ffffff", padding: 0 }}
				>
					{menuOpen ? (
						<svg
							className="w-5 h-5 text-gray-800"
							fill="none"
							stroke="currentColor"
							strokeWidth={2.2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="w-5 h-5 text-gray-800"
							fill="none"
							stroke="currentColor"
							strokeWidth={2.2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="overflow-hidden md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl"
						style={{ backgroundColor: "#ffffff" }}
					>
						<ul className="flex flex-col gap-1 px-4 py-3">
							{sections.map((section) => (
								<li key={section.id}>
									<a
										href={`#${section.id}`}
										className={`block py-2.5 px-4 rounded-xl text-base transition-all duration-200 ${
											active === section.id
												? "text-blue-600 font-bold bg-blue-50 border-l-4 border-blue-500 pl-5"
												: "text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:pl-5"
										}`}
										onClick={handleNavClick}
									>
										{section.label}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
