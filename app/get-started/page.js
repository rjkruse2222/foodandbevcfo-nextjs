'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function GetStarted() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    restaurantName: '',
    restaurantType: '',
    locations: '1',
    revenue: '',
    employees: '',
    pos: '',
    accounting: '',
    systems: [],
    terms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Welcome to Food & Bev CFO! Check your email for next steps.')
  }

  const handleSystemChange = (value) => {
    setFormData(prev => ({
      ...prev,
      systems: prev.systems.includes(value) 
        ? prev.systems.filter(s => s !== value)
        : [...prev.systems, value]
    }))
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="ml-2 text-sm font-semibold text-gray-800">Account Info</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span className="ml-2 text-sm text-gray-600">Business Details</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span className="ml-2 text-sm text-gray-600">Choose Plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Start Your Free 30-Day Trial</h1>
                  <p className="text-gray-600">No credit card required. Get full access to all features.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Your Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          required 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          required 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Create Password *</label>
                      <input 
                        type="password" 
                        id="password" 
                        required 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Minimum 8 characters with at least one number</p>
                    </div>
                  </div>

                  {/* Restaurant Information */}
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Restaurant Information</h2>
                    
                    <div>
                      <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name *</label>
                      <input 
                        type="text" 
                        id="restaurantName" 
                        required 
                        value={formData.restaurantName}
                        onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="restaurantType" className="block text-sm font-medium text-gray-700 mb-2">Restaurant Type *</label>
                        <select 
                          id="restaurantType" 
                          required 
                          value={formData.restaurantType}
                          onChange={(e) => setFormData({...formData, restaurantType: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select Type</option>
                          <option value="fine-dining">Fine Dining</option>
                          <option value="fast-casual">Fast Casual</option>
                          <option value="qsr">Quick Service (QSR)</option>
                          <option value="bar">Bar/Pub</option>
                          <option value="cafe">Café/Coffee Shop</option>
                          <option value="food-truck">Food Truck</option>
                          <option value="ghost-kitchen">Ghost Kitchen</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mb-2">Number of Locations *</label>
                        <select 
                          id="locations" 
                          required 
                          value={formData.locations}
                          onChange={(e) => setFormData({...formData, locations: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="1">1 Location</option>
                          <option value="2-5">2-5 Locations</option>
                          <option value="6-10">6-10 Locations</option>
                          <option value="11-25">11-25 Locations</option>
                          <option value="26+">26+ Locations</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue *</label>
                        <select 
                          id="revenue" 
                          required 
                          value={formData.revenue}
                          onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select Range</option>
                          <option value="Under $1M">Under $1M</option>
                          <option value="$1M-$2M">$1M - $2M</option>
                          <option value="$2M-$5M">$2M - $5M</option>
                          <option value="$5M-$10M">$5M - $10M</option>
                          <option value="$10M-$25M">$10M - $25M</option>
                          <option value="$25M+">$25M+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">Number of Employees *</label>
                        <select 
                          id="employees" 
                          required 
                          value={formData.employees}
                          onChange={(e) => setFormData({...formData, employees: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select Range</option>
                          <option value="1-10">1-10</option>
                          <option value="11-25">11-25</option>
                          <option value="26-50">26-50</option>
                          <option value="51-100">51-100</option>
                          <option value="100+">100+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Current Systems */}
                  <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Current Systems</h2>
                    <p className="text-gray-600 mb-4">Tell us what you're currently using so we can prepare your integrations</p>
                    
                    <div>
                      <label htmlFor="pos" className="block text-sm font-medium text-gray-700 mb-2">POS System</label>
                      <select 
                        id="pos" 
                        value={formData.pos}
                        onChange={(e) => setFormData({...formData, pos: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select Your POS</option>
                        <option value="toast">Toast</option>
                        <option value="square">Square</option>
                        <option value="clover">Clover</option>
                        <option value="lightspeed">Lightspeed</option>
                        <option value="aloha">Aloha/NCR</option>
                        <option value="micros">Micros</option>
                        <option value="other">Other</option>
                        <option value="none">No POS System</option>
                      </select>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Other Systems (Check all that apply)</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            value="marginedge"
                            checked={formData.systems.includes('marginedge')}
                            onChange={() => handleSystemChange('marginedge')}
                            className="mr-2 text-orange-600 focus:ring-orange-500"
                          />
                          <span>MarginEdge or similar inventory system</span>
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            value="7shifts"
                            checked={formData.systems.includes('7shifts')}
                            onChange={() => handleSystemChange('7shifts')}
                            className="mr-2 text-orange-600 focus:ring-orange-500"
                          />
                          <span>7shifts or similar scheduling system</span>
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            value="payroll"
                            checked={formData.systems.includes('payroll')}
                            onChange={() => handleSystemChange('payroll')}
                            className="mr-2 text-orange-600 focus:ring-orange-500"
                          />
                          <span>Payroll system (ADP, Paychex, etc.)</span>
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            value="delivery"
                            checked={formData.systems.includes('delivery')}
                            onChange={() => handleSystemChange('delivery')}
                            className="mr-2 text-orange-600 focus:ring-orange-500"
                          />
                          <span>Delivery platforms (DoorDash, Uber Eats, etc.)</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <label className="flex items-start">
                      <input 
                        type="checkbox" 
                        required 
                        checked={formData.terms}
                        onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                        className="mt-1 mr-3 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the <Link href="#" className="text-orange-600 hover:underline">Terms of Service</Link> and{' '}
                        <Link href="#" className="text-orange-600 hover:underline">Privacy Policy</Link>. 
                        I understand that I'm starting a 30-day free trial with full access to all features, 
                        and no credit card is required.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
                    Start My Free Trial
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Trust Badges */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-24">
                  <h3 className="font-bold text-gray-800 mb-4">Why 200+ Restaurants Trust Us</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <div>
                        <p className="font-semibold text-gray-800">30-Day Free Trial</p>
                        <p className="text-sm text-gray-600">Full access, no credit card required</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <div>
                        <p className="font-semibold text-gray-800">Quick Setup</p>
                        <p className="text-sm text-gray-600">Onboarded in 5-7 business days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <div>
                        <p className="font-semibold text-gray-800">Cancel Anytime</p>
                        <p className="text-sm text-gray-600">No contracts or hidden fees</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <div>
                        <p className="font-semibold text-gray-800">Expert Support</p>
                        <p className="text-sm text-gray-600">Restaurant accounting specialists</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-500">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
                    </div>
                    
                    <blockquote className="text-gray-600 italic">
                      "Food & Bev CFO transformed our finances. We went from chaos to clarity in just weeks."
                    </blockquote>
                    <cite className="text-sm text-gray-500 mt-2 block">- Sarah M., Restaurant Owner</cite>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-2">Need help?</p>
                    <p className="font-semibold text-gray-800">
                      <i className="fas fa-phone mr-2"></i>(312) 555-7890
                    </p>
                    <p className="text-sm text-gray-600">Mon-Fri 9am-6pm CST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}