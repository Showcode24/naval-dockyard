"use client"

import { useState } from "react"
import Image from "next/image"
import { serviceSummaryData } from "@/data/home"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ship repair and maintenance services for both military and commercial vessels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex flex-col space-y-4">
              {serviceSummaryData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className={cn(
                      "w-full text-left p-6 rounded-lg transition-all duration-300 flex items-start space-x-4",
                      activeIndex === index
                        ? "bg-primary text-white shadow-lg"
                        : "bg-background hover:bg-background/80",
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="shrink-0">
                      <service.icon className={cn("h-8 w-8", activeIndex === index ? "text-white" : "text-primary")} />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "text-xl font-semibold mb-2",
                          activeIndex === index ? "text-white" : "text-foreground",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className={cn("text-sm", activeIndex === index ? "text-white/90" : "text-muted-foreground")}>
                        {service.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild className="group">
                <Link href="/services" className="inline-flex items-center">
                  View All Services
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl bg-background"
          >
            <Image
              src={serviceSummaryData[activeIndex].image || "/placeholder.svg"}
              alt={serviceSummaryData[activeIndex].title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{serviceSummaryData[activeIndex].title}</h3>
              <p className="text-muted-foreground mb-4">{serviceSummaryData[activeIndex].extendedDescription}</p>
              <ul className="space-y-2">
                {serviceSummaryData[activeIndex].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

