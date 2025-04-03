"use client"

import Image from "next/image"
import { clientsData } from "@/data/home"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ClientsSection() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide services to leading naval forces and commercial shipping companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientsData.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn("flex justify-center p-4", client.highlighted && "col-span-2 md:col-span-1")}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={150}
                height={60}
                className="filter grayscale hover:grayscale-0 transition-all duration-300 h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

