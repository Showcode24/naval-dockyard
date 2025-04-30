import { jobOpeningsData } from "@/data/careers/openings"
import JobDetailPageClient from "./JobDetailPageClient"

// This function tells Next.js which paths to pre-generate at build time
export function generateStaticParams() {
  return jobOpeningsData.jobs.map((job) => ({
    id: job.id,
  }))
}

export default function JobDetailPage() {
  return <JobDetailPageClient />
}
