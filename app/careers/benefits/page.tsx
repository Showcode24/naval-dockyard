import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Heart, BookOpen, Compass, Zap, Clock } from "lucide-react"

export default function BenefitsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Benefits & Culture</h1>
            <p className="text-xl text-gray-300">Discover the advantages of working with Naval Dockyard Limited</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Join Our Team?</h2>
            <p className="text-lg text-muted-foreground">
              At Naval Dockyard Limited, we believe our success depends on the wellbeing and growth of our people. We've
              created a workplace that values expertise, fosters innovation, and provides the support our team members
              need to thrive both professionally and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Job Security</h3>
              <p className="text-muted-foreground">
                Enjoy the stability of working with an established organization that plays a vital role in Nigeria's
                maritime security and economic infrastructure.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Compensation</h3>
              <p className="text-muted-foreground">
                We offer competitive salaries, performance bonuses, and comprehensive benefits packages that recognize
                your contributions and expertise.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Health & Wellness</h3>
              <p className="text-muted-foreground">
                Comprehensive health insurance, wellness programs, and safety initiatives to ensure your physical and
                mental wellbeing.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Development</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities through training programs, certifications, and education assistance to
                advance your career.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We've built a culture that balances the precision and discipline required in maritime engineering with
                an environment that encourages innovation, collaboration, and personal growth.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Collaborative Environment</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of teamwork and cross-functional collaboration to solve complex
                      challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Compass className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Purpose-Driven Work</h3>
                    <p className="text-muted-foreground">
                      Our work directly contributes to Nigeria's maritime security and economic development, providing
                      meaningful purpose to our daily efforts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Innovation Mindset</h3>
                    <p className="text-muted-foreground">
                      We encourage creative thinking and continuous improvement in all aspects of our operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Work-Life Balance</h3>
                    <p className="text-muted-foreground">
                      We respect the importance of personal time and family commitments, offering flexible arrangements
                      where possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Employee Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-5 rounded-lg">
                <h3 className="font-bold mb-3">Health & Insurance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive health insurance</li>
                  <li>• Dental and vision coverage</li>
                  <li>• Life and disability insurance</li>
                  <li>• Employee assistance program</li>
                </ul>
              </div>

              <div className="bg-background p-5 rounded-lg">
                <h3 className="font-bold mb-3">Financial Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Competitive salary packages</li>
                  <li>• Performance-based bonuses</li>
                  <li>• Retirement savings plan</li>
                  <li>• Housing and transportation allowances</li>
                </ul>
              </div>

              <div className="bg-background p-5 rounded-lg">
                <h3 className="font-bold mb-3">Time Off</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Annual leave</li>
                  <li>• Sick leave</li>
                  <li>• Public holidays</li>
                  <li>• Parental leave</li>
                </ul>
              </div>

              <div className="bg-background p-5 rounded-lg">
                <h3 className="font-bold mb-3">Professional Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Training and certification programs</li>
                  <li>• Education assistance</li>
                  <li>• Conference and workshop attendance</li>
                  <li>• Career advancement opportunities</li>
                </ul>
              </div>

              <div className="bg-background p-5 rounded-lg">
                <h3 className="font-bold mb-3">Workplace Amenities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modern facilities and equipment</li>
                  <li>• Staff canteen</li>
                  <li>• Recreation areas</li>
                  <li>• Secure parking</li>
                </ul>
              </div>

              <div className="bg-background p-5 rounded-lg">
                <h3 className="font-bold mb-3">Recognition Programs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Employee of the month/year awards</li>
                  <li>• Long service recognition</li>
                  <li>• Innovation awards</li>
                  <li>• Team achievement celebrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore current opportunities to become part of Naval Dockyard Limited's talented team of professionals.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers/openings">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

