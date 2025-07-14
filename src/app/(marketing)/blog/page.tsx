"use client";

import React, { useState, useEffect } from "react";
import { NavMenu } from "@/app/(marketing)/navigation-menu";
import Head from "next/head";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Blog post data with real Unsplash image URLs
const posts = [
	{
		title: "How VIP Keeps You Safe",
		excerpt: "Discover the technology and people behind our instant emergency response.",
		date: "2025-07-14",
		author: "VIP Team",
		image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		slug: "how-vip-keeps-you-safe",
		tags: ["Safety", "Technology", "Emergency"],
		readTime: "5 min read",
	},
	{
		title: "Personal Safety Tips for Families",
		excerpt: "Practical advice for keeping your loved ones protected in any situation.",
		date: "2025-07-10",
		author: "VIP Experts",
		image: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		slug: "personal-safety-tips-families",
		tags: ["Family", "Tips", "Protection"],
		readTime: "7 min read",
	},
	{
		title: "What to Do in the First 10 Seconds of an Emergency",
		excerpt: "Your actions in the first 10 seconds could make all the difference. Learn the golden rules.",
		date: "2025-07-01",
		author: "VIP Instructors",
		image: "https://images.unsplash.com/photo-1576091160550-2173fdabea2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		slug: "first-10-seconds-emergency",
		tags: ["Response", "First Aid", "Training"],
		readTime: "4 min read",
	},
	{
		title: "Top 5 Features of the VIP App You Might Not Be Using",
		excerpt: "Explore hidden gems in our app designed to enhance your security every day.",
		date: "2025-06-28",
		author: "Product Team",
		image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		slug: "vip-app-hidden-features",
		tags: ["Mobile", "App Tips", "Productivity"],
		readTime: "6 min read",
	},
	{
		title: "Real Stories: How VIP Responded in Under 60 Seconds",
		excerpt: "Hear from real users who experienced VIP's rapid intervention first-hand.",
		date: "2025-06-20",
		author: "Community",
		image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		slug: "vip-real-stories-response",
		tags: ["Testimonial", "Customer Stories", "Response Time"],
		readTime: "8 min read",
	},
	{
		title: "Self-Defense Basics Everyone Should Know",
		excerpt: "A beginner’s guide to protecting yourself in high-risk situations.",
		date: "2025-06-15",
		author: "VIP Security Experts",
		image: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		slug: "self-defense-basics",
		tags: ["Self-Defense", "Wellness", "Preparedness"],
		readTime: "5 min read",
	},
];

// Testimonial data with real Unsplash image URLs
const testimonials = [
	{
		name: "Jane W.",
		role: "Subscriber",
		quote: "VIP's blog taught me how to respond calmly in emergencies. It's a must-read for families!",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
	},
	{
		name: "James K.",
		role: "Security Professional",
		quote: "The insights and app tips are gold. I recommend VIP content to all my clients.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
	},
	{
		name: "Amina N.",
		role: "Parent",
		quote: "My kids now know exactly what to do in emergencies. Thank you VIP!",
		image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
	},
];

const uniqueTags = [...new Set(posts.flatMap((post) => post.tags))];

const BlogPage = () => {
	const [search, setSearch] = useState("");
	const [tagFilter, setTagFilter] = useState<string | null>(null);
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [currentPage, setCurrentPage] = useState(1);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const postsPerPage = 4;

	useEffect(() => {
		setIsLoading(true);
		let result = posts;
		if (search.trim()) {
			result = result.filter(
				(post) =>
					post.title.toLowerCase().includes(search.toLowerCase()) ||
					post.excerpt.toLowerCase().includes(search.toLowerCase())
			);
		}
		if (tagFilter) {
			result = result.filter((post) => post.tags.includes(tagFilter));
		}
		setFilteredPosts(result);
		setCurrentPage(1);
		setTimeout(() => setIsLoading(false), 500);
	}, [search, tagFilter]);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle("dark");
	};

	const sharePost = (post: typeof posts[0]) => {
		// Use only the path to avoid hydration mismatch
		const shareUrl = `/blog/${post.slug}`;
		const shareText = `Check out this article: ${post.title}`;
		return {
			twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
			linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
		};
	};

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "VIP Blog",
		description: "Timely tips, real stories, and smart tech to keep you and your loved ones safe.",
		blogPost: posts.map((post) => ({
			"@type": "BlogPosting",
			headline: post.title,
			description: post.excerpt,
			datePublished: post.date,
			author: { "@type": "Person", name: post.author },
			image: post.image,
		})),
	};

	return (
		<>
			<Head>
				<title>VIP Blog | Safety Tips & Emergency Response</title>
				<meta name="description" content="Timely tips, real stories, and smart tech to keep you and your loved ones safe." />
				<meta name="keywords" content="safety, emergency response, personal security, VIP blog" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script type="application/ld+json">{JSON.stringify(structuredData)}</script>
			</Head>

			<header className="fixed left-0 right-0 z-10 mx-auto max-w-6xl flex justify-between items-center bg-black/90 backdrop-blur-sm rounded-b-md px-4 py-3">
				<NavMenu />
				<button
					onClick={toggleDarkMode}
					className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-coffee dark:text-white"
					aria-label="Toggle dark mode"
				>
					{isDarkMode ? "☀️" : "🌙"}
				</button>
			</header>

			<main className={`min-h-screen py-24 px-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-white via-stone-50 to-white"}`}>
				<div className="max-w-5xl mx-auto">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-5xl font-bold font-urbanist text-coffee dark:text-white mb-4"
						>
							VIP Blog
						</motion.h1>
						<p className="text-gray-600 dark:text-gray-300 text-lg">
							Timely tips, real stories, and smart tech to keep you and your loved ones safe.
						</p>
					</section>

					{/* Search & Filter */}
					<section className="mb-12">
						<h2 className="text-xl font-bold mb-4 dark:text-white">Search & Filter</h2>
						<div className="flex flex-col md:flex-row items-center gap-4">
							<input
								type="text"
								placeholder="Search blog posts..."
								className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee dark:bg-gray-800 dark:text-white dark:border-gray-700"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								aria-label="Search blog posts"
							/>
							<div className="flex flex-wrap gap-2">
								{uniqueTags.map((tag) => (
									<button
										key={tag}
										onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
										className={`px-3 py-1 text-sm rounded-full ${
											tagFilter === tag
												? "bg-coffee text-white"
												: "bg-gray-100 dark:bg-gray-700 text-coffee dark:text-white hover:bg-coffee/20"
										}`}
										aria-label={`Filter by ${tag}`}
									>
										#{tag}
									</button>
								))}
							</div>
						</div>
					</section>

					{/* Latest Post */}
					<section className="mb-20">
						<h2 className="text-xl font-semibold mb-6 dark:text-white">Latest Highlight</h2>
						<motion.article
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="relative bg-coffee text-white rounded-xl overflow-hidden shadow-lg mb-8"
						>
							<img
								src={posts[0].image}
								alt={posts[0].title}
								className="absolute inset-0 w-full h-full object-cover opacity-40"
								loading="lazy"
							/>
							<div className="relative p-8 z-10">
								<h3 className="text-3xl font-bold mb-2">{posts[0].title}</h3>
								<p className="mb-4">{posts[0].excerpt}</p>
								<a
									href={`/blog/${posts[0].slug}`}
									className="inline-block bg-white text-coffee px-4 py-2 rounded font-medium hover:underline"
									aria-label={`Read more about ${posts[0].title}`}
								>
									Read More →
								</a>
							</div>
						</motion.article>
					</section>

					{/* Blog Posts Grid */}
					<section className="grid gap-10 md:grid-cols-2">
						{isLoading ? (
							<div className="col-span-2 text-center">
								<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coffee mx-auto"></div>
								<p className="mt-4 text-gray-500 dark:text-gray-300">Loading posts...</p>
							</div>
						) : currentPosts.length === 0 ? (
							<p className="text-center text-gray-500 dark:text-gray-300 col-span-2">No posts found.</p>
						) : (
							currentPosts.map((post) => (
								<motion.article
									key={post.slug}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
									className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
								>
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-52 object-cover"
										loading="lazy"
									/>
									<div className="p-6 flex flex-col justify-between h-full">
										<header>
											<h2 className="text-2xl font-semibold mb-1 font-urbanist text-gray-900 dark:text-white">
												{post.title}
											</h2>
											<p className="text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
										</header>
										<div className="text-sm text-gray-400 dark:text-gray-500 flex items-center justify-between mb-4">
											<div>
												<span>{post.author}</span>
												<span className="mx-2">•</span>
												<time>{new Date(post.date).toLocaleDateString()}</time>
												<span className="mx-2">•</span>
												<span>{post.readTime}</span>
											</div>
										</div>
										<div className="flex flex-wrap gap-2 mb-4">
											{post.tags.map((tag) => (
												<span
													key={tag}
													className="bg-coffee/10 text-coffee dark:bg-coffee/20 dark:text-white text-xs px-2 py-1 rounded-full"
												>
													#{tag}
												</span>
											))}
										</div>
										<div className="flex justify-between items-center">
											<a
												href={`/blog/${post.slug}`}
												className="inline-block text-coffee dark:text-white font-medium hover:underline text-sm"
												aria-label={`Read full article: ${post.title}`}
											>
												Read Full Article →
											</a>
											<div className="flex gap-2">
												<a
													href={sharePost(post).twitter}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Share on Twitter"
												>
													<FaTwitter className="text-coffee dark:text-white hover:text-coffee/80" />
												</a>
												<a
													href={sharePost(post).facebook}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Share on Facebook"
												>
													<FaFacebook className="text-coffee dark:text-white hover:text-coffee/80" />
												</a>
												<a
													href={sharePost(post).linkedin}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Share on LinkedIn"
												>
													<FaLinkedin className="text-coffee dark:text-white hover:text-coffee/80" />
												</a>
											</div>
										</div>
									</div>
								</motion.article>
							))
						)}
					</section>

					{/* Pagination */}
					{totalPages > 1 && (
						<section className="mt-12 flex justify-center gap-4">
							<button
								onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
								disabled={currentPage === 1}
								className="px-4 py-2 bg-coffee text-white rounded-md disabled:opacity-50"
								aria-label="Previous page"
							>
								Previous
							</button>
							<span className="text-gray-600 dark:text-gray-300">
								Page {currentPage} of {totalPages}
							</span>
							<button
								onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
								disabled={currentPage === totalPages}
								className="px-4 py-2 bg-coffee text-white rounded-md disabled:opacity-50"
								aria-label="Next page"
							>
								Next
							</button>
						</section>
					)}

					{/* Testimonials */}
					<section className="bg-white dark:bg-gray-800 py-16 mt-16">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-3xl font-bold mb-6 dark:text-white">What Our Readers Say</h2>
							<div className="grid gap-6 md:grid-cols-3">
								{testimonials.map((t, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: i * 0.1 }}
										className="bg-coffee/5 dark:bg-coffee/10 p-6 rounded-xl text-left shadow-md"
									>
										<div className="flex items-center gap-4 mb-4">
											<img
												src={t.image}
												alt={t.name}
												className="w-12 h-12 rounded-full object-cover"
												loading="lazy"
											/>
											<div>
												<h4 className="text-coffee dark:text-white font-semibold">{t.name}</h4>
												<p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
											</div>
										</div>
										<p className="text-sm text-gray-700 dark:text-gray-300 italic">“{t.quote}”</p>
									</motion.div>
								))}
							</div>
						</div>
					</section>

					{/* Subscription Form */}
					<section className="bg-coffee text-white text-center py-12 mt-24">
						<h2 className="text-3xl font-bold mb-4">Never Miss a Safety Tip</h2>
						<p className="mb-6">Subscribe to the VIP blog and stay up to date with new articles, tools, and safety strategies.</p>
						<form
							className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto"
							onSubmit={(e) => {
								e.preventDefault();
								alert("Subscribed!");
							}}
						>
							<input
								type="email"
								placeholder="Enter your email"
								className="px-4 py-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
								required
								aria-label="Email for subscription"
							/>
							<button className="bg-white text-coffee px-6 py-2 rounded-md hover:bg-gray-200 font-semibold">
								Subscribe
							</button>
						</form>
					</section>
				</div>
			</main>

			<footer className="text-center py-8 text-sm text-gray-400 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
				© {new Date().getFullYear()} VIP | All rights reserved.
			</footer>

			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="fixed bottom-6 right-6 bg-coffee text-white p-3 rounded-full shadow-lg hover:bg-coffee/90"
				aria-label="Scroll to top"
			>
				↑
			</button>
		</>
	);
};

export default BlogPage;
