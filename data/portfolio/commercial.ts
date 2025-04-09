export const commercialProjectsData = {
  overview:
    "Naval Dockyard Limited continues to affirm its reputation as a leading facility for ship repair, docking, and maintenance across Africa. With extensive experience handling naval, merchant, and luxury vessels, the Yard delivers top-tier services with precision, efficiency, and cost-effectiveness. Recent successful dockings, restorations, and upgrades of high-tonnage vessels underscore the Dockyard's strategic role in enhancing maritime safety, national self-reliance, and the Blue Economy.",

  projects: [
    {
      id: "com-001",
      title: "Docking and Repair of Luxury Yacht MV APARNA",
      description:
        "The Naval Dockyard Limited recently docked the Luxury Yacht MV APARNA for routine preservative maintenance. The successful operation underscores the Yard's ability to seamlessly manage a range of vessel types—from naval and merchant ships to luxury yachts—while maintaining quality, speed, and cost efficiency. This feat reflects the Dockyard's reputation as a leader in ship construction, repairs, and engineering support within the maritime sector.",
      image: "/images/portfolio/commercial/yacht-aparna.jpg",
      vesselType: "passenger",
      services: ["Preservative Maintenance", "Luxury Vessel Servicing", "Engineering Support"],
      client: "Private Client",
      duration: "15 days",
      year: 2024,
      detailedServices: [
        "Complete hull inspection and maintenance",
        "Propulsion system servicing",
        "Electrical systems diagnostics and repairs",
        "Interior refurbishment and upgrades",
        "Navigation and communication systems testing",
        "Comprehensive safety equipment inspection"
      ],
      significance: "This project demonstrates our capability to service high-end luxury vessels with the same precision and quality as our naval and commercial ship work. The successful completion reinforces our position as a versatile maritime service provider capable of meeting diverse client needs.",
      outcome: "The successful completion of this project resulted in a fully restored luxury yacht with enhanced performance, improved aesthetics, and extended service life. The client was able to resume operations with minimal downtime."
    },
    {
      id: "com-002",
      title: "Undocking of MV Black Pearl and BNS Pendjari",
      description:
        "Naval Dockyard Limited docked and repaired the MV BLACK PEARL and BNS PENDJARI, each with over 8,000 Gross Tonnage, in its 10,000-Ton Main Graving Dock. The Yard executed extensive preservation and restorative maintenance including hull sandblasting and painting, shaft/rudder bearing replacement, ultrasonic testing, and steel/anode renewal. These efforts enhanced the vessels' operational readiness and contributed to maritime safety in the Gulf of Guinea.",
      image: "/images/portfolio/commercial/black-pearl-pendjari.jpg",
      vesselType: "cargo",
      services: ["Hull Maintenance", "Bearing Alignment", "Ultrasonic Testing", "Valve Servicing"],
      client: "West African Shipping Lines",
      duration: "40 days",
      year: 2024,
      detailedServices: [
        "Hull sandblasting and painting",
        "Shaft and rudder bearing replacement",
        "Ultrasonic thickness testing of hull plating",
        "Steel renewal in critical areas",
        "Sacrificial anode replacement",
        "Sea chest valve servicing and testing"
      ],
      significance: "This project highlights our capacity to handle large commercial vessels efficiently, ensuring minimal downtime for shipping operations. Our comprehensive approach to vessel maintenance contributes to maritime safety and operational reliability in the Gulf of Guinea region.",
      outcome: "This project successfully restored two high-tonnage vessels to optimal operating condition, ensuring their continued safe and efficient operation in commercial shipping. The comprehensive maintenance will significantly extend the vessels' service life."
    },
    {
      id: "com-003",
      title: "Undocking of MV STARK and TMC EVOLUTION",
      description:
        "Naval Dockyard Limited successfully docked and repaired MV STARK and TMC EVOLUTION, with a combined tonnage of 8,600 Tons, in the 10,000 Ton Graving Dock. Services included grid blasting, hull painting, valve testing, and critical thruster repairs in collaboration with OEMs. The vessels were undocked in optimal operating condition, demonstrating NDL's continued support for the growth of Nigeria's Blue Economy and local maritime capacity.",
      image: "/images/portfolio/commercial/stark-evolution.jpg",
      vesselType: "offshore",
      services: ["Thruster Repairs", "Valve Pressure Testing", "Hull Painting", "Grid Blasting"],
      client: "Gulf Offshore Partners",
      duration: "38 days",
      year: 2024,
      detailedServices: [
        "Grid blasting of hull surfaces",
        "Complete hull painting with marine-grade coatings",
        "Azimuth and Bow Thruster repairs with OEM support",
        "Servicing and pressure testing of 38 sea chest valves",
        "Propulsion system alignment and optimization",
        "Navigation and safety equipment certification"
      ],
      significance: "This project showcases our technical expertise in handling specialized offshore vessels with complex propulsion and positioning systems. Our collaboration with Original Equipment Manufacturers ensures that repairs meet the highest industry standards.",
      outcome: "The project delivered two fully operational offshore vessels with restored propulsion systems, ensuring their continued effectiveness in supporting offshore operations. The collaboration with OEMs for thruster repairs guarantees reliability and performance."
    },
  ],

  featuredCase: {
    title: "Undocking of MV STARK and TMC EVOLUTION",
    description:
      "In a show of its engineering excellence, Naval Dockyard Limited undertook the docking and repair of MV STARK and TMC EVOLUTION, restoring both vessels to peak performance. The project involved OEM-supported thruster repairs, hull treatment, and the servicing of 38 sea chest valves, underscoring NDL's growing impact in maritime safety and Nigeria's Blue Economy development.",
    image: "/images/portfolio/commercial/featured-stark-evolution.jpg",
    category: "Docking & Restoration",
    highlights: [
      "Docking of two vessels simultaneously with combined tonnage of 8,600 Tons",
      "Repair of Azimuth and Bow Thrusters in collaboration with OEMs",
      "Servicing and pressure testing of 38 sea chest valves",
      "Grid blasting and full hull painting completed efficiently",
      "Restoration to full operational condition before undocking on 19 October 2024",
    ],
  },
  
  vesselTypeDescriptions: {
    passenger: {
      significance: "Our passenger vessel services focus on maintaining the highest standards of safety, comfort, and aesthetics. We understand the unique requirements of passenger vessels, from luxury yachts to ferries, and provide specialized maintenance solutions.",
      outcome: "Our passenger vessel projects typically result in enhanced passenger comfort, improved operational efficiency, and extended service life, allowing operators to maintain the highest standards of service."
    },
    cargo: {
      significance: "Our cargo vessel services are designed to minimize downtime while ensuring structural integrity and operational reliability. We understand the commercial pressures of shipping operations and work efficiently to return vessels to service.",
      outcome: "Our cargo vessel projects deliver improved operational efficiency, enhanced safety, and extended service intervals, helping shipping companies maintain competitive operations."
    },
    offshore: {
      significance: "Our offshore vessel services address the complex requirements of vessels operating in demanding offshore environments. We provide specialized maintenance for dynamic positioning systems, thrusters, and other critical components.",
      outcome: "Our offshore vessel projects ensure continued operational capability in challenging environments, with particular attention to reliability and performance of specialized systems."
    },
    tanker: {
      significance: "Our tanker services focus on maintaining the highest standards of safety and environmental protection. We provide specialized maintenance for cargo containment systems, pumping arrangements, and other critical tanker components.",
      outcome: "Our tanker projects deliver enhanced safety, environmental compliance, and operational reliability, ensuring vessels can operate efficiently while meeting stringent regulatory requirements."
    }
  }
};
