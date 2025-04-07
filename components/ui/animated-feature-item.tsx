"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface AnimatedFeatureItemProps {
  text: string
  index?: number
  delay?: number
}

export function AnimatedFeatureItem({ text, index = 0, delay = 0 }: AnimatedFeatureItemProps) {
  return (
    <motion.li
      className="flex items-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index + delay }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.4 }} className="relative">
        <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />

        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/30"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: [0, 1.5, 2],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </motion.div>
      <motion.span
        whileHover={{
          color: "var(--primary)",
          fontWeight: "bold",
        }}
      >
        {text}
      </motion.span>
    </motion.li>
  )
}

