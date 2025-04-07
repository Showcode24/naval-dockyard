"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import { type ReactNode, forwardRef } from "react"

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
  effect?: "pulse" | "shine" | "bounce" | "scale" | "none"
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, effect = "scale", ...props }, ref) => {
    // Different hover animations based on the effect type
    const getHoverAnimation = () => {
      switch (effect) {
        case "pulse":
          return {
            whileHover: {
              boxShadow: "0 0 0 2px var(--primary)",
            },
            whileTap: { scale: 0.95 },
          }
        case "shine":
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
          }
        case "bounce":
          return {
            whileHover: { y: -5 },
            whileTap: { y: 0 },
          }
        case "scale":
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
          }
        case "none":
          return {}
        default:
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
          }
      }
    }

    const hoverAnimation = getHoverAnimation()

    // If asChild is true, we need to handle it differently
    if (props.asChild) {
      return (
        <Button {...props} ref={ref}>
          {children}
        </Button>
      )
    }

    return (
      <motion.div className="relative inline-block" {...hoverAnimation}>
        <Button {...props} ref={ref}>
          <span className="relative z-10">{children}</span>

          {effect === "shine" && (
            <motion.div
              className="absolute inset-0 bg-primary/20 -z-10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}

          {effect === "pulse" && (
            <motion.div
              className="absolute inset-0 rounded-md bg-primary/20 -z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1.2,
                opacity: 0.5,
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1,
                },
              }}
            />
          )}
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

