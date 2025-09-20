import metroDataJson from '../../../metro-data.json';

const portlandData = metroDataJson.find(metro => metro.cityName === "Portland");

export async function generateMetadata() {
  return {
    title: `Restaurant Accounting Services in ${portlandData.cityName} | Food & Bev CFO`,
    description: `Expert accounting services for ${portlandData.cityName} restaurants, bars, and food service businesses. Local knowledge of ${portlandData.cityName} restaurant industry with specialized CFO services.`,
    keywords: `${portlandData.cityName} restaurant accounting, ${portlandData.cityName} restaurant CPA, restaurant CFO services ${portlandData.cityName}, food service accounting ${portlandData.cityName}, bar accounting ${portlandData.cityName}`,
    openGraph: {
      title: `Restaurant Accounting Services in ${portlandData.cityName} | Food & Bev CFO`,
      description: `Expert accounting services for ${portlandData.cityName} restaurants, bars, and food service businesses.`,
      url: `https://foodandbevcfo.com/local/${portlandData.cityName.toLowerCase().replace(/s+/g, '-')}`,
      siteName: 'Food & Bev CFO',
      type: 'website',
    },
    other: {
      'geo.region': `US-${portlandData.state}`,
      'geo.placename': portlandData.cityName,
      'ICBM': `${portlandData.coordinates.lat},${portlandData.coordinates.lng}`,
    },
  }
}

export default function PortlandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Food & Bev CFO - ${portlandData.cityName} Restaurant Accounting`,
    "description": `Specialized accounting and CFO services for ${portlandData.cityName} restaurants, bars, and food service businesses`,
    "url": `https://foodandbevcfo.com/local/${portlandData.cityName.toLowerCase().replace(/s+/g, '-')}`,
    "telephone": "(312) 555-7890",
    "email": "hello@foodandbevcfo.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": portlandData.cityName,
      "addressRegion": portlandData.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": portlandData.coordinates.lat,
      "longitude": portlandData.coordinates.lng
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": portlandData.coordinates.lat,
        "longitude": portlandData.coordinates.lng
      },
      "geoRadius": "50000"
    },
    "serviceType": "Restaurant Accounting Services",
    "priceRange": "$499-$999+",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')`
        }}>
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Restaurant Accounting Services in {portlandData.cityName}
            </h1>
            <p className="text-xl text-white mb-6">
              Specialized CFO and accounting services for {portlandData.cityName} restaurants, bars, and food service businesses
            </p>
            <a href="/get-started" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Get Your Free {portlandData.cityName} Consultation
            </a>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Local {portlandData.cityName} Restaurant Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges of running a restaurant business in {portlandData.cityName}. Our team provides specialized accounting services tailored to {portlandData.cityName}'s dynamic food service industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{portlandData.state} Regulations</h3>
                <p className="text-gray-600">Expert knowledge of {portlandData.state} and {portlandData.cityName} licensing, health codes, and tax requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Prime Cost Management</h3>
                <p className="text-gray-600">Optimize your food and labor costs in {portlandData.cityName}'s market</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Local Network</h3>
                <p className="text-gray-600">Connected with {portlandData.cityName} restaurant suppliers, contractors, and service providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-dollar-sign text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cash Flow Optimization</h3>
                <p className="text-gray-600">Strategic financial planning for {portlandData.cityName}'s diverse neighborhoods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Landmarks & Scene */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Serving {portlandData.cityName}'s Thriving Food Scene
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We serve restaurants across {portlandData.cityName}'s diverse culinary landscape near landmarks like {portlandData.landmarks.join(', ')}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Downtown & Business District</h3>
                <p className="text-gray-600 mb-4">
                  Serving restaurants near iconic landmarks like {portlandData.landmarks[0]} and {portlandData.landmarks[1]}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Upscale business district dining</li>
                  <li>• Entertainment district restaurants</li>
                  <li>• Convention center establishments</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Historic & Cultural Areas</h3>
                <p className="text-gray-600 mb-4">
                  Supporting restaurants near {portlandData.landmarks[2]} and {portlandData.cityName}'s cultural districts
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Local specialty establishments</li>
                  <li>• Historic neighborhood eateries</li>
                  <li>• Cultural district dining</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Metro {portlandData.cityName} Areas</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive accounting for restaurants across {portlandData.cityName}'s expanding metropolitan area
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Suburban family restaurants</li>
                  <li>• Strip mall establishments</li>
                  <li>• Community gathering spots</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {portlandData.cityName} Restaurant Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn from top {portlandData.cityName} restaurants that have maximized their profitability with strategic accounting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Local Favorites</h3>
                <p className="text-gray-600 mb-4">
                  {portlandData.cityName}'s acclaimed restaurants like {portlandData.restaurants[0]} and {portlandData.restaurants[1]} have set culinary standards. Our accounting services help similar establishments:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Track premium ingredient sourcing costs</li>
                  <li>• Manage specialty program profitability</li>
                  <li>• Optimize prime location expenses</li>
                  <li>• Handle special event planning and catering</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{portlandData.cityName} Originals</h3>
                <p className="text-gray-600 mb-4">
                  From {portlandData.restaurants[2]} to {portlandData.restaurants[3]}, {portlandData.cityName}'s diverse dining scene requires specialized knowledge:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Regional cuisine economics</li>
                  <li>• High-volume operations management</li>
                  <li>• Multi-location franchise optimization</li>
                  <li>• Local supplier relationship management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {portlandData.cityName} Restaurant Accounting Packages
              </h2>
              <p className="text-lg text-gray-600">Tailored for {portlandData.cityName}'s unique restaurant market</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Essential Package */}
              <div className="bg-white rounded-lg shadow-md p-8 transition duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-coffee text-orange-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Essential {portlandData.cityName}</h3>
                  <p className="text-orange-600 font-semibold">Perfect for {portlandData.cityName} startups</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>{portlandData.state}-compliant bookkeeping</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Monthly financial reports</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>{portlandData.state} State tax preparation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>{portlandData.cityName} payroll processing</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800 mb-4">$499<span className="text-sm font-normal">/month</span></p>
                  <a href="/get-started" className="block w-full text-center bg-gray-200 hover:bg-orange-600 hover:text-white text-gray-800 font-medium py-2 px-4 rounded transition duration-300">
                    Get Started
                  </a>
                </div>
              </div>
              
              {/* Premium Package */}
              <div className="bg-white rounded-lg shadow-lg p-8 transition duration-300 transform scale-105 hover:shadow-xl hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-utensils text-orange-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Premium {portlandData.cityName}</h3>
                  <p className="text-orange-600 font-semibold">Best for growing {portlandData.cityName} restaurants</p>
                  <div className="mt-2">
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">POPULAR</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Everything in Essential</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>{portlandData.cityName} prime cost analysis</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Regional expansion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Quarterly {portlandData.cityName} market reviews</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Menu profitability analysis</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800 mb-4">$999<span className="text-sm font-normal">/month</span></p>
                  <a href="/get-started" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                    Get Started
                  </a>
                </div>
              </div>
              
              {/* Enterprise Package */}
              <div className="bg-white rounded-lg shadow-md p-8 transition duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-glass-cheers text-orange-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise {portlandData.cityName}</h3>
                  <p className="text-orange-600 font-semibold">Multi-location {portlandData.cityName} operations</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Dedicated {portlandData.cityName} CFO services</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Regional expansion planning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Multi-market operations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>24/7 {portlandData.cityName} market support</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800 mb-4">Custom Pricing</p>
                  <a href="/contact" className="block w-full text-center bg-gray-200 hover:bg-orange-600 hover:text-white text-gray-800 font-medium py-2 px-4 rounded transition duration-300">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ready to Optimize Your {portlandData.cityName} Restaurant?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started with a free consultation tailored to {portlandData.cityName}'s restaurant market
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto text-center">
              <a href="/get-started" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-full text-xl transition duration-300 transform hover:scale-105 mb-6">
                Schedule Your Free {portlandData.cityName} Consultation
              </a>
              <p className="text-gray-600">
                <i className="fas fa-phone mr-2"></i> (312) 555-7890 |
                <i className="fas fa-envelope mr-2 ml-4"></i> hello@foodandbevcfo.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}