'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  priority?: boolean
}

export default function ImageWithFallback({ src, alt, className = '', fallbackSrc = 'https://via.placeholder.com/600x400', priority = false }: Props) {
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <div className={`relative ${className}`}>
      <Image src={imgSrc} alt={alt} fill className="object-cover" onError={() => setImgSrc(fallbackSrc)} priority={priority} />
    </div>
  )
}
