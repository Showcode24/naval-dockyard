import { PenToolIcon as Tool, Anchor, Cog, Zap, Cpu, Shield, Droplets, Truck } from "lucide-react"

export const procurementData = {
  overview:
    "Naval Dockyard works with a diverse network of suppliers and contractors to support our shipyard operations. We seek reliable partners who can provide quality materials, equipment, and services to help us deliver excellence to our clients.",

  requirements: {
    description:
      "We maintain high standards for our suppliers to ensure the quality and reliability of our services. Potential vendors should meet the following requirements:",
    items: [
      "Demonstrated experience in the maritime industry or related fields",
      "Compliance with relevant industry standards and regulations",
      "Quality management systems and processes",
      "Financial stability and business continuity plans",
      "Commitment to workplace safety and environmental responsibility",
      "Ability to meet delivery schedules and respond to urgent requirements",
      "Competitive pricing and value-added services",
    ],
  },

  categories: [
    {
      name: "Marine Equipment",
      examples: ["Propulsion systems", "Navigation equipment", "Deck machinery", "Safety equipment"],
      icon: Anchor,
    },
    {
      name: "Materials & Supplies",
      examples: ["Steel and metals", "Welding consumables", "Paints and coatings", "Fasteners and fittings"],
      icon: Tool,
    },
    {
      name: "Mechanical Components",
      examples: ["Pumps and valves", "Bearings", "Hydraulic systems", "Cooling systems"],
      icon: Cog,
    },
    {
      name: "Electrical & Electronics",
      examples: ["Power distribution", "Control systems", "Lighting", "Communication equipment"],
      icon: Zap,
    },
    {
      name: "Specialized Services",
      examples: ["NDT testing", "Engineering design", "Environmental services", "Diving services"],
      icon: Shield,
    },
    {
      name: "Equipment Rental",
      examples: ["Cranes and lifts", "Generators", "Compressors", "Scaffolding"],
      icon: Truck,
    },
    {
      name: "IT & Technology",
      examples: ["Software solutions", "Hardware", "Network infrastructure", "Cybersecurity"],
      icon: Cpu,
    },
    {
      name: "Facility Supplies",
      examples: ["Safety equipment", "Cleaning supplies", "Office supplies", "Maintenance materials"],
      icon: Droplets,
    },
  ],

  process: [
    {
      title: "Vendor Registration",
      description: "Complete the online registration form and submit required documentation for initial review.",
    },
    {
      title: "Qualification Review",
      description:
        "Our procurement team evaluates your submission based on our supplier requirements and business needs.",
    },
    {
      title: "Vendor Approval",
      description:
        "Qualified vendors are added to our approved supplier database and may be invited to bid on relevant opportunities.",
    },
    {
      title: "Bid Participation",
      description: "Approved vendors receive notifications of relevant tender opportunities and can submit bids.",
    },
    {
      title: "Contract Award",
      description:
        "Successful bidders are awarded contracts based on evaluation criteria including quality, price, and delivery.",
    },
    {
      title: "Performance Evaluation",
      description:
        "Ongoing assessment of vendor performance to ensure compliance with contract terms and quality standards.",
    },
  ],

  faqs: [
    {
      question: "How long does the vendor registration process take?",
      answer:
        "The initial review of your registration typically takes 5-7 business days. If additional information is required, the process may take longer.",
    },
    {
      question: "Do you have minimum insurance requirements for vendors?",
      answer:
        "Yes, we require vendors to maintain appropriate insurance coverage based on the nature of goods or services provided. Specific requirements will be provided during the registration process.",
    },
    {
      question: "How are vendors notified of new tender opportunities?",
      answer:
        "Approved vendors receive email notifications for tender opportunities that match their product or service categories. All current tenders are also listed on our procurement portal.",
    },
    {
      question: "Can international companies register as vendors?",
      answer:
        "Yes, we welcome international suppliers who meet our requirements and can provide goods or services to our locations.",
    },
  ],
}

