"use client"
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation';
import data from '@/data/data.json';

function Page() {
    const params = useParams()
    const cid = parseInt(params.cid)
    
    const post = data.posts.filter(p => p.categories.includes(cid));
    const category = data.categories.find(c => c.id === cid);

    return (
        <section className="min-h-screen bg-gray-50 py-2">
            <div className="container mx-auto px-4">
                {/* Category Header */}
                {category && (
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
                        {category.description && (
                            <p className="text-gray-600">{category.description}</p>
                        )}
                        <div className="h-1 w-20 bg-red-600 mt-4"></div>
                    </div>
                )}

                {/* Posts Grid */}
                {post.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-6">
                        {post.map((a, index) => (
                            <div key={a.id} className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 fade-in' style={{animationDelay: `${index * 0.1}s`}}>
                                <Link href={`/details/${a.id}`} className="block group">
                                    <img className='h-[220px] w-full object-cover' src={a.featured_image_src} alt={a.title?.rendered || 'Post image'} />
                                    <div className="p-4">
                                        <h2 className='text-xl text-gray-800 font-bold line-clamp-2 group-hover:text-red-600 transition-colors'>{a.title?.rendered}</h2>
                                        <p className='text-sm text-gray-500 mt-2'>{new Date(a.date).toLocaleDateString('ne-NP')}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">यस category मा कुनै पोस्ट फेला परेन।</p>
                        <Link href="/" className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            गृहपृष्ठमा जानुहोस्
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Page