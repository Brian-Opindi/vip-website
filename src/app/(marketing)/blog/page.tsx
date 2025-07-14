import React from "react";
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

const BlogPage = () => (
	<>
		<header className="absolute left-0 right-0 z-10 mx-auto max-w-6xl flex justify-center bg-black/90 backdrop-blur-sm rounded-b-md">
			<NavMenu />
		</header>

		<main className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-white py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<section className="text-center mb-16">
					<h1 className="text-5xl font-bold font-urbanist text-coffee mb-4">
						VIP Blog
					</h1>
					<p className="text-gray-600 text-lg">
						Insights, safety tips, and updates from the VIP team to keep you informed and secure.
					</p>
				</section>

				<section className="grid gap-10 md:grid-cols-2">
					{posts.map((post) => (
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
				</section>
			</div>
		</main>

		<footer className="text-center py-8 text-sm text-gray-400 bg-white border-t">
			&copy; {new Date().getFullYear()} VIP | All rights reserved.
		</footer>
	</>
);

export default BlogPage;
