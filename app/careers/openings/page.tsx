"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { jobOpeningsData } from "@/data/careers/openings"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase, Clock, ChevronRight } from "lucide-react"
import AnimatedHero from "@/components/ui/animated-hero"

export default function JobOpeningsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const filteredJobs = jobOpeningsData.jobs.filter((job) => {
    if (jobOpeningsData.jobs.length === 0) return false

    const matchesSearch =
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
    const matchesLocation = locationFilter === "all" || job.location === locationFilter

    return matchesSearch && matchesDepartment && matchesLocation
  })

  // Get unique departments and locations (if any jobs exist)
  const departments = ["all", ...new Set(jobOpeningsData.jobs.map((job) => job.department).filter(Boolean))]
  const locations = ["all", ...new Set(jobOpeningsData.jobs.map((job) => job.location).filter(Boolean))]

  // Check if jobs array is empty
  const hasJobs = jobOpeningsData.jobs.length > 0

  return (
    <>
      <AnimatedHero
        title="Job Openings"
        subtitle="Join our team of skilled professionals in the maritime industry"
        backgroundImage="/contact-us.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Build Your Career With Us</h2>
            <p className="text-lg text-muted-foreground">{jobOpeningsData.overview}</p>
          </div>

          {hasJobs ? (
            <>
              <div className="bg-muted p-6 rounded-lg mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search positions..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept === "all" ? "All Departments" : dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc === "all" ? "All Locations" : loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  {filteredJobs.length} {filteredJobs.length === 1 ? "Position" : "Positions"} Available
                </h3>

                {filteredJobs.length === 0 ? (
                  <div className="bg-background p-8 rounded-lg text-center">
                    <p className="text-muted-foreground mb-4">No positions match your search criteria.</p>
                    <Button
                      onClick={() => {
                        setSearchTerm("")
                        setDepartmentFilter("all")
                        setLocationFilter("all")
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {filteredJobs.map((job, index) => (
                      <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{job.title}</h3>
                          <Badge variant={job.type === "Full-time" ? "default" : "secondary"} className="mt-2 md:mt-0">
                            {job.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Posted {job.postedDate}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm">
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 3 && (
                            <span className="bg-muted px-3 py-1 rounded-full text-sm">
                              +{job.requirements.length - 3} more
                            </span>
                          )}
                        </div>

                        <Button asChild>
                          <Link href={`/careers/openings/${job.id}`} className="flex items-center">
                            View Position
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            // Display message when no jobs are available
            <div className="bg-background p-8 rounded-lg text-center mb-12 border border-border">
              <h3 className="text-xl font-bold mb-4">No job openings available at the moment.</h3>
              <p className="text-muted-foreground mb-6">Please check back later for new opportunities.</p>
            </div>
          )}

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Don't See the Right Position?</h2>
                <p className="mb-6">
                  We're always looking for talented individuals to join our team. If you don't see a position that
                  matches your skills, submit your resume for future consideration.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/careers/apply">Submit Your Resume</Link>
                </Button>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Recruitment Process</h3>
                <ol className="space-y-3">
                  {jobOpeningsData.recruitmentProcess.map((step, index) => (
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






















// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { jobOpeningsData } from "@/data/careers/openings"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Badge } from "@/components/ui/badge"
// import { Search, MapPin, Briefcase, Clock, ChevronRight } from "lucide-react"
// import AnimatedHero from "@/components/ui/animated-hero"

// export default function JobOpeningsPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [departmentFilter, setDepartmentFilter] = useState("all")
//   const [locationFilter, setLocationFilter] = useState("all")

//   const filteredJobs = jobOpeningsData.jobs.filter((job) => {
//     const matchesSearch =
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.description.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
//     const matchesLocation = locationFilter === "all" || job.location === locationFilter

//     return matchesSearch && matchesDepartment && matchesLocation
//   })

//   const departments = ["all", ...new Set(jobOpeningsData.jobs.map((job) => job.department))]
//   const locations = ["all", ...new Set(jobOpeningsData.jobs.map((job) => job.location))]

//   return (
//     <>
//       <AnimatedHero
//         title="Job Openings"
//         subtitle="Join our team of skilled professionals in the maritime industry"
//         backgroundImage="/contact-us.jpg"
//       />

//       {/* <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
//         <div className="absolute inset-0 bg-black/70 z-0"></div>
//         <div className="container mx-auto page-header-content">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Job Openings</h1>
//             <p className="text-xl text-gray-300">Join our team of skilled professionals in the maritime industry</p>
//           </div>
//         </div>
//       </section> */}

//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-3xl font-bold mb-6">Build Your Career With Us</h2>
//             <p className="text-lg text-muted-foreground">{jobOpeningsData.overview}</p>
//           </div>

//           <div className="bg-muted p-6 rounded-lg mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
//                 <Input
//                   placeholder="Search positions..."
//                   className="pl-10"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>

//               <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Filter by department" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {departments.map((dept) => (
//                     <SelectItem key={dept} value={dept}>
//                       {dept === "all" ? "All Departments" : dept}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Select value={locationFilter} onValueChange={setLocationFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Filter by location" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {locations.map((loc) => (
//                     <SelectItem key={loc} value={loc}>
//                       {loc === "all" ? "All Locations" : loc}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h3 className="text-xl font-bold mb-4">
//               {filteredJobs.length} {filteredJobs.length === 1 ? "Position" : "Positions"} Available
//             </h3>

//             {filteredJobs.length === 0 ? (
//               <div className="bg-background p-8 rounded-lg text-center">
//                 <p className="text-muted-foreground mb-4">No positions match your search criteria.</p>
//                 <Button
//                   onClick={() => {
//                     setSearchTerm("")
//                     setDepartmentFilter("all")
//                     setLocationFilter("all")
//                   }}
//                 >
//                   Clear Filters
//                 </Button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 gap-6">
//                 {filteredJobs.map((job, index) => (
//                   <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
//                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                       <h3 className="text-2xl font-bold">{job.title}</h3>
//                       <Badge variant={job.type === "Full-time" ? "default" : "secondary"} className="mt-2 md:mt-0">
//                         {job.type}
//                       </Badge>
//                     </div>

//                     <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-sm text-muted-foreground">
//                       <div className="flex items-center">
//                         <Briefcase className="h-4 w-4 mr-2" />
//                         {job.department}
//                       </div>
//                       <div className="flex items-center">
//                         <MapPin className="h-4 w-4 mr-2" />
//                         {job.location}
//                       </div>
//                       <div className="flex items-center">
//                         <Clock className="h-4 w-4 mr-2" />
//                         Posted {job.postedDate}
//                       </div>
//                     </div>

//                     <p className="text-muted-foreground mb-6">{job.description}</p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {job.requirements.slice(0, 3).map((req, idx) => (
//                         <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm">
//                           {req}
//                         </span>
//                       ))}
//                       {job.requirements.length > 3 && (
//                         <span className="bg-muted px-3 py-1 rounded-full text-sm">
//                           +{job.requirements.length - 3} more
//                         </span>
//                       )}
//                     </div>

//                     <Button asChild>
//                       <Link href={`/careers/openings/${job.id}`} className="flex items-center">
//                         View Position
//                         <ChevronRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="bg-primary text-white p-8 rounded-lg">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Don't See the Right Position?</h2>
//                 <p className="mb-6">
//                   We're always looking for talented individuals to join our team. If you don't see a position that
//                   matches your skills, submit your resume for future consideration.
//                 </p>
//                 <Button variant="secondary" asChild>
//                   <Link href="/careers/apply">Submit Your Resume</Link>
//                 </Button>
//               </div>
//               <div className="bg-white/10 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4">Recruitment Process</h3>
//                 <ol className="space-y-3">
//                   {jobOpeningsData.recruitmentProcess.map((step, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
//                         {index + 1}
//                       </span>
//                       <span>{step}</span>
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

