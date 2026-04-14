'use client'

export default function ContactForm() {
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
        <select id="interest" name="interest" className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option value="">Select a service</option>
          <option value="downhole">Downhole Completion Tools</option>
          <option value="well-testing">Well Testing Packages</option>
          <option value="production">Early Production Facilities</option>
          <option value="gas">Gas Processing</option>
          <option value="compression">Compression Systems</option>
          <option value="flared">Flared Gas to Energy</option>
          <option value="purchase">Equipment Purchase</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 bg-white border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
      </div>
      <button type="submit" className="btn-primary btn-lg w-full" style={{ color: '#ffffff' }}>
        Send Message
      </button>
    </form>
  )
}
