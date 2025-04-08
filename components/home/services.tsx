"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { serviceSummaryData } from "@/data/home"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const progressAnimationRef = useRef<number>(0)

  const handleServiceClick = (index: number) => {
    if (index === activeIndex) return
    setIsFlipping(true)
    setProgress(0)
    setTimeout(() => {
      setActiveIndex(index)
      setIsFlipping(false)
    }, 300)
  }

  // Auto-rotate through services
  useEffect(() => {
    // Set up automatic cycling through services
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % serviceSummaryData.length)
      }
    }, 5000) // Change service every 5 seconds

    return () => clearInterval(interval) // Clean up on unmount
  }, [isHovering])

  // Progress bar animation
  useEffect(() => {
    if (isHovering) {
      setProgress(0)
      return
    }

    let startTime: number
    const duration = 5000 // Match this with the interval time

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
  }, [activeIndex, isHovering])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      transition: {
        duration: 0.3,
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ship repair and maintenance services for both military and commercial vessels
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="flex flex-col space-y-4">
              {serviceSummaryData.map((service, index) => (
                <motion.div key={index} variants={itemVariants} whileHover="hover">
                  <motion.button
                    className={cn(
                      "w-full text-left p-6 rounded-lg transition-all duration-300 flex items-start space-x-4 relative overflow-hidden",
                      activeIndex === index
                        ? "bg-primary text-white shadow-lg"
                        : "bg-background hover:bg-background/80",
                    )}
                    onClick={() => handleServiceClick(index)}
                    whileHover={{
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-primary"
                        layoutId="serviceBg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      />
                    )}

                    <motion.div
                      className="shrink-0 relative z-10"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <service.icon className={cn("h-8 w-8", activeIndex === index ? "text-white" : "text-primary")} />
                    </motion.div>

                    <div className="relative z-10">
                      <h3
                        className={cn(
                          "text-xl font-semibold mb-2",
                          activeIndex === index ? "text-white" : "text-foreground",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className={cn("text-sm", activeIndex === index ? "text-white/90" : "text-muted-foreground")}>
                        {service.description}
                      </p>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-2 w-full bg-gray-200 h-1 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Button asChild className="group">
                  <Link href="/services" className="inline-flex items-center">
                    View All Services
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
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
            </motion.div>
          </motion.div>

          <div className="perspective-1000 self-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="rounded-lg overflow-hidden shadow-xl bg-background transform-gpu min-h-[600px]"
                variants={cardVariants}
                initial="hidden"
                animate={isFlipping ? "exit" : "visible"}
                exit="exit"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={serviceSummaryData[activeIndex].image || "/placeholder.svg"}
                      alt={serviceSummaryData[activeIndex].title}
                      width={600}
                      height={400}
                      className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{serviceSummaryData[activeIndex].title}</h3>
                    <p className="text-muted-foreground mb-4">{serviceSummaryData[activeIndex].extendedDescription}</p>
                    <ul className="space-y-2">
                      {serviceSummaryData[activeIndex].features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx, duration: 0.3 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: [0, 180, 360] }}
                            transition={{ delay: 0.2 * idx, duration: 0.5 }}
                          >
                            <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
