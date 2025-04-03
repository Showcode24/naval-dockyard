import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { facilitiesData } from "@/data/facilities"
import { CheckCircle2, ChevronRight } from "lucide-react"

export default function FacilitiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl text-gray-300">Explore our state-of-the-art shipyard and dockyard facilities</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">World-Class Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-6">{facilitiesData.overview}</p>
              <ul className="space-y-4">
                {facilitiesData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/facilities-aerial.jpg"
                alt="Naval Dockyard Aerial View"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilitiesData.facilities.map((facility, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg border border-border">
                  <div className="relative h-64">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <ul className="space-y-2 mb-6">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {facility.specs.map((spec, idx) => (
                        <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Equipment & Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilitiesData.equipment.map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md border border-border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Capabilities:</strong> {item.capabilities}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Schedule a Facility Tour</h2>
              <p className="text-muted-foreground mb-6">
                Interested in seeing our facilities in person? We offer guided tours for potential clients and partners.
                Contact us to arrange a visit.
              </p>
              <Button asChild>
                <Link href="/contact">Request a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white mx-auto rounded-2xl container mb-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Facility Location</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Strategically located with excellent access to major shipping routes
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.662386079187!2d-76.61666508449007!3d39.28308037951393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8035b38510f79%3A0x9f3b3e7c8bf79715!2sPort%20of%20Baltimore!5e0!3m2!1sen!2sus!4v1648000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

