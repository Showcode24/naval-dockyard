"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { heroData } from "@/data/home"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 },
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden z-0"
    >
      {/* Background image with parallax effect */}
      <motion.div className="absolute inset-0 w-full h-full z-0" style={{ scale, opacity }}>
        <Image
          src="/hero.jpg"
          alt="Naval Dockyard"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </motion.div>

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {heroData.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {heroData.subheadline}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button size="lg" asChild className="relative overflow-hidden group">
                <Link href="/contact" className="flex items-center">
                  <motion.span
                    className="absolute inset-0 bg-white/20 rounded-md"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  {heroData.primaryCTA}
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
                <Link href="/services">{heroData.secondaryCTA}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white rounded-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

