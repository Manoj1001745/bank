"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [cat, setCat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch categories from WordPress
  useEffect(() => {
    axios
      .get("https://bankingkhabar.com/wp-json/wp/v2/categories")
      .then((res) => setCat(res.data));
  }, []);

  return (
    <>
      {/* Top Bar */}
      <section className="text-gray-200 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">English</h1>
          <div className="flex gap-6 text-sm">
            <Link href="/login" className="hover:text-red-400 transition-colors duration-200">Login</Link>
            <Link href="/about" className="hover:text-red-400 transition-colors duration-200">About</Link>
            <Link href="/contact" className="hover:text-red-400 transition-colors duration-200">Contact</Link>
          </div>
        </div>
      </section>

      {/* Logo */}
      <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <Link href="/" className="hover-lift">
            <img
              className="w-[260px]"
              src="https://bankingkhabar.com/wp-content/uploads/2022/11/banking-logo.jpg"
              alt="Banking Khabar Logo"
            />
          </Link>
          <Link href="/" className="hidden md:block">
            <img
              className="max-w-[700px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
              src="https://bankingkhabar.com/wp-content/uploads/2025/03/1000-by-100-new.gif"
              alt="Advertisement"
            />
          </Link>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="nav-b container mx-auto flex items-center justify-between px-4 py-3">
         

          {/* Desktop Menu */}
          <ul className="nav-a hidden lg:flex gap-2 flex-wrap">
            {cat.map((a) => (
              <li
                key={a.id}
                className="border border-red-400/50 px-4 py-2 text-base font-medium hover:bg-white hover:text-red-600 rounded-lg transition-all duration-300"
              >
                <Link href={`/category/${a.id}`}>{a.name}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white lg:hidden p-2 hover:bg-red-800 rounded-lg transition-colors"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          
          <div className="lg:hidden bg-red-800/95 backdrop-blur-sm px-4 py-4 border-t border-red-600">
            <ul className="flex flex-col gap-2">
              {cat.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/category/${a.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-4 border-b border-red-600/50 text-lg hover:bg-red-700 rounded-lg transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Time & Date Section */}
      <section className="py-3 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4 flex justify-end items-center gap-3">
          <span className="text-gray-600 text-sm font-medium">Wednesday, Sep 19, 2025</span>
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">3:54:47 PM</span>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-3 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="ad-banner">
            <img
              className="w-full"
              src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif"
              alt="Advertisement Banner"
            />
          </div>
        </div>
      </section>
    </>
  );
}
