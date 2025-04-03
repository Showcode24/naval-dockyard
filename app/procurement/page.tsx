import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { procurementData } from "@/data/procurement"
import { CheckCircle2, FileText, Users, ShieldCheck } from "lucide-react"

export default function ProcurementPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Procurement & Vendor Portal</h1>
            <p className="text-xl text-gray-300">
              Information for suppliers and contractors interested in working with Naval Dockyard
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg text-muted-foreground">{procurementData.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vendor Registration</h3>
              <p className="text-muted-foreground mb-6">
                Register your company as a potential supplier or contractor for Naval Dockyard.
              </p>
              <Button className="w-full" asChild>
                <Link href="/procurement/vendor-registration">Register Now</Link>
              </Button>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Current Tenders</h3>
              <p className="text-muted-foreground mb-6">
                View and bid on current procurement opportunities and open tenders.
              </p>
              <Button className="w-full" asChild>
                <Link href="/procurement/tenders">View Tenders</Link>
              </Button>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vendor Portal</h3>
              <p className="text-muted-foreground mb-6">
                Access the secure vendor management portal for existing suppliers.
              </p>
              <Button className="w-full" asChild>
                <Link href="/procurement/portal">Access Portal</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Supplier Requirements</h2>
              <p className="text-lg text-muted-foreground mb-6">{procurementData.requirements.description}</p>
              <ul className="space-y-4">
                {procurementData.requirements.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/procurement/supplier-meeting.jpg"
                alt="Supplier Meeting"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Procurement Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {procurementData.categories.map((category, index) => (
                <div key={index} className="bg-background p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <category.icon className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-bold">{category.name}</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold mb-4">Procurement Process</h3>
              <ol className="space-y-4">
                {procurementData.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {procurementData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-medium">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link href="/procurement/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become a Supplier?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our network of trusted suppliers and contractors to support our shipyard operations.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/procurement/vendor-registration">Register as a Vendor</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

