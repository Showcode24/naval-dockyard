import { Wrench, Droplets, Hammer, Ruler, Cog } from "lucide-react"

export const serviceData = {
  categories: [
    {
      title: "Ship Repair & Maintenance",
      slug: "ship-repair",
      description:
        "Our comprehensive ship repair and maintenance services are designed to keep your vessel operating at peak performance. With experienced engineers and advanced equipment, we handle everything from routine maintenance to complex repairs.",
      icon: Wrench,
      image: "/images/services/ship-repair-large.jpg",
      features: [
        {
          title: "Hull, Deck & Superstructure Repairs",
          description:
            "Complete structural repairs for all vessel types, including hull damage repair, deck reconstruction, and superstructure modifications.",
        },
        {
          title: "Propulsion System Servicing",
          description:
            "Comprehensive maintenance and repair of engines, shafts, propellers, and all propulsion-related systems.",
        },
        {
          title: "Electrical & Electronic Systems Upgrades",
          description:
            "Installation, repair, and upgrading of electrical systems, navigation equipment, and communication technology.",
        },
        {
          title: "Preventative Maintenance Programs",
          description:
            "Scheduled maintenance services designed to prevent failures and extend the operational life of your vessel.",
        },
      ],
    },
    {
      title: "Dry Docking & Vessel Overhauls",
      slug: "dry-docking",
      description:
        "Our advanced dry dock facilities enable complete vessel overhauls and thorough inspections. We provide comprehensive services to ensure your vessel meets all regulatory requirements and operates at maximum efficiency.",
      icon: Droplets,
      image: "/images/services/dry-dock-large.jpg",
      features: [
        {
          title: "Full Docking & Undocking Services",
          description:
            "Safe and efficient docking operations for vessels of various sizes, from small patrol boats to large commercial ships.",
        },
        {
          title: "Blasting & Painting",
          description:
            "Surface preparation, including abrasive blasting, and application of marine-grade coating systems to protect hull surfaces.",
        },
        {
          title: "Hull Protection & Anti-Fouling Coating",
          description:
            "Application of specialized coatings to protect against corrosion and marine growth, improving fuel efficiency and vessel performance.",
        },
        {
          title: "Complete Vessel Overhauls",
          description:
            "Comprehensive refurbishment of vessels, including all systems, structures, and components to extend operational life.",
        },
      ],
    },
    {
      title: "Fabrication & Engineering",
      slug: "fabrication",
      description:
        "Our fabrication team specializes in custom metal fabrication and engineering solutions for marine applications. We combine traditional craftsmanship with advanced technology to deliver precision components for any vessel type.",
      icon: Hammer,
      image: "/images/services/fabrication-large.jpg",
      features: [
        {
          title: "Custom Metal Fabrication",
          description:
            "Design and fabrication of custom metal components, structures, and systems for marine applications.",
        },
        {
          title: "Welding & Structural Engineering",
          description:
            "Specialized welding services for all marine metals, including aluminum, steel, and exotic alloys, with full structural engineering capabilities.",
        },
        {
          title: "Pipe Fitting and Production",
          description:
            "Manufacturing and installation of complex piping systems for all vessel applications, including fuel, water, and hydraulic systems.",
        },
        {
          title: "Precision Machining",
          description:
            "CNC machining services for high-precision components, ensuring exact specifications for critical parts.",
        },
      ],
    },
    {
      title: "Ship Design & Construction & Marine Engineering",
      slug: "naval-architecture",
      description:
        "Our experienced naval architects and marine engineers provide expert consultation for new builds, modifications, and performance analysis to optimize your vessel's operation and compliance with regulations.",
      icon: Ruler,
      image: "/images/services/naval-architecture-large.jpg",
      features: [
        {
          title: "Consultation for New Builds & Modifications",
          description:
            "Expert guidance throughout the planning and execution of new vessel construction or existing vessel modifications.",
        },
        {
          title: "3D Modeling & Simulation",
          description:
            "Advanced 3D modeling and computer simulations to visualize designs and predict performance before construction begins.",
        },
        {
          title: "Performance Analysis",
          description:
            "Comprehensive analysis of vessel performance, including stability, propulsion efficiency, and seakeeping characteristics.",
        },
        {
          title: "Regulatory Compliance Support",
          description:
            "Assistance with navigating complex maritime regulations and ensuring all designs meet applicable standards and requirements.",
        },
      ],
    },
    {
      title: "Offshore & Oil & Gas Support",
      slug: "offshore-support",
      description:
        "We provide specialized maintenance and repair services for offshore platforms, subsea infrastructure, and related marine equipment, ensuring safe and efficient operations in challenging environments.",
      icon: Cog,
      image: "/images/services/offshore-large.jpg",
      features: [
        {
          title: "Maintenance & Repair for Offshore Platforms",
          description:
            "Comprehensive inspection, maintenance, and repair services for fixed and floating offshore structures.",
        },
        {
          title: "Pipeline & Subsea Infrastructure Support",
          description: "Installation, maintenance, and repair of underwater pipelines and associated subsea equipment.",
        },
        {
          title: "Equipment Installations",
          description:
            "Professional installation of specialized equipment on offshore platforms and vessels, including cranes, winches, and drilling equipment.",
        },
        {
          title: "Safety System Upgrades",
          description:
            "Upgrading and maintenance of critical safety systems for offshore installations, ensuring compliance with international standards.",
        },
      ],
    },
  ],
}

