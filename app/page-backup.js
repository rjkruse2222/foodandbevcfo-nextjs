import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section with Rotating Banner */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="hero-slide slide-1"></div>
        <div className="hero-slide slide-2"></div>
        <div className="hero-slide slide-3"></div>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Expert Accounting for Food & Beverage Businesses</h1>
            <p className="text-xl md:text-2xl text-white mb-8">We help restaurants, bars, and food service companies streamline their finances and maximize profits.</p>
            <Link href="/get-started" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Accounting Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tailored solutions for every stage of your food & beverage business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Service */}
            <div className="service-card bg-white rounded-lg shadow-md p-8 transition duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-coffee text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Essential</h3>
                <p className="text-orange-600 font-semibold">Perfect for startups</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Bookkeeping & financial statements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Monthly financial reports</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Basic tax preparation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>QuickBooks setup & training</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">$499<span className="text-base font-normal text-gray-500">/month</span></div>
                <Link href="/get-started" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}