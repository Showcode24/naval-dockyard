"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { offshoreData } from "@/data/services/offshore"
import { AnimatedHero } from "@/components/ui/animated-hero"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedFeatureItem } from "@/components/ui/animated-feature-item"
import { AnimatedImage } from "@/components/ui/animated-image"
import { Button } from "@/components/ui/button"

export default function OffshoreServicePage() {
  const overviewRef = useRef(null)
  const servicesRef = useRef(null)
  const vesselsRef = useRef(null)
  const safetyRef = useRef(null)
  const certificationsRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const isVesselsInView = useInView(vesselsRef, { once: true, amount: 0.1 })
  const isSafetyInView = useInView(safetyRef, { once: true, amount: 0.3 })
  const isCertificationsInView = useInView(certificationsRef, { once: true, amount: 0.2 })

  return (
    <>
      <AnimatedHero
        title="Offshore & Oil & Gas Support"
        subtitle="Specialized services for offshore platforms, subsea infrastructure, and related marine equipment"
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
                Offshore Support Excellence
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {offshoreData.overview}
              </motion.p>
              <ul className="space-y-4">
                {offshoreData.keyFeatures.map((feature, index) => (
                  <AnimatedFeatureItem key={index} text={feature} index={index} delay={0.3} />
                ))}
              </ul>
            </div>
            <AnimatedImage
              src="/images/services/offshore-main.jpg"
              alt="Offshore Support"
              width={600}
              height={400}
              effect="tilt"
            />
          </AnimatedSection>

          <div className="mb-20" ref={servicesRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Offshore Services</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offshoreData.services.map((service, index) => (
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

          <div className="mb-20" ref={vesselsRef}>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Vessel Types We Support</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offshoreData.vesselTypes.map((vessel, index) => (
                <AnimatedCard
                  key={index}
                  title={vessel.name}
                  description={vessel.description}
                  image={vessel.image || "/placeholder.svg"}
                  imageHeight="h-64"
                  hoverEffect="tilt"
                >
                  <div>
                    <h4 className="font-medium mb-2">Services Provided:</h4>
                    <ul className="space-y-2">
                      {vessel.services.map((service, idx) => (
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
                          <span className="text-sm">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <AnimatedSection ref={safetyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isSafetyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Safety & Compliance
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isSafetyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {offshoreData.safety.description}
              </motion.p>
              <ul className="space-y-4">
                {offshoreData.safety.standards.map((standard, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isSafetyInView ? { opacity: 1, x: 0 } : {}}
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
                  <Link href="/contact">Request Offshore Support</Link>
                </Button>
              </motion.div>
            </div>
            <AnimatedImage
              src="/images/services/offshore-safety.jpg"
              alt="Safety & Compliance"
              width={600}
              height={400}
              className="order-1 lg:order-2"
              effect="float"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-muted" ref={certificationsRef}>
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Industry Certifications</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offshoreData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isCertificationsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <motion.h3 className="text-xl font-bold mb-3" whileHover={{ color: "var(--primary)" }}>
                  {cert.name}
                </motion.h3>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
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
                  <strong>Scope:</strong> {cert.scope}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary mx-auto container rounded-2xl mb-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Offshore Emergency Response
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {offshoreData.emergencyResponse}
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Emergency Team</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="text-blue border-white hover:bg-white/10" size="lg" asChild>
                <a href={`tel:${offshoreData.emergencyPhone}`}>{offshoreData.emergencyPhone}</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

