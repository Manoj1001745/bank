"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMenu, IoClose, IoInformationCircle, IoMail, IoShieldCheckmark, IoNewspaper, IoMegaphone, IoCall } from "react-icons/io5";
import data from "@/data/data.json";

export default function Header() {
  const cat = data.categories;
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <>
      {/* Top Bar */}
      <section className="text-gray-200 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-2 sm:py-3 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
            <img
              className="w-10 sm:w-12 md:w-[60px]"
              src="https://news.colglobal.org/img/logo.png"
              alt="colglobal Logo"
            />
          </Link>
          
          {/* Modern Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Link 
              href="/about" 
              className="group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <IoInformationCircle className="text-base sm:text-lg text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="hidden sm:inline">About</span>
            </Link>
            
            <Link 
              href="/contact" 
              className="group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <IoCall className="text-base sm:text-lg text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="hidden xs:inline">Contact</span>
            </Link>
{/*             
            <Link 
              href="/privacy" 
              className="group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <IoShieldCheckmark className="text-base sm:text-lg text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="hidden md:inline">Privacy</span>
            </Link>
             */}
            <Link 
              href="/blogs" 
              className="group flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <IoNewspaper className="text-base sm:text-lg" />
              <span>Blogs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:py-3">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-1 xl:gap-2 flex-wrap">
            {cat.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/category/${a.id}`}
                  className="block border border-red-400/50 px-3 xl:px-4 py-2 text-sm xl:text-base font-medium hover:bg-white hover:text-red-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile: Date/Time Display */}
          <div className="lg:hidden flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-red-100 hidden xs:inline">{formatDate(currentTime).split(",")[0]}</span>
            <span className="bg-white/20 px-2 py-1 rounded-full font-mono">
              {formatTime(currentTime)}
            </span>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl sm:text-3xl text-white lg:hidden p-2 hover:bg-red-800 rounded-lg transition-all duration-200 active:scale-95"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-[52px] sm:top-[60px] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden fixed top-[52px] sm:top-[60px] left-0 right-0 bg-gradient-to-b from-red-700 to-red-800 shadow-2xl transition-all duration-300 ease-out max-h-[calc(100vh-60px)] overflow-y-auto ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="flex flex-col p-4 gap-1">
            {cat.map((a, index) => (
              <li
                key={a.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className={menuOpen ? "animate-fade-in-up" : ""}
              >
                <Link
                  href={`/category/${a.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 text-base sm:text-lg font-medium hover:bg-white hover:text-red-600 rounded-lg transition-all duration-200 border-b border-red-600/30 last:border-b-0"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Time & Date Section - Desktop Only */}
      <section className="hidden lg:block py-2 sm:py-3 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4 flex justify-end items-center gap-3">
          <span className="text-gray-600 text-sm font-medium">
            {formatDate(currentTime)}
          </span>
          <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm font-mono min-w-[100px] text-center">
            {formatTime(currentTime)}
          </span>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-2 sm:py-3 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="ad-banner overflow-hidden rounded-lg shadow-sm">
            <img
              className="w-full h-auto object-cover"
              src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif"
              alt="Advertisement Banner"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
