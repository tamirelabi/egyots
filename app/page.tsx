import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Settings, Flame, Globe, Gauge, Factory, Wrench, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback'
import GlobalMap from '@/components/GlobalMap';

export const metadata: Metadata = {
  title: "Oil & Gas Engineering Solutions Since 2002",
  description: "EGYOTS delivers innovative engineering and manufacturing solutions for oil, gas, and renewable energy sectors. Well testing, gas processing, completion tools and more.",
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1772376920749-afdc99c517f7?w=1400&q=80&fit=crop" 
            alt="EGYOTS Hero" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <ScrollReveal direction="right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 max-w-[700px] leading-[1.1]" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
              Delivering Oil & Gas Engineering Solutions Since 2002
            </h1>
            <p className="font-subheading text-xl md:text-2xl text-white mb-10 max-w-[600px]" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
              Engineering and manufacturing innovative solutions for the oil, gas, and renewable energy sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary btn-lg">View Services</Link>
              <Link href="/contact" className="btn-outline-white btn-lg">Contact Sales</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#f0f7f0] py-12">
        <div className="section-container py-0 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CheckCircle, label: "20+ Years", sublabel: "Experience" },
            { icon: Settings, label: "Engineering", sublabel: "Solutions" },
            { icon: Flame, label: "Oil & Gas", sublabel: "Industry Focus" },
            { icon: Globe, label: "Global", sublabel: "Partnerships" },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <stat.icon size={32} />
              </div>
              <h4 className="font-headline font-bold text-primary text-xl">{stat.label}</h4>
              <p className="text-muted text-sm">{stat.sublabel}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="right">
          <span className="section-tag">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-foreground">
            Engineering Excellence in Energy Solutions
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            EGYOTS is a premier provider of oilfield tools and engineering services, dedicated to supporting the global energy industry with high-quality, reliable equipment. Our expertise spans across completion, production, and processing systems.
          </p>
          <p className="text-muted mb-8 leading-relaxed">
            With over two decades of experience, we have built a reputation for technical excellence and innovative problem-solving, helping our clients optimize their operations in the most challenging environments.
          </p>
          <Link href="/company" className="btn-primary">Learn More About Us</Link>
        </ScrollReveal>
        
        <ScrollReveal direction="left">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1593854519602-687eae339d57?w=800&q=80&fit=crop" 
              alt="Engineering Excellence" 
              className="w-full h-full"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Core Expertise */}
      <section className="bg-[#fafaf8] py-20">
        <div className="section-container py-0">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="section-tag mx-auto">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Core Expertise</h2>
              <p className="font-subheading text-xl text-muted max-w-2xl mx-auto">
                Comprehensive engineering services tailored to the specific needs of the energy sector.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Gauge, title: "Well Testing Packages", desc: "Advanced surface well testing equipment for accurate data acquisition." },
              { icon: Factory, title: "Early Production Facilities", desc: "Modular production systems for fast-track field development." },
              { icon: Flame, title: "Gas Processing", desc: "Integrated solutions for gas treatment, dehydration, and sweetening." },
              { icon: Settings, title: "Compression Systems", desc: "High-performance gas compression packages for various applications." },
              { icon: Wrench, title: "Flow Control Equipment", desc: "Precision tools for managing pressure and flow in downhole environments." },
              { icon: Zap, title: "Flared Gas to Energy", desc: "Innovative systems to capture flared gas and convert it into usable power." },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="card-base p-8 flex flex-col items-start">
                <div className="w-[52px] h-[52px] rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">{service.title}</h3>
                <p className="text-muted text-sm mb-6 flex-grow">{service.desc}</p>
                <Link href="/services" className="text-primary font-medium flex items-center group">
                  Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Capabilities */}
      <section className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-tag mx-auto">Products</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Equipment Capabilities</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Completion Equipment", 
              img: "https://images.unsplash.com/photo-1597000042706-881cba236e33?w=600&q=80&fit=crop",
              items: ["Production Packers", "Bridge Plugs", "Liner Hangers"]
            },
            { 
              title: "Processing Equipment", 
              img: "https://images.unsplash.com/photo-1767281075989-7571356d477e?w=600&q=80&fit=crop",
              items: ["Test Separators", "Line Heaters", "Choke Manifolds"]
            },
            { 
              title: "Artificial Lift", 
              img: "https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?w=600&q=80&fit=crop",
              items: ["Jet Pumps", "Hydraulic Pumps", "Surface Power Units"]
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="card-base overflow-hidden group">
              <div className="relative h-[220px] overflow-hidden">
                <ImageWithFallback 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/68 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white text-xl font-headline font-bold">{item.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {item.items.map((li, j) => (
                    <li key={j} className="flex items-center text-muted text-sm">
                      <CheckCircle size={14} className="text-primary mr-2" /> {li}
                    </li>
                  ))}
                </ul>
                <Link href="/equipment" className="btn-outline w-full py-2.5 text-sm">View Equipment</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-primary text-white py-20">
        <div className="section-container py-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1769147339214-076740872485?w=800&q=80&fit=crop" 
                alt="Track Record" 
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-white">
              Proven Track Record of Excellence
            </h2>
            <p className="text-white/80 mb-10 leading-relaxed">
              Our commitment to quality and safety has allowed us to successfully deliver complex projects for leading energy companies worldwide. We take pride in our ability to provide reliable solutions that meet the highest industry standards.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/12 p-6 rounded-xl">
                <h4 className="text-3xl font-headline font-bold mb-1">500+</h4>
                <p className="text-white/60 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/12 p-6 rounded-xl">
                <h4 className="text-3xl font-headline font-bold mb-1">50+</h4>
                <p className="text-white/60 text-sm">Industry Partners</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Global Presence */}
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
              <div className="text-3xl font-headline font-bold" style={{ color: '#A7D09A' }}>10+</div>
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

      {/* CTA Section */}
      <section className="bg-[#eef6ed] py-20">
        <div className="section-container py-0 text-center">
          <ScrollReveal>
            <span className="section-tag mx-auto">Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Partner with EGYOTS Engineering Experts
            </h2>
            <p className="font-subheading text-xl text-muted max-w-2xl mx-auto mb-10">
              Ready to optimize your energy operations? Contact our team today to discuss your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/equipment" className="btn-primary btn-lg">Request Equipment</Link>
              <Link href="/contact" className="btn-outline btn-lg">Contact Sales</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
