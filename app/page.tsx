"use client"

import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation Bar Section */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl border-b border-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo - Made clickable to return to home */}
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                PrimeConsult
              </span>
            </button>

            {/* Desktop Menu - Updated colors and made links functional */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleScrollToSection("home")}
                className="text-gray-300 hover:text-emerald-400 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleScrollToSection("services")}
                className="text-gray-300 hover:text-emerald-400 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-gray-300 hover:text-emerald-400 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button - Updated colors */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu - Made links functional and updated styling */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleScrollToSection("home")}
                  className="text-gray-300 hover:text-emerald-400 font-medium px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-300 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleScrollToSection("services")}
                  className="text-gray-300 hover:text-emerald-400 font-medium px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-300 text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => handleScrollToSection("about")}
                  className="text-gray-300 hover:text-emerald-400 font-medium px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-300 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="text-white bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Changed to dark theme with emerald accents */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full shadow-md border border-gray-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-semibold text-emerald-400">Premium Business Consulting</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Empowering Businesses Through
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Expert Consulting
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We help organizations unlock growth, streamline operations, and achieve sustainable success through
                strategic insights and proven methodologies.
              </p>

              {/* CTA Buttons - Made buttons functional */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Book a Consultation
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <button
                  onClick={() => handleScrollToSection("services")}
                  className="px-8 py-4 bg-gray-800 text-emerald-400 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-400">500+ Success Stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-400">20+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Professional business consulting meeting"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">250%</p>
                    <p className="text-sm text-gray-400">Average Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Changed to dark theme */}
      <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/20">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Consulting Services</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Comprehensive solutions tailored to elevate your business performance and drive measurable results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Business Strategy */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Strategy</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Develop winning strategies that align with your vision. We analyze market trends, competitive
                landscapes, and growth opportunities to position your business for long-term success.
              </p>
              <button className="inline-flex items-center text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Service Card 2: Financial Advisory */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Advisory</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Optimize your financial performance with expert guidance. From capital allocation to risk management, we
                help you make informed decisions that maximize profitability and sustainability.
              </p>
              <button className="inline-flex items-center text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Service Card 3: Operations Optimization */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Operations Optimization</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Streamline processes and enhance efficiency across your organization. We identify bottlenecks, implement
                best practices, and drive operational excellence at every level.
              </p>
              <button className="inline-flex items-center text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Service Card 4: Digital Transformation */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Navigate the digital age with confidence. We guide your technology adoption, process automation, and
                digital strategy to keep you ahead of industry disruption.
              </p>
              <button className="inline-flex items-center text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Service Card 5: Change Management */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Change Management</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Lead organizational transformation with confidence. We support cultural shifts, stakeholder engagement,
                and adoption strategies that ensure smooth transitions.
              </p>
              <button className="inline-flex items-center text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Service Card 6: Market Analysis */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Market Analysis</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Gain deep market intelligence and competitive insights. Our research-driven approach helps you identify
                opportunities, mitigate risks, and make data-backed strategic decisions.
              </p>
              <button className="inline-flex items-center text-emerald-400 font-semibold group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Added about section with dark theme */}
      <section id="about" className="py-20 lg:py-28 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/20">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose PrimeConsult</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                With over 20 years of experience, we've helped hundreds of businesses transform their operations and
                achieve unprecedented growth. Our team of expert consultants brings deep industry knowledge and proven
                methodologies to every engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Certified Experts</h4>
                    <p className="text-sm text-gray-400">Industry-leading consultants</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Fast Results</h4>
                    <p className="text-sm text-gray-400">See improvements in weeks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">ROI Focused</h4>
                    <p className="text-sm text-gray-400">Measurable business impact</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Dedicated Support</h4>
                    <p className="text-sm text-gray-400">24/7 client assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Made form functional and updated to dark theme */}
      <section
        id="contact"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/20">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Talk About Your Business Needs</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Send us a message and our consultants will reach out shortly to discuss how we can help transform your
              business.
            </p>
          </div>

          {/* Contact Form Container */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thank you for your message! Our team will contact you within 24 hours.")
                }}
                className="space-y-6"
              >
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3.5 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3.5 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3.5 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                    placeholder="+91 (XXX) XXX-XXXX"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3.5 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your business needs and challenges..."
                  ></textarea>
                </div>

                {/* Privacy Notice */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-emerald-500 bg-gray-900 border-gray-700 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-400">
                    I agree to the privacy policy and consent to being contacted by PrimeConsult regarding my inquiry. *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-10 pt-10 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-3 border border-emerald-500/20">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">hello@primeconsult.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-3 border border-emerald-500/20">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">+91 (123) 456-7890</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-3 border border-emerald-500/20">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section - Updated to dark theme with functional links */}
      <footer className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white py-16 overflow-hidden border-t border-gray-800">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <button
                onClick={handleScrollToTop}
                className="flex items-center space-x-3 mb-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold">PrimeConsult</span>
              </button>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering businesses through strategic consulting and innovative solutions for sustainable growth and
                excellence.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group border border-gray-800"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group border border-gray-800"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group border border-gray-800"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleScrollToSection("home")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("about")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("contact")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Business Strategy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Financial Advisory
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Operations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Digital Transformation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-gray-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Change Management
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    123 Business Street
                    <br />
                    New Delhi, India 110001
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:hello@primeconsult.com"
                    className="text-gray-400 text-sm hover:text-emerald-400 transition-colors"
                  >
                    hello@primeconsult.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+911234567890"
                    className="text-gray-400 text-sm hover:text-emerald-400 transition-colors"
                  >
                    +91 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">&copy; 2025 PrimeConsult. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-500 hover:text-emerald-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-500 hover:text-emerald-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-500 hover:text-emerald-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
