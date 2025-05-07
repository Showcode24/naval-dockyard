"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedHeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  className?: string
  maxWidth?: string
  shapeCount?: number
  particleCount?: number
  overlayOpacity?: number
}

export default function AnimatedHero({
  title,
  subtitle,
  backgroundImage = "/contact-us.jpg",
  className = "pt-32 pb-16",
  maxWidth = "max-w-3xl",
  shapeCount = 20,
  particleCount = 30,
  overlayOpacity = 0.75,
}: AnimatedHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Generate shapes with smaller sizes and white borders
  const generateShapes = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 15,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      shape: Math.random() > 0.7 ? "square" : "circle",
    }))
  }

  const shapes = generateShapes(shapeCount)

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    floating: (i: number) => ({
      y: [0, -5, 0, 5, 0],
      x: [0, 2, 0, -2, 0],
      rotate: [0, 1, 0, -1, 0],
      transition: {
        delay: i * 0.05,
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  }

  // Split text for letter animation
  const titleLetters = title.split("")
  const subtitleWords = subtitle.split(" ")

  return (
    <section
      className={`${className} bg-cover bg-center text-white relative overflow-hidden`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}></div>

      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute border border-white ${shape.shape === "square" ? "" : "rounded-full"}`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              borderWidth: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: 0,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              rotate: [shape.rotate, shape.rotate + 180, shape.rotate + 360],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Additional geometric shapes with white borders */}
        <motion.div
          className="absolute border border-white"
          style={{
            width: 30,
            height: 30,
            left: "25%",
            top: "30%",
            borderWidth: "1px",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.2,
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute border border-white rotate-45"
          style={{
            width: 40,
            height: 40,
            right: "20%",
            bottom: "25%",
            borderWidth: "1px",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.2,
            rotate: [45, 405],
            scale: [0.7, 1.1, 0.7],
            x: [0, -70, 70, 0],
            y: [0, 70, -70, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* Triangular shape */}
        <svg className="absolute" style={{ left: "60%", top: "15%", width: 30, height: 30 }} viewBox="0 0 100 100">
          <motion.path
            d="M50 15 L90 85 L10 85 Z"
            fill="rgba(255, 255, 255, 0.03)"
            stroke="white"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto page-header-content relative z-10">
        <div className={maxWidth}>
          {isLoaded && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 flex flex-wrap">
                {titleLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={["visible", "floating"]}
                    variants={titleVariants}
                    className="inline-block"
                    style={{
                      marginRight: letter === " " ? "0.5em" : "0.02em",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <div className="text-xl text-gray-300">
                {subtitleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: [0, i % 2 === 0 ? 3 : -3, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      opacity: { delay: 0.5 + i * 0.1, duration: 0.5 },
                      y: { delay: 0.5 + i * 0.1, duration: 0.5 },
                      x: {
                        delay: 1 + i * 0.1,
                        duration: 3 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                      scale: {
                        delay: 1 + i * 0.1,
                        duration: 3 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: particleCount }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  )
}
