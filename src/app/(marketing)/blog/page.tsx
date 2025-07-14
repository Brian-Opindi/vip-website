import React from "react";

const posts = [
  {
    title: "How VIP Keeps You Safe",
    excerpt: "Discover the technology and people behind our instant emergency response.",
    date: "2025-07-14",
    author: "VIP Team",
    image: "/images/test.jpg",
    slug: "how-vip-keeps-you-safe",
  },
  {
    title: "Personal Safety Tips for Families",
    excerpt: "Practical advice for keeping your loved ones protected in any situation.",
    date: "2025-07-10",
    author: "VIP Experts",
    image: "/images/user 1.jpg",
    slug: "personal-safety-tips-families",
  },
];

const BlogPage = () => (
  <section className="min-h-screen bg-white py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 font-urbanist text-coffee">VIP Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 hover:shadow-2xl transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 font-urbanist">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-xs text-gray-400 mb-2">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="inline-block mt-2 text-coffee font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPage;