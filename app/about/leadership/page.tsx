"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { leadershipData } from "@/data/leadership"
import { Mail, Linkedin } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function LeadershipPage() {
  const heroRef = useRef(null)
  const executivesRef = useRef(null)
  const directorsRef = useRef(null)
  const joinRef = useRef(null)

  const isExecutivesInView = useInView(executivesRef, { once: true, amount: 0.1 })
  const isDirectorsInView = useInView(directorsRef, { once: true, amount: 0.1 })
  const isJoinInView = useInView(joinRef, { once: true, amount: 0.3 })

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
              Leadership Team
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet the experienced professionals guiding Naval Dockyard
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-xl text-muted-foreground mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our leadership team brings decades of experience in naval engineering, shipbuilding, and maritime
            operations. With diverse backgrounds spanning military and commercial sectors, they guide our company with
            expertise and vision.
          </motion.p>

          <div className="mb-20" ref={executivesRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Executive Leadership
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipData.executives.map((executive, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-lg border border-border"
                  custom={index}
                  initial="hidden"
                  animate={isExecutivesInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div className="relative h-80" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Image
                      src={executive.image || "/placeholder.svg"}
                      alt={executive.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{executive.name}</h3>
                    <p className="text-primary font-medium mb-4">{executive.position}</p>
                    <p className="text-muted-foreground mb-6">{executive.bio}</p>
                    <div className="flex space-x-3">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="outline" size="icon" asChild>
                          <a href={`mailto:${executive.email}`} aria-label={`Email ${executive.name}`}>
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                      {executive.linkedin && (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="outline" size="icon" asChild>
                            <a
                              href={executive.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${executive.name}'s LinkedIn profile`}
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20" ref={directorsRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Directors
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipData.directors.map((director, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-md border border-border"
                  custom={index}
                  initial="hidden"
                  animate={isDirectorsInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div className="relative h-64" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Image
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                    <p className="text-primary font-medium mb-3">{director.position}</p>
                    <p className="text-muted-foreground text-sm mb-4">{director.bio}</p>
                    <div className="flex space-x-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${director.email}`}>
                            <Mail className="h-3 w-3 mr-1" />
                            Contact
                          </a>
                        </Button>
                      </motion.div>
                    </div>
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
            ref={joinRef}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented professionals to join our team. If you're passionate about maritime
                  engineering and want to work with industry leaders, explore our current openings.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="transition-all duration-300 hover:shadow-lg">
                    <Link href="/careers/openings">View Career Opportunities</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Image src="/images/about/team-working.jpg" alt="Naval Dockyard Team" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

