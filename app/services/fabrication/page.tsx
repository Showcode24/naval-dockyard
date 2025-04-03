import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fabricationData } from "@/data/services/fabrication"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function FabricationPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fabrication & Engineering</h1>
            <p className="text-xl text-gray-300">
              Custom metal fabrication and engineering solutions for marine applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Fabrication Capabilities</h2>
              <p className="text-lg text-muted-foreground mb-6">{fabricationData.overview}</p>
              <ul className="space-y-4">
                {fabricationData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/fabrication-main.jpg"
                alt="Fabrication Workshop"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Fabrication Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fabricationData.services.map((service, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fabricationData.equipment.map((item, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="relative h-64">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Specifications:</h4>
                      <ul className="text-sm space-y-1">
                        {item.specifications.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
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
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-muted-foreground mb-6">{fabricationData.qualityAssurance.description}</p>
              <ul className="space-y-4">
                {fabricationData.qualityAssurance.standards.map((standard, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>{standard.name}:</strong> {standard.description}
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/contact">Request Fabrication Quote</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/fabrication-quality.jpg"
                alt="Quality Assurance"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Materials We Work With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fabricationData.materials.map((material, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-3">{material.name}</h3>
                <p className="text-muted-foreground mb-4">{material.description}</p>
                <div className="text-sm text-muted-foreground">
                  <strong>Applications:</strong> {material.applications}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white mx-auto container mt-10 mb-10 rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Custom Fabrication Projects</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to discuss your custom fabrication needs. From concept to completion, we
            provide comprehensive solutions for even the most complex marine applications.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

