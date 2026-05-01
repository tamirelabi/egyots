import type { Metadata } from "next";
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: "Engineering Services | Well Testing, Gas Processing & More",
  description: "EGYOTS provides downhole completion tools, pumping systems, early production facilities, gas processing, and well testing packages.",
};

export default function ServicesPage() {
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
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to the specific needs of the energy sector
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-tag mx-auto">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Services</h2>
            <p className="font-subheading text-xl text-muted max-w-2xl mx-auto">
              Eleven engineering and equipment services delivered to oil &amp; gas operators worldwide.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.slug}
              delay={i * 0.05}
              className="card-base p-8 flex flex-col items-start"
            >
              <div className="w-[52px] h-[52px] rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">{service.name}</h3>
              <p className="font-body text-muted text-sm mb-6 flex-grow">{service.shortDescription}</p>
              <div className="flex flex-col gap-3 w-full mt-auto">
                <Link href={`/services/${service.slug}`} className="btn-primary w-full">
                  Learn More
                </Link>
                <Link href={`/contact?service=${service.slug}`} className="btn-outline w-full">
                  Request Information
                </Link>
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
              <ScrollReveal key={i} delay={i * 0.1} className="card-base p-8 text-center">
                <h3 className="text-xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{item.desc}</p>
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
            <p className="font-body text-white/80 max-w-2xl mx-auto mb-10">
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
