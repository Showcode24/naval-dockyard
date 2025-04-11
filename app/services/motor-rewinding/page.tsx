import ServicePage from "@/components/service-page"
import { motorRewindingData } from "@/data/services/motor-rewinding"

export default function motorRewindingPage() {
  // Transform the data to match the ServicePageData interface
  const pageData = {
    heroImage: motorRewindingData.heroImage,
    heroTitle: "Electrical Motor Rewinding",
    heroSubtitle: "Expert motor repair, rewinding, and maintenance services to extend service life and improve performance",
    overview: motorRewindingData.overview,
    keyFeatures: motorRewindingData.keyFeatures,
    overviewImage: motorRewindingData.overviewImage,
    services: motorRewindingData.services,
    process: motorRewindingData.process,
    qualityAssurance: motorRewindingData.qualityAssurance,
    qualityImage: motorRewindingData.qualityImage,
    emergencyServices: motorRewindingData.emergencyServices,
    emergencyPhone: motorRewindingData.emergencyPhone,
  }

  return (
    <ServicePage
      data={pageData}
      serviceSectionTitle="Our Motor Rewinding Services"
      processSectionTitle="Our Motor Rewinding Process"
    />
  )
}


