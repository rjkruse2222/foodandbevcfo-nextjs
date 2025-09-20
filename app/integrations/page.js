'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const integrations = [
    // POS Systems
    {
      id: 1,
      name: 'Toast',
      category: 'pos',
      description: 'Complete restaurant management platform with integrated payments',
      features: ['Real-time sales data', 'Inventory tracking', 'Labor management', 'Menu sync'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-bread-slice'
    },
    {
      id: 2,
      name: 'Square',
      category: 'pos',
      description: 'All-in-one POS system with payment processing',
      features: ['Sales reporting', 'Customer management', 'Online ordering', 'Gift cards'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-square'
    },
    {
      id: 3,
      name: 'Clover',
      category: 'pos',
      description: 'Flexible POS system with app marketplace',
      features: ['Customizable interface', 'Inventory management', 'Employee management', 'Reporting'],
      status: 'verified',
      logo: 'fas fa-leaf'
    },
    {
      id: 4,
      name: 'Lightspeed',
      category: 'pos',
      description: 'Cloud-based POS for restaurants and retail',
      features: ['Multi-location support', 'Advanced reporting', 'Inventory control', 'CRM'],
      status: 'verified',
      logo: 'fas fa-bolt'
    },
    {
      id: 5,
      name: 'Aloha (NCR)',
      category: 'pos',
      description: 'Enterprise-grade POS for high-volume restaurants',
      features: ['Kitchen display', 'Table management', 'Loyalty programs', 'Analytics'],
      status: 'verified',
      logo: 'fas fa-palm-tree'
    },
    {
      id: 6,
      name: 'Micros (Oracle)',
      category: 'pos',
      description: 'Enterprise POS solution for large restaurant groups',
      features: ['Multi-property', 'Advanced reporting', 'Labor management', 'Kitchen automation'],
      status: 'verified',
      logo: 'fas fa-database'
    },
    // Inventory Management
    {
      id: 7,
      name: 'MarginEdge',
      category: 'inventory',
      description: 'Restaurant inventory management and invoice processing',
      features: ['Invoice automation', 'Recipe costing', 'Inventory counts', 'Budget tracking'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-chart-line'
    },
    {
      id: 8,
      name: 'Restaurant365',
      category: 'inventory',
      description: 'All-in-one restaurant management platform',
      features: ['Accounting integration', 'Inventory control', 'Scheduling', 'Reporting'],
      status: 'verified',
      logo: 'fas fa-calendar-alt'
    },
    {
      id: 9,
      name: 'Plate IQ',
      category: 'inventory',
      description: 'AP automation and spend management',
      features: ['Invoice processing', 'Cost tracking', 'Vendor management', 'Analytics'],
      status: 'verified',
      logo: 'fas fa-receipt'
    },
    // Scheduling
    {
      id: 10,
      name: '7shifts',
      category: 'scheduling',
      description: 'Employee scheduling and labor management',
      features: ['Schedule optimization', 'Time tracking', 'Team communication', 'Labor compliance'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-clock'
    },
    {
      id: 11,
      name: 'HotSchedules',
      category: 'scheduling',
      description: 'Workforce management for restaurants',
      features: ['Scheduling', 'Labor forecasting', 'Time & attendance', 'Team communication'],
      status: 'verified',
      logo: 'fas fa-fire'
    },
    {
      id: 12,
      name: 'When I Work',
      category: 'scheduling',
      description: 'Simple employee scheduling and time tracking',
      features: ['Shift scheduling', 'Time clock', 'Team messaging', 'Labor costs'],
      status: 'verified',
      logo: 'fas fa-user-clock'
    },
    // Accounting Software
    {
      id: 13,
      name: 'QuickBooks Online',
      category: 'accounting',
      description: 'Cloud-based accounting software',
      features: ['Bookkeeping', 'Invoicing', 'Expense tracking', 'Financial reporting'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-calculator'
    },
    {
      id: 14,
      name: 'NetSuite',
      category: 'accounting',
      description: 'Enterprise resource planning (ERP) system',
      features: ['Multi-entity', 'Advanced reporting', 'Inventory management', 'CRM'],
      status: 'verified',
      logo: 'fas fa-cloud'
    },
    {
      id: 15,
      name: 'Xero',
      category: 'accounting',
      description: 'Cloud accounting for small businesses',
      features: ['Bank reconciliation', 'Invoicing', 'Expense claims', 'Reporting'],
      status: 'verified',
      logo: 'fas fa-file-invoice'
    },
    {
      id: 16,
      name: 'Sage Intacct',
      category: 'accounting',
      description: 'Cloud financial management',
      features: ['Multi-entity', 'Dimensional reporting', 'Revenue recognition', 'Budgeting'],
      status: 'verified',
      logo: 'fas fa-leaf'
    },
    // Payroll
    {
      id: 17,
      name: 'ADP',
      category: 'payroll',
      description: 'Comprehensive payroll and HR solutions',
      features: ['Payroll processing', 'Tax filing', 'Benefits admin', 'HR tools'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-users'
    },
    {
      id: 18,
      name: 'Paychex',
      category: 'payroll',
      description: 'Payroll and HR services',
      features: ['Payroll', 'Tax services', 'Time tracking', 'Benefits'],
      status: 'verified',
      logo: 'fas fa-money-check'
    },
    {
      id: 19,
      name: 'Gusto',
      category: 'payroll',
      description: 'Modern payroll and benefits platform',
      features: ['Automated payroll', 'Benefits', 'HR tools', 'Time tracking'],
      status: 'verified',
      logo: 'fas fa-smile'
    },
    // Delivery Platforms
    {
      id: 20,
      name: 'DoorDash',
      category: 'delivery',
      description: 'Food delivery and pickup platform',
      features: ['Order management', 'Delivery tracking', 'Customer data', 'Marketing tools'],
      status: 'verified',
      popular: true,
      logo: 'fas fa-car'
    },
    {
      id: 21,
      name: 'Uber Eats',
      category: 'delivery',
      description: 'Global food delivery platform',
      features: ['Order management', 'Delivery network', 'Promotions', 'Analytics'],
      status: 'verified',
      logo: 'fas fa-utensils'
    },
    {
      id: 22,
      name: 'Grubhub',
      category: 'delivery',
      description: 'Online food ordering and delivery',
      features: ['Order management', 'Marketing tools', 'Customer insights', 'Loyalty programs'],
      status: 'verified',
      logo: 'fas fa-hamburger'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Integrations', icon: 'fas fa-th', count: integrations.length },
    { id: 'pos', name: 'POS Systems', icon: 'fas fa-cash-register', count: integrations.filter(i => i.category === 'pos').length },
    { id: 'inventory', name: 'Inventory', icon: 'fas fa-boxes', count: integrations.filter(i => i.category === 'inventory').length },
    { id: 'scheduling', name: 'Scheduling', icon: 'fas fa-calendar-alt', count: integrations.filter(i => i.category === 'scheduling').length },
    { id: 'accounting', name: 'Accounting', icon: 'fas fa-calculator', count: integrations.filter(i => i.category === 'accounting').length },
    { id: 'payroll', name: 'Payroll', icon: 'fas fa-money-check-alt', count: integrations.filter(i => i.category === 'payroll').length },
    { id: 'delivery', name: 'Delivery', icon: 'fas fa-truck', count: integrations.filter(i => i.category === 'delivery').length }
  ]

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularIntegrations = integrations.filter(i => i.popular)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Seamless Restaurant Tech Integrations</h1>
            <p className="text-xl text-gray-600 mb-8">Connect your entire tech stack for unified financial management. We integrate with 50+ restaurant platforms.</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pr-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <i className="fas fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Most Popular Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularIntegrations.map(integration => (
                <div key={integration.id} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 transition duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className={`${integration.logo} text-orange-600 text-xl`}></i>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{integration.name}</p>
                  <span className="text-xs text-orange-600">
                    <i className="fas fa-check-circle mr-1"></i>Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
                <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory === 'all' ? 'All Integrations' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">{filteredIntegrations.length} integrations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map(integration => (
                <div key={integration.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <i className={`${integration.logo} text-orange-600 text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{integration.name}</h3>
                          {integration.status === 'verified' && (
                            <span className="text-xs text-green-600">
                              <i className="fas fa-check-circle mr-1"></i>Verified Integration
                            </span>
                          )}
                        </div>
                      </div>
                      {integration.popular && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">Popular</span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{integration.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">KEY FEATURES</p>
                      <div className="flex flex-wrap gap-2">
                        {integration.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {integration.features.length > 3 && (
                          <span className="text-gray-500 text-xs py-1">+{integration.features.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <button className="text-orange-600 font-semibold text-sm hover:text-orange-700">
                      Learn More <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How Our Integrations Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Connect</h3>
                <p className="text-sm text-gray-600">Securely link your existing restaurant systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sync</h3>
                <p className="text-sm text-gray-600">Automatic data synchronization in real-time</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Analyze</h3>
                <p className="text-sm text-gray-600">Unified reporting across all platforms</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Make data-driven decisions to boost profits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 md:p-12 text-center">
            <i className="fas fa-plug text-4xl text-orange-600 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Don't See Your Platform?</h2>
            <p className="text-lg text-gray-600 mb-6">We're constantly adding new integrations. Let us know what you need and we'll make it happen.</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Request Integration
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Connect Your Restaurant Tech?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Get all your systems talking to each other and gain complete financial visibility.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Start Integration
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}