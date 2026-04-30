"use client"
import { motion } from "motion/react"

export default function StudentGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, oklch(0.75 0.2 280), oklch(0.6 0.16 270), oklch(0.75 0.2 280))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full bg-background"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full"
          style={{
            background: "conic-gradient(from 180deg, oklch(0.7 0.18 290), oklch(0.55 0.2 265), oklch(0.7 0.18 290))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-2"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px oklch(0.75 0.2 280 / 0.3)",
                "0 0 30px oklch(0.75 0.2 280 / 0.5)",
                "0 0 20px oklch(0.75 0.2 280 / 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  )
}