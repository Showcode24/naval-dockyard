import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { serviceData } from "@/data/services"

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive ship repair, maintenance, and engineering services for naval and commercial vessels
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            At Naval Dockyard, we offer a comprehensive range of services for both military and commercial
            vessels. Our experienced team combines technical expertise with state-of-the-art facilities to deliver
            exceptional quality.
          </p>

          {serviceData.categories.map((category, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className="flex items-center mb-8">
                <category.icon className="w-10 h-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-muted-foreground mb-8">{category.description}</p>
                  <ul className="space-y-4 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-4 group">
                    <Link href={`/services/${category.slug}`}>
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {index < serviceData.categories.length - 1 && <div className="border-b border-border my-16"></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Request a Service Quote</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your vessel's specific requirements and receive a detailed service quote.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

