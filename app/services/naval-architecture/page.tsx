"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { navalArchitectureData } from "@/data/services/naval-architecture"
import { AnimatedHero } from "@/components/ui/animated-hero"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedFeatureItem } from "@/components/ui/animated-feature-item"
import { AnimatedImage } from "@/components/ui/animated-image"
import { Button } from "@/components/ui/button"

export default function NavalArchitecturePage() {
  const overviewRef = useRef(null)
  const servicesRef = useRef(null)
  const toolsRef = useRef(null)
  const processRef = useRef(null)
  const regulationsRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const isToolsInView = useInView(toolsRef, { once: true, amount: 0.1 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 })
  const isRegulationsInView = useInView(regulationsRef, { once: true, amount: 0.2 })

  return (
    <>
      <AnimatedHero
        title="Ship Design & Construction & Marine Engineering"
        subtitle="Expert Ship Design & Construction and design services for vessel modifications, repairs, and performance optimization"
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
                Ship Design & Construction Excellence
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navalArchitectureData.overview}
              </motion.p>
              <ul className="space-y-4">
                {navalArchitectureData.keyFeatures.map((feature, index) => (
                  <AnimatedFeatureItem key={index} text={feature} index={index} delay={0.3} />
                ))}
              </ul>
            </div>
            <AnimatedImage
              src="/images/services/naval-architecture-main.jpg"
              alt="Ship Design & Construction"
              width={600}
              height={400}
              effect="tilt"
            />
          </AnimatedSection>

          <div className="mb-20" ref={servicesRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Ship Design & Construction Services</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navalArchitectureData.services.map((service, index) => (
                <AnimatedCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image || "/placeholder.svg"}
                  capabilities={service.capabilities}
                  hoverEffect={index % 3 === 0 ? "tilt" : index % 3 === 1 ? "shine" : "flip"}
                />
              ))}
            </div>
          </div>

          <div className="mb-20" ref={toolsRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Design Tools</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {navalArchitectureData.designTools.map((tool, index) => (
                <AnimatedCard key={index} title={tool.name} description={tool.description} hoverEffect="shine">
                  <div>
                    <h4 className="font-medium mb-2">Capabilities:</h4>
                    <ul className="space-y-2">
                      {tool.capabilities.map((capability, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mt-1 mr-2 flex-shrink-0"
                            >
                              <path d="m5 12 7 7 7-7"></path>
                              <path d="M12 19V5"></path>
                            </svg>
                          </motion.div>
                          <span className="text-sm">{capability}</span>
                        </motion.li>
                      ))}
                    </ul>
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
                Design Process
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navalArchitectureData.designProcess.description}
              </motion.p>
              <ol className="space-y-4">
                {navalArchitectureData.designProcess.steps.map((step, index) => (
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
                  <Link href="/contact">Discuss Your Design Needs</Link>
                </Button>
              </motion.div>
            </div>
            <AnimatedImage
              src="/images/services/naval-architecture-process.jpg"
              alt="Design Process"
              width={600}
              height={400}
              className="order-1 lg:order-2"
              effect="float"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-muted" ref={regulationsRef}>
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Regulatory Compliance</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navalArchitectureData.regulations.map((regulation, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isRegulationsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <motion.h3 className="text-xl font-bold mb-3" whileHover={{ color: "var(--primary)" }}>
                  {regulation.name}
                </motion.h3>
                <p className="text-muted-foreground mb-4">{regulation.description}</p>
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
                  <strong>Our Approach:</strong> {regulation.approach}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white mx-auto container rounded-2xl mt-10 mb-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expert Ship Design & Construction Consultation
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team of experienced naval architects and marine engineers is ready to assist with your vessel design,
            modification, or performance optimization needs.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

