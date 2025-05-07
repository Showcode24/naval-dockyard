import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { militaryProjectsData } from "@/data/portfolio/military"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Clock, PenToolIcon as Tool, FileText } from "lucide-react"
import AnimatedHero from "@/components/ui/animated-hero"

export default function MilitaryPortfolioPage() {
  return (
    <>
      <AnimatedHero
        title="Military Projects"
        subtitle="Our portfolio of naval and military vessel projects showcasing our expertise in defense sector work"
        backgroundImage="/contact-us.jpg"
      />

      {/* <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Military Projects</h1>
            <p className="text-xl text-gray-300">
              Our portfolio of naval and military vessel projects showcasing our expertise in defense sector work
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Naval Excellence</h2>
            <p className="text-lg text-muted-foreground">{militaryProjectsData.overview}</p>
          </div>

          <Tabs defaultValue="all" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="repair">Repairs</TabsTrigger>
                <TabsTrigger value="modernization">Modernization</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {militaryProjectsData.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="repair" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {militaryProjectsData.projects
                  .filter((project) => project.category === "repair")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="modernization" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {militaryProjectsData.projects
                  .filter((project) => project.category === "modernization")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {militaryProjectsData.projects
                  .filter((project) => project.category === "maintenance")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Security Clearance & Confidentiality</h2>
                <p className="text-muted-foreground mb-6">{militaryProjectsData.securityNote}</p>
                <Button asChild>
                  <Link href="/contact">Request Detailed Information</Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/security-clearance.jpg"
                  alt="Security Clearance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Case Study</h2>
            <div className="bg-background rounded-lg overflow-hidden shadow-xl border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={militaryProjectsData.featuredCase.image || "/placeholder.svg"}
                    alt={militaryProjectsData.featuredCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">{militaryProjectsData.featuredCase.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{militaryProjectsData.featuredCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{militaryProjectsData.featuredCase.description}</p>
                  <ul className="space-y-2 mb-6">
                    {militaryProjectsData.featuredCase.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-fit" asChild>
                    <Link href="/contact">Request Similar Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Military Expertise</h3>
              <p className="text-muted-foreground">
                Our team includes former naval officers and engineers with extensive experience in military vessel
                requirements and specifications.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-muted-foreground">
                We understand the critical nature of military operations and offer expedited repair services to minimize
                vessel downtime.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Specialized Equipment</h3>
              <p className="text-muted-foreground">
                Our facility includes specialized tools and equipment specifically designed for military vessel
                maintenance and repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white rounded-2xl mb-10 mx-auto container">
        <div className="px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Military Vessel Requirements?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is available to discuss your specific needs with appropriate security protocols in place.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Contact Our Military Division</Link>
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
          <Badge variant="secondary">{project.category}</Badge>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Shield className="h-4 w-4 mr-1" />
            {project.client}
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            {project.year}
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/portfolio/project/${project.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}

