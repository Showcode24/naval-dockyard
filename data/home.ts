import type React from "react";
import {
  Anchor,
  Cog,
  Droplets,
  Hammer,
  Ruler,
  Shield,
  Ship,
  Wrench,
  Zap,
} from "lucide-react";

// Hero section data
export const heroData = {
  headline: "Naval Dockyard Limited: Excellence in Maritime Engineering",
  subheadline:
    "Providing world-class ship repair, maintenance, and engineering services to the Nigerian Navy and commercial maritime sector across West Africa.",
  primaryCTA: "Request Our Services",
  secondaryCTA: "Explore Our Capabilities",
};

// Statistics section data
export interface StatItem {
  value: number;
  label: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

export const statsData: StatItem[] = [
  {
    value: 24,
    label: "Ships Serviced Annually",
    description: "Naval and commercial vessels maintained each year",
    icon: Ship,
    link: "/portfolio/military",
  },
  {
    value: 6,
    label: "Active Naval Projects",
    description: "Current military vessel projects in progress",
    icon: Shield,
    link: "/portfolio/military",
  },
  {
    value: 10,
    label: "Civilian Vessels Completed",
    description: "Commercial vessels successfully serviced",
    icon: Anchor,
    link: "/portfolio/commercial",
  },
];

// Service summary for homepage
export interface ServiceSummary {
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
  icon: React.ElementType;
  features: string[];
}

export const serviceSummaryData: ServiceSummary[] = [
  {
    title: "Ship Repair & Maintenance",
    description:
      "Comprehensive repair services for naval and commercial vessels",
    extendedDescription:
      "Our ship repair and maintenance services cover everything from hull repairs to complex propulsion system servicing for both military and commercial vessels.",
    image: "/images/img/ship-repair.webp",
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
    image: "/images/img/dry-docking.webp",
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
    image: "/images/img/fabrication.webp",
    icon: Hammer,
    features: [
      "Custom metal fabrication",
      "Welding & structural engineering",
      "Pipe fitting and production",
      "Precision machining",
    ],
  },
  {
    title: "Ship Design & Construction",
    description: "Expert Ship Design & Construction and design services",
    extendedDescription:
      "Our naval architects provide consultation for new builds, modifications, and vessel performance analysis tailored to West African maritime conditions.",
    image: "/images/img/ship-design.webp",
    icon: Ruler,
    features: [
      "Consultation for new builds & modifications",
      "3D modeling & simulation",
      "Performance analysis",
      "Regulatory compliance support",
    ],
  },
  // {
  //   title: "Offshore & Oil & Gas Support",
  //   description: "Specialized services for Nigeria's offshore industry",
  //   extendedDescription:
  //     "We provide comprehensive maintenance and repair services for offshore platforms and related infrastructure supporting Nigeria's vital oil and gas industry.",
  //   image: "/images/services/offshore.jpg",
  //   icon: Cog,
  //   features: [
  //     "Maintenance & repair for offshore platforms",
  //     "Pipeline & subsea infrastructure support",
  //     "Equipment installations",
  //     "Safety system upgrades",
  //   ],
  // },
  {
    title: "Electroplating",
    description:
      "High-quality metal electroplating services for marine applications",
    extendedDescription:
      "Our advanced electroplating services provide superior corrosion resistance and aesthetic finishes for marine components operating in harsh saltwater environments.",
    image: "/images/electroplating/electroplating-05.webp",
    icon: Zap,
    features: [
      "Copper, nickel & chrome plating",
      "Precious metal plating (gold, silver)",
      "Corrosion-resistant coatings",
      "Custom specifications for marine environments",
    ],
  },
  {
    title: "Galvanizing",
    description: "Hot-dip galvanizing for superior corrosion protection",
    extendedDescription:
      "We offer industrial-scale hot-dip galvanizing services that provide long-lasting protection against corrosion for steel components used in marine and offshore applications.",
    image: "/images/electroplating/electroplating-03.webp",
    icon: Shield,
    features: [
      "Hot-dip galvanizing for steel structures",
      "Batch processing for small components",
      "Quality testing & certification",
      "Extended lifespan for marine metal components",
    ],
  },
];

// Testimonial data
export interface Testimonial {
  name: string;
  position: string;
  quote: string;
}

export const testimonialData: Testimonial[] = [
  {
    name: "Capt. MV Stark",
    position: "Capt. MV Stark",
    quote:
      "Naval Dockyard Limited has consistently delivered exceptional repair and maintenance services for our naval vessels. Their attention to detail and commitment to quality is unmatched in the region.",
  },
  {
    name: "Mrs. Amina Okonkwo",
    position: "Managing Director, Westfield",
    quote:
      "We've been working with Naval Dockyard Limited for over 5 years, and they've never let us down. Their team's expertise and efficiency have saved us both time and money on our commercial fleet maintenance.",
  },
  {
    name: "Captain Albert Ezin Badou",
    position: "CNS, Republic of Benin",
    quote:
      "For offshore platform maintenance, Naval Dockyard Limited has been our trusted partner. Their specialized knowledge of marine engineering has been invaluable to our operations in the Niger Delta.",
  },
  {
    name: "Dr. Emmanuel Okafor",
    position: "Vessel Owner",
    quote:
      "The quality of work and personal attention I received for my vessel's overhaul was extraordinary. The team at Naval Dockyard Limited treats every ship with the same level of care, regardless of size.",
  },
];

// Clients data
export interface Client {
  name: string;
  logo: string;
  highlighted: boolean;
}

export const clientsData: Client[] = [
  {
    name: "Nigerian Navy",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Badge_of_the_Nigerian_Navy.svg",
    highlighted: true,
  },
  {
    name: "NIMASA",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Wp7.NIM.LOGO.jpg",
    highlighted: false,
  },
  {
    name: "Republic of Benin Navy",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/The_Westfield_Group_logo.svg/640px-The_Westfield_Group_logo.svg.png",
    highlighted: false,
  },
  {
    name: "Westfield",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Coat_of_arms_of_Benin.svg/1200px-Coat_of_arms_of_Benin.svg.png",
    highlighted: false,
  },
  {
    name: "Admirality Maritime Services Limited",
    logo: "https://amsl.ng/assets/images/logo.png",
    highlighted: false,
  },
  {
    name: "DormanLong Engineering Limited",
    logo:
      "https://image.pitchbook.com/Bi1dS4otodVGdUqlGdiETTCvj3K1665398808780_200x200",
    highlighted: false,
  },
  {
    name: "Portplus limited",
    logo: "https://portplusltd.com/wp-content/themes/portplus/images/logo.png",
    highlighted: false,
  },
  {
    name: "Century Group",
    logo:
      "https://ceslintlgroup.com/wp-content/uploads/2024/05/cropped-CG-Large_200.png",
    highlighted: false,
  },
  {
    name: "Shipowners Association of Nigeria",
    logo:
      "https://lh5.googleusercontent.com/proxy/bCmv6N_gpd0F-nRm_H3l_5D_dtb5pK7ywepGM-3pUDs0BYhSXZZN5s-_0Pwkcgc8T8-rFe07-6SOU1NEuQpt",
    highlighted: false,
  },
  {
    name: "GOG Marine",
    logo:
      "https://www.gogmarine.com/wp-content/uploads/2019/10/gogfulllogo.png",
    highlighted: false,
  },
];

// Call To Action data
export const ctaData = {
  headline: "Ready to Ensure Your Vessel's Peak Performance?",
  description:
    "From routine maintenance to complete overhauls, our expert team is ready to keep your fleet operating at its best in West African waters.",
  primaryButtonText: "Request a Quote",
  primaryButtonLink: "/contact",
  secondaryButtonText: "Learn More",
  secondaryButtonLink: "/services",
};

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
    image: "/images/img/facilities.webp",
  },
  {
    headline: "Expert Engineering & Technical Teams",
    subheadline:
      "Our highly skilled engineers and technicians bring decades of experience to every project, ensuring the highest quality standards.",
    primaryCTA: "Meet Our Team",
    primaryCTALink: "/team",
    secondaryCTA: "Our Expertise",
    secondaryCTALink: "/expertise",
    image: "/images/img/team.webp",
  },
];
