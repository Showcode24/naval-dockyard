"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { vendorRegistrationData } from "@/data/procurement/vendor-registration"
import { CheckCircle2, Upload, FileText, Info } from "lucide-react"

export default function VendorRegistrationPage() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vendor Registration</h1>
            <p className="text-xl text-gray-300">Register as a supplier or contractor for Naval Dockyard</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {isSubmitted ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Registration Submitted</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest in becoming a vendor for Naval Dockyard. Your registration has been
                submitted successfully. Our procurement team will review your information and contact you within 5-7
                business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/procurement">Return to Procurement</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Procurement Team</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${step === i
                          ? "bg-primary text-white"
                          : step > i
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {i}
                      </div>
                      <span className={`text-sm ${step === i ? "font-medium" : "text-muted-foreground"}`}>
                        {i === 1 ? "Company Information" : i === 2 ? "Products & Services" : "Documents & Submit"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                      <h2 className="text-2xl font-bold mb-6">Company Information</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name*</Label>
                          <Input id="companyName" placeholder="Enter company name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="taxId">Tax ID / Registration Number*</Label>
                          <Input id="taxId" placeholder="Enter tax ID" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="website">Company Website</Label>
                          <Input id="website" placeholder="https://www.example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearEstablished">Year Established*</Label>
                          <Input id="yearEstablished" placeholder="YYYY" required />
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="address">Business Address*</Label>
                        <Textarea id="address" placeholder="Enter full address" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City*</Label>
                          <Input id="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State/Province*</Label>
                          <Input id="state" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">Zip/Postal Code*</Label>
                          <Input id="zipCode" required />
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="country">Country*</Label>
                        <Select required>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <h3 className="text-xl font-bold mb-4 mt-8">Primary Contact</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Contact Name*</Label>
                          <Input id="contactName" placeholder="Full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactTitle">Job Title*</Label>
                          <Input id="contactTitle" placeholder="Job title" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="contactEmail">Email Address*</Label>
                          <Input id="contactEmail" type="email" placeholder="email@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Phone Number*</Label>
                          <Input id="contactPhone" placeholder="+1 (123) 456-7890" required />
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <Button type="button" onClick={nextStep}>
                          Next: Products & Services
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                      <h2 className="text-2xl font-bold mb-6">Products & Services</h2>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="businessType">Business Type*</Label>
                        <Select required>
                          <SelectTrigger id="businessType">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {vendorRegistrationData.businessTypes.map((type, index) => (
                              <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, "-")}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 mb-8">
                        <Label>Product/Service Categories*</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          {vendorRegistrationData.categories.map((category, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Checkbox id={`category-${index}`} />
                              <Label htmlFor={`category-${index}`} className="font-normal">
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="description">Company Description*</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide a brief description of your company and its capabilities"
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="experience">Relevant Experience*</Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe your experience in the maritime industry or with similar clients"
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="button" onClick={nextStep}>
                          Next: Documents & Submit
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                      <h2 className="text-2xl font-bold mb-6">Documents & Submit</h2>

                      <div className="space-y-6 mb-8">
                        {vendorRegistrationData.requiredDocuments.map((doc, index) => (
                          <div key={index} className="border border-border rounded-lg p-4">
                            <div className="flex items-start">
                              <FileText className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">{doc.name}*</h4>
                                <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                                <div className="flex items-center space-x-2">
                                  <Button type="button" variant="outline" size="sm" className="flex items-center">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload File
                                  </Button>
                                  <span className="text-sm text-muted-foreground">No file selected</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-muted p-4 rounded-lg mb-8">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Additional Information</h4>
                            <p className="text-sm text-muted-foreground">
                              All documents must be in PDF format and no larger than 10MB each. If you have any issues
                              uploading documents, please contact our procurement team.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-8">
                        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any additional information you would like to provide"
                          className="min-h-[100px]"
                        />
                      </div>

                      <div className="flex items-start space-x-2 mb-8">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="font-normal">
                          I certify that the information provided is accurate and complete. I understand that submission
                          of this form does not guarantee approval as a vendor.*
                        </Label>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="submit">Submit Registration</Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

