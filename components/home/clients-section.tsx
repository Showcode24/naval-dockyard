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

  // Animation that runs automatically
  const logoAnimationVariants = {
    initial: {
      scale: 1,
      filter: "grayscale(100%)",
      rotate: 0,
    },
    animate: {
      scale: [1, 1.1, 1.1, 1],
      rotate: [0, -1, 1, -1, 0],
      filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(0%)", "grayscale(100%)"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 2,
        times: [0, 0.3, 0.7, 1],
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white text-black overflow-hidden">
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
              <motion.div
                className="flex items-center justify-center"
                initial="initial"
                animate="animate"
                variants={logoAnimationVariants}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={150}
                  height={60}
                  className="h-16 w-auto object-contain transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
