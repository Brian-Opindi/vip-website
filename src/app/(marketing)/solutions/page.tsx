"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaShieldAlt, FaUsers, FaMobileAlt, FaGlobe, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "@/app/(marketing)/footer";
import { NavMenu } from "@/app/(marketing)/navigation-menu";

const solutions = [
	{
		icon: <FaShieldAlt className="text-coffee w-10 h-10 mb-4" />,
		title: "Emergency Alerts",
		description:
			"Instantly notify trusted contacts and emergency services with one tap when you need help most.",
		href: "/features/emergency-alerts",
	},
	{
		icon: <FaUsers className="text-coffee w-10 h-10 mb-4" />,
		title: "Safety Communities",
		description:
			"Connect with local safety networks and community responders for immediate assistance.",
		href: "/features/safety-communities",
	},
	{
		icon: <FaMobileAlt className="text-coffee w-10 h-10 mb-4" />,
		title: "Mobile App",
		description:
			"Stay protected on the go with our easy-to-use mobile app for iOS and Android.",
		href: "/",
	},
	{
		icon: <FaGlobe className="text-coffee w-10 h-10 mb-4" />,
		title: "Geofencing",
		description:
			"Set safe zones and get automatic alerts when you enter or leave designated areas.",
		href: "/features/geofencing",
	},
	{
		icon: <FaUserShield className="text-coffee w-10 h-10 mb-4" />,
		title: "VIP for Families",
		description:
			"Keep your loved ones protected with instant alerts and real-time location sharing.",
		href: "/why/vip-for-families",
	},
];

const SolutionsPage = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<>
			<header className="fixed left-0 right-0 z-10 mx-auto max-w-6xl flex justify-between items-center bg-black/90 backdrop-blur-sm rounded-b-md px-4 py-3 mt-0">
				<NavMenu />
				<button
					onClick={toggleDarkMode}
					className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-coffee dark:text-white"
					aria-label="Toggle dark mode"
				>
					{isDarkMode ? "☀️" : "🌙"}
				</button>
			</header>
            
			<main className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-white py-32 px-4">
				<div className="max-w-5xl mx-auto">
					<section className="text-center mb-16">
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-5xl font-bold font-urbanist text-coffee mb-4"
						>
							VIP Solutions
						</motion.h1>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Discover how VIP empowers individuals, families, and communities to stay
							safe with innovative technology and real-time support.
						</p>
					</section>

					<section className="grid gap-10 md:grid-cols-2">
						{solutions.map((sol, i) => (
							<motion.div
								key={sol.title}
								id={sol.title.toLowerCase().replace(/\s+/g, "-")}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: i * 0.1 }}
								className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center border border-gray-100"
							>
								{sol.icon}
								<h2 className="text-2xl font-semibold mb-2 font-urbanist text-coffee">
									{sol.title}
								</h2>
								<p className="text-gray-600 mb-4 text-center">
									{sol.description}
								</p>
								<Link
									href={sol.href}
									className="inline-block bg-coffee text-white px-6 py-2 rounded font-medium hover:bg-coffee/90 transition"
								>
									Learn More →
								</Link>
							</motion.div>
						))}
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default SolutionsPage;