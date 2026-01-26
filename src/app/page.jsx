"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductByCat from './comp/ProductByCat';
import './globals.css';

export default function Home() {
  let [post, setPost] = useState([]);
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts`)
    .then(res => {
      setPost(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gray-50">
   {/* Breaking News Ticker */}
   {post.slice(0, 2).map((a, index) => (
     <section key={a.id} className='py-4 fade-in' style={{animationDelay: `${index * 0.1}s`}}>
       <div className="container mx-auto text-center px-4">
        <div className='bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-t-xl shadow-lg'>
          <div className="flex items-center">
            <span className="bg-red-900 text-white px-4 py-3 font-bold text-sm uppercase tracking-wide">Breaking</span>
            <marquee behavior="alternet" direction="left" className="flex-1">
              <h1 className='text-xl md:text-2xl text-white font-bold py-2'>{a.title.rendered}</h1>
            </marquee>
          </div>
        </div>
        <div className='featured-overlay overflow-hidden rounded-b-2xl shadow-xl'>
          <img className='w-full object-cover max-h-[450px]' src={a.featured_image_src} alt={a.title.rendered} />
          <div className="absolute inset-0 flex items-end justify-center z-10 p-6">
            <Link href={`/details/${a.id}`} className="bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all shadow-lg">
              Read Full Story →
            </Link>
          </div>
        </div>
       </div>
     </section>
   ))}

   <section className='py-6'>
     <div className="container mx-auto px-4 flex justify-center">
       <div className='ad-banner'>
         <img className='w-full max-w-[500px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2025/02/800-x-200-gif%20new.gif" alt="Advertisement" />
       </div>
     </div>
   </section>

   {/* Featured Posts Grid */}
   <section className="py-8">
     <div className="container mx-auto px-4">
       <div className="grid md:grid-cols-3 gap-6">
         {post.slice(1, 4).map((a, index) => (
           <Link key={a.id} href={`/details/${a.id}`} className='group fade-in' style={{animationDelay: `${index * 0.15}s`}}>
             <div className='featured-overlay rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
               <img className='w-full h-[220px] object-cover' src={a.featured_image_src} alt={a.title.rendered} />
               <div className="absolute inset-0 flex items-end z-10 p-4">
                 <h1 className='text-lg md:text-xl font-bold text-white line-clamp-2 group-hover:text-red-200 transition-colors'>{a.title.rendered}</h1>
               </div>
             </div>
           </Link>
         ))}
       </div>
     </div>
   </section>

   <section className='py-6'>
     <div className="container mx-auto px-4 flex justify-center">
       <div className='ad-banner'>
         <img className='w-full max-w-[850px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif" alt="Advertisement" />
       </div>
     </div>
   </section>

   <ProductByCat id={2} title="अन्तरवार्ता" />
   <ProductByCat id={71} title="अन्तर्राष्ट्रिय बैंकिङ" />

   <section className='py-6'> 
     <div className="container mx-auto px-4 flex justify-center">
       <div className='ad-banner'>
         <img className='w-full max-w-[900px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2025/02/900x150.gif" alt="Advertisement" />
       </div>
     </div>
   </section>

   <ProductByCat id={89} title="अर्थ" />

   <section className='py-6'>
     <div className="container mx-auto px-4">
       <div className='ad-banner'>
         <img className='w-full' src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif" alt="Advertisement" />
       </div>
     </div>
   </section>
   
   <ProductByCat id={86} title="कोरोना अपडेट" />
   </div>
  );
}