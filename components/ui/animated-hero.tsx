"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  children?: React.ReactNode
}

export function AnimatedHero({ title, subtitle, backgroundImage, children }: AnimatedHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    // Calculate normalized mouse position (-1 to 1)
    const normalizedX = (clientX / windowWidth) * 2 - 1
    const normalizedY = (clientY / windowHeight) * 2 - 1

    setMousePosition({ x: normalizedX, y: normalizedY })
  }

  // Parallax scroll effect
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.section
      className="pt-32 pb-16 bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${scrollY * 0.2}px`,
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto page-header-content relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ x: mousePosition.x * 10, y: mousePosition.y * 10 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ x: mousePosition.x * 5, y: mousePosition.y * 5 }}
          >
            {subtitle}
          </motion.p>
          {children}
        </div>
      </div>
    </motion.section>
  )
}

