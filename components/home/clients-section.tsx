"use client"

import Image from "next/image"
import { clientsData } from "@/data/home"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
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

  return (
    <section ref={sectionRef} className="py-16 bg-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide services to leading naval forces and commercial shipping companies worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {clientsData.map((client, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className={cn("flex justify-center p-4", client.highlighted && "col-span-2 md:col-span-1")}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [-1, 1, -1, 0],
                  filter: "grayscale(0%)",
                }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  rotate: { duration: 0.5 },
                }}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={150}
                  height={60}
                  className="filter grayscale hover:grayscale-0 transition-all duration-500 h-16 w-auto object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

