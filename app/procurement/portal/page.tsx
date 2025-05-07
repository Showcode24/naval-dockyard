"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { portalData } from "@/data/procurement/portal"
import { ShieldCheck, HelpCircle } from "lucide-react"
import AnimatedHero from "@/components/ui/animated-hero"

export default function VendorPortalPage() {
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoggingIn(true)

    // Simulate login attempt
    setTimeout(() => {
      setIsLoggingIn(false)
      // In a real application, this would redirect to the portal dashboard
      // or show an error message
    }, 1500)
  }

  return (
    <>
      <AnimatedHero
        title="Vendor Portal"
        subtitle="Access the secure vendor management portal"
        backgroundImage="/contact-us.jpg"
      />

      {/* <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vendor Portal</h1>
            <p className="text-xl text-gray-300">Access the secure vendor management portal</p>
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Portal Access</h2>
              <p className="text-lg text-muted-foreground mb-8">{portalData.overview}</p>

              <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-6">Login to Vendor Portal</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="font-normal">
                          Remember me
                        </Label>
                      </div>
                      <Link href="/procurement/portal/reset-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoggingIn}>
                    {isLoggingIn ? "Logging in..." : "Login to Portal"}
                  </Button>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link href="/procurement/vendor-registration" className="text-primary hover:underline">
                        Register as a vendor
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Portal Features</h2>
              <div className="space-y-6">
                {portalData.features.map((feature, index) => (
                  <div key={index} className="bg-muted p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-white p-6 rounded-lg mt-8">
                <div className="flex items-start">
                  <ShieldCheck className="h-6 w-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Secure Access</h3>
                    <p className="mb-4">
                      Our vendor portal uses industry-standard encryption and security protocols to protect your
                      information. Multi-factor authentication is available for enhanced security.
                    </p>
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/procurement/security">Learn About Our Security</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portalData.faqs.map((faq, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/procurement/portal/help">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

