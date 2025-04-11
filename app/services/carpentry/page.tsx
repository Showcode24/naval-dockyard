import ServicePage from "@/components/service-page"
import { carpentryData } from "@/data/services/carpentry"

export default function CarpentryPage() {
  // Transform the data to match the ServicePageData interface
  const pageData = {
    heroImage: carpentryData.heroImage,
    heroTitle: "Carpentry Services",
    heroSubtitle: "Advanced metal finishing solutions for marine applications",
    overview: carpentryData.overview,
    keyFeatures: carpentryData.keyFeatures,
    overviewImage: carpentryData.overviewImage,
    services: carpentryData.services,
    process: carpentryData.process,
    qualityAssurance: carpentryData.qualityAssurance,
    qualityImage: carpentryData.qualityImage,
    emergencyServices: carpentryData.emergencyServices,
    emergencyPhone: carpentryData.emergencyPhone,
  }

  return (
    <ServicePage
      data={pageData}
      serviceSectionTitle="Our Carpentry Services"
      processSectionTitle="Our Carpentry Process"
    />
  )
}


