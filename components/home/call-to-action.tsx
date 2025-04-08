"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ctaData } from "@/data/home"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  // Bubble animation variants
  const bubbleVariants = {
    initial: (custom: { x: number; y: number }) => ({
      x: custom.x,
      y: custom.y,
      opacity: 0.7,
    }),
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -15, 0, 15, 0],
      x: [0, 10, 0, -10, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      scale: [1, 1.05, 1, 0.95, 1],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  // Additional bubbles for more dynamic background
  const bubbles = [
    { size: "w-64 h-64", position: "top-0 right-0", bg: "bg-white/10", initialX: 100, initialY: -100, delay: 0.3 },
    { size: "w-40 h-40", position: "bottom-0 left-0", bg: "bg-white/5", initialX: -50, initialY: 50, delay: 0.5 },
    { size: "w-24 h-24", position: "top-20 left-20", bg: "bg-white/8", initialX: -70, initialY: -70, delay: 0.7 },
    { size: "w-32 h-32", position: "bottom-10 right-20", bg: "bg-white/7", initialX: 80, initialY: 80, delay: 0.9 },
    { size: "w-16 h-16", position: "top-40 right-1/4", bg: "bg-white/10", initialX: 40, initialY: -40, delay: 1.1 },
  ]

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 px-4 mx-auto lg:mx-12 bg-primary rounded-2xl mt-10 mb-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Animated background elements */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.position} ${bubble.size} ${bubble.bg} rounded-full`}
          custom={{ x: bubble.initialX, y: bubble.initialY }}
          variants={bubbleVariants}
          initial="initial"
          animate={isInView ? ["animate", "float"] : "initial"}
          transition={{
            animate: { duration: 1, delay: bubble.delay },
            float: {
              delay: bubble.delay + 1,
              duration: 8 + index * 2, // Different durations for variety
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl text-white mx-auto leading-tight"
          >
            {ctaData.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            {ctaData.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button asChild size="lg" variant="secondary" className="relative overflow-hidden group">
                <Link href={ctaData.primaryButtonLink}>
                  <motion.span
                    className="absolute inset-0 bg-primary/20 rounded-md"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  {ctaData.primaryButtonText}
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-blue border-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href={ctaData.secondaryButtonLink}>{ctaData.secondaryButtonText}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
