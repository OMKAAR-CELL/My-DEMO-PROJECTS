"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-beta text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10 font-main">
          I'd love to hear from you! Fill out the form below or reach out
          directly via email or social media.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 font-main">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
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

          {status && <p className="text-sm text-center mt-2 text-gray-700">{status}</p>}
        </form>

        <div className="mt-12 text-center font-main">
          <p className="text-sm text-gray-600">Or email directly at</p>
          <p className="text-md font-semibold mt-1">veena@example.com</p>

          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-pink-600 hover:underline">Instagram</a>
            <a href="#" className="text-pink-600 hover:underline">Twitter</a>
            <a href="#" className="text-pink-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
