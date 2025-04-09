import Image from "next/image"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { dryDockingData } from "@/data/services/dry-docking"

export default function DryDocking() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${dryDockingData.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Dry Docking Services</h1>
          <p className="mt-2 text-lg">Complete vessel overhauls and dry docking for military and commercial vessels</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Advanced Dry Dock Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">{dryDockingData.overview}</p>
              <ul className="space-y-2">
                {dryDockingData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={dryDockingData.overviewImage || "/placeholder.svg"}
                alt="Dry Dock Facilities"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Dry Docking Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dryDockingData.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-medium mb-2">Capabilities:</h4>
                  <ul className="text-sm space-y-1">
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Dry Dock Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dryDockingData.facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative h-64">
                  <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
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
      </section>

      {/* Process Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Dry Docking Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">{dryDockingData.process.description}</p>
              <ol className="space-y-4">
                {dryDockingData.process.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Request Dry Docking Quote</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={dryDockingData.processImage || "/placeholder.svg"}
                alt="Dry Docking Process"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Emergency Dry Docking Services</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{dryDockingData.emergencyServices}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Emergency Team</Link>
            </Button>
            <Button variant="outline" className="border-white hover:bg-white/10" size="lg" asChild>
              <a href={`tel:${dryDockingData.emergencyPhone}`}>{dryDockingData.emergencyPhone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
