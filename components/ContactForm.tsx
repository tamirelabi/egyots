'use client'

import { services } from '@/lib/services'

const VALID_SLUGS = new Set(services.map((s) => s.slug))

export default function ContactForm({ initialService }: { initialService?: string }) {
  const defaultInterest =
    initialService && VALID_SLUGS.has(initialService) ? initialService : 'general'

  return (
    <form action="https://formspree.io/f/REPLACE_WITH_YOUR_ID" method="POST" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+20 123 456 789" className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</label>
          <input type="text" id="company" name="company" placeholder="Company Ltd." className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="interest" className="text-sm font-medium text-foreground">Service Interest</label>
        <select id="interest" name="interest" defaultValue={defaultInterest} className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option value="general">General Inquiry</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
      </div>
      <button type="submit" className="btn-primary btn-lg w-full" style={{ color: '#ffffff' }}>
        Send Message
      </button>
      <a
        href="/egyots-brochure.pdf"
        download="EGYOTS-Brochure.pdf"
        className="btn-outline btn-lg w-full flex items-center justify-center gap-2 mt-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Company Brochure
      </a>
    </form>
  )
}
