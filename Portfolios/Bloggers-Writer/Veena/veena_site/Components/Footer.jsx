import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 border-t border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm mb-2">© 2025 Veena Mishra. All rights reserved.</p>
        <p className="text-sm mb-4">Follow me on social media</p>

        <div className="flex justify-center gap-6 text-lg mb-2">
          <a href="#" className="hover:text-pink-400 transition" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="hover:text-pink-400 transition" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" className="hover:text-pink-400 transition" aria-label="GitHub"><FaGithub /></a>
        </div>
      <p>It is just a demo site for getting yourself a site <a href="https://www.instagram.com/pixelstack.dev/" className="text-amber-300">Contact here</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
