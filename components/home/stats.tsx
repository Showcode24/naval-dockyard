"use client"

import { useState, useEffect, useRef } from "react"
import { statsData } from "@/data/home"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function Stats() {
  const [counters, setCounters] = useState(statsData.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const animationRef = useRef<number[]>(Array(statsData.length).fill(0))

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds for the animation
    const startTime = Date.now()

    const animateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const newCounters = statsData.map((stat) => Math.floor(progress * stat.value))

      setCounters(newCounters)

      if (progress < 1) {
        // Continue the animation
        animationRef.current = requestAnimationFrame(animateCounters)
      } else {
        // Ensure final values are set exactly
        setCounters(statsData.map((stat) => stat.value))
      }
    }

    animationRef.current = requestAnimationFrame(animateCounters)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="text-center dark:bg-secondary-foreground/10 p-8 rounded-lg transform-gpu"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div className="mb-4 relative" variants={iconVariants}>
                <stat.icon className="h-12 w-12 mx-auto text-primary" />
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1.5, opacity: [0, 0.5, 0] } : {}}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>

              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 text-primary"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AnimatePresence>
                  {isInView && (
                    <motion.span
                      key={counters[index]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {counters[index]}
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1, rotate: [0, 20, 0] } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  +
                </motion.span>
              </motion.div>

              <motion.h3
                className="text-xl font-medium dark:text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.h3>

              <motion.p
                className="text-muted-foreground mt-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

