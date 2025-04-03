import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, FileText, Clock, AlertTriangle } from "lucide-react"

export default function BidGuidelinesPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bid Guidelines</h1>
            <p className="text-xl text-gray-300">
              How to submit successful bids for Naval Dockyard Limited procurement opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Preparing a Successful Bid</h2>
            <p className="text-lg text-muted-foreground">
              Naval Dockyard Limited evaluates bids based on technical compliance, price competitiveness, delivery
              timeline, and vendor capability. Following these guidelines will help you prepare a comprehensive and
              competitive bid that addresses all our requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Bid preparation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Before You Begin</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Carefully review the entire tender document to understand all requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Confirm your company meets all eligibility criteria before proceeding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Note all deadlines, including the Q&A period and submission deadline</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Submit any questions for clarification during the designated Q&A period</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Ensure you have all required certifications and documentation ready</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Bid Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Technical Proposal</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The technical proposal should clearly demonstrate how your product or service meets or exceeds our
                  specifications. Include detailed information about:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Detailed specifications of products/services offered</li>
                  <li>• Compliance with technical requirements</li>
                  <li>• Quality assurance processes</li>
                  <li>• Implementation or delivery methodology</li>
                  <li>• Project timeline and milestones</li>
                  <li>• Team qualifications and experience</li>
                  <li>• References from similar projects</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Commercial Proposal</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The commercial proposal should provide clear, detailed pricing information. Include:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Itemized pricing breakdown</li>
                  <li>• Payment terms and schedule</li>
                  <li>• Validity period of the offer</li>
                  <li>• Any discounts or special terms</li>
                  <li>• Warranty and after-sales support</li>
                  <li>• Shipping and delivery costs (if applicable)</li>
                  <li>• Any exclusions or limitations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Submission Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Timing
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Submit your bid well before the deadline</li>
                  <li>• Late submissions will not be accepted</li>
                  <li>• Allow time for technical issues or questions</li>
                  <li>• All times are in West African Time (WAT)</li>
                </ul>

                <h3 className="font-bold mb-3 flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  Format
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Follow the required format specified in the tender</li>
                  <li>• Include all requested forms and attachments</li>
                  <li>• Clearly label all documents</li>
                  <li>• Use the provided templates if available</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-3 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  Completeness
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Ensure all required documents are included</li>
                  <li>• Sign all forms where required</li>
                  <li>• Include all requested certifications</li>
                  <li>• Address all requirements in the tender</li>
                </ul>

                <h3 className="font-bold mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                  Common Mistakes to Avoid
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Incomplete documentation</li>
                  <li>• Missing signatures or certifications</li>
                  <li>• Vague technical descriptions</li>
                  <li>• Unrealistic pricing or timelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ready to Submit a Bid?</h2>
                <p className="mb-6">
                  Browse our current tender opportunities and apply these guidelines to prepare your competitive bid.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" asChild>
                    <Link href="/procurement/tenders">View Current Tenders</Link>
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                    <Link href="/procurement/faq">View Bid FAQs</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Bid submission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

