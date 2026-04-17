import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact EGYOTS | Cairo & Alexandria Offices",
  description: "Get in touch with EGYOTS engineering and sales teams. Head office in Cairo, Egypt. Manufacturing facility in Alexandria, Egypt.",
};

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[360px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1593854519602-687eae339d57?w=1400&q=80&fit=crop" 
            alt="Contact Us" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/58"></div>
        </div>
        <div className="section-container relative z-10 text-white py-0">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Contact Us</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <ScrollReveal direction="right">
            <span className="section-tag">Send Us a Message</span>
            <h2 className="text-3xl font-headline font-bold mb-8">Let&apos;s Discuss Your Project</h2>
            <ContactForm />
          </ScrollReveal>
        </div>

        {/* Contact Info Cards */}
        <div className="lg:col-span-2 space-y-6">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white border border-black/8 rounded-[10px] p-8 space-y-6">
              <h3 className="text-xl font-headline font-bold text-primary">Cairo Headquarters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-muted text-sm">Industrial Zone, Cairo, Egypt</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span className="text-muted text-sm">+20 123 456 789</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span className="text-muted text-sm">sales@egyots.com</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-white border border-black/8 rounded-[10px] p-8 space-y-6">
              <h3 className="text-xl font-headline font-bold text-primary">Alexandria Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-muted text-sm">Alexandria Free Zone, Alexandria, Egypt</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span className="text-muted text-sm">info@egyptoiltools.com</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3}>
            <div className="bg-white border border-black/8 rounded-[10px] p-8 space-y-6">
              <h3 className="text-xl font-headline font-bold text-primary">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-9 h-9 border border-black/10 rounded-md flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-9 h-9 border border-black/10 rounded-md flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 border border-black/10 rounded-md flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Business hours: Sun–Thu, 8:00 AM – 5:00 PM (Cairo Time)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
