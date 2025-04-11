import ServicePage from "@/components/service-page"
import { berthingData } from "@/data/services/berthing"

export default function BerthingPage() {
  // Transform the data to match the ServicePageData interface
  const pageData = {
    heroImage: berthingData.heroImage,
    heroTitle: "Berthing Services",
    heroSubtitle: "Advanced metal finishing solutions for marine applications",
    overview: berthingData.overview,
    keyFeatures: berthingData.keyFeatures,
    overviewImage: berthingData.overviewImage,
    services: berthingData.services,
    process: berthingData.process,
    qualityAssurance: berthingData.qualityAssurance,
    qualityImage: berthingData.qualityImage,
    emergencyServices: berthingData.emergencyServices,
    emergencyPhone: berthingData.emergencyPhone,
  }

  return (
    <ServicePage
      data={pageData}
      serviceSectionTitle="Our Berthing Services"
      processSectionTitle="Our Berthing Process"
    />
  )
}


