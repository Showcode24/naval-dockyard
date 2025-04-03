"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { tendersData } from "@/data/procurement/tenders"
import { Search, Calendar, FileText, Clock, ArrowRight } from "lucide-react"

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredTenders = tendersData.tenders.filter((tender) => {
    const matchesSearch =
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || tender.category === categoryFilter
    const matchesStatus = statusFilter === "all" || tender.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Current Tenders</h1>
            <p className="text-xl text-gray-300">View and bid on current procurement opportunities</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Bid Opportunities</h2>
            <p className="text-lg text-muted-foreground">{tendersData.overview}</p>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search tenders..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {tendersData.categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closing-soon">Closing Soon</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">
              {filteredTenders.length} {filteredTenders.length === 1 ? "Tender" : "Tenders"} Available
            </h3>

            {filteredTenders.length === 0 ? (
              <div className="bg-background p-8 rounded-lg text-center">
                <p className="text-muted-foreground mb-4">No tenders match your search criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setCategoryFilter("all")
                    setStatusFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredTenders.map((tender, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{tender.title}</h3>
                      <Badge
                        variant={
                          tender.status === "open"
                            ? "default"
                            : tender.status === "closing-soon"
                              ? "destructive"
                              : "secondary"
                        }
                        className="mt-2 md:mt-0"
                      >
                        {tender.status === "open"
                          ? "Open"
                          : tender.status === "closing-soon"
                            ? "Closing Soon"
                            : "Closed"}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-sm text-muted-foreground">
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

                    <p className="text-muted-foreground mb-6">{tender.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href={`/procurement/tenders/${tender.id}`} className="flex items-center">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {tender.status !== "closed" && (
                        <Button variant="outline" asChild>
                          <Link href={`/procurement/tenders/${tender.id}/apply`}>Submit Bid</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">How to Submit a Successful Bid</h2>
                <p className="mb-6">
                  To increase your chances of success, ensure your bid is complete, addresses all requirements, and
                  clearly demonstrates your capabilities and value proposition.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/procurement/bid-guidelines">View Bid Guidelines</Link>
                </Button>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Bid Process Timeline</h3>
                <ol className="space-y-3">
                  {tendersData.bidProcess.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

