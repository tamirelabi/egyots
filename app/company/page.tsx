import type { Metadata } from "next";
import { Target, Eye, Award, Lightbulb, Shield, Play } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import Link from 'next/link'
import GlobalMap from '@/components/GlobalMap'
import CertificatesViewer from '@/components/CertificatesViewer'
import ClientLogosStrip from '@/components/ClientLogosStrip';

export const metadata: Metadata = {
  title: "Company | EGYOTS - Egypt Oil Tools & Services",
  description: "Leading the energy industry with innovative engineering solutions since 2003.",
};

export default function CompanyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1593854519602-687eae339d57?w=1400&q=80&fit=crop" 
            alt="About EGYOTS" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/58"></div>
        </div>
        <div className="section-container relative z-10 text-white py-0">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">About EGYOTS</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Leading the energy industry with innovative engineering solutions since 2003
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="right">
          <span className="section-tag">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">A Legacy of Innovation</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Founded in 2003, EGYOTS (Egypt Oil Tools & Services) began with a clear vision: to provide the oil and gas industry with superior engineering solutions and high-performance tools that enhance operational efficiency.
            </p>
            <p>
              Over the years, we have grown from a local service provider into a significant regional player, expanding our reach across the Middle East, North Africa, and North America. Our growth has been fueled by our unwavering commitment to quality and our ability to adapt to the evolving needs of the energy sector.
            </p>
            <p>
              Today, EGYOTS stands as a trusted partner for major energy companies, offering a comprehensive suite of services and equipment designed to meet the most demanding technical requirements in both traditional and renewable energy sectors.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="left">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1769147339214-076740872485?w=800&q=80&fit=crop" 
              alt="Our Story" 
              className="w-full h-full"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#fafaf8] py-20">
        <div className="section-container py-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="right" className="bg-white p-10 rounded-xl border-2 border-primary/15 shadow-sm">
            <div className="text-primary mb-6">
              <Target size={48} />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-muted leading-relaxed">
              To deliver innovative, reliable, and cost-effective solutions that maximize our clients&apos; operational efficiency and production performance. We are committed to maintaining the highest standards of quality, safety, and environmental responsibility in everything we do.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" className="bg-white p-10 rounded-xl border-2 border-primary/15 shadow-sm">
            <div className="text-primary mb-6">
              <Eye size={48} />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              To be the leading provider of oil and gas equipment and services in the region, recognized for our technical excellence, innovative solutions, and unwavering commitment to customer success. We strive to set new standards in quality and reliability while fostering local talent and expertise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ClientLogosStrip />

      {/* Core Values */}
      <section className="section-container text-center">
        <ScrollReveal>
          <span className="section-tag mx-auto">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-16">Our Core Values</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Quality", desc: "Uncompromising commitment to the highest industry standards in everything we do." },
            { icon: Lightbulb, title: "Innovation", desc: "Continuously seeking new and better ways to solve complex engineering challenges." },
            { icon: Shield, title: "Safety", desc: "Prioritizing the well-being of our people, our clients, and the environment." },
            { icon: Play, title: "Reliability", desc: "Delivering consistent, high-performance results that our partners can depend on." },
          ].map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-center">
              <div className="text-primary mb-6">
                <value.icon size={40} />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">{value.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-[#fafaf8] py-20 scroll-mt-20">
        <div className="section-container py-0">
          <ScrollReveal className="text-center mb-12">
            <span className="section-tag mx-auto">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Industry Certifications</h2>
            <p className="font-subheading text-xl text-muted max-w-2xl mx-auto">
              Click any certificate to view or download the full document.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <CertificatesViewer />
          </ScrollReveal>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-20 bg-[#0f1a2a]">
        <div className="section-container py-0">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-tag mx-auto" style={{ color: '#A7D09A' }}>Where We Work</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4" style={{ color: '#ffffff' }}>
                Global Presence
              </h2>
              <p className="font-subheading text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Delivering engineering solutions across the Middle East, North Africa, and the Americas.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <GlobalMap />
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-8 mt-10 text-center">
            <div>
              <div className="text-3xl font-headline font-bold" style={{ color: '#A7D09A' }}>13</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Countries</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold" style={{ color: '#A7D09A' }}>3</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Continents</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold" style={{ color: '#A7D09A' }}>500+</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="section-container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Offices</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal direction="right" className="card-base overflow-hidden">
            <div className="h-[180px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740211803526-e8ac9ec056c8?w=600&q=80&fit=crop"
                alt="Cairo Office"
                className="w-full h-full"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-headline font-bold mb-2">Cairo, Egypt</h3>
              <p className="text-primary font-medium text-sm mb-4">Main Office &amp; Manufacturing</p>
              <p className="text-muted text-sm">Industrial Zone, Cairo, Egypt</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" className="card-base overflow-hidden">
            <div className="h-[180px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=600&q=80&fit=crop"
                alt="Alexandria Office"
                className="w-full h-full"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-headline font-bold mb-2">Alexandria, Egypt</h3>
              <p className="text-primary font-medium text-sm mb-4">Manufacturing Facility</p>
              <p className="text-muted text-sm">2QJ9+5J3, Ekeingy Maryout, Amreya 1, Alexandria Governorate 524820</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#eef6ed] py-20">
        <div className="section-container py-0 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-10">
              Ready to work with EGYOTS?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary btn-lg">Get in Touch</Link>
              <Link href="/services" className="btn-outline btn-lg">View Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
