"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { facilitiesData } from "@/data/facilities"
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"

export default function FacilitiesPage() {
  const heroRef = useRef(null)
  const facilitiesRef = useRef(null)
  const equipmentRef = useRef(null)
  const mapRef = useRef(null)
  const [activeFacility, setActiveFacility] = useState<number | null>(null)
  const [expandedFacility, setExpandedFacility] = useState<number | null>(null)

  const isFacilitiesInView = useInView(facilitiesRef, { once: true, amount: 0.2 })
  const isEquipmentInView = useInView(equipmentRef, { once: true, amount: 0.2 })
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

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
        style={{ opacity, scale, y }}
        ref={heroRef}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/facilities/facilities-01.webp')",
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
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ x: mousePosition.x * 10, y: mousePosition.y * 10 }}
            >
              Our Facilities
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ x: mousePosition.x * 5, y: mousePosition.y * 5 }}
            >
              Explore our state-of-the-art shipyard and dockyard facilities
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                World-Class Infrastructure
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {facilitiesData.overview}
              </motion.p>
              <motion.ul className="space-y-4">
                {facilitiesData.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
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
                    <motion.span
                      whileHover={{
                        color: "var(--primary)",
                        fontWeight: "bold",
                      }}
                    >
                      {highlight}
                    </motion.span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl perspective-500"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/images/facilities/facilities-02.webp"
                alt="Naval Dockyard Aerial View"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Interactive overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 flex items-end"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Aerial View</h3>
                  <p className="text-sm mb-3">
                    Our 120-acre facility features multiple dry docks and specialized workshops
                  </p>
                  <motion.button
                    className="text-sm font-medium flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    View details <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="mb-20" ref={facilitiesRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Facilities
            </motion.h2>

            {/* Expanded facility view */}
            <AnimatePresence>
              {expandedFacility !== null && (
                <motion.div
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setExpandedFacility(null)}
                >
                  <motion.div
                    className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative">
                      <div className="h-64 md:h-80 relative">
                        <Image
                          src={facilitiesData.facilities[expandedFacility].image || "/placeholder.svg"}
                          alt={facilitiesData.facilities[expandedFacility].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <motion.button
                          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExpandedFacility(null)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </motion.button>
                      </div>
                      <div className="p-6 md:p-8">
                        <h3 className="text-3xl font-bold mb-4">{facilitiesData.facilities[expandedFacility].title}</h3>
                        <p className="text-muted-foreground mb-6">
                          {facilitiesData.facilities[expandedFacility].description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-3">
                            {facilitiesData.facilities[expandedFacility].features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                              >
                                <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3">Specifications</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {facilitiesData.facilities[expandedFacility].specs.map((spec, idx) => (
                              <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full sm:w-auto">Schedule a Tour</Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilitiesData.facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-lg border border-border relative perspective-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 2,
                    z: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  onHoverStart={() => setActiveFacility(index)}
                  onHoverEnd={() => setActiveFacility(null)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="relative h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      style={{
                        scale: activeFacility === index ? 1.1 : 1,
                        transition: "transform 0.5s ease-out",
                      }}
                    />

                    {/* Gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                      animate={{ opacity: activeFacility === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Floating action button */}
                    <motion.button
                      className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: activeFacility === index ? 1 : 0,
                        scale: activeFacility === index ? 1 : 0,
                        rotate: activeFacility === index ? 0 : -90,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      onClick={() => setExpandedFacility(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </motion.button>
                  </motion.div>
                  <div className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-3"
                      animate={{
                        color: activeFacility === index ? "var(--primary)" : "var(--foreground)",
                        x: activeFacility === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {facility.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <ul className="space-y-2 mb-6">
                      {facility.features.slice(0, 3).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                            <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                      {facility.features.length > 3 && (
                        <motion.li
                          className="flex items-start text-primary font-medium cursor-pointer"
                          whileHover={{ x: 5 }}
                          onClick={() => setExpandedFacility(index)}
                        >
                          <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>View {facility.features.length - 3} more features</span>
                        </motion.li>
                      )}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {facility.specs.slice(0, 3).map((spec, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-muted px-3 py-1 rounded-full text-sm"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "var(--primary-50)",
                            color: "var(--primary)",
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {spec}
                        </motion.span>
                      ))}
                      {facility.specs.length > 3 && (
                        <motion.span
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          onClick={() => setExpandedFacility(index)}
                        >
                          +{facility.specs.length - 3} more
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10 opacity-0"
                    animate={{
                      opacity: activeFacility === index ? 1 : 0,
                      x: activeFacility === index ? ["-100%", "100%"] : "-100%",
                    }}
                    transition={{
                      x: { duration: 0.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 },
                      opacity: { duration: 0.3 },
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20" ref={equipmentRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Equipment & Technology
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilitiesData.equipment.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md border border-border relative perspective-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    z: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative"
                    whileHover={{
                      rotate: 360,
                      backgroundColor: "var(--primary-200)",
                      scale: 1.2,
                      z: 20,
                    }}
                    transition={{ duration: 0.8 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <item.icon className="h-8 w-8 text-primary" />

                    {/* Orbiting particle effect */}
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-primary/60"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{
                        top: "10%",
                        left: "50%",
                        transformOrigin: "0 40px",
                      }}
                    />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-3"
                    whileHover={{ scale: 1.05, color: "var(--primary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
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
                    <strong>Capabilities:</strong> {item.capabilities}
                  </motion.div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="bg-muted p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Schedule a Facility Tour</h2>
              <p className="text-muted-foreground mb-6">
                Interested in seeing our facilities in person? We offer guided tours for potential clients and partners.
                Contact us to arrange a visit.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block">
                <Button asChild className="transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                  <Link href="/contact">
                    <span className="relative z-10">Request a Tour</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20 -z-10"
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
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-secondary text-white mx-auto rounded-2xl container mb-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        ref={mapRef}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Facility Location
          </motion.h2>
          <motion.p
            className="text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Strategically located with excellent access to major shipping routes
          </motion.p>
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg h-[400px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Pulsing location marker */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  animate={{
                    scale: [1, 2.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              </div>
            </motion.div>

            <iframe
              src="https://www.google.com/maps?q=Naval+Dockyard+Limited+Lagos+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

