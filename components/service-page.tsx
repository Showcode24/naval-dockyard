"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Waves } from "lucide-react"

// Define TypeScript interfaces for the data structure
export interface ServiceData {
  title: string
  description: string
  image: string
  capabilities: string[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface QualityStandard {
  name: string
  description: string
}

export interface ServicePageData {
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  overview: string
  keyFeatures: string[]
  overviewImage: string
  services: ServiceData[]
  process: ProcessStep[]
  qualityAssurance: {
    description: string
    standards: QualityStandard[]
  }
  qualityImage: string
  emergencyServices: string
  emergencyPhone: string
}

interface ServicePageProps {
  data: ServicePageData
  contactPath?: string
  serviceSectionTitle?: string
  processSectionTitle?: string
}

export default function ServicePage({
  data,
  contactPath = "/contact",
  serviceSectionTitle = "Our Services",
  processSectionTitle = "Our Process",
}: ServicePageProps) {
  // Track scroll position for parallax effects
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const qualityRef = useRef(null)
  const emergencyRef = useRef(null)

  // Check if sections are in view for triggering animations
  const overviewInView = useInView(overviewRef, { once: false, amount: 0.2 })
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.2 })
  const processInView = useInView(processRef, { once: false, amount: 0.2 })
  const qualityInView = useInView(qualityRef, { once: false, amount: 0.2 })
  const emergencyInView = useInView(emergencyRef, { once: false, amount: 0.2 })

  // Mouse position for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const processStepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: i * 0.5,
        damping: 20,
      },
    }),
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <motion.div
        ref={heroRef}
        className="relative h-96 flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url('${data.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero content with floating animation */}
        <motion.div
          className="relative z-10 text-center"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            {data.heroTitle}
          </motion.h1>
          <motion.p
            className="mt-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            {data.heroSubtitle}
          </motion.p>

          {/* Animated wave icon */}
          <motion.div
            className="mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Waves className="h-10 w-10 mx-auto text-blue-300/70" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Overview Section with Scroll Animations */}
      <section ref={overviewRef} className="py-12 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Overview
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <motion.p className="text-gray-700 leading-relaxed" variants={fadeInUp}>
                {data.overview}
              </motion.p>
              <motion.ul
                className="mt-6 space-y-2"
                variants={staggerContainer}
                initial="hidden"
                animate={overviewInView ? "visible" : "hidden"}
              >
                {data.keyFeatures.map((feature, index) => (
                  <motion.li key={index} className="flex items-start" variants={listItemVariant}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={data.overviewImage || "/placeholder.svg"}
                alt="Overview"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Card Animations */}
      <section ref={servicesRef} className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {serviceSectionTitle}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {data.services.map((service, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" variants={fadeInUp}>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg?height=400&width=600"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=600"
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-5">{service.description}</p>
                  <h4 className="font-medium mb-3">Capabilities:</h4>
                  <ul className="text-sm space-y-2.5">
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section with Sequential Animations */}
      <section ref={processRef} className="py-12 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {processSectionTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.process.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative backdrop-blur-sm"
                custom={index}
                variants={processStepVariants}
                initial="hidden"
                animate={processInView ? "visible" : "hidden"}
                whileInView={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  ],
                  backgroundColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 1)"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.2,
                  times: [0, 0.5, 1],
                }}
              >
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.5)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      "0 0 0 0 rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connecting line animation between process steps */}
          <motion.div
            className="hidden md:block h-1 bg-blue-200 mt-8 mx-auto"
            style={{ width: "80%" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Quality Assurance Section with Staggered Animations */}
      <section ref={qualityRef} className="py-12 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={qualityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Quality Assurance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={qualityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={data.qualityImage || "/placeholder.svg"}
                alt="Quality Assurance"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={qualityInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <motion.p className="text-gray-700 leading-relaxed mb-6" variants={fadeInUp}>
                {data.qualityAssurance.description}
              </motion.p>
              <motion.h3 className="text-xl font-semibold mb-4" variants={fadeInUp}>
                Our Standards:
              </motion.h3>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate={qualityInView ? "visible" : "hidden"}
              >
                {data.qualityAssurance.standards.map((standard, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={listItemVariant}
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <strong>{standard.name}:</strong> {standard.description}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section ref={emergencyRef} className="py-12 mx-auto container mb-10 bg-primary rounded-lg">
        <div className="container mx-auto text-center text-white">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={emergencyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Emergency Services
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={emergencyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.emergencyServices}
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href={contactPath}>Request Expedited Service</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
              <a href={`tel:${data.emergencyPhone}`}>{data.emergencyPhone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
