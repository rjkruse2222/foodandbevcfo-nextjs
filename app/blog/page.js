'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const blogPosts = [
    {
      id: 1,
      title: '5 Strategies to Reduce Food Waste and Boost Profits',
      excerpt: 'Discover how implementing simple inventory management techniques can significantly impact your bottom line.',
      category: 'cost-control',
      author: 'Michael Chen',
      date: 'June 15, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Restaurant Tax Deductions You Might Be Missing',
      excerpt: 'A comprehensive guide to tax deductions specific to the food service industry that could save you thousands.',
      category: 'tax',
      author: 'Sarah Martinez',
      date: 'May 28, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'How POS Integration Can Transform Your Accounting',
      excerpt: 'Learn how integrating your point-of-sale system with accounting software can save hours of manual work.',
      category: 'technology',
      author: 'James Wilson',
      date: 'April 10, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Understanding Prime Costs: The Key to Restaurant Profitability',
      excerpt: 'Master the most important metric in restaurant management and learn how to optimize your prime costs.',
      category: 'finance',
      author: 'Michael Chen',
      date: 'March 22, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Menu Engineering: Price for Profit, Not Just Cost',
      excerpt: 'Strategic pricing techniques that go beyond simple cost-plus models to maximize your menu profitability.',
      category: 'operations',
      author: 'Sarah Martinez',
      date: 'March 5, 2023',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Labor Cost Optimization Without Sacrificing Service',
      excerpt: 'Balance staffing efficiency with customer satisfaction using data-driven scheduling strategies.',
      category: 'operations',
      author: 'James Wilson',
      date: 'February 18, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Cash Flow Management for Seasonal Restaurants',
      excerpt: 'Navigate the feast and famine cycles of seasonal business with smart financial planning.',
      category: 'finance',
      author: 'Michael Chen',
      date: 'February 1, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'The Complete Guide to Restaurant Tip Reporting',
      excerpt: 'Stay compliant with IRS regulations while maximizing FICA tip credits for your business.',
      category: 'tax',
      author: 'Sarah Martinez',
      date: 'January 15, 2023',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'fas fa-th' },
    { id: 'finance', name: 'Finance', icon: 'fas fa-chart-line' },
    { id: 'tax', name: 'Tax Tips', icon: 'fas fa-file-invoice-dollar' },
    { id: 'operations', name: 'Operations', icon: 'fas fa-cogs' },
    { id: 'technology', name: 'Technology', icon: 'fas fa-laptop' },
    { id: 'cost-control', name: 'Cost Control', icon: 'fas fa-calculator' }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Restaurant Finance Insights</h1>
            <p className="text-xl text-gray-600">Expert advice, industry trends, and practical tips to help your restaurant thrive financially.</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-cover bg-center" style={{backgroundImage: `url('${featuredPost.image}')`}}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {categories.find(cat => cat.id === featuredPost.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm ml-4">{featuredPost.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <p className="font-semibold text-gray-800">{featuredPost.author}</p>
                          <p className="text-sm text-gray-500">{featuredPost.readTime}</p>
                        </div>
                      </div>
                      <Link href="#" className="text-orange-600 font-semibold hover:text-orange-700">
                        Read Article <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('${post.image}')`}}></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-orange-600 font-semibold">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-orange-600 transition">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href="#" className="text-orange-600 font-medium hover:text-orange-700">
                      Read <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="px-4 py-2 rounded-lg bg-orange-600 text-white">1</button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition">2</button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition">3</button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition">
                <i className="fas fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-orange-600 text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Weekly Restaurant Finance Tips</h2>
              <p className="text-lg text-gray-600 mb-8">Join 5,000+ restaurant owners and managers who receive our free weekly newsletter.</p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button type="submit" className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition duration-300">
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Restaurant's Finances?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Get personalized financial guidance from restaurant accounting experts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Start Free Consultation
            </Link>
            <Link href="/resources" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              Download Free Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}