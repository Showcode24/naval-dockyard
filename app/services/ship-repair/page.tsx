"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { shipRepairData } from "@/data/services/ship-repair"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ShipRepairPage() {
  const controls = useAnimation()
  const heroY = useAnimation()

  // Refs for scroll detection
  const heroRef = useRef<HTMLDivElement>(null)
  const overviewRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const qualityRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-100px 0px" })
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px 0px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px 0px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px 0px" })
  const qualityInView = useInView(qualityRef, { once: true, margin: "-100px 0px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px 0px" })

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      heroY.start({ y: scrollY * 0.5 })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [heroY])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const cardReveal = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const processStepReveal = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const ctaReveal = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
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
            backgroundImage: "url('/images/img/ship-repair.webp')",
            backgroundSize: "cover",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ship Repair & Maintenance
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive repair services for all vessel types, from routine maintenance to complex overhauls
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" ref={overviewRef}>
            <motion.div initial="hidden" animate={overviewInView ? "visible" : "hidden"} variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Expert Ship Repair Services</h2>
              <p className="text-lg text-muted-foreground mb-6">{shipRepairData.overview}</p>
              <motion.ul
                className="space-y-4"
                variants={staggerChildren}
                initial="hidden"
                animate={overviewInView ? "visible" : "hidden"}
              >
                {shipRepairData.keyFeatures.map((feature, index) => (
                  <motion.li key={index} className="flex items-start" variants={itemFadeIn}>
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl perspective-500"
              variants={imageReveal}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Image
                src="/images/fabrication/fabrication-07.webp"
                alt="Ship Repair Services"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Overlay effect on hover */}
              <motion.div
                className="absolute inset-0 bg-primary/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          <div className="mb-20" ref={servicesRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
            >
              Our Repair Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shipRepairData.services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col"
                  variants={cardReveal}
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20" ref={processRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
            >
              Our Repair Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {shipRepairData.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-muted p-6 rounded-lg relative"
                  variants={processStepReveal}
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={qualityRef}>
            <motion.div
              className="order-2 lg:order-1"
              variants={fadeInUp}
              initial="hidden"
              animate={qualityInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-muted-foreground mb-6">{shipRepairData.qualityAssurance.description}</p>
              <motion.ul
                className="space-y-4 mb-8"
                variants={staggerChildren}
                initial="hidden"
                animate={qualityInView ? "visible" : "hidden"}
              >
                {shipRepairData.qualityAssurance.standards.map((standard, index) => (
                  <motion.li key={index} className="flex items-start" variants={itemFadeIn}>
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>{standard.name}:</strong> {standard.description}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate={qualityInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild>
                  <Link href="/contact">Request a Repair Quote</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-xl"
              variants={imageReveal}
              initial="hidden"
              animate={qualityInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.03,
                rotateY: -5,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Image
                src="/images/ship-repair/ship-repair-4.webp"
                alt="Quality Assurance"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Overlay effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Quality is our priority
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-primary mx-auto container rounded-2xl mb-10"
        ref={ctaRef}
        variants={ctaReveal}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
      >
        <div className="px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Emergency Repair Services</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">{shipRepairData.emergencyServices}</p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={staggerChildren}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Emergency Team</Link>
              </Button>
            </motion.div>
            <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="text-blue border-white hover:bg-white/10" size="lg" asChild>
                <a href={`tel:${shipRepairData.emergencyPhone}`}>{shipRepairData.emergencyPhone}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
