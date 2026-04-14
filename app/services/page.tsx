import type { Metadata } from "next";
import { Wrench, Zap, Flame, Factory, Gauge, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Engineering Services | Well Testing, Gas Processing & More",
  description: "EGYOTS provides downhole completion tools, pumping systems, early production facilities, gas processing, and well testing packages.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Downhole Completion Tools",
      desc: "Comprehensive range of high-performance downhole tools designed for reliable well completion and intervention operations.",
      features: ["Production Packers", "Bridge Plugs", "Sliding Sleeves", "Flow Control Accessories", "Check Valves"]
    },
    {
      icon: Zap,
      title: "Pumping Systems",
      desc: "Advanced artificial lift solutions including jet pumps and hydraulic pumping systems for optimized production rates.",
      features: ["Jet Pumps", "Downhole Hydraulic Pumps", "Surface Power Units", "High-Pressure Piping", "Integrated Control Systems"]
    },
    {
      icon: Flame,
      title: "Flared Gas to Energy",
      desc: "Sustainable solutions for capturing flared gas and converting it into usable electrical or thermal energy.",
      features: ["Gas Capture Units", "Power Generation Modules", "Emissions Reduction", "Energy Recovery Systems", "Environmental Compliance"]
    },
    {
      icon: Factory,
      title: "Early Production Facilities",
      desc: "Fast-track modular production facilities designed for rapid field development and early cash flow.",
      features: ["Modular Process Units", "Fast-Track Deployment", "Scalable Designs", "Integrated Safety Systems", "Remote Monitoring"]
    },
    {
      icon: Gauge,
      title: "Well Testing Packages",
      desc: "Complete surface well testing equipment packages for accurate reservoir evaluation and data acquisition.",
      features: ["Test Separators", "Multiphase Flow Meters", "Data Acquisition Systems", "Emergency Shutdown (ESD)", "Burner Booms"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?w=1400&q=80&fit=crop" 
            alt="Engineering Services" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/58"></div>
        </div>
        <div className="section-container relative z-10 text-white py-0">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Engineering Services</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to the specific needs of the energy sector
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-tag mx-auto">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Services</h2>
          </ScrollReveal>
        </div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <ScrollReveal 
              key={i} 
              direction={i % 2 === 0 ? "right" : "left"}
              className="card-base overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            >
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="text-primary mb-6">
                  <service.icon size={48} />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div>
                  <Link href="/contact" className="btn-primary">Request Information</Link>
                </div>
              </div>
              <div className={`bg-[#fafaf8] p-8 md:p-12 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Key Features & Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-muted">
                      <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Choose EGYOTS */}
      <section className="bg-[#fafaf8] py-20">
        <div className="section-container py-0">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Why Choose EGYOTS</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Proven Experience", desc: "Over 20 years of successful project delivery in the global energy industry." },
              { title: "Technical Excellence", desc: "Our team of expert engineers ensures every solution meets the highest standards." },
              { title: "Innovative Solutions", desc: "We leverage the latest technology to solve complex operational challenges." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
                <h3 className="text-xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="section-container py-0 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-white">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">
              Our engineering experts are ready to help you find the perfect solution for your energy operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-white">Contact Sales</Link>
              <Link href="/equipment" className="btn-outline-white">View Equipment</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
