import type { Metadata } from "next";
import ScrollReveal from '@/components/ScrollReveal';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Oil & Gas Equipment Catalog | Packers, Separators & More",
  description: "Browse EGYOTS equipment: packers, bridge plugs, flow control tools, separators, line heaters, and choke manifolds. API and ASME certified.",
};

export default function EquipmentPage() {
  const completionEquipment = [
    {
      name: "Packers",
      img: "https://images.unsplash.com/photo-1597000042706-881cba236e33?w=500&q=80&fit=crop",
      tag: "Completion",
      desc: "High-performance production packers for reliable zone isolation.",
      specs: [
        { label: "Pressure Rating", value: "Up to 10,000 psi" },
        { label: "Temp Range", value: "-20°F to 350°F" },
        { label: "Materials", value: "Carbon / Alloy Steel" }
      ]
    },
    {
      name: "Bridge Plugs",
      img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&q=80&fit=crop",
      tag: "Completion",
      desc: "Retrievable and permanent bridge plugs for well intervention.",
      specs: [
        { label: "Pressure Rating", value: "Up to 8,000 psi" },
        { label: "OD Range", value: "2-3/8\" to 9-5/8\"" },
        { label: "Type", value: "Retrievable / Permanent" }
      ]
    },
    {
      name: "Flow Control Tools",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80&fit=crop",
      tag: "Completion",
      desc: "Precision tools for managing pressure and flow downhole.",
      specs: [
        { label: "Actuation", value: "Hydraulic / Mechanical" },
        { label: "Flow Area", value: "Configurable" },
        { label: "API Compliance", value: "11D1" }
      ]
    }
  ];

  const processingEquipment = [
    {
      name: "Separators",
      img: "https://images.unsplash.com/photo-1767281075989-7571356d477e?w=500&q=80&fit=crop",
      tag: "Processing",
      desc: "High-capacity surface separators for oil, gas, and water.",
      specs: [
        { label: "Capacity", value: "Up to 50,000 BOPD" },
        { label: "Design Code", value: "ASME Section VIII" },
        { label: "Configuration", value: "Horizontal / Vertical" }
      ]
    },
    {
      name: "Line Heaters",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop",
      tag: "Processing",
      desc: "Efficient line heaters for maintaining process temperatures.",
      specs: [
        { label: "Heat Duty", value: "0.5 to 10 MMBtu/hr" },
        { label: "Fuel Type", value: "Gas / Diesel" },
        { label: "Efficiency", value: "Up to 85%" }
      ]
    },
    {
      name: "Choke Manifolds",
      img: "https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?w=500&q=80&fit=crop",
      tag: "Processing",
      desc: "High-pressure choke manifolds for well control operations.",
      specs: [
        { label: "Working Pressure", value: "Up to 15,000 psi" },
        { label: "API Rating", value: "6A" },
        { label: "Material", value: "SS / Carbon Steel" }
      ]
    }
  ];

  const ProductGrid = ({ products }: { products: any[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, i) => (
        <ScrollReveal key={i} delay={i * 0.1} className="card-base overflow-hidden flex flex-col">
          <div className="h-[200px]">
            <ImageWithFallback 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 w-fit">
              {product.tag}
            </span>
            <h3 className="text-xl font-headline font-bold mb-2">{product.name}</h3>
            <p className="text-muted text-sm mb-6">{product.desc}</p>
            <div className="mt-auto border-t border-black/5 pt-4">
              {product.specs.map((spec: any, j: number) => (
                <div key={j} className="flex justify-between text-xs py-1.5 border-b border-black/5 last:border-0">
                  <span className="text-muted font-medium">{spec.label}</span>
                  <span className="text-foreground font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              High-performance tools and systems for the most demanding energy environments
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Completion Equipment */}
      <section className="section-container">
        <ScrollReveal className="mb-12">
          <span className="section-tag">Completion Equipment</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Downhole Completion Tools</h2>
        </ScrollReveal>
        <ProductGrid products={completionEquipment} />
      </section>

      {/* Processing Equipment */}
      <section className="bg-[#fafaf8] py-20">
        <div className="section-container py-0">
          <ScrollReveal className="mb-12">
            <span className="section-tag">Processing Equipment</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Surface Processing Systems</h2>
          </ScrollReveal>
          <ProductGrid products={processingEquipment} />
        </div>
      </section>

      {/* CTA Section */}
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
