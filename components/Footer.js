import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Food & Bev CFO</h3>
            <p className="text-gray-400">Specialized accounting services for restaurants, bars, and food service businesses.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition duration-300">Free Resources</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition duration-300">Case Studies</Link></li>
              <li><Link href="/integrations" className="text-gray-400 hover:text-white transition duration-300">Integrations</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 mb-2">(312) 555-7890</p>
            <p className="text-gray-400 mb-4">hello@foodandbevcfo.com</p>
            <p className="text-gray-400">123 Restaurant Row, Suite 456<br />Chicago, IL 60601</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Food & Bev CFO. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}