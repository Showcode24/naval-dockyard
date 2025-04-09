import Image from "next/image"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'
import { electroplatingData } from "@/data/services/electroplating"

export default function Electroplating() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${electroplatingData.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Electroplating Services</h1>
          <p className="mt-2 text-lg">Advanced metal finishing solutions for marine applications</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                {electroplatingData.overview}
              </p>
              <ul className="mt-6 space-y-2">
                {electroplatingData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={electroplatingData.overviewImage || "/placeholder.svg"}
                alt="Electroplating Services"
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
          <h2 className="text-3xl font-semibold text-center mb-8">Our Electroplating Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {electroplatingData.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <h4 className="font-medium mb-2">Capabilities:</h4>
                  <ul className="text-sm space-y-1">
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
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

      {/* Process Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Electroplating Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {electroplatingData.process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src={electroplatingData.qualityImage || "/placeholder.svg"}
                alt="Quality Assurance"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {electroplatingData.qualityAssurance.description}
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Standards:</h3>
              <ul className="space-y-4">
                {electroplatingData.qualityAssurance.standards.map((standard, index) => (
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
      </section>

      {/* Emergency Services Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Emergency Electroplating Services</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {electroplatingData.emergencyServices}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Request Expedited Service</Link>
            </Button>
            <Button variant="outline" className="border-white hover:bg-white/10" size="lg" asChild>
              <a href={`tel:${electroplatingData.emergencyPhone}`}>{electroplatingData.emergencyPhone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
