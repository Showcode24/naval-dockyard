import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { commercialProjectsData } from "@/data/portfolio/commercial"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Ship, Award, BarChart } from "lucide-react"
import AnimatedHero from "@/components/ui/animated-hero"


export default function CommercialPortfolioPage() {
  return (
    <>
      <AnimatedHero
        title="Commercial Projects"
        subtitle="Our portfolio of commercial vessel projects showcasing our expertise across the maritime industry"
        backgroundImage="/contact-us.jpg"
      />

      {/* <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Projects</h1>
            <p className="text-xl text-gray-300">
              Our portfolio of commercial vessel projects showcasing our expertise across the maritime industry
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Commercial Excellence</h2>
            <p className="text-lg text-muted-foreground">{commercialProjectsData.overview}</p>
          </div>

          <Tabs defaultValue="all" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tanker">Tankers</TabsTrigger>
                <TabsTrigger value="cargo">Cargo</TabsTrigger>
                <TabsTrigger value="passenger">Passenger</TabsTrigger>
                <TabsTrigger value="offshore">Offshore</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjectsData.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tanker" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjectsData.projects
                  .filter((project) => project.vesselType === "tanker")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="cargo" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjectsData.projects
                  .filter((project) => project.vesselType === "cargo")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="passenger" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjectsData.projects
                  .filter((project) => project.vesselType === "passenger")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="offshore" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjectsData.projects
                  .filter((project) => project.vesselType === "offshore")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Case Study</h2>
            <div className="bg-background rounded-lg overflow-hidden shadow-xl border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={commercialProjectsData.featuredCase.image || "/placeholder.svg"}
                    alt={commercialProjectsData.featuredCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">{commercialProjectsData.featuredCase.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{commercialProjectsData.featuredCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{commercialProjectsData.featuredCase.description}</p>
                  <ul className="space-y-2 mb-6">
                    {commercialProjectsData.featuredCase.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="w-fit" asChild>
                      <Link href="/contact">Request Similar Services</Link>
                    </Button>
                    <Button variant="outline" className="w-fit" asChild>
                      <Link href="/services">View Our Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Fleet Support</h3>
              <p className="text-muted-foreground">
                We provide services to commercial vessels from around the world, with experience working with all major
                shipping companies and vessel types.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Classification Approved</h3>
              <p className="text-muted-foreground">
                Our work is approved by all major classification societies, ensuring your vessel maintains its class
                status and compliance with regulations.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Efficiency Improvements</h3>
              <p className="text-muted-foreground">
                Beyond repairs, we offer solutions to improve vessel efficiency, reduce fuel consumption, and minimize
                environmental impact.
              </p>
            </div>
          </div>

          {/* <div className="bg-muted p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/commercial/client-testimonial.jpg"
                  alt="Client Testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "Naval Dockyard has been our trusted partner for vessel maintenance for over a decade. Their
                  attention to detail, technical expertise, and commitment to deadlines have made them an invaluable
                  part of our fleet management strategy."
                </blockquote>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Fleet Manager, Atlantic Shipping Co.</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-16 bg-primary text-white mx-auto container mb-10 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Commercial Fleet Needs?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our commercial vessel experts are ready to help you optimize your fleet's performance and minimize downtime.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{project.vesselType}</Badge>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services.map((service, index) => (
            <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs">
              {service}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Ship className="h-4 w-4 mr-1" />
            {project.client}
          </div>
          <div>{project.year}</div>
        </div>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/portfolio/project/${project.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}

