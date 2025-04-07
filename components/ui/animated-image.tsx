"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  effect?: "tilt" | "zoom" | "float" | "none"
}

export function AnimatedImage({ src, alt, width, height, className = "", effect = "tilt" }: AnimatedImageProps) {
  // Different hover animations based on the effect type
  const getHoverAnimation = () => {
    switch (effect) {
      case "tilt":
        return {
          whileHover: {
            rotateY: 5,
            rotateX: 5,
            scale: 1.05,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }
      case "zoom":
        return {
          whileHover: { scale: 1.1 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }
      case "float":
        return {
          animate: {
            y: [0, -10, 0],
          },
          transition: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop" as const,
            ease: "easeInOut",
          },
          whileHover: { scale: 1.05 },
        }
      case "none":
        return {}
      default:
        return {
          whileHover: { scale: 1.05 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }
    }
  }

  const animation = getHoverAnimation()

  // For the float effect, we need to handle the animation differently
  if (effect === "float") {
    return (
      <motion.div
        className={`relative rounded-lg overflow-hidden shadow-xl ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full h-auto" />

        {/* Overlay effect on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/20 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      {...animation}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full h-auto" />

      {/* Overlay effect on hover */}
      <motion.div
        className="absolute inset-0 bg-primary/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

