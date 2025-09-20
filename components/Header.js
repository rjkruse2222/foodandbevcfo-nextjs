'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path ? 'text-orange-600 font-medium' : 'text-gray-800 hover:text-orange-600 font-medium'
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-orange-600">Food & Bev CFO</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={isActive('/')}>Home</Link>
          <Link href="/services" className={isActive('/services')}>Services</Link>
          <Link href="/about" className={isActive('/about')}>About</Link>
          <Link href="/pricing" className={isActive('/pricing')}>Pricing</Link>
          <Link href="/blog" className={isActive('/blog')}>Blog</Link>
          <Link href="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
        
        <Link href="/get-started" className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Get Started
        </Link>
        
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className={isActive('/')} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className={isActive('/services')} onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/about" className={isActive('/about')} onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/pricing" className={isActive('/pricing')} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/blog" className={isActive('/blog')} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className={isActive('/contact')} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="/get-started" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-center" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}