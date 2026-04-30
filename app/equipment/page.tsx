import type { Metadata } from "next";
import { ChevronDown, ArrowRight, Wrench } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { services, getServicesUsingEquipment } from '@/lib/services';

export const metadata: Metadata = {
  title: "Oil & Gas Equipment Catalog | Organized by Service",
  description: "Browse EGYOTS equipment organized by parent service: well testing, completion tools, gas processing, compression, artificial lift, and more.",
};

export default function EquipmentPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[480px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1597000042706-881cba236e33?w=1400&q=80&fit=crop"
            alt="Equipment Catalog"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/58"></div>
        </div>
        <div className="section-container relative z-10 text-white py-0">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Equipment Catalog</h1>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              High-performance tools and systems organized by service line
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion */}
      <section className="section-container">
        <ScrollReveal className="text-center mb-16">
          <span className="section-tag mx-auto">Browse by Service</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Equipment by Service</h2>
          <p className="font-subheading text-xl text-muted max-w-2xl mx-auto">
            Open a service to see the equipment we deploy on those projects.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <details key={service.slug} className="card-base group" open={i === 0}>
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-headline font-bold text-foreground truncate">{service.name}</h3>
                      <p className="font-body text-muted text-sm">
                        {service.equipment.length === 0
                          ? 'Pending client confirmation'
                          : `${service.equipment.length} ${service.equipment.length === 1 ? 'item' : 'items'}`}
                      </p>
                    </div>
                  </div>
                  <ChevronDown size={20} className="text-primary transition-transform group-open:rotate-180 shrink-0" />
                </summary>

                <div className="border-t border-black/[0.06] p-6">
                  {service.equipment.length === 0 ? (
                    <p className="font-body text-muted text-sm italic mb-6">
                      Equipment list pending client confirmation. Contact our team for current capabilities.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {service.equipment.map((item) => {
                        const others = getServicesUsingEquipment(item).filter((s) => s.slug !== service.slug)
                        return (
                          <div key={item} className="card-base p-5 flex flex-col">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Wrench size={16} />
                              </div>
                              <h4 className="font-headline font-semibold text-foreground leading-snug">{item}</h4>
                            </div>
                            {others.length > 0 && (
                              <p className="font-body text-muted text-xs leading-relaxed mt-auto">
                                <span className="text-primary font-medium">Also used in:</span>{' '}
                                {others.map((s) => s.name).join(' · ')}
                              </p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-outline inline-flex items-center gap-2 text-sm py-2.5"
                  >
                    View Service
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </details>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eef6ed] py-20">
        <div className="section-container py-0 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-10">
              Need a custom equipment solution?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary btn-lg">Request a Quote</Link>
              <Link href="/services" className="btn-outline btn-lg">View Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
