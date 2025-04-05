"use client"

import { useRef, useEffect } from "react"
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

  return (
    <>
      <motion.section
        className="pt-32 pb-16 bg-secondary text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        ref={heroRef}
      >
        <div className="container mx-auto px-4">
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
              className="relative rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/about/history-founding.jpg"
                alt="Naval Dockyard Founding"
                width={600}
                height={400}
                className="w-full h-auto"
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
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

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
                >
                  <motion.div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-background p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
                      <div className="text-primary font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>

                  {/* Timeline dot */}
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
                  ></motion.div>
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
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/about/history-today.jpg"
                alt="Naval Dockyard Today"
                width={600}
                height={400}
                className="w-full h-auto"
              />
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="transition-all duration-300 hover:shadow-md">
                  <Link href="/about/leadership" className="inline-flex items-center">
                    Meet Our Leadership Team
                    <ChevronRight className="ml-2 h-4 w-4" />
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
                className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
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
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <achievement.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

