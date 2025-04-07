"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

interface AnimatedCardProps {
  title: string
  description: string
  image?: string
  capabilities?: string[]
  specifications?: string[]
  children?: React.ReactNode
  className?: string
  imageHeight?: string
  hoverEffect?: "tilt" | "flip" | "scale" | "shine" | "none"
}

export function AnimatedCard({
  title,
  description,
  image,
  capabilities,
  specifications,
  children,
  className = "",
  imageHeight = "h-48",
  hoverEffect = "tilt"
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Different hover animations based on the effect type
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "tilt":
        return {
          whileHover: {
            rotateY: 5,
            rotateX: 5,
            scale: 1.02,
            z: 10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        }
      case "flip":
        return {
          whileHover: { rotateY: 15 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        }
      case "scale":
        return {
          whileHover: { scale: 1.05 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        }
      case "none":
        return {}
      default:
        return {
          whileHover: { scale: 1.02 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        }
    }
  }

  const hoverAnimation = getHoverAnimation()

  return (
    <motion.div
      className={`bg-background rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      {...hoverAnimation}
      style={{ transformStyle: "preserve-3d" }}
    >
      {image && (
        <div className={`relative ${imageHeight}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              scale: isHovered ? 1.05 : 1,
              transition: "transform 0.5s ease-out"
            }}
          />

          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <div className="p-6 flex-grow">
        <motion.h3
          className="text-xl font-bold mb-3"
          animate={{
            color: isHovered ? "var(--primary)" : "var(--foreground)",
            x: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <p className="text-muted-foreground mb-4">{description}</p>

        {capabilities && capabilities.length > 0 && (
          <ul className="space-y-2 mb-4">
            {capabilities.map((capability, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                </motion.div>
                <span className="text-sm">{capability}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {specifications && specifications.length > 0 && (
          <div>
            <h4 className="font-medium mb-2">Specifications:</h4>
            <ul className="text-sm space-y-1">
              {specifications.map((spec, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 2 }}
                >
                  {spec}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {children}
      </div>

      {/* Shine effect on hover */}
      {hoverEffect === "shine" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? ["0%", "100%"] : "0%"
          }}
          transition={{
            x: { duration: 0.8, ease: "easeInOut" },
            opacity: { duration: 0.3 }
          }}
        />
      )}
    </motion.div>
  )
}
