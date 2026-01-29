"use client";
import React from "react";
import {
  FaNewspaper,
  FaUsers,
  FaAward,
  FaGlobe,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  const stats = [
    { number: "5+", label: "Years of Excellence", icon: <FaAward /> },
    { number: "100K+", label: "Monthly Readers", icon: <FaUsers /> },
    { number: "25+", label: "Expert Journalists", icon: <FaNewspaper /> },
    { number: "500+", label: "Daily Updates", icon: <FaGlobe /> },
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-2xl sm:text-3xl" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of journalistic integrity, ensuring accurate and unbiased reporting in every story we publish.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: <FaLightbulb className="text-2xl sm:text-3xl" />,
      title: "Innovation",
      description:
        "We embrace new technologies and storytelling methods to deliver news in engaging and accessible formats.",
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      icon: <FaHandshake className="text-2xl sm:text-3xl" />,
      title: "Trust",
      description:
        "Building and maintaining trust with our readers is at the core of everything we do.",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
    },
    {
      icon: <FaChartLine className="text-2xl sm:text-3xl" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our work, from research to final publication.",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
  ];

  const team = [
    {
      name: "Manoj Khadka",
      role: "Editor-in-Chief",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "20+ years of experience in journalism",
    },
    {
      name: "Sagar ",
      role: "Managing Editor",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Expert in news analysis & reporting",
    },
    {
      name: "Kshitiz Poudel",
      role: "Senior Reporter",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      description: "Specializes in politics & sports",
    },
    {
      name: "saurav Maharjan",
      role: "Digital Editor",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Leading our digital transformation",
    },
  ];

  const categories = [
    "Health",
    "Politics",
    "Sports",
    "Culture & Lifestyle",
    "Education",
    "Technology",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-red-400 font-bold">COL</span>
              <span className="text-white font-semibold">Global News</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Col Global News</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              Your Trusted Source for News from Nepal and Around the World
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-8">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61564920835213", color: "hover:bg-blue-600" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/col.global1/", color: "hover:bg-pink-600" },
                { icon: <FaTwitter />, href: "#", color: "hover:bg-sky-500" },
                { icon: <FaYoutube />, href: "#", color: "hover:bg-red-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 -mt-4 sm:-mt-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 lg:p-8 text-center transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="text-red-500 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Delivering News That Matters
                </h2>
                <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    <strong className="text-gray-800">Col Global News</strong> is your trusted source for comprehensive news coverage from Nepal and around the world. We are committed to delivering accurate, timely, and insightful news that keeps you informed and connected.
                  </p>
                  <p>
                    Our dedicated team of journalists works tirelessly to bring you the latest updates on politics, health, sports, culture, and lifestyle. We believe in the power of quality journalism to inform, educate, and inspire our readers.
                  </p>
                  <p>
                    Based in Lazimpat, Kathmandu, we serve readers across Nepal and the Nepali diaspora worldwide, providing news that matters to our community.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 sm:mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Lazimpat, Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaPhone className="text-red-500 flex-shrink-0" />
                    <a href="tel:+9779802348005" className="text-sm sm:text-base hover:text-red-500 transition-colors">+977 980-234-8005</a>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600"
                    alt="Col Global News Newsroom"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-red-500 to-red-600 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">Since</p>
                  <p className="text-lg sm:text-xl lg:text-2xl">2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">What Drives Us</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                Our Mission & Vision
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 sm:p-8 border-l-4 border-red-500 transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-red-100 p-3 sm:p-4 rounded-xl">
                    <FaBullseye className="text-2xl sm:text-3xl text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To deliver accurate, unbiased, and timely news that empowers our readers to stay informed about the events shaping our world. We are committed to quality journalism that values truth and transparency.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 sm:p-8 border-l-4 border-blue-500 transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-xl">
                    <FaEye className="text-2xl sm:text-3xl text-blue-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To be the most trusted and influential news platform, connecting Nepal with the world and becoming the go-to source for reliable information and insights that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">What We Believe</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                These principles guide everything we do and shape our commitment to our readers.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div
                    className={`${value.color} text-white w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Our People</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Our dedicated team of professionals brings passion and expertise to deliver quality journalism.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6 text-center">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-red-500 font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Coverage</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">What We Cover</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Comprehensive news coverage across multiple categories
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                >
                  <p className="font-medium text-sm sm:text-base group-hover:text-red-400 transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white shadow-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Stay Connected With Us
              </h2>
              <p className="text-red-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
                Subscribe to our newsletter and never miss important news updates from Nepal and around the world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border-0 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-800 text-sm sm:text-base"
                />
                <button className="bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              
              {/* Social Follow */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
                <p className="text-red-100 mb-4 text-sm sm:text-base">Follow us on social media</p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  {[
                    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61564920835213" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/col.global1/" },
                    { icon: <FaTwitter />, href: "#" },
                    { icon: <FaYoutube />, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
