"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { certificationsData } from "@/data/certifications"
import { CheckCircle2, Download, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function CertificationsPage() {
  const heroRef = useRef(null)
  const certificationsRef = useRef(null)
  const standardsRef = useRef(null)
  const processRef = useRef(null)

  const isCertificationsInView = useInView(certificationsRef, { once: true, amount: 0.1 })
  const isStandardsInView = useInView(standardsRef, { once: true, amount: 0.3 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
      <motion.section
        className="pt-32 pb-16 bg-secondary text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        ref={heroRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Certifications & Accreditations
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our commitment to quality, safety, and environmental standards
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-muted-foreground">{certificationsData.overview}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" ref={certificationsRef}>
            {certificationsData.certifications.map((certification, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-md border border-border"
                custom={index}
                initial="hidden"
                animate={isCertificationsInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="relative h-16 w-32"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={certification.logo || "/placeholder.svg"}
                        alt={certification.name}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                    <motion.div
                      className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "var(--primary-200)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {certification.validUntil}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{certification.name}</h3>
                  <p className="text-muted-foreground mb-4">{certification.description}</p>
                  <div className="flex space-x-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={certification.verificationLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={certification.certificateLink} download>
                          <Download className="h-4 w-4 mr-2" />
                          Certificate
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-20" ref={standardsRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Quality Standards
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="bg-muted p-8 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4">Quality Management</h3>
                <p className="text-muted-foreground mb-6">{certificationsData.qualityManagement.description}</p>
                <ul className="space-y-3">
                  {certificationsData.qualityManagement.standards.map((standard, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.4 }}>
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <strong>{standard.name}:</strong> {standard.description}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="bg-muted p-8 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4">Environmental & Safety</h3>
                <p className="text-muted-foreground mb-6">{certificationsData.environmentalSafety.description}</p>
                <ul className="space-y-3">
                  {certificationsData.environmentalSafety.standards.map((standard, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.4 }}>
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <strong>{standard.name}:</strong> {standard.description}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="bg-primary text-white p-8 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            ref={processRef}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Certification Process</h2>
                <p className="mb-6">{certificationsData.certificationProcess}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" asChild className="transition-all duration-300 hover:shadow-lg">
                    <Link href="/contact">Request Certification Details</Link>
                  </Button>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certificationsData.partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 p-4 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="relative h-12 w-full">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

