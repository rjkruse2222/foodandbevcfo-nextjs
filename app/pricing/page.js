'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 mb-8">Choose the plan that fits your restaurant's needs. No hidden fees, no surprises.</p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full shadow-md p-1">
              <button 
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition ${billingPeriod === 'monthly' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-full font-medium transition ${billingPeriod === 'annual' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
              >
                Annual (Save 15%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Essential Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-orange-300 transition duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Essential</h3>
                <p className="text-gray-600 mb-6">Perfect for single-location restaurants</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-800">
                    ${billingPeriod === 'monthly' ? '499' : '424'}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Up to $2M annual revenue</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Daily bookkeeping & reconciliation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Monthly P&L and cash flow statements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Payroll processing (up to 20 employees)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Sales tax filing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Annual tax preparation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>QuickBooks setup & maintenance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Email support (24hr response)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-gray-300 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-gray-400">Inventory management</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-gray-300 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-gray-400">Menu profitability analysis</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-gray-300 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-gray-400">CFO advisory services</span>
                </li>
              </ul>
              
              <Link href="/get-started" className="block w-full text-center bg-gray-200 hover:bg-orange-600 hover:text-white text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                Get Started
              </Link>
            </div>
            
            {/* Premium Plan (Most Popular) */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-orange-500 transform scale-105 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">MOST POPULAR</span>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">For growing multi-unit operations</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-800">
                    ${billingPeriod === 'monthly' ? '999' : '849'}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Up to $10M annual revenue</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span><strong>Everything in Essential, plus:</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Weekly flash reports & KPI dashboard</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Inventory management & COGS tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Menu profitability analysis</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Labor cost optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Multi-location reporting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>POS & tech stack integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Quarterly business reviews</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Phone & email support (4hr response)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times text-gray-300 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-gray-400">Dedicated CFO advisor</span>
                </li>
              </ul>
              
              <Link href="/get-started" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Get Started
              </Link>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 hover:border-orange-300 transition duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For established restaurant groups</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-800">Custom</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">$10M+ annual revenue</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span><strong>Everything in Premium, plus:</strong></span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Dedicated fractional CFO</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Daily cash position reporting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>13-week cash flow forecasts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Investor reporting & board decks</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>M&A financial due diligence</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Custom financial modeling</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Unlimited locations</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Quarterly on-site visits</span>
                </li>
              </ul>
              
              <Link href="/contact" className="block w-full text-center bg-gray-200 hover:bg-orange-600 hover:text-white text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Can I switch plans anytime?</h3>
                <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">No setup fees for any plan. We believe in transparent, straightforward pricing.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">What if I need to cancel?</h3>
                <p className="text-gray-600">We offer month-to-month contracts with no long-term commitments. Cancel anytime with 30 days notice.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Do you offer discounts for multiple locations?</h3>
                <p className="text-gray-600">Yes! Multi-location discounts are available. Contact our sales team for custom pricing.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">How quickly can you get us started?</h3>
                <p className="text-gray-600">Most clients are fully onboarded within 5-7 business days. We'll have your books current within 2 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your 30-Day Free Trial</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">No credit card required. See the difference professional restaurant accounting makes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Start Free Trial
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              Schedule a Demo
            </Link>
          </div>
          <p className="text-sm text-white mt-6">✓ No setup fees ✓ Cancel anytime ✓ 100% satisfaction guarantee</p>
        </div>
      </section>
    </>
  )
}