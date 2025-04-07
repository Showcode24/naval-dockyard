"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { certificationsData } from "@/data/certifications"
import { CheckCircle2, Download, ExternalLink, Info, X } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function CertificationsPage() {
  const heroRef = useRef(null)
  const certificationsRef = useRef(null)
  const standardsRef = useRef(null)
  const processRef = useRef(null)
  const [selectedCertification, setSelectedCertification] = useState<number | null>(null)
  const [activeCertification, setActiveCertification] = useState<number | null>(null)

  const isCertificationsInView = useInView(certificationsRef, { once: true, amount: 0.1 })
  const isStandardsInView = useInView(standardsRef, { once: true, amount: 0.3 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  // Mouse parallax effect for hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    // Calculate normalized mouse position (-1 to 1)
    const normalizedX = (clientX / windowWidth) * 2 - 1
    const normalizedY = (clientY / windowHeight) * 2 - 1

    setMousePosition({ x: normalizedX, y: normalizedY })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <motion.section
        className="pt-32 pb-16 bg-secondary text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        ref={heroRef}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/about/blueprint-pattern.svg')",
            backgroundSize: "cover",
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ x: mousePosition.x * 10, y: mousePosition.y * 10 }}
            >
              Certifications & Accreditations
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ x: mousePosition.x * 5, y: mousePosition.y * 5 }}
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

          {/* Certification detail modal */}
          <AnimatePresence>
            {selectedCertification !== null && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCertification(null)}
              >
                <motion.div
                  className="bg-background rounded-lg max-w-2xl w-full"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="relative h-16 w-32 mr-4">
                          <Image
                            src={certificationsData.certifications[selectedCertification].logo || "/placeholder.svg"}
                            alt={certificationsData.certifications[selectedCertification].name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">
                            {certificationsData.certifications[selectedCertification].name}
                          </h3>
                          <p className="text-primary">
                            Valid until: {certificationsData.certifications[selectedCertification].validUntil}
                          </p>
                        </div>
                      </div>
                      <motion.button
                        className="text-muted-foreground hover:text-foreground"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedCertification(null)}
                      >
                        <X className="h-6 w-6" />
                      </motion.button>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground">
                        {certificationsData.certifications[selectedCertification].description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Scope</h4>
                      <p className="text-muted-foreground">
                        {(selectedCertification !== null &&
                          (certificationsData.certifications[selectedCertification] as any).scope) ||
                          "This certification covers all our shipbuilding and repair operations, including design, manufacturing, and quality control processes."}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {(
                          (selectedCertification !== null &&
                            (certificationsData.certifications[selectedCertification] as any).requirements) || [
                            "Comprehensive quality management system",
                            "Regular internal and external audits",
                            "Continuous improvement processes",
                            "Staff training and competency verification",
                          ]
                        ).map((req: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" asChild>
                        <a
                          href={certificationsData.certifications[selectedCertification].verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={certificationsData.certifications[selectedCertification].certificateLink} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" ref={certificationsRef}>
            {certificationsData.certifications.map((certification, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-md border border-border relative perspective-500"
                custom={index}
                initial="hidden"
                animate={isCertificationsInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 2,
                  z: 10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
                onHoverStart={() => setActiveCertification(index)}
                onHoverEnd={() => setActiveCertification(null)}
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
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    animate={{
                      color: activeCertification === index ? "var(--primary)" : "var(--foreground)",
                      x: activeCertification === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {certification.name}
                  </motion.h3>
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

                  {/* Info button */}
                  <motion.button
                    className="absolute top-4 right-4 bg-muted text-muted-foreground p-2 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: activeCertification === index ? 1 : 0,
                      scale: activeCertification === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedCertification(index)}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "var(--primary-50)",
                      color: "var(--primary)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Info className="h-4 w-4" />
                  </motion.button>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
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
                className="bg-muted p-8 rounded-lg relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundImage: "url('/images/about/pattern-grid.svg')",
                    backgroundSize: "cover",
                  }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    whileHover={{ color: "var(--primary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    Quality Management
                  </motion.h3>
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
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                          className="relative"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />

                          {/* Ripple effect on hover */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/30"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{
                              scale: [0, 1.5, 2],
                              opacity: [0, 0.5, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                            }}
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{
                            color: "var(--primary)",
                            x: 2,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <strong>{standard.name}:</strong> {standard.description}
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="bg-muted p-8 rounded-lg relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundImage: "url('/images/about/pattern-grid.svg')",
                    backgroundSize: "cover",
                  }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    whileHover={{ color: "var(--primary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    Environmental & Safety
                  </motion.h3>
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
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                          className="relative"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />

                          {/* Ripple effect on hover */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/30"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{
                              scale: [0, 1.5, 2],
                              opacity: [0, 0.5, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                            }}
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{
                            color: "var(--primary)",
                            x: 2,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <strong>{standard.name}:</strong> {standard.description}
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="bg-primary text-white p-8 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            ref={processRef}
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: "url('/images/about/pattern-waves.svg')",
                backgroundSize: "cover",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <motion.h2
                  className="text-2xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Our Certification Process
                </motion.h2>
                <p className="mb-6">{certificationsData.certificationProcess}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block">
                  <Button
                    variant="secondary"
                    asChild
                    className="transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                  >
                    <Link href="/contact">
                      <span className="relative z-10">Request Certification Details</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20 -z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: 10,
                          opacity: 1,
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ borderRadius: "50%", transformOrigin: "center" }}
                      />
                    </Link>
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
                      rotate: 2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative h-12 w-full">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -z-10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

