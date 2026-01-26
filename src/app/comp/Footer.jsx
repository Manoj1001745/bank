import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <FaYoutube />, url: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <img 
                className='w-[250px] rounded-lg mb-4 hover:opacity-90 transition-opacity' 
                src="https://bankingkhabar.com/wp-content/uploads/2022/08/logo1-1.jpg" 
                alt="Banking Khabar Logo" 
              />
            </Link>
            <p className='text-gray-400 mb-4 leading-relaxed max-w-md'>
              Nepal's leading source for banking, finance, and economic news. Delivering accurate and timely news since 2015.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-600">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <FaPhone className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p>9851215417</p>
                  <p>9851215418</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaEnvelope className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p>bankingkhabar72@gmail.com</p>
                  <p className="text-sm">(Advertisement: bankingkhabaradv@gmail.com)</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                <p>Kathmandu, Nepal</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Info */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-gray-800/50 px-6 py-4 rounded-lg">
              <p className="text-gray-400 text-sm">Chief Editor</p>
              <p className="text-white font-semibold">Madhav Nirdosh</p>
            </div>
            <div className="bg-gray-800/50 px-6 py-4 rounded-lg">
              <p className="text-gray-400 text-sm">Coordinator</p>
              <p className="text-white font-semibold">Sandip B. K</p>
            </div>
            <div className="bg-gray-800/50 px-6 py-4 rounded-lg">
              <p className="text-gray-400 text-sm">Registration No.</p>
              <p className="text-white font-semibold">२९१/०७३-७४</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Banking Khabar. All Rights Reserved. | 
            <Link href="/privacy" className="hover:text-red-500 transition-colors ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-red-500 transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer