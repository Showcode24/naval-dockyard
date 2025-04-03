import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { aboutData } from "@/data/about"

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Naval Dockyard</h1>
            <p className="text-xl text-gray-300">
              Precision engineering, trusted by navies and commercial fleets worldwide since 1978
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">{aboutData.story}</p>
              <p className="text-lg text-muted-foreground mb-6">{aboutData.mission}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild>
                  <Link href="/about/leadership">Meet Our Team</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about/facilities">Explore Our Facilities</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/dockyard-aerial.jpg"
                alt="Naval Dockyard Aerial View"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.clientCategories.map((category, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
                <p className="text-muted-foreground text-center">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.advantages.map((advantage, index) => (
              <div key={index} className="border border-border p-8 rounded-lg">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partners & Accreditations</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We maintain partnerships with leading classification societies and industry organizations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {aboutData.accreditations.map((accreditation, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={accreditation.logo || "/placeholder.svg"}
                  alt={accreditation.name}
                  width={120}
                  height={60}
                  className="max-h-16 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

