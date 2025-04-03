import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { navalArchitectureData } from "@/data/services/naval-architecture"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function NavalArchitecturePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Naval Architecture & Marine Engineering</h1>
            <p className="text-xl text-gray-300">
              Expert naval architecture and design services for vessel modifications, repairs, and performance
              optimization
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Naval Architecture Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">{navalArchitectureData.overview}</p>
              <ul className="space-y-4">
                {navalArchitectureData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/naval-architecture-main.jpg"
                alt="Naval Architecture"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Naval Architecture Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navalArchitectureData.services.map((service, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Design Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {navalArchitectureData.designTools.map((tool, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Capabilities:</h4>
                      <ul className="space-y-2">
                        {tool.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm">{capability}</span>
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
              <h2 className="text-3xl font-bold mb-6">Design Process</h2>
              <p className="text-lg text-muted-foreground mb-6">{navalArchitectureData.designProcess.description}</p>
              <ol className="space-y-4">
                {navalArchitectureData.designProcess.steps.map((step, index) => (
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
                <Link href="/contact">Discuss Your Design Needs</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/naval-architecture-process.jpg"
                alt="Design Process"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Regulatory Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navalArchitectureData.regulations.map((regulation, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-3">{regulation.name}</h3>
                <p className="text-muted-foreground mb-4">{regulation.description}</p>
                <div className="text-sm text-muted-foreground">
                  <strong>Our Approach:</strong> {regulation.approach}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white mx-auto container rounded-2xl mt-10 mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Expert Naval Architecture Consultation</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of experienced naval architects and marine engineers is ready to assist with your vessel design,
            modification, or performance optimization needs.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

