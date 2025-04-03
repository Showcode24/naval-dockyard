"use client"

import { useState, useEffect } from "react"
import { testimonialData } from "@/data/home"
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

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
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied naval and commercial clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute text-primary/10 h-24 w-24 -top-6 -left-6 transform -rotate-12" />

          <div className="relative h-[350px] md:h-[300px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full"
              >
                <div className="bg-muted p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="flex text-accent mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground text-lg italic mb-6">"{testimonialData[currentIndex].quote}"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {testimonialData[currentIndex].name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold">{testimonialData[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonialData[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

