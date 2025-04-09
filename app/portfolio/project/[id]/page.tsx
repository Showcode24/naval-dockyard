import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, FileText, Ship, Tag } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { militaryProjectsData } from "@/data/portfolio/military"
import { commercialProjectsData } from "@/data/portfolio/commercial"

// Define types for our projects
type MilitaryProject = {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  client: string
  duration: string
  year: number
}

type CommercialProject = {
  id: string
  title: string
  description: string
  image: string
  vesselType: string
  services: string[]
  client: string
  duration: string
  year: number
  detailedServices: string[]
  significance: string
  outcome: string
}

// Union type for either project type
type Project = MilitaryProject | CommercialProject

// Type guard to check if a project is a commercial project
function isCommercialProject(project: Project): project is CommercialProject {
  return "vesselType" in project && "services" in project
}

// Type guard to check if a project is a military project
function isMilitaryProject(project: Project): project is MilitaryProject {
  return "category" in project && "tags" in project
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Check if it's a military project
  const militaryProject = militaryProjectsData.projects.find((p) => p.id === params.id) as MilitaryProject | undefined

  // Check if it's a commercial project
  const commercialProject = commercialProjectsData.projects.find((p) => p.id === params.id) as
    | CommercialProject
    | undefined

  // Determine project type based on ID prefix
  const isCommercialId = params.id.startsWith("com-")
  const isMilitaryId = params.id.startsWith("mil-")

  // If neither project type is found, return 404
  if (!militaryProject && !commercialProject) {
    notFound()
  }

  // Set project and related data based on project type
  const project: Project = isCommercialId ? commercialProject! : militaryProject!
  const portfolioPath = isCommercialId ? "/portfolio/commercial" : "/portfolio/military"
  const portfolioTitle = isCommercialId ? "Commercial Projects" : "Military Projects"

  // Find related projects (same category/vesselType, excluding current project)
  const relatedProjects = isCommercialId
    ? commercialProjectsData.projects
      .filter((p) => p.vesselType === (project as CommercialProject).vesselType && p.id !== params.id)
      .slice(0, 3)
    : militaryProjectsData.projects
      .filter((p) => p.category === (project as MilitaryProject).category && p.id !== params.id)
      .slice(0, 3)

  return (
    <>
      <section className="pt-32 pb-16 relative">
        {/* Use project image as background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Overlay with reduced opacity */}
        </div>

        <div className="container mx-auto px-4 relative z-20"> {/* Increased z-index to ensure content is above overlay */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={portfolioPath}
                className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {portfolioTitle}
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              {isCommercialProject(project) ? (
                <Badge variant="secondary" className="text-sm">
                  {project.vesselType.charAt(0).toUpperCase() + project.vesselType.slice(1)}
                </Badge>
              ) : (
                <Badge variant="secondary" className="text-sm">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
              )}

              {isCommercialProject(project)
                ? project.services.map((service: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-sm text-white/90 border-white/30">
                    {service}
                  </Badge>
                ))
                : project.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-sm text-white/90 border-white/30">
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">{project.description}</p>

                {isCommercialProject(project) ? (
                  <>
                    <h3 className="text-xl font-bold mt-8 mb-4">Services Provided</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {project.detailedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mt-8 mb-4">Project Significance</h3>
                    <p className="text-muted-foreground">{project.significance}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mt-8 mb-4">Project Significance</h3>
                    <p className="text-muted-foreground">
                      {project.category === "construction" &&
                        "This construction project represents a significant advancement in Nigeria's indigenous naval capabilities, demonstrating our commitment to self-reliance in maritime defense."}
                      {project.category === "refurbishment" &&
                        "This refurbishment project extends the operational life of critical naval assets, ensuring continued maritime security while optimizing resources."}
                      {project.category === "maintenance" &&
                        "This maintenance project ensures the continued operational readiness of vital naval assets, supporting Nigeria's maritime security objectives."}
                      {project.category === "infrastructure" &&
                        "This infrastructure project enhances our capacity to support naval operations, ensuring we can meet the evolving needs of modern maritime defense."}
                    </p>

                    <h3 className="text-xl font-bold mt-8 mb-4">Technical Specifications</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {project.id === "mil-001" && (
                        <>
                          <li>Length: 43 meters</li>
                          <li>Primary armament: 30mm remote-operated naval gun</li>
                          <li>Secondary armament: Three 12.7mm machine guns</li>
                          <li>Optional: 40mm grenade launcher</li>
                          <li>Advanced navigation and communication systems</li>
                          <li>Enhanced hull design for improved seaworthiness</li>
                        </>
                      )}
                      {project.id === "mil-002" && (
                        <>
                          <li>Complete overhaul of six naval vessels</li>
                          <li>Modernization of navigation and communication systems</li>
                          <li>Weapons systems maintenance and calibration</li>
                          <li>Hull integrity restoration</li>
                          <li>Engine and propulsion system refurbishment</li>
                          <li>Enhanced operational capabilities for Gulf of Guinea security operations</li>
                        </>
                      )}
                      {project.id === "mil-003" && (
                        <>
                          <li>Length: 38 meters</li>
                          <li>Enhanced speed capabilities</li>
                          <li>Improved firepower over first-generation SDB</li>
                          <li>Advanced surveillance systems</li>
                          <li>Reinforced hull design</li>
                          <li>Extended operational range</li>
                        </>
                      )}
                      {/* Add more military project specifications as needed */}
                    </ul>
                  </>
                )}

                <h3 className="text-xl font-bold mt-8 mb-4">Project Outcomes</h3>
                <p className="text-muted-foreground">
                  {isCommercialProject(project) ? (
                    project.outcome
                  ) : (
                    <>
                      {project.category === "construction" &&
                        "This project has successfully delivered a high-quality naval vessel that enhances Nigeria's maritime security capabilities while demonstrating our indigenous shipbuilding expertise."}
                      {project.category === "refurbishment" &&
                        "This refurbishment project has successfully extended the operational life of critical naval assets, ensuring continued effectiveness in maritime security operations."}
                      {project.category === "maintenance" &&
                        "This maintenance project has ensured the continued operational readiness of vital naval assets, supporting ongoing maritime security operations."}
                      {project.category === "infrastructure" &&
                        "This infrastructure project has significantly enhanced our capacity to support naval operations, ensuring we can meet the evolving needs of modern maritime defense."}
                    </>
                  )}
                </p>
              </div>

              <Separator className="my-10" />

              {isMilitaryId && (
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-6">Security Information</h3>
                  <div className="bg-muted p-6 rounded-lg">
                    <p className="text-muted-foreground">{militaryProjectsData.securityNote}</p>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-6">Request More Information</h3>
                <p className="text-muted-foreground mb-6">
                  {isCommercialId
                    ? "For detailed information about this project or similar commercial vessel services, please contact our commercial division."
                    : "For detailed information about this project or similar services, please contact our military division. All inquiries are subject to appropriate security clearance."}
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Our {isCommercialId ? "Commercial" : "Military"} Division</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-background rounded-lg border border-border p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Ship className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {isCommercialProject(project) ? "Vessel Type" : "Category"}
                      </p>
                      <p className="font-medium capitalize">
                        {isCommercialProject(project) ? project.vesselType : project.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tag className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {isCommercialProject(project) ? "Services" : "Tags"}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {isCommercialProject(project)
                          ? project.services.map((service: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))
                          : project.tags.map((tag: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="text-lg font-bold mb-4">Related Projects</h3>
                {relatedProjects.length > 0 ? (
                  <div className="space-y-4">
                    {relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        href={`/portfolio/project/${relatedProject.id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedProject.image || "/placeholder.svg"}
                              alt={relatedProject.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                              {relatedProject.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{relatedProject.year}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No related projects found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
