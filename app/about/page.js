import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Food & Bev CFO | Restaurant Accounting Experts',
  description: 'Learn about Food & Bev CFO - founded by restaurant industry veterans, we provide specialized accounting services for food and beverage businesses nationwide.',
  keywords: 'about restaurant accounting, food service CFO, restaurant financial experts',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Restaurant Finance Experts Who've Been in Your Shoes</h1>
            <p className="text-xl text-gray-600">Founded by industry veterans who understand the unique challenges of running a food & beverage business.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Food & Bev CFO was born out of frustration. After years of watching talented restaurateurs struggle with generic accounting services that didn't understand their business, we knew there had to be a better way.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our founders spent decades in the restaurant industry – from line cook to general manager, from food truck owner to multi-unit operator. We've lived through the dinner rushes, the slow seasons, the vendor negotiations, and the 2am inventory counts.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                In 2019, we combined this operational experience with world-class financial expertise to create Food & Bev CFO. Today, we're proud to be the trusted financial partner for over 200 restaurants, bars, and food service businesses nationwide.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-orange-50 rounded-lg p-4 flex-1 min-w-[150px]">
                  <p className="text-3xl font-bold text-orange-600">2019</p>
                  <p className="text-sm text-gray-600">Founded</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 flex-1 min-w-[150px]">
                  <p className="text-3xl font-bold text-orange-600">200+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 flex-1 min-w-[150px]">
                  <p className="text-3xl font-bold text-orange-600">$2B+</p>
                  <p className="text-sm text-gray-600">Revenue Managed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant kitchen team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg mb-2">"We speak restaurant"</p>
                <p className="text-sm">Because we've been there, done that, and burned the t-shirt in the kitchen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">We're on a mission to help every food & beverage business achieve financial clarity and success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Passion for Hospitality</h3>
              <p className="text-gray-600">We love the restaurant industry and the people who make it special. Your success is our success.</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600">We believe in the power of accurate, timely financial data to transform your business operations.</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">True Partnership</h3>
              <p className="text-gray-600">We're not just your accountants; we're your financial partners, advisors, and biggest cheerleaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet the experts dedicated to your restaurant's financial success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* CEO */}
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Michael Chen" 
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-4 bg-orange-600 text-white p-2 rounded-full">
                  <i className="fab fa-linkedin text-lg"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Michael Chen</h3>
              <p className="text-orange-600 font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600">Former restaurant owner turned CPA. 15+ years in hospitality, from dishwasher to multi-unit operator.</p>
            </div>
            
            {/* CFO */}
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Sarah Martinez" 
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-4 bg-orange-600 text-white p-2 rounded-full">
                  <i className="fab fa-linkedin text-lg"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Sarah Martinez</h3>
              <p className="text-orange-600 font-medium mb-3">CFO & Co-Founder</p>
              <p className="text-gray-600">MBA, CPA with Big 4 experience. Specialized in hospitality M&A and helped 50+ restaurants scale.</p>
            </div>
            
            {/* COO */}
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="James Wilson" 
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-4 bg-orange-600 text-white p-2 rounded-full">
                  <i className="fab fa-linkedin text-lg"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">James Wilson</h3>
              <p className="text-orange-600 font-medium mb-3">COO</p>
              <p className="text-gray-600">Former Director of Operations for 30-unit restaurant group. Expert in systems and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Restaurants Choose Food & Bev CFO</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're not just another accounting firm. We're restaurant people who happen to be great at numbers.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-utensils text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Industry-Specific Expertise</h3>
                  <p className="text-gray-600">We understand prime costs, menu engineering, labor optimization, and the unique tax implications of tip income and delivery platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-plug text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Stack Integration</h3>
                  <p className="text-gray-600">Seamlessly connect with Toast, Square, MarginEdge, 7shifts, and 30+ other restaurant tech platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-users text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Team</h3>
                  <p className="text-gray-600">You'll have a dedicated account manager who knows your business, not a rotating cast of junior accountants.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-chart-pie text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Actionable Insights</h3>
                  <p className="text-gray-600">Weekly flash reports and KPI dashboards that actually make sense and drive real business decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-rocket text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Growth Focused</h3>
                  <p className="text-gray-600">From food truck to multi-unit empire, we provide the financial foundation for sustainable growth.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-shield-alt text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Compliance Assured</h3>
                  <p className="text-gray-600">Stay compliant with complex restaurant regulations, from tip reporting to liquor license requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Proud to be recognized by the industry we serve</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-3">
                <i className="fas fa-trophy text-4xl text-orange-600"></i>
              </div>
              <p className="font-semibold text-gray-800">Best Restaurant Accounting Firm</p>
              <p className="text-sm text-gray-600">Restaurant Business 2023</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-3">
                <i className="fas fa-star text-4xl text-orange-600"></i>
              </div>
              <p className="font-semibold text-gray-800">Top 50 Hospitality Service Provider</p>
              <p className="text-sm text-gray-600">Hospitality Tech 2023</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-3">
                <i className="fas fa-award text-4xl text-orange-600"></i>
              </div>
              <p className="font-semibold text-gray-800">Excellence in Innovation</p>
              <p className="text-sm text-gray-600">National Restaurant Association</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-3">
                <i className="fas fa-certificate text-4xl text-orange-600"></i>
              </div>
              <p className="font-semibold text-gray-800">Certified B Corporation</p>
              <p className="text-sm text-gray-600">B Lab 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Food & Bev CFO Family?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Let's talk about how we can help your restaurant achieve financial clarity and sustainable growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300">
              Schedule Free Consultation
            </Link>
            <Link href="/case-studies" className="bg-transparent hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
              See Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}