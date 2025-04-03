"use client"

import { useState, useEffect, useRef } from "react"
import { statsData } from "@/data/home"
import { motion } from "framer-motion"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(statsData.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number[]>(Array(statsData.length).fill(0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

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
  }, [isVisible])

  return (
    <section className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center dark:bg-secondary-foreground/10 p-8 rounded-lg "
            >
              <div className="mb-4">
                <stat.icon className="h-12 w-12 mx-auto text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                {counters[index]}
                <span>+</span>
              </div>
              <h3 className="text-xl font-medium dark:text-white">{stat.label}</h3>
              <p className="text-muted-foreground mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

