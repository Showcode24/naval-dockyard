"use client"

import { useState, useEffect, useRef } from "react"
import { testimonialData } from "@/data/home"
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useInView } from "framer-motion"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? -30 : 30,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      rotateY: direction > 0 ? 30 : -30,
    }),
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: "var(--primary)",
      color: "white",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  }

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied naval and commercial clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            variants={quoteVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute text-primary/10 h-24 w-24 -top-6 -left-6 transform -rotate-12 z-0"
          >
            <Quote className="h-full w-full" />
          </motion.div>

          <div className="relative h-[350px] md:h-[300px] overflow-hidden perspective-1000">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute w-full h-full transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <motion.div
                  className="bg-muted p-8 rounded-lg shadow-lg h-full flex flex-col justify-between"
                  whileHover={{
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    <motion.div
                      className="flex text-accent mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, staggerChildren: 0.1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.p
                      className="text-foreground text-lg italic mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      "{testimonialData[currentIndex].quote}"
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.div
                      className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {testimonialData[currentIndex].name.charAt(0)}
                    </motion.div>
                    <div className="ml-4">
                      <p className="font-bold">{testimonialData[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonialData[currentIndex].position}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="flex justify-center mt-8 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

