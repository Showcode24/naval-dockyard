"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { leadershipData } from "@/data/leadership"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedHero from "@/components/ui/animated-hero"

export default function LeadershipPage() {
  const heroRef = useRef(null)
  const executivesRef = useRef(null)
  const joinRef = useRef(null)
  const [expandedBio, setExpandedBio] = useState<number | null>(null)
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true)

  const isExecutivesInView = useInView(executivesRef, { once: true, amount: 0.1 })
  const isJoinInView = useInView(joinRef, { once: true, amount: 0.3 })

  // Auto-cycle through executive bios
  useEffect(() => {
    if (!autoPlayEnabled || !isExecutivesInView) return

    const interval = setInterval(() => {
      setExpandedBio((prev) => {
        // If we're at the end of the list, go back to null (all closed)
        if (prev === leadershipData.executives.length - 1) {
          return null
        }
        // If all are closed (null), open the first one
        if (prev === null) {
          return 0
        }
        // Otherwise, open the next one
        return prev + 1
      })
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isExecutivesInView, autoPlayEnabled])

  // Disable auto-play when user interacts manually
  const handleManualToggle = (index: number) => {
    setAutoPlayEnabled(false)
    setExpandedBio(expandedBio === index ? null : index)
  }

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
      <AnimatedHero
        title="Leadership Team"
        subtitle="Meet the experienced professionals guiding Naval Dockyard"
        backgroundImage="/contact-us.jpg"
      />

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
                  custom={index}
                  initial="hidden"
                  animate={isExecutivesInView ? "visible" : "hidden"}
                  variants={cardVariants}
                >
                  <Card className="overflow-hidden h-full border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 pt-8 pb-4 px-6 flex justify-center">
                      <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                        <AvatarImage
                          src={executive.image || "/placeholder.svg?height=128&width=128"}
                          alt={executive.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-4xl">
                          {executive.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardHeader className="text-center pt-4 pb-2">
                      <CardTitle className="text-xl font-bold">{executive.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{executive.position}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-2">
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: expandedBio === index ? "auto" : 0,
                          opacity: expandedBio === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground mb-4">{executive.bio}</p>
                      </motion.div>
                    </CardContent>
                    <CardFooter className="flex justify-center pt-2 pb-4 px-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleManualToggle(index)}
                        className="flex items-center gap-1 text-xs"
                      >
                        {expandedBio === index ? (
                          <>
                            Less info <ChevronUp className="h-3 w-3" />
                          </>
                        ) : (
                          <>
                            More info <ChevronDown className="h-3 w-3" />
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
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
