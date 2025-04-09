import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'
import { galvanizingData } from "@/data/services/galvanizing"

export default function Galvanizing() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${galvanizingData.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Galvanizing Services</h1>
          <p className="mt-2 text-lg">Industrial-scale hot-dip galvanizing for superior corrosion protection</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={galvanizingData.overviewImage || "/placeholder.svg"}
                alt="Galvanizing Services"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {galvanizingData.overview}
              </p>
              <ul className="space-y-2">
                {galvanizingData.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Galvanizing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galvanizingData.services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Galvanizing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galvanizingData.process.map((step, index) => (
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {galvanizingData.qualityAssurance.description}
              </p>
              <ul className="space-y-4">
                {galvanizingData.qualityAssurance.standards.map((standard, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>{standard.name}:</strong> {standard.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={galvanizingData.qualityImage || "/placeholder.svg"}
                alt="Quality Assurance"
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
          <h2 className="text-3xl font-bold mb-6">Expedited Galvanizing Services</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {galvanizingData.emergencyServices}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Request Expedited Service</Link>
            </Button>
            <Button variant="outline" className="border-white hover:bg-white/10" size="lg" asChild>
              <a href={`tel:${galvanizingData.emergencyPhone}`}>{galvanizingData.emergencyPhone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
