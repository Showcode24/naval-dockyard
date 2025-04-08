"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { historyData } from "@/data/history"
import { ChevronRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function HistoryPage() {
  const controls = useAnimation()
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const achievementsRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 })
  const isAchievementsInView = useInView(achievementsRef, { once: true, amount: 0.2 })
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null)

  useEffect(() => {
    if (isTimelineInView) {
      controls.start("visible")
    }
  }, [controls, isTimelineInView])

  useEffect(() => {
    if (isAchievementsInView) {
      controls.start("achievementsVisible")
    }
  }, [controls, isAchievementsInView])

  // Parallax effect for hero section
  const heroY = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      heroY.start({ y: scrollY * 0.5 })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [heroY])

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
            backgroundImage: "url('/images/img/history.webp')",
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
              Our History
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From humble beginnings to industry leadership: The Naval Dockyard story
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Our Beginning
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {historyData.beginning}
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {historyData.vision}
              </motion.p>
            </div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl perspective-500"
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
                src="/images/img/history-founding.webp"
                alt="Naval Dockyard Founding"
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
          </motion.div>

          <div className="my-20" ref={timelineRef}>
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              {/* Timeline line with animation */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Timeline items */}
              {historyData.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative z-10 flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  initial="hidden"
                  animate={controls}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  onHoverStart={() => setActiveTimelineItem(index)}
                  onHoverEnd={() => setActiveTimelineItem(null)}
                >
                  <motion.div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"}`}
                    whileHover={{
                      scale: 1.05,
                      z: 50,
                      rotateY: index % 2 === 0 ? -5 : 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="bg-background p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
                      animate={{
                        boxShadow:
                          activeTimelineItem === index
                            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <motion.div
                        className="text-primary font-bold text-2xl mb-2"
                        animate={{
                          scale: activeTimelineItem === index ? 1.1 : 1,
                          x: activeTimelineItem === index ? (index % 2 === 0 ? -5 : 5) : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.year}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </motion.div>

                  {/* Timeline dot with pulse effect */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"
                    initial={{ scale: 0 }}
                    animate={controls}
                    variants={{
                      hidden: { scale: 0 },
                      visible: (i) => ({
                        scale: 1,
                        transition: {
                          delay: i * 0.3 + 0.2,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 300,
                        },
                      }),
                    }}
                    custom={index}
                    whileHover={{ scale: 1.5 }}
                  >
                    {/* Pulse animation */}
                    {activeTimelineItem === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        initial={{ opacity: 0.7, scale: 1 }}
                        animate={{ opacity: 0, scale: 2 }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl"
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
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/images/img/history-today.webp"
                alt="Naval Dockyard Today"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Zoom effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Explore our modern facilities
                </div>
              </motion.div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Naval Today
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {historyData.today}
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {historyData.future}
              </motion.p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block">
                <Button
                  asChild
                  className="transition-all duration-300 hover:shadow-md relative z-10 overflow-hidden group"
                >
                  <Link href="/about/leadership" className="inline-flex items-center">
                    <span className="relative z-10">Meet Our Leadership Team</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20 -z-10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted" ref={achievementsRef}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Key milestones and recognitions throughout our history
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {historyData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative perspective-500"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  achievementsVisible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  }),
                }}
                custom={index}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  z: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "var(--primary-200)",
                    scale: 1.2,
                    z: 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <achievement.icon className="h-8 w-8 text-primary" />

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-primary/40"
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-primary/40"
                    animate={{
                      x: [0, -15, 0],
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: index * 0.1 + 0.5,
                    }}
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mb-3"
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                >
                  {achievement.title}
                </motion.h3>
                <p className="text-muted-foreground">{achievement.description}</p>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

