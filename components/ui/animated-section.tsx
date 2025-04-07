"use client"

import { motion } from "framer-motion"
import { type ReactNode, forwardRef } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", delay = 0, direction = "up", duration = 0.5, once = true }, ref) => {
    // Set initial animation properties based on direction
    const getInitialProps = () => {
      switch (direction) {
        case "up":
          return { opacity: 0, y: 50 }
        case "down":
          return { opacity: 0, y: -50 }
        case "left":
          return { opacity: 0, x: 50 }
        case "right":
          return { opacity: 0, x: -50 }
        case "none":
          return { opacity: 0 }
        default:
          return { opacity: 0, y: 50 }
      }
    }

    // Set animation properties
    const getAnimateProps = () => {
      switch (direction) {
        case "up":
        case "down":
          return { opacity: 1, y: 0 }
        case "left":
        case "right":
          return { opacity: 1, x: 0 }
        case "none":
          return { opacity: 1 }
        default:
          return { opacity: 1, y: 0 }
      }
    }

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={getInitialProps()}
        whileInView={getAnimateProps()}
        viewport={{ once, amount: 0.2 }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  },
)

AnimatedSection.displayName = "AnimatedSection"

