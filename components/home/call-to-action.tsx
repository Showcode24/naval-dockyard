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

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 px-4 mx-auto lg:mx-12 bg-primary rounded-2xl mt-10 mb-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full"
        initial={{ x: 100, y: -100 }}
        animate={isInView ? { x: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full"
        initial={{ x: -50, y: 50 }}
        animate={isInView ? { x: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />

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

