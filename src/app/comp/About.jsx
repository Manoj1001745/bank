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
} from "react-icons/fa";

function About() {
  const stats = [
    { number: "10+", label: "Years of Excellence", icon: <FaAward /> },
    { number: "500K+", label: "Monthly Readers", icon: <FaUsers /> },
    { number: "50+", label: "Expert Journalists", icon: <FaNewspaper /> },
    { number: "1000+", label: "Daily Updates", icon: <FaGlobe /> },
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of journalistic integrity, ensuring accurate and unbiased reporting in every story we publish.",
      color: "bg-blue-500",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      description:
        "We embrace new technologies and storytelling methods to deliver news in engaging and accessible formats.",
      color: "bg-yellow-500",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Trust",
      description:
        "Building and maintaining trust with our readers is at the core of everything we do.",
      color: "bg-green-500",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our work, from research to final publication.",
      color: "bg-purple-500",
    },
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Editor-in-Chief",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "20+ years of experience in financial journalism",
    },
    {
      name: "Sita Thapa",
      role: "Managing Editor",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Expert in banking sector analysis",
    },
    {
      name: "Anil Poudel",
      role: "Senior Reporter",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      description: "Specializes in stock market coverage",
    },
    {
      name: "Priya Maharjan",
      role: "Digital Editor",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Leading our digital transformation",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Banking Khabar
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Nepal's Leading Source for Banking, Finance & Economic News
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-red-600 text-3xl mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to revolutionize financial journalism in
                    Nepal, <strong>Banking Khabar</strong> has emerged as the most
                    trusted source for banking, finance, and economic news in the
                    country.
                  </p>
                  <p>
                    Since our inception, we have been committed to delivering
                    accurate, timely, and insightful news that empowers our readers
                    to make informed financial decisions. Our team of experienced
                    journalists and financial analysts work tirelessly to bring you
                    comprehensive coverage of the banking sector, stock market,
                    insurance, and economic policies.
                  </p>
                  <p>
                    Today, we serve over 500,000 monthly readers, including banking
                    professionals, investors, policymakers, and everyday citizens
                    who want to stay informed about the financial landscape of
                    Nepal.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600"
                  alt="Newsroom"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">Since</p>
                  <p className="text-2xl">2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <FaBullseye className="text-3xl text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide accurate, unbiased, and timely financial news that
                  empowers individuals, businesses, and institutions to make
                  informed decisions. We are committed to promoting financial
                  literacy and transparency in Nepal's banking and financial sector.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaEye className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and influential financial media platform in
                  Nepal, setting the standard for quality journalism and becoming
                  the go-to source for anyone seeking reliable financial information
                  and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape our commitment to
                our readers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div
                    className={`${value.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of professionals brings decades of experience in
                journalism and financial analysis.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-red-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Cover</h2>
              <p className="text-red-100 max-w-2xl mx-auto">
                Comprehensive coverage of Nepal's financial ecosystem
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Banking News",
                "Stock Market",
                "Insurance",
                "Economy",
                "Finance",
                "Policy Updates",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Stay Connected With Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Subscribe to our newsletter and never miss an important financial
              update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
