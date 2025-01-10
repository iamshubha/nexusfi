'use client'

import { motion } from "framer-motion"
// import Image from "next/image"
import { Twitter, Send, Github } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2233FF] w-full">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white">Nexusfi</h1>
            {/* <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%206.35.55%E2%80%AFPM-l4ypIWngZBmpYbyXMESv2HLgdVCRoy.png" 
              alt="Nexusfi Logo" 
              width={120} 
              height={40} 
              className="w-auto h-8"
            /> */}
            <p className="text-white/80 max-w-md">
              Unlock cross-chain liquidity and maximize rewards across blockchain ecosystems.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://telegram.org"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Send className="w-6 h-6" />
              <span className="sr-only">Telegram</span>
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            Copyright © 2024 Nexus Finance.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

