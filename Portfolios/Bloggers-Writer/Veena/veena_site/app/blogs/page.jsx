import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "writing-routine",
    title: "My Daily Writing Rituals",
    date: "May 1, 2025",
    excerpt: "Discover how I structure my day as a writer—from morning journaling to late-night editing sessions.",
    tags: ["writing", "habits"],
  },
  {
    slug: "blogging-tools",
    title: "Top 5 Tools I Use for Blogging",
    date: "April 20, 2025",
    excerpt: "Here's a list of my favorite tools that make blogging easier and more fun.",
    tags: ["tools", "blogging"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-12 font-main">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-beta text-center mb-4">Veena's Blog</h1>
        <p className="text-center text-gray-600 mb-12">
          Thoughts, tips, and experiences from my writing journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h2 className="text-2xl font-semibold text-pink-600">{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
              <div className="mt-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mr-2">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="text-sm text-pink-500 mt-4 inline-block hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

