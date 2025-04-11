import ServicePage from "@/components/service-page"
import { galvanizingData } from "@/data/services/galvanizing"

export default function galvanizingPage() {
  // Transform the data to match the ServicePageData interface
  const pageData = {
    heroImage: galvanizingData.heroImage,
    heroTitle: "Galvanizing Services",
    heroSubtitle: "Industrial-scale hot-dip galvanizing for superior corrosion protection",
    overview: galvanizingData.overview,
    keyFeatures: galvanizingData.keyFeatures,
    overviewImage: galvanizingData.overviewImage,
    services: galvanizingData.services,
    process: galvanizingData.process,
    qualityAssurance: galvanizingData.qualityAssurance,
    qualityImage: galvanizingData.qualityImage,
    emergencyServices: galvanizingData.emergencyServices,
    emergencyPhone: galvanizingData.emergencyPhone,
  }

  return (
    <ServicePage
      data={pageData}
      serviceSectionTitle="Our Galvanizing Services"
      processSectionTitle="Our Galvanizing Process"
    />
  )
}


