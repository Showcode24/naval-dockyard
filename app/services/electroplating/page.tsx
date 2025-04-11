import ServicePage from "@/components/service-page"
import { electroplatingData } from "@/data/services/electroplating"

export default function ElectroplatingPage() {
  // Transform the data to match the ServicePageData interface
  const pageData = {
    heroImage: electroplatingData.heroImage,
    heroTitle: "Electroplating Services",
    heroSubtitle: "Advanced metal finishing solutions for marine applications",
    overview: electroplatingData.overview,
    keyFeatures: electroplatingData.keyFeatures,
    overviewImage: electroplatingData.overviewImage,
    services: electroplatingData.services,
    process: electroplatingData.process,
    qualityAssurance: electroplatingData.qualityAssurance,
    qualityImage: electroplatingData.qualityImage,
    emergencyServices: electroplatingData.emergencyServices,
    emergencyPhone: electroplatingData.emergencyPhone,
  }

  return (
    <ServicePage
      data={pageData}
      serviceSectionTitle="Our Electroplating Services"
      processSectionTitle="Our Electroplating Process"
    />
  )
}


// "use client"

// import { useRef, useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion, useScroll, useInView } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { CheckCircle2, Waves } from "lucide-react"
// import { electroplatingData } from "@/data/services/electroplating"

// export default function Electroplating() {
//   // Track scroll position for parallax effects
//   const { scrollY } = useScroll()
//   const heroRef = useRef(null)
//   const overviewRef = useRef(null)
//   const servicesRef = useRef(null)
//   const processRef = useRef(null)
//   const qualityRef = useRef(null)
//   const emergencyRef = useRef(null)

//   // Check if sections are in view for triggering animations
//   const overviewInView = useInView(overviewRef, { once: false, amount: 0.2 })
//   const servicesInView = useInView(servicesRef, { once: false, amount: 0.2 })
//   const processInView = useInView(processRef, { once: false, amount: 0.2 })
//   const qualityInView = useInView(qualityRef, { once: false, amount: 0.2 })
//   const emergencyInView = useInView(emergencyRef, { once: false, amount: 0.2 })

//   // Mouse position for interactive effects
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   }

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3, // Increase from 0.1 to 0.3 for more noticeable sequential animation
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const listItemVariant = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   }

//   const processStepVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         delay: i * 0.5, // Increase from 0.2 to 0.5 for more noticeable sequential animation
//         damping: 20,
//       },
//     }),
//   }

//   return (
//     <div className="overflow-x-hidden">
//       {/* Hero Section with Parallax Effect */}
//       <motion.div
//         ref={heroRef}
//         className="relative h-96 flex items-center justify-center text-white overflow-hidden"
//         style={{
//           backgroundImage: `url('${electroplatingData.heroImage}')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Animated overlay with fluid effect */}
//         {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

//         {/* Simple overlay for hero section */}
//         {/* <div className="absolute inset-0 bg-black/40"></div> */}

//         {/* Hero content with floating animation */}
//         <motion.div
//           className="relative z-10 text-center"
//           animate={{ y: [0, -5, 0] }}
//           transition={{
//             duration: 6,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//         >
//           <motion.h1
//             className="text-4xl font-bold"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//               type: "spring",
//               stiffness: 100,
//             }}
//           >
//             Electroplating Services
//           </motion.h1>
//           <motion.p
//             className="mt-2 text-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.4,
//               type: "spring",
//               stiffness: 100,
//             }}
//           >
//             Advanced metal finishing solutions for marine applications
//           </motion.p>

//           {/* Animated wave icon */}
//           {/* <motion.div
//             className="mt-8"
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "easeInOut",
//             }}
//           >
//             <Waves className="h-10 w-10 mx-auto text-blue-300/70" />
//           </motion.div> */}
//         </motion.div>
//       </motion.div>

//       {/* Overview Section with Scroll Animations */}
//       <section ref={overviewRef} className="py-12 px-4">
//         <div className="container mx-auto">
//           <motion.h2
//             className="text-3xl font-semibold text-center mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//           >
//             Overview
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               animate={overviewInView ? "visible" : "hidden"}
//               transition={{ duration: 0.6 }}
//             >
//               <motion.p className="text-gray-700 leading-relaxed" variants={fadeInUp}>
//                 {electroplatingData.overview}
//               </motion.p>
//               <motion.ul
//                 className="mt-6 space-y-2"
//                 variants={staggerContainer}
//                 initial="hidden"
//                 animate={overviewInView ? "visible" : "hidden"}
//               >
//                 {electroplatingData.keyFeatures.map((feature, index) => (
//                   <motion.li key={index} className="flex items-start" variants={listItemVariant}>
//                     <motion.div
//                       animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Number.POSITIVE_INFINITY,
//                         ease: "easeInOut",
//                         delay: Math.random() * 2, // Random delay for each icon
//                       }}
//                     >
//                       <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
//                     </motion.div>
//                     <span>{feature}</span>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 delay: 0.2,
//               }}
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="overflow-hidden rounded-lg"
//             >
//               <Image
//                 src={electroplatingData.overviewImage || "/placeholder.svg"}
//                 alt="Electroplating Services"
//                 width={600}
//                 height={400}
//                 className="w-full h-auto rounded-lg shadow-md transition-all duration-300"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section with Card Animations */}
//       <section ref={servicesRef} className="py-12 bg-gray-100">
//         <div className="container mx-auto">
//           <motion.h2
//             className="text-3xl font-semibold text-center mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Electroplating Services
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             animate={servicesInView ? "visible" : "hidden"}
//           >
//             {electroplatingData.services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//                 variants={fadeInUp}
//                 animate={{
//                   y: [-2, -8, -2],
//                   boxShadow: [
//                     "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//                     "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//                     "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                   times: [0, 0.5, 1],
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <motion.div
//                     animate={{ scale: [1, 1.03, 1] }}
//                     transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//                   >
//                     <Image
//                       src={service.image || "/placeholder.svg?height=400&width=600"}
//                       alt={service.title}
//                       fill
//                       className="object-cover transition-all duration-500"
//                       onError={(e) => {
//                         e.currentTarget.src = "/placeholder.svg?height=400&width=600"
//                       }}
//                     />
//                   </motion.div>
//                   {/* Overlay gradient on hover */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//                 <motion.div
//                   className="p-6"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//                   <p className="text-gray-700 mb-5">{service.description}</p>
//                   <h4 className="font-medium mb-3">Capabilities:</h4>
//                   <motion.ul
//                     className="text-sm space-y-2.5"
//                     variants={staggerContainer}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.8 }}
//                   >
//                     {service.capabilities.map((capability, idx) => (
//                       <motion.li key={idx} className="flex items-start" variants={listItemVariant}>
//                         <motion.span
//                           className="text-primary mr-2"
//                           animate={{ scale: [1, 1.2, 1] }}
//                           transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: Math.random() * 2 }}
//                         >
//                           •
//                         </motion.span>
//                         <span>{capability}</span>
//                       </motion.li>
//                     ))}
//                   </motion.ul>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Process Section with Sequential Animations */}
//       <section ref={processRef} className="py-12 px-4">
//         <div className="container mx-auto">
//           <motion.h2
//             className="text-3xl font-semibold text-center mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Electroplating Process
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {electroplatingData.process.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md relative backdrop-blur-sm"
//                 custom={index}
//                 variants={processStepVariants}
//                 initial="hidden"
//                 animate={
//                   processInView
//                     ? "visible" // Change this to use the variants instead of inline animation
//                     : "hidden"
//                 }
//                 whileInView={{
//                   // Add this for the hover/floating effect
//                   scale: [1, 1.03, 1],
//                   boxShadow: [
//                     "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                     "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   ],
//                   backgroundColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 1)"],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                   delay: index * 0.2,
//                   times: [0, 0.5, 1],
//                 }}
//               >
//                 <motion.div
//                   className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold"
//                   animate={{
//                     scale: [1, 1.1, 1],
//                     rotate: [0, 5, 0],
//                     boxShadow: [
//                       "0 0 0 0 rgba(59, 130, 246, 0.5)",
//                       "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//                       "0 0 0 0 rgba(59, 130, 246, 0.5)",
//                     ],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                     times: [0, 0.5, 1],
//                   }}
//                 >
//                   {index + 1}
//                 </motion.div>
//                 <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Connecting line animation between process steps */}
//           <motion.div
//             className="hidden md:block h-1 bg-blue-200 mt-8 mx-auto"
//             style={{ width: "80%" }}
//             initial={{ scaleX: 0, originX: 0 }}
//             animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
//             transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
//           />
//         </div>
//       </section>

//       {/* Quality Assurance Section with Staggered Animations */}
//       <section ref={qualityRef} className="py-12 px-4">
//         <div className="container mx-auto">
//           <motion.h2
//             className="text-3xl font-semibold text-center mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={qualityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//           >
//             Quality Assurance
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={qualityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 delay: 0.2,
//               }}
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="overflow-hidden rounded-lg"
//             >
//               <Image
//                 src={electroplatingData.qualityImage || "/placeholder.svg"}
//                 alt="Quality Assurance"
//                 width={600}
//                 height={400}
//                 className="w-full h-auto rounded-lg shadow-md"
//               />

//               {/* Subtle wave animation overlay */}
//               <motion.div
//                 className="absolute"
//                 animate={{
//                   maskPosition: ["left top", "right top"],
//                 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "linear",
//                   repeatType: "reverse",
//                 }}
//               />
//             </motion.div>
//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               animate={qualityInView ? "visible" : "hidden"}
//               transition={{ duration: 0.6 }}
//             >
//               <motion.p className="text-gray-700 leading-relaxed mb-6" variants={fadeInUp}>
//                 {electroplatingData.qualityAssurance.description}
//               </motion.p>
//               <motion.h3 className="text-xl font-semibold mb-4" variants={fadeInUp}>
//                 Our Standards:
//               </motion.h3>
//               <motion.ul
//                 className="space-y-4"
//                 variants={staggerContainer}
//                 initial="hidden"
//                 animate={qualityInView ? "visible" : "hidden"}
//               >
//                 {electroplatingData.qualityAssurance.standards.map((standard, index) => (
//                   <motion.li
//                     key={index}
//                     className="flex items-start"
//                     variants={listItemVariant}
//                     animate={{ x: [0, 3, 0] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Number.POSITIVE_INFINITY,
//                       ease: "easeInOut",
//                       delay: index * 0.5,
//                     }}
//                   >
//                     <motion.div
//                       animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Number.POSITIVE_INFINITY,
//                         ease: "easeInOut",
//                         delay: Math.random() * 2, // Random delay for each icon
//                       }}
//                     >
//                       <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
//                     </motion.div>
//                     <div>
//                       <strong>{standard.name}:</strong> {standard.description}
//                     </div>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Emergency Services Section with Attention-Grabbing Animation */}
//       <motion.section
//         ref={emergencyRef}
//         className="py-12 mx-auto container mb-10 overflow-hidden"
//         initial={{ borderRadius: "1rem", backgroundColor: "rgb(59, 130, 246)" }}
//         animate={
//           emergencyInView
//             ? {
//               borderRadius: "1rem",
//               backgroundColor: "rgb(59, 130, 246)",
//               boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.2)", "0 0 0 20px rgba(59, 130, 246, 0)"],
//             }
//             : {}
//         }
//         transition={{
//           boxShadow: {
//             duration: 2,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatDelay: 1,
//           },
//         }}
//       >
//         {/* Animated background with fluid effect */}
//         <motion.div
//           className="absolute inset-0 bg-blue-600 opacity-50"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 50%)",
//           }}
//           animate={{
//             "--x": `${mousePosition.x}px`,
//             "--y": `${mousePosition.y}px`,
//           }}
//           transition={{ type: "tween", ease: "linear", duration: 0.5 }}
//         />

//         <div className="container mx-auto text-center text-white relative z-10">
//           <motion.h2
//             className="text-3xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={emergencyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//           >
//             Emergency Electroplating Services
//           </motion.h2>
//           <motion.p
//             className="text-lg mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={emergencyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {electroplatingData.emergencyServices}
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center gap-4"
//             variants={staggerContainer}
//             initial="hidden"
//             animate={emergencyInView ? "visible" : "hidden"}
//           >
//             <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button variant="secondary" size="lg" asChild className="relative overflow-hidden group">
//                 <Link href="/contact">
//                   {/* Subtle wave animation on hover */}
//                   <motion.span
//                     className="absolute inset-0 bg-white/10"
//                     initial={{ y: "100%" }}
//                     whileHover={{ y: ["100%", "0%", "100%"] }}
//                     transition={{ duration: 1.5, ease: "easeInOut" }}
//                   />
//                   Request Expedited Service
//                 </Link>
//               </Button>
//             </motion.div>
//             <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 variant="outline"
//                 className="border-white text-white hover:bg-white/10 relative overflow-hidden"
//                 size="lg"
//                 asChild
//               >
//                 <a href={`tel:${electroplatingData.emergencyPhone}`}>
//                   {/* Pulse animation for emergency contact */}
//                   <motion.span
//                     className="absolute inset-0 bg-white/20 rounded-lg"
//                     animate={{
//                       scale: [1, 1.1, 1],
//                       opacity: [0.2, 0.1, 0.2],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Number.POSITIVE_INFINITY,
//                       ease: "easeInOut",
//                     }}
//                   />
//                   {electroplatingData.emergencyPhone}
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   )
// }
