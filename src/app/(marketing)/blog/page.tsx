"use client";

import React, { useState, useEffect } from "react";
import { NavMenu } from "@/app/(marketing)/navigation-menu";

const posts = [
	{
		title: "How VIP Keeps You Safe",
		excerpt: "Discover the technology and people behind our instant emergency response.",
		date: "2025-07-14",
		author: "VIP Team",
		image: "/images/test.jpg",
		slug: "how-vip-keeps-you-safe",
		tags: ["Safety", "Technology", "Emergency"],
		readTime: "5 min read",
	},
	{
		title: "Personal Safety Tips for Families",
		excerpt: "Practical advice for keeping your loved ones protected in any situation.",
		date: "2025-07-10",
		author: "VIP Experts",
		image: "/images/user 1.jpg",
		slug: "personal-safety-tips-families",
		tags: ["Family", "Tips", "Protection"],
		readTime: "7 min read",
	},
	{
		title: "What to Do in the First 10 Seconds of an Emergency",
		excerpt: "Your actions in the first 10 seconds could make all the difference. Learn the golden rules.",
		date: "2025-07-01",
		author: "VIP Instructors",
		image: "/images/emergency.jpg",
		slug: "first-10-seconds-emergency",
		tags: ["Response", "First Aid", "Training"],
		readTime: "4 min read",
	},
	{
		title: "Top 5 Features of the VIP App You Might Not Be Using",
		excerpt: "Explore hidden gems in our app designed to enhance your security every day.",
		date: "2025-06-28",
		author: "Product Team",
		image: "/images/app-features.jpg",
		slug: "vip-app-hidden-features",
		tags: ["Mobile", "App Tips", "Productivity"],
		readTime: "6 min read",
	},
	{
		title: "Real Stories: How VIP Responded in Under 60 Seconds",
		excerpt: "Hear from real users who experienced VIP's rapid intervention first-hand.",
		date: "2025-06-20",
		author: "Community",
		image: "/images/story.jpg",
		slug: "vip-real-stories-response",
		tags: ["Testimonial", "Customer Stories", "Response Time"],
		readTime: "8 min read",
	},
	{
		title: "Self-Defense Basics Everyone Should Know",
		excerpt: "A beginner’s guide to protecting yourself in high-risk situations.",
		date: "2025-06-15",
		author: "VIP Security Experts",
		image: "/images/self-defense.jpg",
		slug: "self-defense-basics",
		tags: ["Self-Defense", "Wellness", "Preparedness"],
		readTime: "5 min read",
	},
];

const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];

const BlogPage = () => {
	const [search, setSearch] = useState("");
	const [tagFilter, setTagFilter] = useState<string | null>(null);
	const [filteredPosts, setFilteredPosts] = useState(posts);

	useEffect(() => {
		let result = posts;

		if (search.trim()) {
			result = result.filter(post =>
				post.title.toLowerCase().includes(search.toLowerCase())
			);
		}

		if (tagFilter) {
			result = result.filter(post => post.tags.includes(tagFilter));
		}

		setFilteredPosts(result);
	}, [search, tagFilter]);

	const latestPost = posts[0];

	return (
		<>
			<header className="absolute left-0 right-0 z-10 mx-auto max-w-6xl flex justify-center bg-black/90 backdrop-blur-sm rounded-b-md">
				<NavMenu />
			</header>

			<main className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-white py-24 px-4">
				<div className="max-w-5xl mx-auto">
					<section className="text-center mb-16">
						<h1 className="text-5xl font-bold font-urbanist text-coffee mb-4">
							VIP Blog
						</h1>
						<p className="text-gray-600 text-lg">
							Timely tips, real stories, and smart tech to keep you and your loved ones safe.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-xl font-bold mb-4">Search & Filter</h2>
						<div className="flex flex-col md:flex-row items-center gap-4">
							<input
								type="text"
								placeholder="Search blog posts..."
								className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<div className="flex flex-wrap gap-2">
								{uniqueTags.map(tag => (
									<button
										key={tag}
										onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
										className={`px-3 py-1 text-sm rounded-full ${
											tagFilter === tag
												? "bg-coffee text-white"
												: "bg-gray-100 text-coffee hover:bg-coffee/20"
										}`}
									>
										#{tag}
									</button>
								))}
							</div>
						</div>
					</section>

					<section className="mb-20">
						<h2 className="text-xl font-semibold mb-6">Latest Highlight</h2>
						<article className="relative bg-coffee text-white rounded-xl overflow-hidden shadow-lg mb-8">
							<img
								src={latestPost.image}
								alt={latestPost.title}
								className="absolute inset-0 w-full h-full object-cover opacity-40"
							/>
							<div className="relative p-8 z-10">
								<h3 className="text-3xl font-bold mb-2">{latestPost.title}</h3>
								<p className="mb-4">{latestPost.excerpt}</p>
								<a
									href={`/blog/${latestPost.slug}`}
									className="inline-block bg-white text-coffee px-4 py-2 rounded font-medium hover:underline"
								>
									Read More →
								</a>
							</div>
						</article>
					</section>

					<section className="grid gap-10 md:grid-cols-2">
						{filteredPosts.map((post) => (
							<article
								key={post.slug}
								className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
							>
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-52 object-cover"
								/>
								<div className="p-6 flex flex-col justify-between h-full">
									<header>
										<h2 className="text-2xl font-semibold mb-1 font-urbanist text-gray-900">
											{post.title}
										</h2>
										<p className="text-gray-600 mb-3">{post.excerpt}</p>
									</header>
									<div className="text-sm text-gray-400 flex items-center justify-between mb-4">
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
												className="bg-coffee/10 text-coffee text-xs px-2 py-1 rounded-full"
											>
												#{tag}
											</span>
										))}
									</div>
									<a
										href={`/blog/${post.slug}`}
										className="inline-block text-coffee font-medium hover:underline text-sm"
									>
										Read Full Article →
									</a>
								</div>
							</article>
						))}
						{filteredPosts.length === 0 && (
							<p className="text-center text-gray-500 col-span-2">
								No posts found.
							</p>
						)}
					</section>
				</div>

				<section className="bg-coffee text-white text-center py-12 mt-24">
					<h2 className="text-3xl font-bold mb-4">Never Miss a Safety Tip</h2>
					<p className="mb-6">Subscribe to the VIP blog and stay up to date with new articles, tools, and safety strategies.</p>
					<form className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="px-4 py-2 w-full rounded-md text-black"
							required
						/>
						<button className="bg-white text-coffee px-6 py-2 rounded-md hover:bg-gray-200 font-semibold">
							Subscribe
						</button>
					</form>
				</section>
			</main>

			<footer className="text-center py-8 text-sm text-gray-400 bg-white border-t">
				&copy; {new Date().getFullYear()} VIP | All rights reserved.
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
