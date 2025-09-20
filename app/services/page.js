import Link from 'next/link'

export const metadata = {
  title: 'Restaurant Accounting Services | Food & Bev CFO',
  description: 'Comprehensive accounting and CFO services for restaurants, bars, and food service businesses. From bookkeeping to strategic financial planning.',
  keywords: 'restaurant accounting, restaurant bookkeeping, restaurant CFO, bar accounting, food service financial management',
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Restaurant Accounting Services That Drive Growth</h1>
            <p className="text-xl text-gray-600 mb-8">From daily bookkeeping to strategic CFO guidance, we provide the financial expertise your food & beverage business needs to thrive.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Start Free Consultation
              </Link>
              <Link href="/pricing" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full border-2 border-orange-600 transition duration-300">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Core Accounting Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Essential financial services designed specifically for restaurants, bars, and food service operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bookkeeping */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-book text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Daily Bookkeeping</h3>
              <p className="text-gray-600 mb-6">Accurate, real-time financial records integrated with your POS system. We handle categorization, reconciliation, and ensure your books are always audit-ready.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Daily transaction categorization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Bank & credit card reconciliation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Vendor & supplier management</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>POS integration & sync</span>
                </li>
              </ul>
            </div>

            {/* Financial Reporting */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Financial Reporting</h3>
              <p className="text-gray-600 mb-6">Comprehensive monthly reports with restaurant-specific KPIs. Track prime costs, labor efficiency, and profitability by menu item or location.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>P&L statements with variance analysis</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Cash flow statements & forecasts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Prime cost & COGS tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Weekly flash reports</span>
                </li>
              </ul>
            </div>

            {/* Tax Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-file-invoice-dollar text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tax Planning & Prep</h3>
              <p className="text-gray-600 mb-6">Maximize deductions and stay compliant with complex restaurant tax regulations. We handle sales tax, tip reporting, and year-round tax planning.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Federal & state tax preparation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Sales & use tax compliance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Tip reporting & FICA credits</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Quarterly estimated payments</span>
                </li>
              </ul>
            </div>

            {/* Payroll */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Payroll Processing</h3>
              <p className="text-gray-600 mb-6">Seamless payroll integrated with your scheduling system. Handle tips, overtime, and multi-state compliance with ease.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Bi-weekly/weekly processing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Tip allocation & reporting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Labor law compliance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>7shifts/scheduling integration</span>
                </li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-boxes text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Inventory Management</h3>
              <p className="text-gray-600 mb-6">Control food costs with precise inventory tracking. We implement systems to monitor waste, optimize ordering, and improve margins.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>MarginEdge integration setup</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Recipe costing & menu analysis</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Waste tracking & reduction</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Vendor price monitoring</span>
                </li>
              </ul>
            </div>

            {/* CFO Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chess-king text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fractional CFO Services</h3>
              <p className="text-gray-600 mb-6">Strategic financial leadership without the full-time cost. Get expert guidance on expansion, financing, and profitability optimization.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Strategic planning & budgeting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Expansion & franchise modeling</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Investor reporting & fundraising</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Profitability optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Specialized Restaurant Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Advanced services tailored to the unique challenges of food & beverage businesses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Menu Engineering */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-utensils text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Menu Engineering & Profitability</h3>
                  <p className="text-gray-600">Optimize your menu for maximum profit using data-driven insights. We analyze item performance, food costs, and customer preferences to help you craft a menu that drives revenue.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-orange-600">23%</p>
                  <p className="text-sm text-gray-600">Average margin improvement</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-orange-600">15%</p>
                  <p className="text-sm text-gray-600">Revenue increase</p>
                </div>
              </div>
            </div>

            {/* Labor Optimization */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-clock text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Labor Cost Optimization</h3>
                  <p className="text-gray-600">Balance service quality with labor efficiency. We help you optimize scheduling, reduce overtime, and improve productivity while maintaining excellent customer service.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-orange-600">22%</p>
                  <p className="text-sm text-gray-600">Labor cost reduction</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-orange-600">4.8★</p>
                  <p className="text-sm text-gray-600">Service rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Integrated Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We seamlessly integrate with your existing restaurant technology to provide a unified financial view</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition duration-300">
              <i className="fas fa-cash-register text-3xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-gray-800">Toast POS</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition duration-300">
              <i className="fas fa-square text-3xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-gray-800">Square</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition duration-300">
              <i className="fas fa-chart-bar text-3xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-gray-800">MarginEdge</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition duration-300">
              <i className="fas fa-calendar-alt text-3xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-gray-800">7shifts</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition duration-300">
              <i className="fas fa-calculator text-3xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-gray-800">QuickBooks</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition duration-300">
              <i className="fas fa-cloud text-3xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-gray-800">NetSuite</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/integrations" className="text-orange-600 font-semibold hover:text-orange-700">
              View All Integrations <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Restaurant's Finances?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Join 200+ restaurants that trust Food & Bev CFO with their accounting. Get your free consultation today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started Now
            </Link>
            <Link href="/case-studies" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}