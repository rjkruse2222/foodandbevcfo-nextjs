'use client'

import { useState, useEffect } from 'react'

export default function ContactForm() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    locations: '1',
    revenue: '',
    services: [],
    message: '',
    referral: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your interest! We\'ll contact you within 24 hours to schedule your consultation.')
  }

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(value) 
        ? prev.services.filter(s => s !== value)
        : [...prev.services, value]
    }))
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Let's Transform Your Restaurant's Finances</h1>
            <p className="text-xl text-gray-600">Schedule your free consultation and discover how we can help you increase profits and reduce financial stress.</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">Restaurant/Business Name *</label>
                  <input 
                    type="text" 
                    id="businessName" 
                    required 
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mb-2">Number of Locations</label>
                  <select 
                    id="locations" 
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
                
                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                  <select 
                    id="revenue" 
                    value={formData.revenue}
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Please Select</option>
                    <option value="Under $1M">Under $1M</option>
                    <option value="$1M-$5M">$1M - $5M</option>
                    <option value="$5M-$10M">$5M - $10M</option>
                    <option value="$10M-$25M">$10M - $25M</option>
                    <option value="$25M+">$25M+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services Interested In (Select All That Apply)</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        value="bookkeeping"
                        checked={formData.services.includes('bookkeeping')}
                        onChange={() => handleCheckboxChange('bookkeeping')}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span>Bookkeeping & Financial Reporting</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        value="tax"
                        checked={formData.services.includes('tax')}
                        onChange={() => handleCheckboxChange('tax')}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span>Tax Planning & Preparation</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        value="payroll"
                        checked={formData.services.includes('payroll')}
                        onChange={() => handleCheckboxChange('payroll')}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span>Payroll Processing</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        value="cfo"
                        checked={formData.services.includes('cfo')}
                        onChange={() => handleCheckboxChange('cfo')}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span>Fractional CFO Services</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        value="inventory"
                        checked={formData.services.includes('inventory')}
                        onChange={() => handleCheckboxChange('inventory')}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span>Inventory Management</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Challenges</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Schedule Free Consultation
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-orange-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">(312) 555-7890</p>
                      <p className="text-sm text-gray-500">Monday-Friday 9am-6pm CST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-orange-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">hello@foodandbevcfo.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-orange-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Headquarters</h4>
                      <p className="text-gray-600">123 Restaurant Row, Suite 456<br />Chicago, IL 60601</p>
                      <p className="text-sm text-gray-500">Serving clients nationwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-headset text-orange-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Emergency Support</h4>
                      <p className="text-gray-600">24/7 for Premium & Enterprise clients</p>
                      <p className="text-sm text-gray-500">Critical issues only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Preview */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How quickly can you get us up and running?</h4>
                    <p className="text-gray-600">Most clients are fully onboarded within 5-7 business days. We prioritize getting your books current and systems integrated quickly.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Do you work with our existing POS system?</h4>
                    <p className="text-gray-600">Yes! We integrate with all major restaurant POS systems including Toast, Square, Clover, and more. See our full integration list.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Can you help if our books are a mess?</h4>
                    <p className="text-gray-600">Absolutely. We specialize in cleanup projects and can get your historical financials organized while maintaining your day-to-day operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">While we serve clients nationwide remotely, you're welcome to visit our offices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Chicago Office */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Chicago (Headquarters)</h3>
              <p className="text-gray-600 mb-4">
                123 Restaurant Row, Suite 456<br />
                Chicago, IL 60601
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><i className="fas fa-phone mr-2"></i>(312) 555-7890</p>
                <p><i className="fas fa-clock mr-2"></i>Mon-Fri 9am-6pm CST</p>
              </div>
            </div>
            
            {/* New York Office */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">New York</h3>
              <p className="text-gray-600 mb-4">
                456 Culinary Ave, Floor 12<br />
                New York, NY 10013
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><i className="fas fa-phone mr-2"></i>(212) 555-7890</p>
                <p><i className="fas fa-clock mr-2"></i>Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
            
            {/* Los Angeles Office */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Los Angeles</h3>
              <p className="text-gray-600 mb-4">
                789 Bistro Blvd, Suite 200<br />
                Los Angeles, CA 90028
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><i className="fas fa-phone mr-2"></i>(323) 555-7890</p>
                <p><i className="fas fa-clock mr-2"></i>Mon-Fri 9am-6pm PST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.122887342493!2d-87.6292762!3d41.8837109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8e34e7e0f%3A0x4a375b5a86322398!2s123%20Restaurant%20Row%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  )
}