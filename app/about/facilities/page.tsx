"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { facilitiesData } from "@/data/facilities"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function FacilitiesPage() {
  const heroRef = useRef(null)
  const facilitiesRef = useRef(null)
  const equipmentRef = useRef(null)
  const mapRef = useRef(null)

  const isFacilitiesInView = useInView(facilitiesRef, { once: true, amount: 0.2 })
  const isEquipmentInView = useInView(equipmentRef, { once: true, amount: 0.2 })
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <>
      <motion.section
        className="pt-32 pb-16 bg-secondary text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ opacity, scale }}
        ref={heroRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Facilities
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.4 }}>
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/images/about/facilities-aerial.jpg"
                alt="Naval Dockyard Aerial View"
                width={600}
                height={400}
                className="w-full h-auto"
              />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilitiesData.facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-lg border border-border"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <motion.div className="relative h-64" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <ul className="space-y-2 mb-6">
                      {facility.features.map((feature, idx) => (
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
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {facility.specs.map((spec, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-muted px-3 py-1 rounded-full text-sm"
                          whileHover={{ scale: 1.1, backgroundColor: "var(--primary-50)" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {spec}
                        </motion.span>
                      ))}
                    </div>
                  </div>
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
                  className="bg-background p-6 rounded-lg shadow-md border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, backgroundColor: "var(--primary-200)" }}
                    transition={{ duration: 0.8 }}
                  >
                    <item.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Capabilities:</strong> {item.capabilities}
                  </div>
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="transition-all duration-300 hover:shadow-lg">
                  <Link href="/contact">Request a Tour</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-secondary text-white mx-auto rounded-2xl container mb-10"
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
            className="rounded-lg overflow-hidden shadow-lg h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.662386079187!2d-76.61666508449007!3d39.28308037951393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8035b38510f79%3A0x9f3b3e7c8bf79715!2sPort%20of%20Baltimore!5e0!3m2!1sen!2sus!4v1648000000000!5m2!1sen!2sus"
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
    </>
  )
}

