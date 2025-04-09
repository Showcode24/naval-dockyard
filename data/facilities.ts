import { ConeIcon as Crane, Ruler, Droplets, Cog, Hammer, Zap } from "lucide-react";

export const facilitiesData = {
  overview:
    "Naval Dockyard operates one of the most advanced ship repair and maintenance facilities on the East Coast. Our 75-acre waterfront complex includes multiple dry docks, fabrication shops, and specialized repair facilities equipped with state-of-the-art technology.",

  highlights: [
    "75-acre waterfront facility with deep-water access.",
    "Multiple dry docks capable of handling vessels up to 300 meters.",
    "24/7 operations with emergency repair capabilities.",
    "Advanced fabrication and machining facilities.",
    "Environmentally compliant waste management systems.",
    "Secure facilities for military vessel servicing.",
  ],

  facilities: [
    {
      title: "Main Graving Dock & Twin Dock",
      description:
        "Our largest dry docking facility, capable of handling vessels up to 300 meters in length. Suitable for naval destroyers, commercial tankers, and large container ships, the dock is engineered for precision, safety, and efficiency.",
      image: "/images/img/dry-docking-2.webp",
      features: [
        "Computer-controlled pumping system for accurate docking.",
        "Advanced hull cleaning and surface preparation equipment.",
        "Full overhead crane coverage for heavy component handling.",
        "Integrated environmental containment and filtration systems.",
      ],
      specs: [
        "Length: 300m",
        "Width: 45m",
        "Depth: 15m",
        "Lifting Capacity: 40,000 tons",
      ],
    },
    {
      title: "Fabrication Workshop",
      description:
        "A state-of-the-art metal fabrication facility designed for high-precision work with steel, aluminum, and specialty alloys. From small custom fittings to large structural assemblies, this workshop supports diverse fabrication needs.",
      image: "/images/img/fabrication.webp",
      features: [
        "Heavy engineering bays.",
        "Dedicated steel workshop.",
        "Certified electrical and mechanical sections.",
        "Integrated foundry and galvanizing units.",
        "Automobile and electroplating divisions.",
      ],
      specs: [
        "Workshop Area: 15,000 sq.m",
        "Overhead Crane Capacity: 50 tons",
        "Maximum Plate Thickness: 100mm",
        "Welding Certifications: All major classifications",
      ],
    },
  ],

  equipment: [
    {
      title: "Heavy Duty Equipment",
      description: "Fleet of mobile and fixed cranes for handling heavy components throughout the facility.",
      capabilities: "Lifting capacity up to 300 tons, precision placement within 5mm.",
      icon: Crane,
    },
    {
      title: "CNC Machining Center",
      description: "Advanced computer-controlled machining equipment for precision component manufacturing and repair.",
      capabilities:
        "5-axis machining, tolerances to 0.01mm, materials including steel, aluminum, bronze, and composites.",
      icon: Cog,
    },
    {
      title: "Hydraulic Systems",
      description:
        "Specialized equipment for testing, repair, and calibration of hydraulic systems used in marine applications.",
      capabilities:
        "Pressure testing up to 10,000 psi, flow rates up to 500 GPM, contamination analysis to ISO standards.",
      icon: Droplets,
    },
    {
      title: "Welding & Cutting",
      description: "State-of-the-art welding and cutting equipment for all types of marine metals and thicknesses.",
      capabilities:
        "All welding processes including SMAW, GMAW, GTAW, FCAW, and submerged arc; certified to international standards.",
      icon: Hammer,
    },
    {
      title: "Electrical Systems",
      description:
        "Comprehensive electrical testing and repair facilities for marine power generation and distribution systems.",
      capabilities:
        "Testing and repair of generators up to 15MW, switchgear, automation systems, and navigation equipment.",
      icon: Zap,
    },
    {
      title: "Dimensional Inspection",
      description: "Advanced metrology equipment for precise measurement and alignment verification.",
      capabilities:
        "Laser tracking with accuracy to 0.025mm, 3D scanning for reverse engineering, shaft alignment to 0.001mm.",
      icon: Ruler,
    },
  ],
};
