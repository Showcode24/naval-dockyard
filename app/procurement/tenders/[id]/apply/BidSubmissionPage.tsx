"use client"

import { useParams, notFound } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { tendersData } from "@/data/procurement/tenders"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText, Calendar, Clock, Upload, CheckCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function BidSubmissionPage() {

  interface TenderDocument {
    name: string;
    size: string;
  }

  interface EvaluationCriterion {
    name: string;
    weight: number;
    description: string;
  }

  interface ContactPerson {
    name: string;
    email: string;
    phone: string;
  }

  interface Tender {
    id: string;
    title: string;
    description: string;
    category: string;
    referenceNumber: string;
    publishDate: string;
    closingDate: string;
    evaluationPeriod: string;
    awardDate: string;
    budget: string;
    status: "open" | "closing-soon" | "closed";
    requirements: string[];
    documents: TenderDocument[];
    requiredDocuments: string[];
    evaluationCriteria: EvaluationCriterion[];
    contact: ContactPerson;
  }

  interface TendersData {
    overview: string;
    categories: string[];
    bidProcess: string[];
    tenders: Tender[];
  }
  const params = useParams()
  const tenderId = params.id as string

  const tender = tendersData.tenders.find((tender) => tender.id === tenderId) as Tender;

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    proposal: "",
    documents: [] as File[],
  })

  if (!tender) {
    notFound()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setFormData((prev) => ({ ...prev, documents: [...prev.documents, ...filesArray] }))
    }
  }

  const removeDocument = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Bid Submitted Successfully",
        description: "Thank you for your submission. We will evaluate your bid and get back to you soon.",
      })

      // Reset form
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        proposal: "",
        documents: [],
      })
    }, 2000)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={`/procurement/tenders/${tender.id}`}
                className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Tender
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Bid for {tender.title}</h1>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-white/80">
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                {tender.category}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Published: {tender.publishDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Closing: {tender.closingDate}
              </div>
            </div>
            <Badge
              variant={
                tender.status === "open"
                  ? "default"
                  : tender.status === "closing-soon"
                    ? "destructive"
                    : "secondary"
              }
              className="mt-2"
            >
              {tender.status === "open"
                ? "Open"
                : tender.status === "closing-soon"
                  ? "Closing Soon"
                  : "Closed"}
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Bid Submission Form</CardTitle>
                  <CardDescription>
                    Please fill out all required information and upload necessary documents.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder="Your company name"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          name="contactPerson"
                          placeholder="Full name of contact person"
                          required
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="contact@company.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+1 (555) 123-4567"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="proposal">Technical Proposal *</Label>
                        <Textarea
                          id="proposal"
                          name="proposal"
                          placeholder="Describe your technical approach to this tender..."
                          rows={8}
                          required
                          value={formData.proposal}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label>Required Documents *</Label>
                        <div className="border border-dashed border-input rounded-lg p-6 text-center">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              Drag and drop your files here, or click to browse
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, DOC, DOCX, XLS, XLSX (Max. 10MB each)
                            </p>
                            <Input
                              id="documents"
                              name="documents"
                              type="file"
                              multiple
                              accept=".pdf,.doc,.docx,.xls,.xlsx"
                              required={formData.documents.length === 0}
                              className="hidden"
                              onChange={handleFileChange}
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              type="button"
                              onClick={() => document.getElementById("documents")?.click()}
                            >
                              Select Files
                            </Button>
                          </div>
                        </div>

                        {formData.documents.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-sm text-muted-foreground">Selected files:</p>
                            <div className="space-y-2">
                              {formData.documents.map((file, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-2 border rounded"
                                >
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{file.name}</span>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    type="button"
                                    onClick={() => removeDocument(index)}
                                  >
                                    Remove
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          I confirm that all information provided is accurate and complete. I understand that false
                          statements may result in disqualification from the bidding process.
                        </p>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting || tender.status === "closed"}>
                        {isSubmitting ? "Submitting..." : "Submit Bid"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tender Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Reference Number</span>
                          <span>{tender.referenceNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category</span>
                          <span>{tender.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Published</span>
                          <span>{tender.publishDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Closing Date</span>
                          <span>{tender.closingDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Budget</span>
                          <span>{tender.budget}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Required Documents</h4>
                      <ul className="space-y-2 text-sm">
                        {tender.requiredDocuments.map((doc, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Evaluation Criteria</h4>
                      <div className="space-y-3">
                        {tender.evaluationCriteria.map((criterion, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-sm">
                              <span>{criterion.name}</span>
                              <span>{criterion.weight}%</span>
                            </div>
                            <div className="w-full bg-secondary rounded-full h-2 mt-1">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${criterion.weight}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Contact Person</h4>
                      <p className="text-sm">{tender.contact.name}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Email</h4>
                      <p className="text-sm">
                        <a href={`mailto:${tender.contact.email}`} className="text-primary hover:underline">
                          {tender.contact.email}
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Phone</h4>
                      <p className="text-sm">
                        <a href={`tel:${tender.contact.phone}`} className="text-primary hover:underline">
                          {tender.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}