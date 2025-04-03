import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Lock, FileCheck, Users, Server, AlertTriangle } from "lucide-react"

export default function ProcurementSecurityPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Procurement Security</h1>
            <p className="text-xl text-gray-300">How we protect your information in our procurement processes</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Security Commitment</h2>
            <p className="text-lg text-muted-foreground">
              Naval Dockyard Limited is committed to maintaining the highest standards of security in all our
              procurement processes. We implement robust measures to protect vendor information, ensure fair
              competition, and maintain the integrity of our supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Protection</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We understand the sensitivity of the information you share with us during the procurement process. Our
                comprehensive data protection measures ensure your information remains secure and is only used for its
                intended purpose.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Encryption of sensitive data in transit and at rest</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Strict access controls based on role and need-to-know</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Compliance with relevant data protection regulations</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Data security"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure Portal Access</h3>
                <p className="text-muted-foreground">
                  Our vendor portal employs multi-factor authentication, secure session management, and regular password
                  rotation to ensure only authorized users can access sensitive information.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bid Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the integrity of the bidding process through secure submission channels, time-stamped
                  receipts, and controlled access to bid information until the appropriate evaluation phase.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Staff Training</h3>
                <p className="text-muted-foreground">
                  All procurement staff undergo regular security awareness training to recognize and prevent security
                  threats, maintain confidentiality, and follow proper information handling procedures.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Technical Security</h2>
                <p className="text-muted-foreground mb-6">
                  Our procurement systems are protected by multiple layers of technical security controls to prevent
                  unauthorized access and protect against cyber threats.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Server className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Secure Infrastructure:</strong> Our systems are hosted in secure data centers with
                      physical access controls, redundant power, and environmental monitoring.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Server className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Network Security:</strong> Multiple layers of firewalls, intrusion detection systems, and
                      regular vulnerability scanning protect our network.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Server className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Application Security:</strong> Regular security testing, code reviews, and secure
                      development practices ensure our applications are protected against common vulnerabilities.
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Incident Response</h2>
                <p className="text-muted-foreground mb-6">
                  Despite our preventive measures, we maintain a comprehensive incident response plan to address any
                  security incidents quickly and effectively.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>24/7 Monitoring:</strong> Continuous monitoring of our systems to detect and respond to
                      suspicious activities.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Rapid Response Team:</strong> Dedicated security professionals ready to investigate and
                      mitigate security incidents.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Communication Protocol:</strong> Clear procedures for notifying affected parties in the
                      event of a security breach.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Your Role in Security</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Security is a shared responsibility. As a vendor, you can help maintain the security of our procurement
                process by following these best practices:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-medium">Use strong, unique passwords for your portal account</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-medium">Keep your login credentials confidential</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-medium">Report suspicious activities or communications</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-medium">Ensure your systems are secure and up-to-date</p>
                </div>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/contact">Contact Security Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

