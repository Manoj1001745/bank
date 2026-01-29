"use client"
import Link from 'next/link'
import React from 'react'
import ProductByCat from './comp/ProductByCategory';
import './globals.css';
import data from '@/data/data.json';

export default function Home() {
  const post = data.posts;

  return (
   <div className="min-h-screen bg-gray-50">
   {/* Breaking News Ticker */}
   {post.slice(0, 2).map((a, index) => (
     <section key={a.id} className='py-4 fade-in' style={{animationDelay: `${index * 0.1}s`}}>
       <div className="container mx-auto px-2">
        <div className='bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-t-xl shadow-lg'>
          <div className="flex items-center overflow-hidden">
            <span className="bg-red-900 rounded-t-xl text-white px-4 py-3 font-bold text-sm uppercase tracking-wide whitespace-nowrap flex-shrink-0">Breaking</span>
            <div className="flex-1 overflow-hidden">
              <marquee behavior="alternate" direction="left" scrollamount="5">
                <h1 className='text-xl md:text-2xl text-white font-bold py-2'>{a.title.rendered}</h1>
              </marquee>
            </div>
          </div>
        </div>
        <div className='relative overflow-hidden rounded-b-2xl shadow-xl'>
          <img className='w-full object-cover max-h-[450px]' src={a.featured_image_src} alt={a.title.rendered} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-end justify-center z-10 p-6">
            <Link href={`/details/${a.id}`} className="bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105">
              Read Full Story →
            </Link>
          </div>
        </div>
       </div>
     </section>
   ))}

   <section className='py-4'>
     <div className="container mx-auto px-4 flex justify-center">
       <div className='ad-banner'>
         <img className='w-full max-w-[400px] mx-auto' src="https://news.colglobal.org/img/logo.png" alt="COL Global News" />
       </div>
     </div>
   </section>

   {/* Featured Posts Grid */}
   <section className="">
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


   <ProductByCat id={3} title="Sports" />


   <ProductByCat id={1} title="Health" />

   <section className='py-2'> 
     <div className="container mx-auto px-4 flex justify-center">
       <div className='ad-banner'>
         <img className='w-full max-w-[300px] mx-auto' src="https://news.colglobal.org/img/col.png" alt="COL Global" />
       </div>
     </div>
   </section>

   <ProductByCat id={2} title="Politics" />
   <ProductByCat id={4} title="Culture & Lifestyle" />
   </div>
  );
}