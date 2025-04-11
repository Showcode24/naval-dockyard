import { Wrench, Droplets, Hammer, Ruler, Cog, Zap, Shield } from 'lucide-react'

export const serviceData = {
  categories: [
    {
      title: "Ship Repair & Maintenance",
      slug: "ship-repair",
      description:
        "Our comprehensive ship repair and maintenance services are designed to keep your vessel operating at peak performance. With experienced engineers and advanced equipment, we handle everything from routine maintenance to complex repairs.",
      icon: Wrench,
      image: "/images/img/ship-repair.webp",
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
      image: "/images/img/dry-docking.webp",
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
      image: "/images/img/fabrication.webp",
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
      image: "/images/img/ship-design.webp",
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
      title: "Electroplating",
      slug: "electroplating",
      description:
        "Our advanced electroplating services provide superior corrosion resistance and aesthetic finishes for marine components. Using state-of-the-art technology, we deliver high-quality metal coatings that extend component life in harsh saltwater environments.",
      icon: Zap,
      image: "/images/img/electroplating.webp",
      features: [
        {
          title: "Copper, Nickel & Chrome Plating",
          description:
            "Multi-layer plating processes that provide both decorative finishes and enhanced corrosion protection for marine components.",
        },
        {
          title: "Precious Metal Plating",
          description:
            "Gold, silver, and other precious metal plating for specialized applications requiring superior conductivity and corrosion resistance.",
        },
        {
          title: "Corrosion-Resistant Coatings",
          description:
            "Specialized electroplating solutions designed specifically for the marine environment, providing maximum protection against saltwater corrosion.",
        },
        {
          title: "Custom Specifications for Marine Environments",
          description:
            "Tailored electroplating services to meet specific requirements for thickness, hardness, and performance in challenging marine conditions.",
        },
      ],
    },
    {
      title: "Galvanizing",
      slug: "galvanizing",
      description:
        "Our industrial-scale hot-dip galvanizing services provide long-lasting protection against corrosion for steel components used in marine and offshore applications. This process creates a metallurgically bonded zinc coating that shields steel from harsh environmental conditions.",
      icon: Shield,
      image: "/images/electroplating/electroplating-03.webp",
      features: [
        {
          title: "Hot-Dip Galvanizing for Steel Structures",
          description:
            "Immersion of steel components in molten zinc to create a durable, long-lasting protective coating that prevents corrosion in marine environments.",
        },
        {
          title: "Batch Processing for Small Components",
          description:
            "Efficient processing of large quantities of smaller components, ensuring consistent quality and corrosion protection across all parts.",
        },
        {
          title: "Quality Testing & Certification",
          description:
            "Comprehensive testing of galvanized coatings for thickness, adhesion, and uniformity, with certification to relevant marine standards.",
        },
        {
          title: "Extended Lifespan for Marine Metal Components",
          description:
            "Significantly increased service life for steel components exposed to saltwater and harsh weather conditions, reducing maintenance costs and downtime.",
        },
      ],
    },
    // {
    //   title: "Offshore & Oil & Gas Support",
    //   slug: "offshore-support",
    //   description:
    //     "We provide specialized maintenance and repair services for offshore platforms, subsea infrastructure, and related marine equipment, ensuring safe and efficient operations in challenging environments.",
    //   icon: Cog,
    //   image: "/images/img/offshore-large.webp",
    //   features: [
    //     {
    //       title: "Maintenance & Repair for Offshore Platforms",
    //       description:
    //         "Comprehensive inspection, maintenance, and repair services for fixed and floating offshore structures.",
    //     },
    //     {
    //       title: "Pipeline & Subsea Infrastructure Support",
    //       description: "Installation, maintenance, and repair of underwater pipelines and associated subsea equipment.",
    //     },
    //     {
    //       title: "Equipment Installations",
    //       description:
    //         "Professional installation of specialized equipment on offshore platforms and vessels, including cranes, winches, and drilling equipment.",
    //     },
    //     {
    //       title: "Safety System Upgrades",
    //       description:
    //         "Upgrading and maintenance of critical safety systems for offshore installations, ensuring compliance with international standards.",
    //     },
    //   ],
    // },
  ],
}