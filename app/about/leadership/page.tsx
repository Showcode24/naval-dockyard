import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { leadershipData } from "@/data/leadership"
import { Mail, Linkedin } from "lucide-react"

export default function LeadershipPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h1>
            <p className="text-xl text-gray-300">Meet the experienced professionals guiding Naval Dockyard</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Our leadership team brings decades of experience in naval engineering, shipbuilding, and maritime
            operations. With diverse backgrounds spanning military and commercial sectors, they guide our company with
            expertise and vision.
          </p>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Executive Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipData.executives.map((executive, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg border border-border">
                  <div className="relative h-80">
                    <Image
                      src={executive.image || "/placeholder.svg"}
                      alt={executive.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{executive.name}</h3>
                    <p className="text-primary font-medium mb-4">{executive.position}</p>
                    <p className="text-muted-foreground mb-6">{executive.bio}</p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${executive.email}`} aria-label={`Email ${executive.name}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                      {executive.linkedin && (
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={executive.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${executive.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipData.directors.map((director, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="relative h-64">
                    <Image
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                    <p className="text-primary font-medium mb-3">{director.position}</p>
                    <p className="text-muted-foreground text-sm mb-4">{director.bio}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${director.email}`}>
                          <Mail className="h-3 w-3 mr-1" />
                          Contact
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented professionals to join our team. If you're passionate about maritime
                  engineering and want to work with industry leaders, explore our current openings.
                </p>
                <Button asChild>
                  <Link href="/careers/openings">View Career Opportunities</Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/team-working.jpg"
                  alt="Naval Dockyard Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

