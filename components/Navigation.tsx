'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/company' },
  { name: 'Services', path: '/services' },
  { name: 'Equipment', path: '/equipment' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-24">
            <Image src="/logo-dark-transparent.png" alt="EGYOTS Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
          </div>
          <span className="hidden md:inline text-sm font-medium text-muted">Egypt Oil Tools & Services</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-body font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="btn-primary py-2 px-5 text-sm" style={{ color: '#ffffff' }}>
            Get in Touch
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white border-b border-black/5 shadow-lg py-6 px-6 flex flex-col space-y-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-body font-medium text-lg ${
                pathname === link.path ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary w-full py-3" style={{ color: '#ffffff' }}>
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
