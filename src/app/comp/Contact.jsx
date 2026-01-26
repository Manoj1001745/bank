"use client";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
  FaNewspaper,
  FaHeadset,
  FaBullhorn,
  FaHandshake,
} from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: <FaHeadset /> },
    { value: "news-tip", label: "News Tip / Story Idea", icon: <FaNewspaper /> },
    { value: "advertising", label: "Advertising & Partnership", icon: <FaBullhorn /> },
    { value: "collaboration", label: "Business Collaboration", icon: <FaHandshake /> },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      details: ["+977-01-4567890", "+977-9841234567"],
      color: "bg-green-500",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      details: ["info@bankingkhabar.com", "news@bankingkhabar.com"],
      color: "bg-blue-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Address",
      details: ["Kathmandu, Nepal", "New Baneshwor"],
      color: "bg-red-500",
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Working Hours",
      details: ["Sun - Fri: 9:00 AM - 6:00 PM", "Sat: Closed"],
      color: "bg-purple-500",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", name: "Facebook", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, url: "#", name: "Twitter", color: "hover:bg-sky-500" },
    { icon: <FaInstagram />, url: "#", name: "Instagram", color: "hover:bg-pink-500" },
    { icon: <FaLinkedinIn />, url: "#", name: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <FaYoutube />, url: "#", name: "YouTube", color: "hover:bg-red-600" },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              Get In Touch With Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-red-500">Banking Khabar</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Have a news tip, story idea, or just want to reach out? We're here to listen.
              Your voice matters to us and helps shape the stories that matter to Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {info.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-bounce">
                    <IoCheckmarkCircle className="text-5xl text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll respond within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      What can we help you with? *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, inquiryType: type.value }));
                            if (errors.inquiryType) {
                              setErrors((prev) => ({ ...prev, inquiryType: "" }));
                            }
                          }}
                          className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                            formData.inquiryType === type.value
                              ? "border-red-500 bg-red-50 text-red-600"
                              : "border-gray-200 hover:border-gray-300 text-gray-600"
                          }`}
                        >
                          <span className="text-2xl mb-2 block">{type.icon}</span>
                          <span className="text-xs font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.inquiryType && (
                      <p className="text-red-500 text-sm mt-2">{errors.inquiryType}</p>
                    )}
                  </div>

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300 ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-red-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300 ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-red-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300 ${
                          errors.subject
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-red-500"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Message 
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-red-500"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                For urgent news tips or breaking stories, reach us directly through our hotline.
              </p>
              <a
                href="tel:+9779841234567"
                className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300"
              >
                <FaPhone className="animate-pulse" />
                Call Now: 9841234567
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Follow us on social media for the latest updates and news.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Get the latest banking and financial news delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-4 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  <FaPaperPlane />
                </button>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    How can I submit a news tip?
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Select "News Tip" above or email news@bankingkhabar.com
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    What are your advertising rates?
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Contact us via the form for detailed media kit.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    Response time for inquiries?
                  </h4>
                  <p className="text-gray-600 text-xs">
                    We typically respond within 24-48 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Visit Our Office
            </h2>
            <p className="text-gray-600">
              Located in the heart of Kathmandu, we're easy to find.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8476814877177!2d85.3389534!3d27.6933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b5c5e8a5f7%3A0x5d8a2e4d3b0f3a43!2sNew%20Baneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Banking Khabar Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;