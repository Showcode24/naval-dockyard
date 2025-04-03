import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { offshoreData } from "@/data/services/offshore"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function OffshoreServicePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Offshore & Oil & Gas Support</h1>
            <p className="text-xl text-gray-300">
              Specialized services for offshore platforms, subsea infrastructure, and related marine equipment
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Offshore Support Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">{offshoreData.overview}</p>
              <ul className="space-y-4">
                {offshoreData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/offshore-main.jpg"
                alt="Offshore Support"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Offshore Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offshoreData.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Vessel Types We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offshoreData.vesselTypes.map((vessel, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="relative h-64">
                    <Image src={vessel.image || "/placeholder.svg"} alt={vessel.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{vessel.name}</h3>
                    <p className="text-muted-foreground mb-4">{vessel.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Services Provided:</h4>
                      <ul className="space-y-2">
                        {vessel.services.map((service, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Safety & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-6">{offshoreData.safety.description}</p>
              <ul className="space-y-4">
                {offshoreData.safety.standards.map((standard, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>{standard.name}:</strong> {standard.description}
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/contact">Request Offshore Support</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/offshore-safety.jpg"
                alt="Safety & Compliance"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offshoreData.certifications.map((cert, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-3">{cert.name}</h3>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="text-sm text-muted-foreground">
                  <strong>Scope:</strong> {cert.scope}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary mx-auto container rounded-2xl mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Offshore Emergency Response</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white">{offshoreData.emergencyResponse}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Emergency Team</Link>
            </Button>
            <Button variant="outline" className="text-blue border-white hover:bg-white/10" size="lg" asChild>
              <a href={`tel:${offshoreData.emergencyPhone}`}>{offshoreData.emergencyPhone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

