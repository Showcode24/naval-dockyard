import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { certificationsData } from "@/data/certifications"
import { CheckCircle2, Download, ExternalLink } from "lucide-react"

export default function CertificationsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Accreditations</h1>
            <p className="text-xl text-gray-300">Our commitment to quality, safety, and environmental standards</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-muted-foreground">{certificationsData.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {certificationsData.certifications.map((certification, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-16 w-32">
                      <Image
                        src={certification.logo || "/placeholder.svg"}
                        alt={certification.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                      {certification.validUntil}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{certification.name}</h3>
                  <p className="text-muted-foreground mb-4">{certification.description}</p>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={certification.verificationLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={certification.certificateLink} download>
                        <Download className="h-4 w-4 mr-2" />
                        Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Quality Standards</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Quality Management</h3>
                <p className="text-muted-foreground mb-6">{certificationsData.qualityManagement.description}</p>
                <ul className="space-y-3">
                  {certificationsData.qualityManagement.standards.map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <strong>{standard.name}:</strong> {standard.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Environmental & Safety</h3>
                <p className="text-muted-foreground mb-6">{certificationsData.environmentalSafety.description}</p>
                <ul className="space-y-3">
                  {certificationsData.environmentalSafety.standards.map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <strong>{standard.name}:</strong> {standard.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Certification Process</h2>
                <p className="mb-6">{certificationsData.certificationProcess}</p>
                <Button variant="secondary" asChild>
                  <Link href="/contact">Request Certification Details</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certificationsData.partners.map((partner, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg flex items-center justify-center">
                    <div className="relative h-12 w-full">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

