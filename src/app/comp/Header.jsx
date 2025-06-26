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
      <section className="text-[#f2f2f2] bg-[#1a1a1a]">
        <div className="container mx-auto p-2 flex justify-between items-center">
          <h1 className="text-xl font-bold">English</h1>
          <div className="flex gap-4 text-sm">
            <Link href="/login" className="hover:text-red-400">Login</Link>
            <Link href="/about" className="hover:text-red-400">About</Link>
            <Link href="/contact" className="hover:text-red-400">Contact</Link>
          </div>
        </div>
      </section>

      {/* Logo */}
      <header className="p-3">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <Link href="/">
            <img
              className="w-[280px]"
              src="https://bankingkhabar.com/wp-content/uploads/2022/11/banking-logo.jpg"
              alt="Logo"
            />
          </Link>
          <Link href="/">
            <img
              className="w-[700px]"
              src="https://bankingkhabar.com/wp-content/uploads/2025/03/1000-by-100-new.gif"
              alt="Ad"
            />
          </Link>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-red-700 text-white sticky top-0 z-50">
        <div className="nav-b container mx-auto flex items-center justify-between px-4 py-3">
         

          {/* Desktop Menu */}
          <ul className="nav-a hidden lg:flex gap-3 flex-wrap">
            {cat.map((a) => (
              <li
                key={a.id}
                className="border border-[#ec6b6b] px-3 py-1 text-lg hover:bg-red-600 rounded transition"
              >
                <Link href={`/category/${a.id}`}>{a.name}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white lg:hidden"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          
          <div className="lg:hidden bg-red-800 px-4 py-2">
            <ul className="flex flex-col gap-2">
              {cat.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/category/${a.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 border-b border-red-500 text-lg"
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
      <section className="p-2 border-b-2">
        <div className="container mx-auto flex justify-end gap-2">
          <span>Wednesday, Sep 19, 2025</span>
          <span className="bg-red-700 text-white px-2">3:54:47 PM</span>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-2">
        <div className="container mx-auto">
          <img
            className="w-full"
            src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif"
            alt="Ad Banner"
          />
        </div>
      </section>
    </>
  );
}
