export type Service = {
  slug: string
  name: string
  description: string
  features: string[]
  equipment: string[]
}

export const services: Service[] = [
  {
    slug: 'well-testing-packages',
    name: 'Well Testing Packages',
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
      'Test Separators',
      'Multiphase Flow Meters',
      'Data Acquisition Systems',
      'Emergency Shutdown (ESD) Systems',
      'Burner Booms',
    ],
  },
  {
    slug: 'downhole-completion',
    name: 'Downhole Completion',
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
      'Production Packers',
      'Bridge Plugs',
      'Sliding Sleeves',
      'Flow Control Accessories',
      'Check Valves',
    ],
  },
  {
    slug: 'artificial-lift-pump-systems',
    name: 'Artificial Lift & Pump Systems',
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
      'Jet Pumps',
      'Downhole Hydraulic Pumps',
      'Surface Power Units',
      'High-Pressure Piping',
      'Integrated Control Systems',
    ],
  },
  {
    slug: 'early-production-facilities',
    name: 'Early Production Facilities',
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
      'Modular Process Units',
      'Inlet Manifolds',
      'Production Separators',
      'Storage Tanks',
      'Metering Skids',
    ],
  },
  {
    slug: 'gas-processing',
    name: 'Gas Processing',
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
      'Glycol Dehydration Units',
      'Amine Contactors',
      'Filter Separators',
      'Heat Exchangers',
      'Reboilers',
    ],
  },
  {
    slug: 'compression-systems',
    name: 'Compression Systems',
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
      'Reciprocating Compressors',
      'Screw Compressors',
      'Gas Coolers',
      'Inlet Scrubbers',
      'Control & Instrumentation Panels',
    ],
  },
  {
    slug: 'flared-gas-to-energy',
    name: 'Flared Gas to Energy',
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
      'Gas Capture Units',
      'Power Generation Modules',
      'Emissions Reduction Systems',
      'Energy Recovery Systems',
      'Control Panels',
    ],
  },
  {
    slug: 'surface-pumping-system',
    name: 'Surface Pumping System',
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
      'Triplex Pumps',
      'Quintuplex Pumps',
      'Power Fluid Tanks',
      'Drive Skids',
      'Control Cabinets',
    ],
  },
  {
    slug: 'downhole-jet-pump-system',
    name: 'Downhole Jet Pump System',
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
      'Jet Pump Assemblies',
      'Throat & Nozzle Sets',
      'Bottom Hole Assemblies',
      'Standing Valves',
      'Retrieval Tools',
    ],
  },
  {
    slug: 'well-performance-measurement-system',
    name: 'Well Performance Measurement System',
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
      'Surface Sensors',
      'Downhole Gauges',
      'Data Loggers',
      'Telemetry Modules',
      'Analysis Software',
    ],
  },
  {
    slug: 'fluid-level-dynamometer-test',
    name: 'Fluid Level & Dynamometer Test',
    description:
      'Diagnostic services for measuring fluid levels and rod-load behavior in pumping wells, supporting production optimization and equipment troubleshooting.',
    features: [
      'Acoustic fluid-level surveys',
      'Surface and downhole dynamometer cards',
      'Pump efficiency analysis',
      'Field-portable equipment',
      'On-site reporting and recommendations',
    ],
    equipment: [
      'Acoustic Gun Assemblies',
      'Surface Load Cells',
      'Position Transducers',
      'Field Laptops',
      'Reporting Software',
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
