import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { dryDockingData } from "@/data/services/dry-docking"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function DryDockingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dry Docking & Vessel Overhauls</h1>
            <p className="text-xl text-gray-300">
              Complete vessel overhauls and dry docking services for military and commercial vessels
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Dry Dock Facilities</h2>
              <p className="text-lg text-muted-foreground mb-6">{dryDockingData.overview}</p>
              <ul className="space-y-4">
                {dryDockingData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/dry-dock-main.jpg"
                alt="Dry Dock Facilities"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Dry Docking Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dryDockingData.services.map((service, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Dry Dock Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dryDockingData.facilities.map((facility, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="relative h-64">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Specifications:</h4>
                        <ul className="text-sm space-y-1">
                          {facility.specifications.map((spec, idx) => (
                            <li key={idx}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Capabilities:</h4>
                        <ul className="text-sm space-y-1">
                          {facility.capabilities.map((cap, idx) => (
                            <li key={idx}>{cap}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Dry Docking Process</h2>
              <p className="text-lg text-muted-foreground mb-6">{dryDockingData.process.description}</p>
              <ol className="space-y-4">
                {dryDockingData.process.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Button className="mt-8" asChild>
                <Link href="/contact">Request Dry Docking Quote</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/dry-dock-process.jpg"
                alt="Dry Docking Process"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary mx-auto mb-10 container rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Emergency Dry Docking Services</h2>
          <p className="text-lg mb-8 text-white max-w-2xl mx-auto">{dryDockingData.emergencyServices}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Emergency Team</Link>
            </Button>
            <Button variant="outline" className="text-blue border-white hover:bg-white/10" size="lg" asChild>
              <a href={`tel:${dryDockingData.emergencyPhone}`}>{dryDockingData.emergencyPhone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

