import Link from 'next/link'

export const metadata = {
  title: 'Restaurant Success Stories | Food & Bev CFO Case Studies',
  description: 'See how Food & Bev CFO has helped restaurants increase profits, reduce costs, and achieve sustainable growth through expert financial management.',
  keywords: 'restaurant case studies, restaurant success stories, restaurant accounting results',
}

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      name: "Tony's Italian Kitchen",
      type: 'Fine Dining Restaurant',
      location: 'Chicago, IL',
      logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      challenge: 'Struggling with cash flow despite high revenue',
      solution: 'Implemented daily cash position reporting and inventory management system',
      results: [
        { metric: 'Cash Flow', value: '+42%', description: 'improvement in 90 days' },
        { metric: 'Food Costs', value: '-8%', description: 'reduction through waste tracking' },
        { metric: 'Profit Margin', value: '+15%', description: 'increase year-over-year' }
      ],
      testimonial: "Food & Bev CFO transformed our finances. We went from constantly worrying about cash to confidently planning our second location.",
      author: 'Tony Ricci',
      title: 'Owner & Executive Chef',
      featured: true
    },
    {
      id: 2,
      name: 'Craft Burger Co.',
      type: 'Fast Casual Chain',
      location: '5 Locations, Texas',
      logo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      challenge: 'Inconsistent profitability across locations',
      solution: 'Created location-specific P&Ls and implemented labor optimization',
      results: [
        { metric: 'Labor Costs', value: '-22%', description: 'with improved scheduling' },
        { metric: 'Revenue', value: '+18%', description: 'through menu engineering' },
        { metric: 'Locations', value: '5→8', description: 'expanded in 18 months' }
      ],
      testimonial: "The location-specific insights helped us identify and fix problems we didn't even know existed. Game-changing!",
      author: 'Sarah Mitchell',
      title: 'CEO & Co-Founder'
    },
    {
      id: 3,
      name: 'The Tipsy Turtle',
      type: 'Sports Bar',
      location: 'Miami, FL',
      logo: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      challenge: 'High prime costs eating into profits',
      solution: 'Integrated POS with inventory management and renegotiated vendor contracts',
      results: [
        { metric: 'Prime Costs', value: '-11%', description: 'from 68% to 57%' },
        { metric: 'EBITDA', value: '+125%', description: 'in first year' },
        { metric: 'Cash Reserves', value: '3x', description: 'emergency fund built' }
      ],
      testimonial: "We finally understand our numbers. Food & Bev CFO gave us the financial clarity we desperately needed.",
      author: 'Mike Johnson',
      title: 'General Manager'
    },
    {
      id: 4,
      name: 'Green Garden Café',
      type: 'Farm-to-Table Restaurant',
      location: 'Portland, OR',
      logo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      challenge: 'Seasonal revenue fluctuations causing cash crunches',
      solution: '13-week cash flow forecasting and seasonal menu optimization',
      results: [
        { metric: 'Winter Revenue', value: '+35%', description: 'year-over-year' },
        { metric: 'Menu Items', value: '-30%', description: 'streamlined for profit' },
        { metric: 'Break-even', value: '-20%', description: 'lower daily target' }
      ],
      testimonial: "The seasonal forecasting model saved our business. We now thrive year-round instead of just surviving winters.",
      author: 'Emma Chen',
      title: 'Owner'
    },
    {
      id: 5,
      name: 'Taco Libre',
      type: 'Food Truck to Brick & Mortar',
      location: 'Austin, TX',
      logo: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      challenge: 'Scaling from food truck to restaurant',
      solution: 'Financial modeling for expansion and investor reporting',
      results: [
        { metric: 'Funding Raised', value: '$500K', description: 'seed investment' },
        { metric: 'ROI', value: '210%', description: 'in 24 months' },
        { metric: 'Locations', value: '1→3', description: 'successful expansion' }
      ],
      testimonial: "Food & Bev CFO's financial modeling and investor deck were crucial in securing funding and scaling successfully.",
      author: 'Carlos Rodriguez',
      title: 'Founder & CEO'
    },
    {
      id: 6,
      name: 'Sakura Sushi',
      type: 'Japanese Restaurant',
      location: 'San Francisco, CA',
      logo: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      challenge: 'Complex inventory management with high-value ingredients',
      solution: 'MarginEdge integration with daily inventory tracking',
      results: [
        { metric: 'Waste', value: '-45%', description: 'reduction in 6 months' },
        { metric: 'Inventory Turns', value: '2x', description: 'improvement' },
        { metric: 'Gross Margin', value: '+9%', description: 'through better purchasing' }
      ],
      testimonial: "The inventory system paid for itself in the first month. We finally have control over our most expensive ingredients.",
      author: 'Yuki Tanaka',
      title: 'Executive Chef & Owner'
    }
  ]

  const featuredStudy = caseStudies.find(study => study.featured)
  const otherStudies = caseStudies.filter(study => !study.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Real Restaurants. Real Results.</h1>
            <p className="text-xl text-gray-600 mb-8">See how we've helped restaurants like yours increase profits, reduce costs, and achieve sustainable growth.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600">200+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600">23%</p>
                <p className="text-gray-600">Avg. Profit Increase</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600">$45M</p>
                <p className="text-gray-600">Client Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">FEATURED SUCCESS STORY</span>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <img src={featuredStudy.logo} alt={featuredStudy.name} className="w-20 h-20 rounded-lg object-cover mr-4" />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">{featuredStudy.name}</h2>
                        <p className="text-gray-600">{featuredStudy.type} • {featuredStudy.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">The Challenge:</h3>
                      <p className="text-gray-600">{featuredStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Our Solution:</h3>
                      <p className="text-gray-600">{featuredStudy.solution}</p>
                    </div>
                    
                    <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-700">
                      "{featuredStudy.testimonial}"
                      <cite className="block mt-2 not-italic text-sm">
                        <strong>{featuredStudy.author}</strong>, {featuredStudy.title}
                      </cite>
                    </blockquote>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-6">The Results:</h3>
                    <div className="space-y-6">
                      {featuredStudy.results.map((result, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                          <div className="flex items-baseline justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-600 uppercase">{result.metric}</span>
                            <span className="text-3xl font-bold text-orange-600">{result.value}</span>
                          </div>
                          <p className="text-gray-600">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">More Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherStudies.map(study => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img src={study.logo} alt={study.name} className="w-16 h-16 rounded-lg object-cover mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{study.name}</h3>
                        <p className="text-sm text-gray-600">{study.type} • {study.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Challenge:</p>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Solution:</p>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <p className="text-2xl font-bold text-orange-600">{result.value}</p>
                          <p className="text-xs text-gray-600">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                    
                    <blockquote className="border-l-4 border-orange-200 pl-4 italic text-gray-600 text-sm">
                      "{study.testimonial}"
                      <cite className="block mt-2 not-italic">
                        <strong>{study.author}</strong>, {study.title}
                      </cite>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results by Numbers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Results That Speak for Themselves</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-orange-600 text-3xl"></i>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">23%</p>
                <p className="text-gray-600">Average Profit Increase</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-dollar-sign text-orange-600 text-3xl"></i>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">18%</p>
                <p className="text-gray-600">Food Cost Reduction</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-orange-600 text-3xl"></i>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">21%</p>
                <p className="text-gray-600">Labor Cost Savings</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-orange-600 text-3xl"></i>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">15hrs</p>
                <p className="text-gray-600">Weekly Time Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Success Across All Restaurant Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <i className="fas fa-utensils text-4xl text-orange-600 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fine Dining</h3>
                <p className="text-gray-600 mb-4">45+ clients</p>
                <p className="text-sm text-gray-500">Average 19% profit increase through inventory optimization and menu engineering</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <i className="fas fa-hamburger text-4xl text-orange-600 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Casual</h3>
                <p className="text-gray-600 mb-4">80+ clients</p>
                <p className="text-sm text-gray-500">Average 25% improvement in cash flow with labor optimization</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <i className="fas fa-beer text-4xl text-orange-600 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bars & Pubs</h3>
                <p className="text-gray-600 mb-4">35+ clients</p>
                <p className="text-sm text-gray-500">Average 30% reduction in pour costs through inventory tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Join 200+ restaurants that have transformed their finances with Food & Bev CFO.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Start Your Success Story
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              Schedule a Consultation
            </Link>
          </div>
          <p className="text-sm text-white mt-6">Average results based on 200+ client engagements from 2019-2023</p>
        </div>
      </section>
    </>
  )
}