"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { heroData } from "@/data/home"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero.jpg"
          alt="Naval Dockyard"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>

      <div
        className={cn(
          "container mx-auto px-4 z-10 transition-opacity duration-1000 relative",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {heroData.headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">{heroData.subheadline}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center">
                {heroData.primaryCTA}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-blue hover:text-white border-white hover:border-white hover:bg-white/10"
              asChild
            >
              <Link href="/services">{heroData.secondaryCTA}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}












// "use client"

// import { useRef, useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { ChevronRight } from "lucide-react"
// import Link from "next/link"
// import { heroData } from "@/data/home"
// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion"

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play().catch((error) => {
//         console.error("Video playback error:", error)
//       })
//     }

//     const timer = setTimeout(() => {
//       setIsLoaded(true)
//     }, 300)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       <video ref={videoRef} className="hero-video-bg" autoPlay muted loop playsInline>
//         <source src="/videos/shipyard-bg.mp4" type="video/mp4" />
//       </video>
//       <div className="hero-overlay"></div>

//       <div
//         className={cn(
//           "container mx-auto px-4 z-10 transition-opacity duration-1000",
//           isLoaded ? "opacity-100" : "opacity-0",
//         )}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//             {heroData.headline}
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">{heroData.subheadline}</p>

//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <Button size="lg" asChild>
//               <Link href="/contact">
//                 {heroData.primaryCTA}
//                 <ChevronRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="text-white hover:text-white border-white hover:border-white hover:bg-white/10"
//             >
//               <Link href="/services">{heroData.secondaryCTA}</Link>
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

