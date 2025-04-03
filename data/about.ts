import { Shield, Anchor, GanttChart, Award, Wrench, Users, Clock } from "lucide-react"

export const aboutData = {
  story:
    "Established as a strategic facility to support the Nigerian Navy's fleet maintenance needs, Naval Dockyard Limited has grown into a comprehensive naval and commercial ship repair center trusted by the Nigerian Navy, maritime organizations, and commercial shipping companies across West Africa.",

  mission:
    "Our mission is to provide superior ship repair, maintenance, and engineering services with military-grade precision and efficiency. We combine advanced technology with expert craftsmanship to ensure every vessel leaves our facility performing at its optimal capability while supporting Nigeria's maritime security and economic development.",

  clientCategories: [
    {
      title: "Nigerian Navy",
      description:
        "We serve as a primary maintenance facility for the Nigerian Navy, providing specialized repair and maintenance services for naval vessels, from patrol boats to larger warships.",
      icon: Shield,
    },
    {
      title: "Commercial Maritime",
      description:
        "Our commercial clients include major shipping companies operating in West African waters, requiring regular maintenance and repair for their vessels.",
      icon: Anchor,
    },
    {
      title: "Offshore Operations",
      description:
        "We provide specialized services for Nigeria's offshore oil & gas platforms, support vessels, and related marine infrastructure in the Gulf of Guinea.",
      icon: GanttChart,
    },
  ],

  advantages: [
    {
      title: "ISO-Certified Quality",
      description:
        "Our operations meet international standards for quality management and environmental responsibility, ensuring consistent excellence.",
      icon: Award,
    },
    {
      title: "Strategic Facilities",
      description:
        "Our strategically located dockyard facilities can accommodate vessels of various sizes, from small patrol boats to commercial cargo ships operating in West African waters.",
      icon: Wrench,
    },
    {
      title: "Expert Nigerian Team",
      description:
        "Our engineers and naval architects bring decades of experience in marine engineering and vessel maintenance, with specialized knowledge of regional maritime conditions.",
      icon: Users,
    },
    {
      title: "Efficient Service",
      description:
        "We understand that time is money in the shipping industry, so we prioritize efficient service delivery without compromising quality.",
      icon: Clock,
    },
  ],

  accreditations: [
    {
      name: "Lloyd's Register",
      logo: "/images/accreditations/lloyds.png",
    },
    {
      name: "DNV GL",
      logo: "/images/accreditations/dnv.png",
    },
    {
      name: "American Bureau of Shipping (ABS)",
      logo: "/images/accreditations/abs.png",
    },
    {
      name: "Bureau Veritas",
      logo: "/images/accreditations/veritas.png",
    },
    {
      name: "ISO 9001",
      logo: "/images/accreditations/iso.png",
    },
  ],
}

