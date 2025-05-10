import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Full Width Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            BulkMailer
          </h1>
          <div className="flex gap-6">
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
              Login
            </Link>
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Full Width Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Send Emails to Multiple People
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            The easiest way to send personalized emails to your contacts. Simple, fast, and reliable.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-indigo-600 text-white px-8 py-3.5 rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Features Section - Centered Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">Bulk Send</h3>
            <p className="text-gray-600">Send to multiple recipients at once</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Results</h3>
            <p className="text-gray-600">Monitor your email performance</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable sending</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">TRUSTED BY THOUSANDS OF USERS</p>
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <span className="text-sm">✓ 99.9% Uptime</span>
            <span className="text-sm">✓ Secure & Reliable</span>
            <span className="text-sm">✓ 24/7 Support</span>
          </div>
        </div>
      </main>

      {/* Full Width Footer */}
      <footer className="border-t border-gray-100 mt-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 BulkMailer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
