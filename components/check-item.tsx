'use client'

import { motion } from "framer-motion"
import { Check } from 'lucide-react'

export function CheckItem({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2233FF] flex items-center justify-center">
        <Check className="w-4 h-4 text-white" />
      </div>
      <span className="text-white/60">{children}</span>
    </motion.div>
  )
}

