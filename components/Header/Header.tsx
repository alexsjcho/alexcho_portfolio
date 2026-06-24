'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { navItems } from './data'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${isScrolled ? 'bg-gray-800 shadow-md' : 'bg-gray-800 bg-opacity-90'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Alex Cho
              </span>

              {/*
               <span className="text-2xl text-gray-300 mx-2">-</span>
              <span className="text-2xl font-semibold text-gray-300">
                Product Manager
              </span> */}
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <button
              className="md:hidden text-gray-200 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      <div className="h-16" />
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-gray-200 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
