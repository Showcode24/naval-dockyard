import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ctaData } from "@/data/home"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 mx-auto lg:mx-12 bg-primary rounded-2xl mt-10 mb-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl text-white mx-auto leading-tight">{ctaData.headline}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">{ctaData.description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href={ctaData.primaryButtonLink}>{ctaData.primaryButtonText}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-blue border-white hover:bg-white/10">
            <Link href={ctaData.secondaryButtonLink}>{ctaData.secondaryButtonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

