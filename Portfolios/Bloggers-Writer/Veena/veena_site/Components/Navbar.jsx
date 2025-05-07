"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-black tracking-wide">
          VM
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-black font-medium text-sm tracking-wide">
          <li>
            <Link href="/" className="hover:text-pink-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-pink-600 transition-colors duration-200">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-600 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-600 transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
