"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { dryDockingData } from "@/data/services/dry-docking"
import { AnimatedHero } from "@/components/ui/animated-hero"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedFeatureItem } from "@/components/ui/animated-feature-item"
import { AnimatedImage } from "@/components/ui/animated-image"
import { Button } from "@/components/ui/button"

export default function DryDockingPage() {
  const overviewRef = useRef(null)
  const servicesRef = useRef(null)
  const facilitiesRef = useRef(null)
  const processRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const isFacilitiesInView = useInView(facilitiesRef, { once: true, amount: 0.1 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 })

  return (
    <>
      <AnimatedHero
        title="Dry Docking & Vessel Overhauls"
        subtitle="Complete vessel overhauls and dry docking services for military and commercial vessels"
        backgroundImage="/contact-us.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <AnimatedSection ref={overviewRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Advanced Dry Dock Facilities
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {dryDockingData.overview}
              </motion.p>
              <ul className="space-y-4">
                {dryDockingData.keyFeatures.map((feature, index) => (
                  <AnimatedFeatureItem key={index} text={feature} index={index} delay={0.3} />
                ))}
              </ul>
            </div>
            <AnimatedImage
              src="/images/services/dry-dock-main.jpg"
              alt="Dry Dock Facilities"
              width={600}
              height={400}
              effect="tilt"
            />
          </AnimatedSection>

          <div className="mb-20" ref={servicesRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Dry Docking Services</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dryDockingData.services.map((service, index) => (
                <AnimatedCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image || "/placeholder.svg"}
                  capabilities={service.capabilities}
                  hoverEffect={index % 2 === 0 ? "tilt" : "shine"}
                />
              ))}
            </div>
          </div>

          <div className="mb-20" ref={facilitiesRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Dry Dock Facilities</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dryDockingData.facilities.map((facility, index) => (
                <AnimatedCard
                  key={index}
                  title={facility.name}
                  description={facility.description}
                  image={facility.image || "/placeholder.svg"}
                  imageHeight="h-64"
                  hoverEffect="flip"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Specifications:</h4>
                      <ul className="text-sm space-y-1">
                        {facility.specifications.map((spec, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 2 }}
                          >
                            {spec}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Capabilities:</h4>
                      <ul className="text-sm space-y-1">
                        {facility.capabilities.map((cap, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 2 }}
                          >
                            {cap}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <AnimatedSection ref={processRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Dry Docking Process
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {dryDockingData.process.description}
              </motion.p>
              <ol className="space-y-4">
                {dryDockingData.process.steps.map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
              <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href="/contact">Request Dry Docking Quote</Link>
                </Button>
              </motion.div>
            </div>
            <AnimatedImage
              src="/images/services/dry-dock-process.jpg"
              alt="Dry Docking Process"
              width={600}
              height={400}
              className="order-1 lg:order-2"
              effect="float"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-primary mx-auto mb-10 container rounded-2xl">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl text-white font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Emergency Dry Docking Services
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {dryDockingData.emergencyServices}
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Emergency Team</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="text-blue border-white hover:bg-white/10" size="lg" asChild>
                <a href={`tel:${dryDockingData.emergencyPhone}`}>{dryDockingData.emergencyPhone}</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

