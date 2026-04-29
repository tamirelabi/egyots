'use client'

import Image from 'next/image'
import { useRef } from 'react'

const clients = [
  { name: 'Apache Egypt', file: '/clients/client-apache-egypt.png' },
  { name: 'ENI', file: '/clients/client-eni.png' },
  { name: 'Bapetco', file: '/clients/client-bapetco.png' },
  { name: 'Khalda', file: '/clients/client-khalda.png' },
  { name: 'NOV', file: '/clients/client-nov.png' },
  { name: 'Agiba', file: '/clients/client-agiba.png' },
  { name: 'Marathon Petroleum', file: '/clients/client-marathon-petroleum.png' },
  { name: 'Sonatrach', file: '/clients/client-sonatrach.png' },
  { name: 'GPC', file: '/clients/client-gpc.png' },
  { name: 'Petrobel', file: '/clients/client-petrobel.png' },
  { name: 'Suez Oil Company', file: '/clients/client-suez-oil.png' },
  { name: 'Ades', file: '/clients/client-ades.png' },
  { name: 'El Hamra Oil', file: '/clients/client-el-hamra-oil.png' },
  { name: 'East Zeit Petroleum', file: '/clients/client-east-zeit.png' },
  { name: 'WASCO', file: '/clients/client-wasco.png' },
  { name: 'Fanar Petroleum', file: '/clients/client-fanar-petroleum.png' },
  { name: 'Eshpetco', file: '/clients/client-eshpetco.png' },
  { name: 'Petrogulf', file: '/clients/client-petrogulf.png' },
  { name: 'Petroamir', file: '/clients/client-petroamir.png' },
  { name: 'South Dabaa', file: '/clients/client-south-dabaa.png' },
  { name: 'Tanmia', file: '/clients/client-tanmia.png' },
  { name: 'Halliburton', file: '/clients/client-halliburton.png' },
  { name: 'Baker Hughes', file: '/clients/client-baker-hughes.png' },
  { name: 'Weatherford', file: '/clients/client-weatherford.png' },
  { name: 'Al Khorayef', file: '/clients/client-al-khorayef.png' },
  { name: 'NESR', file: '/clients/client-nesr.png' },
  { name: 'Expro', file: '/clients/client-expro.png' },
  { name: 'Pico Energy', file: '/clients/client-pico-energy.png' },
  { name: 'Ankor Pointe', file: '/clients/client-ankor-pointe.png' },
  { name: 'Turkey Petroleum Oil', file: '/clients/client-turkey-petroleum-oil.png' },
  { name: 'PetroGas', file: '/clients/client-petrogas.png' },
]

export default function ClientLogosStrip() {
  const stripRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 bg-white border-y border-black/[0.06] overflow-hidden">
      <div className="text-center mb-10">
        <span className="section-tag mx-auto">Trusted By</span>
        <h2 className="text-2xl md:text-3xl font-headline font-bold">
          Our Clients & Partners
        </h2>
      </div>

      <div
        ref={stripRef}
        className="relative w-full"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div
          className="flex gap-12 items-center"
          style={{ animation: 'scroll-left 40s linear infinite', width: 'max-content' }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {/* Render logos twice for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '140px', height: '70px' }}
            >
              <div
                className="relative w-full h-full transition-all duration-300"
                style={{ filter: 'grayscale(100%) opacity(0.55)' }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)')}
                title={client.name}
              >
                <Image
                  src={client.file}
                  alt={client.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
