"use client"

import { useParams, notFound } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { tendersData } from "@/data/procurement/tenders"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Calendar, Clock, ChevronRight } from "lucide-react"

export default function TenderDetailPage() {
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

  if (!tender) {
    notFound()
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/procurement/tenders"
                className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Tenders
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tender.title}</h1>
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
                  <CardTitle>Tender Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-8">{tender.description}</p>

                  <h3 className="text-xl font-bold mb-4">Requirements</h3>
                  <ul className="space-y-3 mb-8">
                    {tender.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold mb-4">Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {tender.documents.map((document, index) => (
                      <Card key={index} className="hover:bg-muted/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{document.name}</h4>
                            <p className="text-sm text-muted-foreground">{document.size}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-4">Evaluation Criteria</h3>
                  <ol className="space-y-3 mb-8">
                    {tender.evaluationCriteria.map((criterion, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>
                          <strong>{criterion.name}</strong> - {criterion.weight}% - {criterion.description}
                        </span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Bid</CardTitle>
                  <CardDescription>
                    {tender.status === "closed"
                      ? "This tender is now closed for submissions."
                      : "Ensure you meet all requirements before submitting your bid."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {tender.status === "closed" ? (
                    <Button disabled className="w-full">
                      Tender Closed
                    </Button>
                  ) : (
                    <Button asChild className="w-full">
                      <Link href={`/procurement/tenders/${tender.id}/apply`}>Apply Now</Link>
                    </Button>
                  )}

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Tender Timeline</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Published</span>
                          <span>{tender.publishDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Closing Date</span>
                          <span>{tender.closingDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Evaluation Period</span>
                          <span>{tender.evaluationPeriod}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Award Date</span>
                          <span>{tender.awardDate}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Contact Person</span>
                          <span>{tender.contact.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email</span>
                          <span>{tender.contact.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Phone</span>
                          <span>{tender.contact.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Similar Tenders</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {tendersData.tenders
                      .filter((t) => t.id !== tender.id && t.category === tender.category)
                      .slice(0, 3)
                      .map((similarTender, index) => (
                        <Link
                          key={index}
                          href={`/procurement/tenders/${similarTender.id}`}
                          className="block p-4 hover:bg-muted transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{similarTender.title}</h4>
                              <div className="flex gap-2 mt-1">
                                <Badge
                                  variant={
                                    similarTender.status === "open"
                                      ? "default"
                                      : similarTender.status === "closing-soon"
                                        ? "destructive"
                                        : "secondary"
                                  }
                                >
                                  {similarTender.status === "open"
                                    ? "Open"
                                    : similarTender.status === "closing-soon"
                                      ? "Closing Soon"
                                      : "Closed"}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  Closes: {similarTender.closingDate}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </Link>
                      ))}
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