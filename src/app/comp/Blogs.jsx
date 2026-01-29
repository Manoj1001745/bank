"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import data from '@/data/data.json';

export default function Blogs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const posts = data.posts;
    const categories = data.categories;

    // Filter posts based on search and category
    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             post.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || 
                               post.categories.includes(parseInt(selectedCategory));
        return matchesSearch && matchesCategory;
    });

    // Get category name by ID
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'General';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
                    <p className="text-lg text-red-100 max-w-2xl mx-auto">
                        Stay updated with the latest news, insights, and stories from around the world
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 -mt-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            />
                        </div>
                        
                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white cursor-pointer"
                        >
                            <option value="all">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="container mx-auto px-4 py-8">
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-semibold text-gray-600 mb-2">No articles found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <>
                        <p className="text-gray-600 mb-6">
                            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article 
                                    key={post.id} 
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    {/* Featured Image */}
                                    <div className="relative overflow-hidden h-48">
                                        <img 
                                            src={post.featured_image_src} 
                                            alt={post.title.rendered}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                {getCategoryName(post.categories[0])}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Date */}
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                            <FaCalendarAlt className="text-red-500" />
                                            <span>
                                                {new Date(post.date).toLocaleDateString('en-US', { 
                                                    year: 'numeric', 
                                                    month: 'long', 
                                                    day: 'numeric' 
                                                })}
                                            </span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h2 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                                            {post.title.rendered}
                                        </h2>
                                        
                                        {/* Excerpt */}
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {post.excerpt.rendered}
                                        </p>
                                        
                                        {/* Read More Link */}
                                        <Link 
                                            href={`/details/${post.id}`}
                                            className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors group/link"
                                        >
                                            Read More 
                                            <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}