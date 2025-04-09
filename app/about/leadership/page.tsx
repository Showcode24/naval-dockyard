"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { leadershipData } from "@/data/leadership"
import { Mail, Linkedin, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function LeadershipPage() {
  const heroRef = useRef(null)
  const executivesRef = useRef(null)
  const directorsRef = useRef(null)
  const joinRef = useRef(null)
  const [expandedBio, setExpandedBio] = useState<number | null>(null)
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const isExecutivesInView = useInView(executivesRef, { once: true, amount: 0.1 })
  const isDirectorsInView = useInView(directorsRef, { once: true, amount: 0.1 })
  const isJoinInView = useInView(joinRef, { once: true, amount: 0.3 })

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
              Leadership Team
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ x: mousePosition.x * 5, y: mousePosition.y * 5 }}
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
                  className="relative perspective-1000 h-[550px]"
                  custom={index}
                  initial="hidden"
                  animate={isExecutivesInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{
                      rotateY: flippedCard === index ? 180 : 0,
                      zIndex: flippedCard === index ? 0 : 1,
                    }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0 bg-background rounded-lg overflow-hidden shadow-lg border border-border h-full w-full">
                      <motion.div className="relative h-80" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                        <Image
                          src={executive.image || "/placeholder.svg"}
                          alt={executive.name}
                          fill
                          className="object-cover"
                        />

                        {/* Gradient overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute bottom-4 left-4 text-white">
                            {/* <p className="font-medium">Click to see full bio</p> */}
                          </div>
                        </motion.div>
                      </motion.div>
                      <div className="p-6">
                        <motion.h3 className="text-2xl font-bold mb-1" whileHover={{ color: "var(--primary)" }}>
                          {executive.name}
                        </motion.h3>
                        <p className="text-primary font-medium mb-4">{executive.position}</p>
                        {/* <p className="text-muted-foreground mb-6 line-clamp-3">{executive.bio}</p> */}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>


          <motion.div
            className="bg-muted p-8 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            ref={joinRef}
          >
            {/* Background pattern */}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <motion.h2
                  className="text-2xl font-bold mb-4"
                  whileHover={{ color: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                >
                  Join Our Team
                </motion.h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented professionals to join our team. If you're passionate about maritime
                  engineering and want to work with industry leaders, explore our current openings.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block">
                  <Button
                    asChild
                    className="transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                  >
                    <Link href="/careers/openings">
                      <span className="relative z-10">View Career Opportunities</span>
                      <motion.div
                        className="absolute inset-0 bg-primary/20 -z-10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 2,
                  z: 10,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image src="/images/img/team.webp" alt="Naval Dockyard Team" fill className="object-cover" />

                {/* Interactive overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 flex items-end"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Collaborative Environment</h3>
                    <p className="text-sm">
                      Join a team of passionate professionals working on cutting-edge maritime projects
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

