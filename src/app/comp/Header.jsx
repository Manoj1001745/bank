"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [cat, setCat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/categories`)
      .then(res => setCat(res.data));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev); // Toggle show/hide
  };

  const closeMenu = () => {
    setMenuOpen(false); // Force close (e.g., on link click)
  };

  return (
    <>
      {/* Top Section */}
      <section className='text-[#f2f2f2] bg-[#1a1a1a]'>
        <div className="container mx-auto">
          <div className='flex justify-between items-center p-2'>
            <h1 className='text-2xl font-bold'>English</h1>
            <div className='flex gap-4'>
              <Link href="/login" className='px-2'>Login</Link>
              <Link href="/about" className='px-2'>About</Link>
              <Link href="/contact" className='px-2'>Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <header className='p-3'>
        <div className="container mx-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/">
            <img className='w-[300px]' src="https://bankingkhabar.com/wp-content/uploads/2022/11/banking-logo.jpg" alt="Logo" />
          </Link>
          <Link href="/">
            <img className='w-[700px]' src="https://bankingkhabar.com/wp-content/uploads/2025/03/1000-by-100-new.gif" alt="Ad" />
          </Link>
        </div>
      </header>

      {/* Navbar */}
      <nav className='bg-red-700 text-white sticky top-0 z-50'>
        <div className="container mx-auto flex  items-center px-2 py-2">
          {/* Desktop Menu */}
          <ul className='hidden lg:flex gap-4 flex-wrap'>
            {cat.map(a => (
              <li
                key={a.id}
                className='border border-[#ec6b6b] px-3 py-1 text-lg hover:bg-red-600 transition rounded pp-1'
              >
                <Link href={`/category/${a.id}`}>{a.name}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button className='lg:hidden text-3xl' onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='lg:hidden bg-red-800'>
            <ul className='flex flex-col px-4 py-2'>
              {cat.map(a => (
                <li
                  key={a.id}
                  className='border-b border-red-500 py-2 text-lg'
                >
                  <Link href={`/category/${a.id}`} onClick={closeMenu}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Date/Time Section */}
      <section className='p-2'>
        <div className="container mx-auto flex justify-end border-b-2 p-2">
          <span>Wednesday, Sep 19, 2025 </span>
          <span className='bg-red-700 text-white ml-2 px-2'>3:54:47 PM</span>
        </div>
      </section>

      {/* Banner Ad */}
      <section className='py-2'>
        <div className="container mx-auto">
          <img className='w-full' src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif" alt="Banner" />
        </div>
      </section>
    </>
  );
}

export default Header
