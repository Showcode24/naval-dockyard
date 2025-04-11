import ServicePage from "@/components/service-page"
import { boatConstructionData } from "@/data/services/boat-construction"


export default function BoatConstructionPage() {
  // Transform the data to match the ServicePageData interface
  const pageData = {
    heroImage: boatConstructionData.heroImage,
    heroTitle: "Boat Construction Services",
    heroSubtitle: "Advanced metal finishing solutions for marine applications",
    overview: boatConstructionData.overview,
    keyFeatures: boatConstructionData.keyFeatures,
    overviewImage: boatConstructionData.overviewImage,
    services: boatConstructionData.services,
    process: boatConstructionData.process,
    qualityAssurance: boatConstructionData.qualityAssurance,
    qualityImage: boatConstructionData.qualityImage,
    emergencyServices: boatConstructionData.emergencyServices,
    emergencyPhone: boatConstructionData.emergencyPhone,
  }

  return (
    <ServicePage
      data={pageData}
      serviceSectionTitle="Our Boat Construction Services"
      processSectionTitle="Our Boat Construction Process"
    />
  )
}


