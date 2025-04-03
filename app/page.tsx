import Hero from "@/components/home/hero"
import Stats from "@/components/home/stats"
import Services from "@/components/home/services"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/home/call-to-action"
import ClientsSection from "@/components/home/clients-section"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <ClientsSection />
      <CallToAction />
    </div>
  )
}

