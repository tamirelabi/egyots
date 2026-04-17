'use client'

import { useEffect, useRef } from 'react'

const locations = [
  { name: 'Alexandria, Egypt', lat: 31.20, lon: 29.92, service: 'Manufacturing Facility', detail: 'ASME pressure vessel fabrication, API certified manufacturing, Alexandria Free Zone' },
  { name: 'Cairo, Egypt', lat: 30.04, lon: 31.24, service: 'Main Office & Manufacturing', detail: 'Completion tools, well testing packages, early production facilities' },
  { name: 'Tripoli, Libya', lat: 32.89, lon: 13.18, service: 'Gas Processing Projects', detail: 'Gas separation units, line heaters, choke manifolds' },
  { name: 'Riyadh, Saudi Arabia', lat: 24.69, lon: 46.72, service: 'Downhole Completion Tools', detail: 'Packers, bridge plugs, flow control equipment for major NOC projects' },
  { name: 'Abu Dhabi, UAE', lat: 24.45, lon: 54.37, service: 'Well Testing Packages', detail: 'Surface well testing equipment, data acquisition systems, ESD systems' },
  { name: 'Basra, Iraq', lat: 30.51, lon: 47.82, service: 'Early Production Facilities', detail: 'Modular production units, fast-track field development, integrated safety systems' },
  { name: 'Muscat, Oman', lat: 23.61, lon: 58.59, service: 'Compression Systems', detail: 'Gas compression packages, power generation units, pipeline compression' },
  { name: 'Tunis, Tunisia', lat: 36.82, lon: 10.16, service: 'Flow Control Equipment', detail: 'Sliding sleeves, subsurface safety valves, wellhead equipment' },
  { name: 'Amman, Jordan', lat: 31.95, lon: 35.93, service: 'Flared Gas to Energy', detail: 'Gas capture units, power generation modules, emissions reduction systems' },
  { name: 'Rio de Janeiro, Brazil', lat: -22.91, lon: -43.17, service: 'Artificial Lift Systems', detail: 'Jet pump systems, downhole hydraulic pumps, surface power units' },
]

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = reject
    document.head.appendChild(s)
  })
}

export default function GlobalMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const ttRef = useRef<HTMLDivElement>(null)
  const rendered = useRef(false)

  useEffect(() => {
    if (rendered.current) return
    rendered.current = true

    const container = containerRef.current!
    const svgEl = svgRef.current!
    const tt = ttRef.current!

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js'),
    ]).then(() => {
      const d3 = (window as any).d3
      const topojson = (window as any).topojson

      const W = container.offsetWidth || 900
      const H = Math.round(W * 0.46)

      const svg = d3.select(svgEl)
        .attr('width', W)
        .attr('height', H)
        .attr('viewBox', `0 0 ${W} ${H}`)

      const proj = d3.geoNaturalEarth1()
        .scale(W / 5.6)
        .translate([W / 2, H / 1.7])

      const path = d3.geoPath().projection(proj)

      d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((world: any) => {
        const countries = topojson.feature(world, world.objects.countries)
        const borders = topojson.mesh(world, world.objects.countries, (a: any, b: any) => a !== b)

        svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#1a2535')

        svg.selectAll('.land')
          .data(countries.features)
          .enter().append('path')
          .attr('d', path)
          .attr('fill', '#2e3f52')
          .attr('stroke', '#1a2535')
          .attr('stroke-width', 0.5)

        svg.append('path')
          .datum(borders)
          .attr('d', path)
          .attr('fill', 'none')
          .attr('stroke', '#1a2535')
          .attr('stroke-width', 0.4)

        const pulseGroup = svg.append('g')
        const dotGroup = svg.append('g')

        locations.forEach((loc) => {
          const pos = proj([loc.lon, loc.lat])
          if (!pos) return

          pulseGroup.append('circle')
            .attr('cx', pos[0]).attr('cy', pos[1]).attr('r', 8)
            .attr('fill', '#3C6E4A').attr('opacity', 0.3)
            .attr('class', 'pulse-ring')

          dotGroup.append('circle')
            .attr('cx', pos[0]).attr('cy', pos[1]).attr('r', 5)
            .attr('fill', '#A7D09A').attr('stroke', '#3C6E4A').attr('stroke-width', 1.5)
            .style('cursor', 'pointer')
            .on('mouseenter', function (this: SVGCircleElement) {
              d3.select(this).transition().duration(150).attr('r', 7).attr('fill', '#3C6E4A')
              tt.innerHTML = `
                <div style="font-weight:600;font-size:14px;color:#A7D09A;margin-bottom:4px">${loc.name}</div>
                <div style="color:#ddd;font-size:12px">${loc.service}</div>
                <div style="color:#999;font-size:11px;margin-top:3px">${loc.detail}</div>`
              tt.style.opacity = '1'
            })
            .on('mousemove', function (event: MouseEvent) {
              const r = container.getBoundingClientRect()
              let x = event.clientX - r.left + 14
              let y = event.clientY - r.top - 10
              if (x + 250 > r.width) x = x - 264
              if (y < 0) y = 10
              tt.style.left = x + 'px'
              tt.style.top = y + 'px'
            })
            .on('mouseleave', function (this: SVGCircleElement) {
              d3.select(this).transition().duration(150).attr('r', 5).attr('fill', '#A7D09A')
              tt.style.opacity = '0'
            })
        })

        function animatePulse() {
          pulseGroup.selectAll('.pulse-ring')
            .attr('r', 8).attr('opacity', 0.3)
            .transition().duration(1800).ease(d3.easeCubicOut)
            .attr('r', 18).attr('opacity', 0)
            .on('end', animatePulse)
        }
        animatePulse()
      })
    })
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', background: '#1a2535', borderRadius: '12px', overflow: 'hidden' }}
    >
      <div
        ref={ttRef}
        style={{
          position: 'absolute',
          background: '#111',
          color: '#fff',
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '13px',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.15s',
          maxWidth: '240px',
          zIndex: 20,
          lineHeight: '1.6',
          border: '1px solid #3C6E4A',
        }}
      />
      <svg ref={svgRef} style={{ width: '100%', display: 'block' }} />
    </div>
  )
}
