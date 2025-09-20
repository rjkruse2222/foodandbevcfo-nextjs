'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const resources = [
    {
      id: 1,
      title: 'Restaurant P&L Template',
      description: 'Professional profit & loss statement template designed specifically for restaurants with automated calculations.',
      category: 'templates',
      type: 'Excel',
      icon: 'fas fa-file-excel',
      featured: true
    },
    {
      id: 2,
      title: 'Food Cost Calculator',
      description: 'Calculate recipe costs, portion sizes, and menu pricing with our comprehensive spreadsheet tool.',
      category: 'calculators',
      type: 'Excel',
      icon: 'fas fa-calculator'
    },
    {
      id: 3,
      title: 'Cash Flow Forecast Model',
      description: '13-week cash flow forecasting template to help you manage seasonality and growth.',
      category: 'templates',
      type: 'Excel',
      icon: 'fas fa-chart-line'
    },
    {
      id: 4,
      title: 'Restaurant KPI Dashboard',
      description: 'Track your most important metrics with this customizable dashboard template.',
      category: 'templates',
      type: 'Google Sheets',
      icon: 'fas fa-tachometer-alt',
      featured: true
    },
    {
      id: 5,
      title: 'Tax Deduction Checklist',
      description: 'Comprehensive checklist of restaurant-specific tax deductions to maximize your savings.',
      category: 'checklists',
      type: 'PDF',
      icon: 'fas fa-file-pdf'
    },
    {
      id: 6,
      title: 'Menu Engineering Guide',
      description: 'Step-by-step guide to analyzing and optimizing your menu for maximum profitability.',
      category: 'guides',
      type: 'PDF',
      icon: 'fas fa-book'
    },
    {
      id: 7,
      title: 'Labor Cost Optimizer',
      description: 'Calculate optimal staffing levels based on projected sales and service standards.',
      category: 'calculators',
      type: 'Excel',
      icon: 'fas fa-users'
    },
    {
      id: 8,
      title: 'Inventory Management Toolkit',
      description: 'Complete system for tracking inventory, calculating par levels, and reducing waste.',
      category: 'templates',
      type: 'Excel',
      icon: 'fas fa-boxes'
    },
    {
      id: 9,
      title: 'Restaurant Startup Checklist',
      description: 'Complete checklist covering financial, legal, and operational requirements for new restaurants.',
      category: 'checklists',
      type: 'PDF',
      icon: 'fas fa-clipboard-check'
    },
    {
      id: 10,
      title: 'Break-Even Analysis Tool',
      description: 'Calculate your break-even point and understand your path to profitability.',
      category: 'calculators',
      type: 'Excel',
      icon: 'fas fa-balance-scale'
    },
    {
      id: 11,
      title: 'POS Integration Guide',
      description: 'How to integrate your POS system with accounting software for automated bookkeeping.',
      category: 'guides',
      type: 'PDF',
      icon: 'fas fa-plug'
    },
    {
      id: 12,
      title: 'Franchise Financial Model',
      description: 'Financial model template for evaluating franchise opportunities and expansion.',
      category: 'templates',
      type: 'Excel',
      icon: 'fas fa-store'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Resources', icon: 'fas fa-th', count: resources.length },
    { id: 'templates', name: 'Templates', icon: 'fas fa-file-alt', count: resources.filter(r => r.category === 'templates').length },
    { id: 'calculators', name: 'Calculators', icon: 'fas fa-calculator', count: resources.filter(r => r.category === 'calculators').length },
    { id: 'guides', name: 'Guides', icon: 'fas fa-book', count: resources.filter(r => r.category === 'guides').length },
    { id: 'checklists', name: 'Checklists', icon: 'fas fa-clipboard-check', count: resources.filter(r => r.category === 'checklists').length }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory)

  const featuredResources = resources.filter(resource => resource.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Free Restaurant Financial Resources</h1>
            <p className="text-xl text-gray-600 mb-8">Download templates, calculators, and guides to streamline your restaurant's finances.</p>
            <div className="bg-white rounded-lg shadow-md p-6 inline-block">
              <p className="text-2xl font-bold text-orange-600 mb-2">12+ Free Tools</p>
              <p className="text-gray-600">Used by 5,000+ restaurant owners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Most Popular Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredResources.map(resource => (
                <div key={resource.id} className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border-2 border-orange-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${resource.icon} text-white text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                        <span className="bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded">POPULAR</span>
                      </div>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{resource.type} • Free Download</span>
                        <button className="text-orange-600 font-semibold hover:text-orange-700">
                          Download <i className="fas fa-download ml-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
                <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <i className={`${resource.icon} text-orange-600`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{resource.title}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Download Free <i className="fas fa-download ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-orange-600 text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Can't Find What You Need?</h2>
              <p className="text-lg text-gray-600">Request a custom resource and we'll create it for the community.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="resourceType" className="block text-sm font-medium text-gray-700 mb-2">Type of Resource Needed</label>
                <select 
                  id="resourceType" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option>Template</option>
                  <option>Calculator</option>
                  <option>Guide</option>
                  <option>Checklist</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Describe What You Need</label>
                <textarea 
                  id="description" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tell us about the resource you'd like us to create..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Learn How to Use These Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-video text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">Watch step-by-step guides on using our templates and calculators effectively.</p>
                <Link href="/blog" className="text-orange-600 font-semibold hover:text-orange-700">
                  Watch Videos <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Free Webinars</h3>
                <p className="text-gray-600 mb-4">Join monthly webinars on restaurant financial management best practices.</p>
                <Link href="/contact" className="text-orange-600 font-semibold hover:text-orange-700">
                  Register Now <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Support</h3>
                <p className="text-gray-600 mb-4">Get help from our team of restaurant accounting experts when you need it.</p>
                <Link href="/contact" className="text-orange-600 font-semibold hover:text-orange-700">
                  Get Help <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need More Than Templates?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Get professional accounting services designed specifically for restaurants and bars.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Start Free Trial
            </Link>
            <Link href="/services" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}