import { ConeIcon as Crane, Ruler, Droplets, Cog, Hammer, Zap } from "lucide-react"

export const facilitiesData = {
  overview:
    "Naval Dockyard operates one of the most advanced ship repair and maintenance facilities on the East Coast. Our 75-acre waterfront complex includes multiple dry docks, fabrication shops, and specialized repair facilities equipped with state-of-the-art technology.",

  highlights: [
    "75-acre waterfront facility with deep-water access",
    "Multiple dry docks capable of handling vessels up to 300 meters",
    "24/7 operations with emergency repair capabilities",
    "Advanced fabrication and machining facilities",
    "Environmentally compliant waste management systems",
    "Secure facilities for military vessel servicing",
  ],

  facilities: [
    {
      title: "Main Dry Dock",
      description:
        "Our largest dry dock facility capable of accommodating vessels up to 300 meters in length, including naval destroyers, commercial tankers, and container ships.",
      image: "/images/img/dry-docking-2.webp",
      features: [
        "Computer-controlled pumping system for precise docking",
        "Advanced hull cleaning and preparation equipment",
        "Overhead crane coverage for heavy component handling",
        "Integrated environmental containment systems",
      ],
      specs: ["Length: 300m", "Width: 45m", "Depth: 15m", "Lifting capacity: 40,000 tons"],
    },
    {
      title: "Fabrication Workshop",
      description:
        "Comprehensive metal fabrication facility equipped for steel, aluminum, and specialty alloy work. Capable of producing custom components from small fittings to large structural elements.",
      image: "/images/img/fabrication.webp",
      features: [
        "CNC plasma and water jet cutting systems",
        "Automated welding stations for precision work",
        "Heat treatment facilities for specialty metals",
        "Quality control testing lab with non-destructive testing capabilities",
      ],
      specs: [
        "Workshop area: 15,000 sq.m",
        "Overhead crane capacity: 50 tons",
        "Maximum plate thickness: 100mm",
        "Welding certifications: All major classifications",
      ],
    },
    {
      title: "Engine Repair Center",
      description:
        "Specialized facility for marine propulsion system overhaul and repair, capable of servicing everything from small auxiliary engines to large main propulsion systems.",
      image: "/images/img/engine-repair.webp",
      features: [
        "Engine test beds for performance verification",
        "Precision machining for component repair",
        "Specialized tools for all major engine manufacturers",
        "Fuel system calibration and testing equipment",
      ],
      specs: [
        "Service area: 8,000 sq.m",
        "Engine capacity: Up to 80,000 HP",
        "Dynamometer testing: Up to 20,000 HP",
        "OEM certified technicians",
      ],
    },
    {
      title: "Surface Treatment Facility",
      description:
        "Environmentally controlled facility for surface preparation, painting, and coating application. Features advanced containment systems to prevent environmental contamination.",
      image: "/images/img/electroplating.webp",
      features: [
        "Automated blasting systems for hull preparation",
        "Climate-controlled paint application chambers",
        "Specialized coating systems for underwater applications",
        "Environmental filtration and waste recovery systems",
      ],
      specs: [
        "Treatment area: 12,000 sq.m",
        "Temperature control: 15-30°C",
        "Humidity control: 30-70%",
        "Dust containment: <1mg/m³",
      ],
    },
  ],

  equipment: [
    {
      title: "Heavy Lifting Equipment",
      description: "Fleet of mobile and fixed cranes for handling heavy components throughout the facility.",
      capabilities: "Lifting capacity up to 300 tons, precision placement within 5mm",
      icon: Crane,
    },
    {
      title: "CNC Machining Center",
      description: "Advanced computer-controlled machining equipment for precision component manufacturing and repair.",
      capabilities:
        "5-axis machining, tolerances to 0.01mm, materials including steel, aluminum, bronze, and composites",
      icon: Cog,
    },
    {
      title: "Hydraulic Systems",
      description:
        "Specialized equipment for testing, repair, and calibration of hydraulic systems used in marine applications.",
      capabilities:
        "Pressure testing up to 10,000 psi, flow rates up to 500 GPM, contamination analysis to ISO standards",
      icon: Droplets,
    },
    {
      title: "Welding & Cutting",
      description: "State-of-the-art welding and cutting equipment for all types of marine metals and thicknesses.",
      capabilities:
        "All welding processes including SMAW, GMAW, GTAW, FCAW, and submerged arc, certified to international standards",
      icon: Hammer,
    },
    {
      title: "Electrical Systems",
      description:
        "Comprehensive electrical testing and repair facilities for marine power generation and distribution systems.",
      capabilities:
        "Testing and repair of generators up to 15MW, switchgear, automation systems, and navigation equipment",
      icon: Zap,
    },
    {
      title: "Dimensional Inspection",
      description: "Advanced metrology equipment for precise measurement and alignment verification.",
      capabilities:
        "Laser tracking with accuracy to 0.025mm, 3D scanning for reverse engineering, shaft alignment to 0.001mm",
      icon: Ruler,
    },
  ],
}

