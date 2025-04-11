import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function InternshipsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/images/img/internship-01.webp')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Internships & Training</h1>
            <p className="text-xl text-gray-300">Building the next generation of maritime engineering professionals</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Develop Your Career With Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Naval Dockyard Limited is committed to developing the next generation of maritime engineering
                professionals. Our internship and training programs provide hands-on experience in a real-world shipyard
                environment, working alongside experienced professionals on actual projects.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a student seeking practical experience or a recent graduate looking to start your career,
                our programs offer valuable skills development and potential pathways to permanent employment.
              </p>
              <Button asChild>
                <Link href="/contact">Apply for Internship</Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/img/internship-02.webp"
                alt="Naval Dockyard Interns"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-4">Student Internships</h3>
                <p className="text-muted-foreground mb-6">
                  3-6 month structured internships for engineering students seeking practical experience in maritime
                  engineering, Ship Design & Construction, and related fields.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Hands-on technical experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Mentorship from experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Academic credit opportunities</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/careers/internships/student">Learn More</Link>
                </Button>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-4">Graduate Training Program</h3>
                <p className="text-muted-foreground mb-6">
                  12-month comprehensive training program for recent graduates, rotating through key departments to
                  build broad expertise in shipyard operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Rotational assignments across departments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Project-based learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Potential for permanent employment</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/careers/internships/graduate">Learn More</Link>
                </Button>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-4">Technical Apprenticeships</h3>
                <p className="text-muted-foreground mb-6">
                  2-3 year apprenticeship programs in welding, fabrication, electrical systems, and other technical
                  trades essential to shipyard operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Combination of classroom and on-the-job training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Industry-recognized certifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Competitive stipend during training</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/careers/internships/apprentice">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Application Process</h2>
                <p className="mb-6">
                  Our selection process is designed to identify candidates with both technical aptitude and the right
                  attitude to thrive in our collaborative environment. We welcome applications from diverse backgrounds
                  and institutions.
                </p>
                <ol className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <span>Submit online application with CV and cover letter</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <span>Technical assessment relevant to your field</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <span>Interview with department representatives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      4
                    </div>
                    <span>Offer and onboarding</span>
                  </li>
                </ol>
                <Button variant="secondary" asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/img/internship-03.webp"
                  alt="Team working on project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Maritime Career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our team and develop valuable skills in a dynamic industry with global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Apply for a Program</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/careers/openings">Explore Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

