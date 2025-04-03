import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GraduateTrainingPage() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <Link
            href="/careers/internships"
            className="flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Internships
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Graduate Training Program</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This page is under development. Please check back soon for more information about our graduate training
            program.
          </p>
          <Button asChild>
            <Link href="/contact">Contact for More Information</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

