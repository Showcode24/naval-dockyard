"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { heroSlidesData } from "@/data/home"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressAnimationRef = useRef<number>(0)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Auto-rotate through slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        nextSlide()
      }
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isHovering])

  // Progress bar animation
  useEffect(() => {
    if (isHovering) {
      setProgress(0)
      return
    }

    let startTime: number
    const duration = 6000 // Match this with the interval time

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const newProgress = Math.min(elapsed / duration, 1)

      setProgress(newProgress)

      if (newProgress < 1) {
        progressAnimationRef.current = requestAnimationFrame(animateProgress)
      }
    }

    setProgress(0)
    progressAnimationRef.current = requestAnimationFrame(animateProgress)

    return () => {
      if (progressAnimationRef.current) {
        cancelAnimationFrame(progressAnimationRef.current)
      }
    }
  }, [currentSlide, isHovering])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1))
    setProgress(0)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setProgress(0)
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "5%" : "-5%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-5%" : "5%",
      opacity: 0,
    }),
  }

  const backgroundVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1.5 } },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 0.8 } },
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 },
  }

  const navButtonVariants = {
    initial: { opacity: 0.7, scale: 1 },
    hover: {
      opacity: 1,
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.9 },
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden z-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image with parallax effect */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          className="absolute inset-0 w-full h-full z-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ opacity }}
        >
          <Image
            src={heroSlidesData[currentSlide].image || "/placeholder.svg"}
            alt={heroSlidesData[currentSlide].headline}
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay with animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <motion.div
        className={cn(
          "container mx-auto px-4 z-10 transition-opacity duration-1000 relative",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        style={{ y }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
            className="max-w-3xl"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {heroSlidesData[currentSlide].headline.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1 + index * 0.05,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      transition: {
                        duration: 0.3,
                        delay: index * 0.02,
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4,
                  },
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
              >
                {heroSlidesData[currentSlide].subheadline}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.6,
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Button size="lg" asChild className="relative overflow-hidden group">
                  <Link href={heroSlidesData[currentSlide].primaryCTALink} className="flex items-center">
                    <motion.span
                      className="absolute inset-0 bg-white/20 rounded-md"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    {heroSlidesData[currentSlide].primaryCTA}
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-blue hover:text-white border-white hover:border-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <Link href={heroSlidesData[currentSlide].secondaryCTALink}>
                    {heroSlidesData[currentSlide].secondaryCTA}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Slide navigation dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-20">
        {heroSlidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-40 bg-white/20 h-1 rounded-full overflow-hidden z-20">
        <motion.div
          className="h-full bg-white"
          style={{ width: `${progress * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Navigation arrows */}
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 backdrop-blur-sm"
        onClick={prevSlide}
        variants={navButtonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 backdrop-blur-sm"
        onClick={nextSlide}
        variants={navButtonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
    </section>
  )
}

