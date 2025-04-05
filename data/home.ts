import type React from "react"
import { Anchor, Wrench, Ruler, Shield, Ship, Droplets, Hammer, Cog } from "lucide-react"

// Hero section data
export const heroData = {
  headline: "Naval Dockyard Limited: Excellence in Maritime Engineering",
  subheadline:
    "Providing world-class ship repair, maintenance, and engineering services to the Nigerian Navy and commercial maritime sector across West Africa.",
  primaryCTA: "Request Our Services",
  secondaryCTA: "Explore Our Capabilities",
}

// Stats section data
export interface StatItem {
  value: number
  label: string
  description: string
  icon: React.ElementType
}

export const statsData: StatItem[] = [
  {
    value: 120,
    label: "Ships Serviced Annually",
    description: "Naval and commercial vessels maintained each year",
    icon: Ship,
  },
  {
    value: 35,
    label: "Active Naval Projects",
    description: "Current military vessel projects in progress",
    icon: Shield,
  },
  {
    value: 450,
    label: "Civilian Vessels Completed",
    description: "Commercial vessels successfully serviced",
    icon: Anchor,
  },
]

// Service summary for homepage
export interface ServiceSummary {
  title: string
  description: string
  extendedDescription: string
  image: string
  icon: React.ElementType
  features: string[]
}

export const serviceSummaryData: ServiceSummary[] = [
  {
    title: "Ship Repair & Maintenance",
    description: "Comprehensive repair services for naval and commercial vessels",
    extendedDescription:
      "Our ship repair and maintenance services cover everything from hull repairs to complex propulsion system servicing for both military and commercial vessels.",
    image: "/images/services/ship-repair.jpg",
    icon: Wrench,
    features: [
      "Hull, deck & superstructure repairs",
      "Propulsion system servicing",
      "Electrical & electronic systems upgrades",
      "Preventative maintenance programs",
    ],
  },
  {
    title: "Dry Docking & Vessel Overhauls",
    description: "Complete vessel overhauls and dry docking services",
    extendedDescription:
      "With advanced dry dock facilities, we provide full docking services for vessels of various sizes operating in West African waters.",
    image: "/images/services/dry-dock.jpg",
    icon: Droplets,
    features: [
      "Full docking & undocking services",
      "Blasting & painting",
      "Hull protection & anti-fouling coating",
      "Complete vessel overhauls",
    ],
  },
  {
    title: "Fabrication & Engineering",
    description: "Custom metal fabrication and engineering solutions",
    extendedDescription:
      "Our fabrication and engineering team can create custom solutions for any vessel requirements, utilizing locally sourced materials where possible.",
    image: "/images/services/fabrication.jpg",
    icon: Hammer,
    features: [
      "Custom metal fabrication",
      "Welding & structural engineering",
      "Pipe fitting and production",
      "Precision machining",
    ],
  },
  {
    title: "Naval Architecture",
    description: "Expert naval architecture and design services",
    extendedDescription:
      "Our naval architects provide consultation for new builds, modifications, and vessel performance analysis tailored to West African maritime conditions.",
    image: "/images/services/naval-architecture.jpg",
    icon: Ruler,
    features: [
      "Consultation for new builds & modifications",
      "3D modeling & simulation",
      "Performance analysis",
      "Regulatory compliance support",
    ],
  },
  {
    title: "Offshore & Oil & Gas Support",
    description: "Specialized services for Nigeria's offshore industry",
    extendedDescription:
      "We provide comprehensive maintenance and repair services for offshore platforms and related infrastructure supporting Nigeria's vital oil and gas industry.",
    image: "/images/services/offshore.jpg",
    icon: Cog,
    features: [
      "Maintenance & repair for offshore platforms",
      "Pipeline & subsea infrastructure support",
      "Equipment installations",
      "Safety system upgrades",
    ],
  },
]

// Testimonial data
export interface Testimonial {
  name: string
  position: string
  quote: string
}

export const testimonialData: Testimonial[] = [
  {
    name: "Rear Admiral Ibrahim Adamu",
    position: "Nigerian Navy Fleet Commander",
    quote:
      "Naval Dockyard Limited has consistently delivered exceptional repair and maintenance services for our naval vessels. Their attention to detail and commitment to quality is unmatched in the region.",
  },
  {
    name: "Mrs. Amina Okonkwo",
    position: "Fleet Manager, West African Shipping Lines",
    quote:
      "We've been working with Naval Dockyard Limited for over 5 years, and they've never let us down. Their team's expertise and efficiency have saved us both time and money on our commercial fleet maintenance.",
  },
  {
    name: "Dr. Emmanuel Okafor",
    position: "Director of Operations, Niger Delta Oil & Gas",
    quote:
      "For offshore platform maintenance, Naval Dockyard Limited has been our trusted partner. Their specialized knowledge of marine engineering has been invaluable to our operations in the Niger Delta.",
  },
  {
    name: "Captain Oluwaseun Adeyemi",
    position: "Vessel Owner",
    quote:
      "The quality of work and personal attention I received for my vessel's overhaul was extraordinary. The team at Naval Dockyard Limited treats every ship with the same level of care, regardless of size.",
  },
]

// Clients data
export interface Client {
  name: string
  logo: string
  highlighted: boolean
}

export const clientsData: Client[] = [
  {
    name: "Nigerian Navy",
    logo: "/images/clients/navy-logo.png",
    highlighted: true,
  },
  {
    name: "West African Shipping Lines",
    logo: "/images/clients/shipping-logo.png",
    highlighted: false,
  },
  {
    name: "Lagos Maritime Authority",
    logo: "/images/clients/maritime-logo.png",
    highlighted: false,
  },
  {
    name: "Niger Delta Oil & Gas",
    logo: "/images/clients/oil-gas-logo.png",
    highlighted: false,
  },
  {
    name: "Nigerian Maritime Administration",
    logo: "/images/clients/defense-logo.png",
    highlighted: false,
  },
  {
    name: "Gulf of Guinea Security Initiative",
    logo: "/images/clients/marine-logo.png",
    highlighted: false,
  },
]

// Call To Action data
export const ctaData = {
  headline: "Ready to Ensure Your Vessel's Peak Performance?",
  description:
    "From routine maintenance to complete overhauls, our expert team is ready to keep your fleet operating at its best in West African waters.",
  primaryButtonText: "Request a Quote",
  primaryButtonLink: "/contact",
  secondaryButtonText: "Learn More",
  secondaryButtonLink: "/services",
}

export const heroSlidesData = [
  {
    headline: "Excellence in Naval Engineering & Ship Repair",
    subheadline:
      "Providing comprehensive maintenance, repair, and overhaul services for naval and commercial vessels with precision and reliability.",
    primaryCTA: "Request a Quote",
    primaryCTALink: "/contact",
    secondaryCTA: "Explore Services",
    secondaryCTALink: "/services",
    image: "/hero.jpg",
  },
  {
    headline: "State-of-the-Art Dry Docking Facilities",
    subheadline:
      "Our modern facilities can accommodate vessels of all sizes, ensuring efficient and timely maintenance and repairs.",
    primaryCTA: "Schedule Inspection",
    primaryCTALink: "/schedule",
    secondaryCTA: "View Facilities",
    secondaryCTALink: "/facilities",
    image: "/placeholder.svg",
  },
  {
    headline: "Expert Engineering & Technical Teams",
    subheadline:
      "Our highly skilled engineers and technicians bring decades of experience to every project, ensuring the highest quality standards.",
    primaryCTA: "Meet Our Team",
    primaryCTALink: "/team",
    secondaryCTA: "Our Expertise",
    secondaryCTALink: "/expertise",
    image: "/placeholder.svg",
  },
]

