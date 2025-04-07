"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { fabricationData } from "@/data/services/fabrication"
import { AnimatedHero } from "@/components/ui/animated-hero"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedFeatureItem } from "@/components/ui/animated-feature-item"
import { AnimatedImage } from "@/components/ui/animated-image"
import { Button } from "@/components/ui/button"

export default function FabricationPage() {
  const overviewRef = useRef(null)
  const servicesRef = useRef(null)
  const equipmentRef = useRef(null)
  const qualityRef = useRef(null)
  const materialsRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const isEquipmentInView = useInView(equipmentRef, { once: true, amount: 0.1 })
  const isQualityInView = useInView(qualityRef, { once: true, amount: 0.3 })
  const isMaterialsInView = useInView(materialsRef, { once: true, amount: 0.2 })

  return (
    <>
      <AnimatedHero
        title="Fabrication & Engineering"
        subtitle="Custom metal fabrication and engineering solutions for marine applications"
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
                Advanced Fabrication Capabilities
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {fabricationData.overview}
              </motion.p>
              <ul className="space-y-4">
                {fabricationData.keyFeatures.map((feature, index) => (
                  <AnimatedFeatureItem key={index} text={feature} index={index} delay={0.3} />
                ))}
              </ul>
            </div>
            <AnimatedImage
              src="/images/services/fabrication-main.jpg"
              alt="Fabrication Workshop"
              width={600}
              height={400}
              effect="tilt"
            />
          </AnimatedSection>

          <div className="mb-20" ref={servicesRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Fabrication Services</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fabricationData.services.map((service, index) => (
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

          <div className="mb-20" ref={equipmentRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Equipment</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fabricationData.equipment.map((item, index) => (
                <AnimatedCard
                  key={index}
                  title={item.name}
                  description={item.description}
                  image={item.image || "/placeholder.svg"}
                  imageHeight="h-64"
                  hoverEffect="flip"
                >
                  <div>
                    <h4 className="font-medium mb-2">Specifications:</h4>
                    <ul className="text-sm space-y-1">
                      {item.specifications.map((spec, idx) => (
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
                </AnimatedCard>
              ))}
            </div>
          </div>

          <AnimatedSection ref={qualityRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isQualityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Quality Assurance
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isQualityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {fabricationData.qualityAssurance.description}
              </motion.p>
              <ul className="space-y-4">
                {fabricationData.qualityAssurance.standards.map((standard, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isQualityInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.4 }}>
                      <div className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </motion.div>
                    <div>
                      <strong>{standard.name}:</strong> {standard.description}
                    </div>
                  </motion.li>
                ))}
              </ul>
              <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href="/contact">Request Fabrication Quote</Link>
                </Button>
              </motion.div>
            </div>
            <AnimatedImage
              src="/images/services/fabrication-quality.jpg"
              alt="Quality Assurance"
              width={600}
              height={400}
              className="order-1 lg:order-2"
              effect="float"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-muted" ref={materialsRef}>
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Materials We Work With</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fabricationData.materials.map((material, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isMaterialsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <motion.h3 className="text-xl font-bold mb-3" whileHover={{ color: "var(--primary)" }}>
                  {material.name}
                </motion.h3>
                <p className="text-muted-foreground mb-4">{material.description}</p>
                <motion.div
                  className="text-sm text-muted-foreground"
                  whileHover={{
                    backgroundColor: "var(--primary-50)",
                    color: "var(--primary)",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <strong>Applications:</strong> {material.applications}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white mx-auto container mt-10 mb-10 rounded-2xl">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Custom Fabrication Projects
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our engineering team is ready to discuss your custom fabrication needs. From concept to completion, we
            provide comprehensive solutions for even the most complex marine applications.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

