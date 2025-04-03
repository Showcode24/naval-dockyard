import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { historyData } from "@/data/history"
import { ChevronRight } from "lucide-react"

export default function HistoryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our History</h1>
            <p className="text-xl text-gray-300">
              From humble beginnings to industry leadership: The Naval Dockyard story
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Beginning</h2>
              <p className="text-lg text-muted-foreground mb-6">{historyData.beginning}</p>
              <p className="text-lg text-muted-foreground">{historyData.vision}</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/history-founding.jpg"
                alt="Naval Dockyard Founding"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="my-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {/* Timeline items */}
              {historyData.timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative z-10 flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"}`}>
                    <div className="bg-background p-6 rounded-lg shadow-md border border-border">
                      <div className="text-primary font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/history-today.jpg"
                alt="Naval Dockyard Today"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Naval Today</h2>
              <p className="text-lg text-muted-foreground mb-6">{historyData.today}</p>
              <p className="text-lg text-muted-foreground mb-8">{historyData.future}</p>
              <Button asChild>
                <Link href="/about/leadership" className="inline-flex items-center">
                  Meet Our Leadership Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Key milestones and recognitions throughout our history
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {historyData.achievements.map((achievement, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

