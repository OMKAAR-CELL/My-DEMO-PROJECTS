"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-black tracking-wide">
          VM
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-black font-medium text-sm tracking-wide">
          <li>
            <Link href="/" className="hover:text-pink-600 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-pink-600 transition-colors duration-200">Blog</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-600 transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-600 transition-colors duration-200">Contact</Link>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-black font-medium text-sm tracking-wide">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-pink-600">Home</Link>
          </li>
          <li>
            <Link href="/blogs" onClick={() => setMenuOpen(false)} className="block hover:text-pink-600">Blog</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-pink-600">About</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-pink-600">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
