'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Download, ZoomIn } from 'lucide-react'

const certificates = [
  {
    id: 1,
    name: 'ASME U-Stamp',
    issuer: 'American Society of Mechanical Engineers',
    scope: 'Manufacture of Pressure Vessels',
    certNumber: '61561',
    expires: 'May 2027',
    file: '/certificates/certificate-asme-u-stamp-61561.jpg',
    type: 'image',
  },
  {
    id: 2,
    name: 'National Board R-Stamp',
    issuer: 'National Board of Boiler & Pressure Vessel Inspectors',
    scope: 'Metallic Repairs and Alterations',
    certNumber: '12485',
    expires: 'May 2027',
    file: '/certificates/certificate-national-board-r-stamp-12485.jpg',
    type: 'image',
  },
  {
    id: 3,
    name: 'API Monogram — 7-1',
    issuer: 'American Petroleum Institute',
    scope: 'Threading for Rotary Shouldered Connections',
    certNumber: '7-1-1743',
    expires: 'September 2026',
    file: '/certificates/certificate-api-7-1-monogram-7-1-1743.jpg',
    type: 'image',
  },
  {
    id: 4,
    name: 'API Monogram — 5CT',
    issuer: 'American Petroleum Institute',
    scope: 'Coupling Stock / Pipe Threader',
    certNumber: '5CT-2349',
    expires: 'September 2026',
    file: '/certificates/certificate-api-5ct-monogram-5ct-2349.jpg',
    type: 'image',
  },
  {
    id: 5,
    name: 'API Certificate — 7-2',
    issuer: 'American Petroleum Institute',
    scope: 'API Spec 7-2 Certification',
    certNumber: '7-2-1242',
    expires: '2025',
    file: '/certificates/certificate-api-7-2-1242-2025.pdf',
    type: 'pdf',
  },
  {
    id: 6,
    name: 'API Certificate — 5B',
    issuer: 'American Petroleum Institute',
    scope: 'API Spec 5B Certification',
    certNumber: '5B-0353',
    expires: '2025',
    file: '/certificates/certificate-api-5b-0353-2025.pdf',
    type: 'pdf',
  },
]

export default function CertificatesViewer() {
  const [active, setActive] = useState<typeof certificates[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActive(cert)}
            className="card-base p-6 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-headline font-bold text-sm flex-shrink-0">
                {cert.type === 'pdf' ? 'PDF' : cert.name.split(' ')[0]}
              </div>
              <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                <ZoomIn size={14} />
                <span>View</span>
              </div>
            </div>
            <h3 className="font-headline font-bold text-base mb-1">{cert.name}</h3>
            <p className="text-xs text-muted mb-3 leading-relaxed">{cert.scope}</p>
            <div className="border-t border-black/5 pt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted">Cert No.</span>
                <span className="font-medium">{cert.certNumber}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted">Expires</span>
                <span className="font-medium">{cert.expires}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-black/8">
              <div>
                <h3 className="font-headline font-bold text-lg">{active.name}</h3>
                <p className="text-sm text-muted">{active.issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={active.file}
                  download
                  className="btn-outline py-2 px-4 text-sm flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={14} />
                  Download
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="w-9 h-9 rounded-lg border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-5">
              {active.type === 'image' ? (
                <div className="relative w-full" style={{ minHeight: '400px' }}>
                  <Image
                    src={active.file}
                    alt={active.name}
                    width={800}
                    height={1100}
                    className="w-full h-auto rounded-lg"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <span className="font-headline font-bold text-2xl text-primary">PDF</span>
                  </div>
                  <h4 className="font-headline font-bold text-xl mb-2">{active.name}</h4>
                  <p className="text-muted mb-2">{active.scope}</p>
                  <p className="text-sm text-muted mb-8">Certificate No. {active.certNumber} · Expires {active.expires}</p>
                  <a
                    href={active.file}
                    download
                    className="btn-primary btn-lg inline-flex items-center gap-2"
                    style={{ color: '#ffffff' }}
                  >
                    <Download size={18} />
                    Download Certificate PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
