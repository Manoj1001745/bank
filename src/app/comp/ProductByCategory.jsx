"use client"
import Link from 'next/link'
import React from 'react'
import data from '@/data/data.json';

function ProductByCat(props) {
    const post = data.posts.filter(p => p.categories.includes(props.id));

  return (
   <section className=' bg-white'>
    <div className="container mx-auto ">
      {/* Category Header */}
      <div className='category-header flex items-center rounded-xl mb-6 overflow-hidden shadow-lg'>
        <h3 className="text-2xl font-bold text-white px-6 py-4 flex items-center gap-3">
          <span className="w-1 h-8 bg-white rounded-full"></span>
          {props.title}
        </h3>
        <div className="flex-1"></div>
        <Link href={`/category/${props.id}`} className="text-white/80 hover:text-white px-6 py-4 text-sm font-medium transition-colors">
          View All →
        </Link>
      </div>
      
      {/* Posts Grid */}
      <div className="box-11 flex py-4 gap-6">
        {post.slice(0, 4).map((a, index) => (
          <div key={a.id} className='box-33 box-1 fade-in' style={{animationDelay: `${index * 0.1}s`}}>
            <Link href={`/details/${a.id}`} className="block group">
              <div className="overflow-hidden rounded-xl mb-4">
                <img 
                  className='h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110' 
                  src={a.featured_image_src} 
                  alt={a.title.rendered} 
                />
              </div>
              <div className='py-2'>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Latest</span>
                </div>
                <h1 className='pp-1 text-lg md:text-xl text-gray-800 font-bold leading-tight line-clamp-2 group-hover:text-red-600 transition-colors'>
                  {a.title.rendered}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
   </section>
  )
}

export default ProductByCat