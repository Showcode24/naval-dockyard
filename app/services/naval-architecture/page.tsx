"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { navalArchitectureData } from "@/data/services/naval-architecture"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function NavalArchitecturePage() {
  const controls = useAnimation()
  const heroY = useAnimation()

  // Refs for scroll detection
  const heroRef = useRef<HTMLDivElement>(null)
  const overviewRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const regulationsRef = useRef<HTMLDivElement>(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-100px 0px" })
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px 0px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px 0px" })
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px 0px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px 0px" })
  const regulationsInView = useInView(regulationsRef, { once: true, margin: "-100px 0px" })

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
            backgroundImage: "url('/images/ship-design/ship-design-1.webp')",
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
              Ship Design & Construction & Marine Engineering
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Expert Ship Design & Construction and design services for vessel modifications, repairs, and performance
              optimization
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" ref={overviewRef}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={overviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Ship Design & Construction Excellence
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={overviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navalArchitectureData.overview}
              </motion.p>
              <motion.ul
                className="space-y-4"
                variants={staggerChildren}
                initial="hidden"
                animate={overviewInView ? "visible" : "hidden"}
              >
                {navalArchitectureData.keyFeatures.map((feature, index) => (
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
                src="/images/ship-design/ship-design-2.webp"
                alt="Ship Design & Construction"
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
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Ship Design & Construction Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navalArchitectureData.services.map((service, index) => (
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
                      src={
                        index === 0
                          ? "/images/ship-design/ship-design-3.webp"
                          : index === 1
                            ? "/images/ship-design/ship-design-4.webp"
                            : "/images/ship-design/ship-design-5.webp"
                      }
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

          <div className="mb-20" ref={toolsRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={toolsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Design Tools
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {navalArchitectureData.designTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={toolsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
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
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={processRef}>
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={processInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Design Process
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
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
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
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
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 relative rounded-lg overflow-hidden shadow-xl"
              variants={imageReveal}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
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
                src="/images/ship-design/ship-design-6.webp"
                alt="Design Process"
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

      <section className="py-16 bg-muted" ref={regulationsRef}>
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={regulationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Regulatory Compliance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navalArchitectureData.regulations.map((regulation, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={regulationsInView ? { opacity: 1, scale: 1 } : {}}
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

      <motion.section
        className="py-16 bg-primary text-white mx-auto container rounded-2xl mt-10 mb-10"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
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
      </motion.section>
    </>
  )
}
