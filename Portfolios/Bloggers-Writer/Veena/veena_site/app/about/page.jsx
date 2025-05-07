import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-beta text-center mt-12 mb-4">About Me</h1>
      <p className="text-center text-gray-600 font-main max-w-xl mx-auto">
        Passionate writer. Thoughtful storyteller. Lifelong learner.
      </p>
      <div className="max-w-5xl mx-auto mt-12 px-4 md:flex items-center gap-10">
        <img
          src="/Veena.png" // Add your placeholder/profile image
          alt="Veena Mishra"
          className="w-60 h-60 object-cover rounded-full mx-auto md:mx-0 mb-6 md:mb-0"
        />

        <div>
          <h2 className="text-2xl font-beta mb-3">Hello! I'm Veena Mishra</h2>
          <p className="text-gray-700 font-main leading-relaxed">
            I’m a freelance writer and blogger who believes in the power of
            words to shape perspectives, evoke emotions, and spark change.
            Whether it’s poetry, storytelling, or thoughtful commentary, I find
            joy in expressing what often goes unsaid.
          </p>
          <p className="text-gray-700 font-main mt-4">
            With over 5 years of writing experience, I’ve worked on personal
            blogs, literary publications, and content projects. I’m always
            looking to collaborate with like-minded creators.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-beta mb-4">What I Write About</h3>
        <ul className="text-gray-600 font-main space-y-2">
          <li>📖 Poetry & Short Stories</li>
          <li>🧘 Personal Reflections & Mindfulness</li>
          <li>📚 Book Reviews</li>
          <li>💡 Social Issues & Creative Essays</li>
        </ul>
      </div>

      <div className="text-center mt-10">
        <p className="font-main text-gray-700 mb-4">
          Want to collaborate, feature me, or just say hello?
        </p>
        <Link
          href="/contact"
          className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default page;
