"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { contactData } from "@/data/contact"
import { MapPin, Phone, Mail, Clock, CheckCircle2, Ship, FileText, Calendar, Loader2 } from "lucide-react"
import { submitContactForm } from "@/lib/actions"
import { useToast } from "@/components/ui/use-toast"

type TabType = "quote" | "support" | "info"

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  serviceType: string
  vesselType: string
  projectTimeline: string
  message: string
}

export default function ContactPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<TabType>("quote")

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    vesselType: "",
    projectTimeline: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabType)
    setIsSubmitted(false)
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitContactForm({
        ...formState,
        tabType: activeTab,
      })

      if (result.success) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          vesselType: "",
          projectTimeline: "",
          message: "",
        })
        toast({
          title: "Form submitted successfully",
          description: "We'll get back to you soon!",
          variant: "default",
        })
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : "Failed to submit form. Please try again.")
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/images/img/contact.webp')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team for service inquiries, quotes, or support
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="quote" className="mb-12" onValueChange={handleTabChange}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="quote">Get a Quote</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
                <TabsTrigger value="info">General Info</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="quote">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form to receive a detailed quote for your vessel repair, maintenance, or engineering
                    needs. Our team will respond within 24 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Ship className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Services We Quote</h3>
                        <ul className="text-muted-foreground text-sm mt-1 space-y-1">
                          {contactData.serviceTypes.slice(0, 5).map((service, index) => (
                            <li key={index}>• {service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">What to Include</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          For the most accurate quote, please include vessel details, scope of work, and preferred
                          timeline.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Response Time</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Standard quotes: 24-48 hours
                          <br />
                          Complex projects: 3-5 business days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-background shadow-md rounded-lg p-8">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Quote Request Sent!</h3>
                      <p className="text-muted-foreground max-w-md mb-6">
                        Thank you for contacting Naval Dockyard. Our team will review your project requirements and get
                        back to you with a detailed quote within 24-48 hours. We've sent a confirmation email to your
                        inbox.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6">Service Quote Request</h2>
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                          {error}
                        </div>
                      )}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name*</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address*</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="Enter your email address"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number*</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company/Organization</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="Enter your company name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="serviceType">Service Type*</Label>
                            <Select
                              value={formState.serviceType}
                              onValueChange={(value) => handleSelectChange("serviceType", value)}
                              required
                            >
                              <SelectTrigger id="serviceType">
                                <SelectValue placeholder="Select a service type" />
                              </SelectTrigger>
                              <SelectContent>
                                {contactData.serviceTypes.map((service, index) => (
                                  <SelectItem key={index} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vesselType">Vessel Type*</Label>
                            <Select
                              value={formState.vesselType}
                              onValueChange={(value) => handleSelectChange("vesselType", value)}
                              required
                            >
                              <SelectTrigger id="vesselType">
                                <SelectValue placeholder="Select vessel type" />
                              </SelectTrigger>
                              <SelectContent>
                                {contactData.vesselTypes.map((type, index) => (
                                  <SelectItem key={index} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectTimeline">Project Timeline*</Label>
                          <Select
                            value={formState.projectTimeline}
                            onValueChange={(value) => handleSelectChange("projectTimeline", value)}
                            required
                          >
                            <SelectTrigger id="projectTimeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {contactData.projectTimelines.map((timeline, index) => (
                                <SelectItem key={index} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details*</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Describe your vessel and service requirements in detail"
                            className="min-h-[150px]"
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                            </>
                          ) : (
                            "Request Quote"
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-6">Support</h2>
                  <p className="text-muted-foreground mb-8">
                    Need assistance with an ongoing project or have technical questions? Our support team is ready to
                    help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone Support</h3>
                        <p className="text-muted-foreground">
                          Main: {contactData.phone}
                          <br />
                          Emergency: {contactData.emergencyPhone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Email Support</h3>
                        <p className="text-muted-foreground">
                          General: {contactData.email}
                          <br />
                          Technical: {contactData.serviceEmail}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Support Hours</h3>
                        <p className="text-muted-foreground">{contactData.hours}</p>
                        <p className="text-xs text-muted-foreground mt-1">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-background shadow-md rounded-lg p-8">
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Support Request Received!</h3>
                        <p className="text-muted-foreground max-w-md mb-6">
                          Thank you for contacting our support team. We'll review your request and respond as quickly as
                          possible. A confirmation email has been sent to your inbox.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold mb-6">Technical Support Request</h2>
                        {error && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                            {error}
                          </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name*</Label>
                              <Input
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address*</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number*</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formState.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Project/Vessel ID</Label>
                              <Input
                                id="company"
                                name="company"
                                value={formState.company}
                                onChange={handleChange}
                                placeholder="Enter project or vessel ID"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="serviceType">Issue Type*</Label>
                            <Select
                              value={formState.serviceType}
                              onValueChange={(value) => handleSelectChange("serviceType", value)}
                              required
                            >
                              <SelectTrigger id="serviceType">
                                <SelectValue placeholder="Select issue type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="technical">Technical Issue</SelectItem>
                                <SelectItem value="billing">Billing Question</SelectItem>
                                <SelectItem value="scheduling">Scheduling</SelectItem>
                                <SelectItem value="quality">Quality Concern</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Issue Details*</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formState.message}
                              onChange={handleChange}
                              placeholder="Please describe the issue in detail"
                              className="min-h-[150px]"
                              required
                            />
                          </div>

                          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                              </>
                            ) : (
                              "Submit Support Request"
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="info">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    For general inquiries, directions, or information about our services, use the contact details below.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Dockyard Location</h3>
                        <p className="text-muted-foreground">{contactData.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">{contactData.phone}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          For emergency support: {contactData.emergencyPhone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">{contactData.email}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          For service inquiries: {contactData.serviceEmail}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Operating Hours</h3>
                        <p className="text-muted-foreground">{contactData.hours}</p>
                        <p className="text-xs text-muted-foreground mt-1">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-background shadow-md rounded-lg p-8">
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                        <p className="text-muted-foreground max-w-md mb-6">
                          Thank you for your message. Our team will get back to you within 24 hours. A confirmation
                          email has been sent to your inbox.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold mb-6">General Inquiry</h2>
                        {error && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                            {error}
                          </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name*</Label>
                              <Input
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address*</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number*</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message*</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formState.message}
                              onChange={handleChange}
                              placeholder="Enter your message"
                              className="min-h-[150px]"
                              required
                            />
                          </div>

                          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                              </>
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Locations</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Naval+Dockyard+Limited+Lagos+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold mb-4">Main Dockyard</h3>
              <p className="text-muted-foreground mb-4">
                Naval Dockyard Limited
                <br />
                Ahmadu Bello Way, Victoria Island
                <br />
                Lagos, Nigeria
              </p>
              <p className="text-sm text-muted-foreground">
                Our primary facility for ship repair and maintenance, including dry dock services and engineering
                support.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold mb-4">Technical Services</h3>
              <p className="text-muted-foreground mb-4">
                Naval Dockyard Annex
                <br />
                Nigerian Navy Base
                <br />
                Lagos, Nigeria
              </p>
              <p className="text-sm text-muted-foreground">
                Facility dedicated to rapid-response repairs, logistics, and technical support for naval operations.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold mb-4">Engineering Office</h3>
              <p className="text-muted-foreground mb-4">
                Engineering & Design Unit
                <br />
                Naval Dockyard Complex
                <br />
                Victoria Island, Lagos
              </p>
              <p className="text-sm text-muted-foreground">
                Hosts naval architects, marine engineers, and project planning teams for shipbuilding and design
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
