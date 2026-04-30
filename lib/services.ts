import type { LucideIcon } from 'lucide-react'
import {
  Gauge,
  Wrench,
  Droplets,
  Factory,
  Flame,
  Settings,
  Zap,
  Cog,
  Droplet,
  Activity,
  LineChart,
} from 'lucide-react'

export type Service = {
  slug: string
  name: string
  icon: LucideIcon
  shortDescription: string
  description: string
  features: string[]
  equipment: string[]
}

export const services: Service[] = [
  {
    slug: 'well-testing-packages',
    name: 'Well Testing Packages',
    icon: Gauge,
    shortDescription: 'Advanced surface well testing equipment for accurate data acquisition.',
    description:
      'Complete surface well testing equipment packages for accurate reservoir evaluation and data acquisition. Designed for safe, reliable operation in demanding field conditions.',
    features: [
      'Multiphase flow measurement',
      'Real-time data acquisition',
      'Emergency shutdown integration',
      'Modular skid-mounted design',
      'Compliance with API and ASME standards',
    ],
    equipment: [
      'Three Phase Separator',
      'Inlet Manifolds',
      'Indirect Heaters',
      'Surge Vessels',
      'Gas Conditioning Units',
      'Choke Manifolds',
      'Line Heaters',
      'Well Test Packages 5K PSI',
      'Well Test Packages 10K PSI',
      'Testing Mobile Unit (TMU)',
      'Fuel Gas Skid',
      'Sand Filters',
    ],
  },
  {
    slug: 'downhole-completion',
    name: 'Downhole Completion',
    icon: Wrench,
    shortDescription: 'Reliable downhole completion tools including packers, bridge plugs, and flow control accessories.',
    description:
      'High-performance downhole tools for reliable well completion and intervention operations across a wide range of environments.',
    features: [
      'Wide pressure and temperature ratings',
      'Configurable to standard tubing sizes',
      'Permanent and retrievable variants',
      'API-compliant materials',
      'Field-proven reliability',
    ],
    equipment: [
      'Retrievable and Permanent Packers',
      'Bridge Plugs',
      'Flow Control Equipment',
      'Landing Nipples',
      'Sliding Sleeve Door',
      'Completion Packer',
      'Anchor Catcher',
      'Downhole Flow Control Equipment',
      'Vent Valves',
      'X-Overs',
      'Check Valves',
    ],
  },
  {
    slug: 'artificial-lift-pump-systems',
    name: 'Artificial Lift & Pump Systems',
    icon: Droplets,
    shortDescription: 'Integrated artificial lift solutions including jet pumps, hydraulic units, and surface power systems.',
    description:
      'Integrated artificial lift solutions including jet pumps, hydraulic units, and surface power systems engineered to optimize production rates across a wide range of well conditions.',
    features: [
      'High-volume hydraulic and jet pump options',
      'Modular surface power units',
      'Integrated control and monitoring',
      'Adaptable to varying reservoir characteristics',
      'Designed for long service intervals',
    ],
    equipment: [
      'Jet Pump Surface Packages',
      'Downhole Jet Pump',
    ],
  },
  {
    slug: 'early-production-facilities',
    name: 'Early Production Facilities',
    icon: Factory,
    shortDescription: 'Modular production systems for fast-track field development.',
    description:
      'Fast-track modular production facilities designed for rapid field development and early cash flow. Pre-engineered packages reduce time from discovery to production.',
    features: [
      'Modular skid-mounted design',
      'Rapid deployment and commissioning',
      'Scalable for field expansion',
      'Integrated safety and shutdown systems',
      'Remote monitoring capability',
    ],
    equipment: [
      'Three Phase Separator',
      'Fuel Gas Skid',
      'Inlet Manifolds',
      'Indirect Heaters',
      'Surge Vessels',
      'Gas Conditioning Units',
      'Sand Filters',
      'Coolers',
      'Transfer Pumps',
      'Choke Manifolds',
      'Line Heaters',
      'Compressors',
    ],
  },
  {
    slug: 'gas-processing',
    name: 'Gas Processing',
    icon: Flame,
    shortDescription: 'Integrated solutions for gas treatment, dehydration, and sweetening.',
    description:
      'Integrated solutions for gas treatment, dehydration, and sweetening designed to meet pipeline specifications and downstream processing requirements.',
    features: [
      'Glycol dehydration systems',
      'Amine sweetening units',
      'Particulate and condensate removal',
      'Skid-mounted and modular design',
      'Custom-engineered to feed composition',
    ],
    equipment: [
      'Three Phase Separator',
      'Gas Conditioning Units',
      'Sand Filters',
      'Coolers',
      'Indirect Heaters',
      'Fuel Gas Skid',
      'Choke Manifolds',
      'Compressors',
      'Line Heaters',
    ],
  },
  {
    slug: 'compression-systems',
    name: 'Compression Systems',
    icon: Settings,
    shortDescription: 'High-performance gas compression packages for various applications.',
    description:
      'High-performance gas compression packages for gathering, gas-lift, and pipeline applications. Engineered around reciprocating and screw compressor platforms.',
    features: [
      'Reciprocating and screw compressor options',
      'Gas-engine and electric drive variants',
      'Integrated cooling and scrubbing',
      'Skid-mounted, weatherized enclosures',
      'Remote control and monitoring',
    ],
    equipment: [
      'Compressors',
      'Coolers',
      'Fuel Gas Skid',
      'Gas Conditioning Units',
    ],
  },
  {
    slug: 'flared-gas-to-energy',
    name: 'Flared Gas to Energy',
    icon: Zap,
    shortDescription: 'Innovative systems to capture flared gas and convert it into usable power.',
    description:
      'Sustainable solutions for capturing flared associated gas and converting it into usable electrical or thermal energy, reducing emissions and creating site value.',
    features: [
      'Gas capture and conditioning',
      'Power generation modules',
      'Emissions reduction and reporting',
      'Skid-mounted, deployable units',
      'Tied to local power needs or microgrid',
    ],
    equipment: [
      'Compressors',
      'Gas Conditioning Units',
      'Fuel Gas Skid',
      'Coolers',
      'Transfer Pumps',
    ],
  },
  {
    slug: 'surface-pumping-system',
    name: 'Surface Pumping System',
    icon: Cog,
    shortDescription: 'High-pressure surface power units engineered for hydraulic and jet pump operations.',
    description:
      'High-pressure surface power units engineered to drive hydraulic and jet pump operations. Robust, transportable, and designed for continuous duty.',
    features: [
      'High-pressure triplex and quintuplex pumps',
      'Diesel and electric drive options',
      'Skid-mounted with integrated controls',
      'Closed-loop fluid management',
      'Tied to downhole pump systems',
    ],
    equipment: [
      'Jet Pump Surface Packages',
      'Transfer Pumps',
    ],
  },
  {
    slug: 'downhole-jet-pump-system',
    name: 'Downhole Jet Pump System',
    icon: Droplet,
    shortDescription: 'Hydraulic jet pump assemblies for efficient artificial lift in challenging well conditions.',
    description:
      'Hydraulic jet pump assemblies for efficient artificial lift in challenging well conditions. No moving downhole parts; suitable for deviated and high-temperature wells.',
    features: [
      'No moving downhole parts',
      'Suited to high-temperature and deviated wells',
      'Wide flow-rate envelope',
      'Quick retrieval via fluid circulation',
      'Compatible with standard tubing strings',
    ],
    equipment: [
      'Downhole Jet Pump',
    ],
  },
  {
    slug: 'well-performance-measurement-system',
    name: 'Well Performance Measurement System',
    icon: Activity,
    shortDescription: 'Real-time data acquisition and analysis for production optimization and reservoir insight.',
    description:
      'Real-time data acquisition and analysis platform for production optimization and reservoir insight. Combines surface and downhole measurements into unified diagnostics.',
    features: [
      'Real-time pressure and flow logging',
      'Multi-zone data correlation',
      'Cloud-enabled dashboards',
      'Integration with SCADA systems',
      'Historian and reporting tools',
    ],
    equipment: [
      'Well Test Packages 5K PSI',
      'Well Test Packages 10K PSI',
      'Testing Mobile Unit (TMU)',
    ],
  },
  {
    slug: 'fluid-level-dynamometer-test',
    name: 'Fluid Level & Dynamometer Test',
    icon: LineChart,
    shortDescription: 'Diagnostic tools for measuring fluid levels and rod-load behavior in pumping wells.',
    description:
      'Diagnostic services for measuring fluid levels and rod-load behavior in pumping wells, supporting production optimization and equipment troubleshooting.',
    features: [
      'Acoustic fluid-level surveys',
      'Surface and downhole dynamometer cards',
      'Pump efficiency analysis',
      'Field-portable equipment',
      'On-site reporting and recommendations',
    ],
    equipment: [],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesUsingEquipment(equipmentName: string): Service[] {
  return services.filter((s) => s.equipment.includes(equipmentName))
}
