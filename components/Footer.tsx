import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="relative h-16 w-36 mb-4">
            <Image src="/logo-light.png" alt="EGYOTS Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Engineering and manufacturing innovative solutions for the oil, gas, and renewable energy sectors since 2003.
          </p>
        </div>
        <div>
          <h4 className="text-secondary font-headline font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
            <li><Link href="/company" className="text-gray-400 hover:text-white transition-colors text-sm">Company Overview</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
            <li><Link href="/equipment" className="text-gray-400 hover:text-white transition-colors text-sm">Equipment</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary font-headline font-semibold mb-6">Office Locations</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-medium text-sm">Cairo, Egypt</p>
                <p className="text-gray-400 text-xs">Main Office & Manufacturing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-medium text-sm">Alexandria, Egypt</p>
                <p className="text-gray-400 text-xs">Manufacturing Facility</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-secondary font-headline font-semibold mb-6">Get in Touch</h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-secondary" />
              <span className="text-gray-400 text-sm">sales@egyots.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-secondary" />
              <span className="text-gray-400 text-sm">+20 123 456 789</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-md flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-md flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-md flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs">© 2026 EGYOTS - Egypt Oil Tools & Services. All rights reserved.</p>
      </div>
    </footer>
  )
}
