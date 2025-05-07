import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-beta text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10 font-main">
          I'd love to hear from you! Fill out the form below or reach out
          directly via email or social media.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 font-main">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center font-main">
          <p className="text-sm text-gray-600">Or email directly at</p>
          <p className="text-md font-semibold mt-1">veena@example.com</p>

          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-pink-600 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-pink-600 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-pink-600 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
