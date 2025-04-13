"use client"

import Image from "next/image"
import { clientsData } from "@/data/home"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.1,
      },
    }),
  }

  // New enhanced animation with left-to-right flip and more elegant effects
  const logoAnimationVariants = {
    initial: {
      scale: 1,
      opacity: 0.7,
      rotateY: 0,
    },
    animate: (i: number) => ({
      scale: [1, 1.05, 1.05, 1],
      opacity: [0.7, 1, 1, 0.7],
      rotateY: [0, 180, 360, 0], // Left to right flip (Y-axis)
      filter: [
        "grayscale(100%) brightness(0.9)",
        "grayscale(0%) brightness(1.1)",
        "grayscale(0%) brightness(1.1)",
        "grayscale(100%) brightness(0.9)",
      ],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 2 + i * 0.5, // Staggered delays for each logo
        ease: [0.6, 0.01, -0.05, 0.95], // Custom easing for more elegant motion
      },
    }),
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide services to leading naval forces and commercial shipping companies worldwide
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {clientsData.map((client, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="flex justify-center items-center p-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 max-w-[200px]"
            >
              {/* Perspective wrapper for 3D effect */}
              <div className="perspective-[1200px] relative">
                <motion.div
                  className="flex items-center justify-center transform-style-preserve-3d"
                  custom={index}
                  initial="initial"
                  animate="animate"
                  variants={logoAnimationVariants}
                  whileHover={{
                    scale: 1.15,
                    filter: "grayscale(0%) brightness(1.2)",
                    rotateY: 0,
                    opacity: 1,
                    transition: { duration: 0.4 },
                  }}
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={150}
                    height={60}
                    className="h-16 w-auto object-contain transition-all duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
