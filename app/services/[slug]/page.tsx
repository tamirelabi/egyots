import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle, Wrench } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ImageWithFallback from '@/components/figma/ImageWithFallback'
import { services, getService } from '@/lib/services'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.name,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?w=1400&q=80&fit=crop"
            alt={service.name}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/58"></div>
        </div>
        <div className="section-container relative z-10 text-white py-0">
          <ScrollReveal>
            <span className="section-tag mx-auto" style={{ color: '#A7D09A' }}>Service</span>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">{service.name}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="section-container max-w-[860px]">
        <ScrollReveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium mb-8 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
          <p className="font-subheading text-xl text-muted leading-relaxed">{service.description}</p>
        </ScrollReveal>
      </section>

      {/* Key Features */}
      <section className="bg-[#fafaf8] py-20">
        <div className="section-container py-0">
          <ScrollReveal className="mb-12">
            <span className="section-tag">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Key Features</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <ScrollReveal
                key={feature}
                delay={i * 0.05}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-black/5"
              >
                <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm leading-relaxed">{feature}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-container">
        <ScrollReveal className="mb-12">
          <span className="section-tag">Tools &amp; Hardware</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Related Equipment</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.equipment.map((item, i) => (
            <ScrollReveal
              key={item}
              delay={i * 0.05}
              className="card-base p-6 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Wrench size={18} />
              </div>
              <span className="font-medium text-foreground">{item}</span>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-muted text-sm mt-8 italic">
          Equipment listings are illustrative — contact our team for full specifications and configurations.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20">
        <div className="section-container py-0 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-white">
              Ready to discuss {service.name}?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">
              Our engineering experts are ready to help you scope and deliver this service for your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-white">Contact Sales</Link>
              <Link href="/services" className="btn-outline-white inline-flex items-center gap-2">
                <ArrowRight size={16} />
                All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
