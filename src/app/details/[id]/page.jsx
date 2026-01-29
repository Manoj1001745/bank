"use client"
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation';
import { FaCalendarAlt, FaUser, FaShare, FaFacebookF, FaTwitter, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import data from '@/data/data.json';

function Page() {
    const {id} = useParams()
    const postId = parseInt(id)
    
    const posts = data.posts.find(p => p.id === postId);
    const relatedPosts = data.posts
      .filter(p => p.id !== postId && 
        posts && p.categories.some(cat => posts.categories.includes(cat)))
      .slice(0, 4);

    // Remove images from content to avoid duplication with featured image
    const contentWithoutImages = posts?.content?.rendered?.replace(/<img[^>]*>/gi, '') || '';

  if (!posts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">पोस्ट फेला परेन</h1>
          <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
            गृहपृष्ठमा जानुहोस्
          </Link>
        </div>
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gray-50">
     {/* Back Navigation */}
     <div className="bg-white border-b">
       <div className="container mx-auto px-4 py-3">
         <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
           <FaArrowLeft />
           <span>Back to Home</span>
         </Link>
       </div>
     </div>

     <section className='py-4'>
       <div className="container mx-auto px-4">
         <article className='article-content bg-white rounded-2xl shadow-xl overflow-hidden fade-in'>
           {/* Article Header */}
           <div className="p-6 md:p-10 border-b border-gray-100">
             {/* Category Badge */}
             <div className="mb-4">
               <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                 News Article
               </span>
             </div>
             
             {/* Title */}
             <h1 className='font-bold text-2xl md:text-4xl text-gray-800 leading-tight mb-6'>
               {posts.yoast_head_json?.title || posts.title?.rendered}
             </h1>
             
             {/* Meta Info */}
             <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
               <div className="flex items-center gap-2">
                 <FaCalendarAlt className="text-red-500" />
                 <span>{new Date(posts.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
               </div>
               <div className="flex items-center gap-2">
                 <FaUser className="text-red-500" />
                 <span>Col News</span>
               </div>
             </div>

             {/* Share Buttons */}
             <div className="flex items-center gap-3 mt-6">
               <span className="text-gray-500 text-sm flex items-center gap-2">
                 <FaShare /> Share:
               </span>
               <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                 <FaFacebookF className="text-sm" />
               </button>
               <button className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                 <FaTwitter className="text-sm" />
               </button>
               <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                 <FaWhatsapp className="text-sm" />
               </button>
             </div>
           </div>

           {/* Featured Image */}
           {posts.featured_image_src && (
             <div className="px-6 md:px-10 py-6">
               <img 
                 src={posts.featured_image_src} 
                 alt={posts.title?.rendered || 'Article image'} 
                 className="w-full rounded-xl shadow-lg"
               />
             </div>
           )}

           {/* Article Content */}
           <div className="p-6 md:p-10">
             <div 
               className='prose prose-lg max-w-none 
                 [&_img]:w-full [&_img]:rounded-xl [&_img]:my-6 [&_img]:shadow-lg
                 [&_p]:my-4 [&_p]:text-gray-700 [&_p]:leading-relaxed
                 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mt-8 [&_h2]:mb-4
                 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-3
                 [&_a]:text-red-600 [&_a]:underline [&_a:hover]:text-red-700
                 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
                 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
                 [&_li]:my-2 [&_li]:text-gray-700
                 [&_blockquote]:border-l-4 [&_blockquote]:border-red-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:bg-gray-50 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg' 
               dangerouslySetInnerHTML={{ __html: contentWithoutImages }}
             ></div>
           </div>

           {/* Article Footer */}
           <div className="p-6 md:p-10 bg-gray-50 border-t border-gray-100">
             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="text-gray-500 text-sm">
                 Thank you for reading Col News
               </div>
             </div>
           </div>
         </article>

         {/* Related Posts */}
         {relatedPosts.length > 0 && (
           <div className="mt-12">
             <h2 className="text-2xl font-bold text-gray-800 mb-6">सम्बन्धित समाचार</h2>
             <div className="grid md:grid-cols-4 gap-6">
               {relatedPosts.map((post) => (
                 <Link key={post.id} href={`/details/${post.id}`} className="group">
                   <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                     <img 
                       src={post.featured_image_src} 
                       alt={post.title?.rendered} 
                       className="w-full h-[150px] object-cover"
                     />
                     <div className="p-4">
                       <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors">
                         {post.title?.rendered}
                       </h3>
                     </div>
                   </div>
                 </Link>
               ))}
             </div>
           </div>
         )}
       </div>
     </section>
   </div>
  )
}

export default Page