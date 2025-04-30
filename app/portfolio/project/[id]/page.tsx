import { militaryProjectsData } from "@/data/portfolio/military"
import { commercialProjectsData } from "@/data/portfolio/commercial"
import ProjectDetailPageClient from "./ProjectDetailPage"

// This function tells Next.js which paths to pre-generate at build time
export function generateStaticParams() {
  // Combine all projects from both military and commercial data
  const militaryProjects = militaryProjectsData.projects.map((project) => ({
    id: project.id,
  }))

  const commercialProjects = commercialProjectsData.projects.map((project) => ({
    id: project.id,
  }))

  // Return an array of objects with the id parameter for all projects
  return [...militaryProjects, ...commercialProjects]
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetailPageClient params={params} />
}

