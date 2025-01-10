'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
import { CheckItem } from "@/components/check-item"
import { FloatingCoins } from "@/components/floating-coins"
import { FaqSection } from "@/components/faq-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#070817] overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%206.35.55%E2%80%AFPM-l4ypIWngZBmpYbyXMESv2HLgdVCRoy.png"
            alt="Nexusfi Logo"
            width={120}
            height={40}
            className="w-auto h-8"
          /> */}
          <Button
            variant="ghost"
            className="bg-[#2233FF] text-white hover:bg-[#2233FF]/90 rounded-full px-8"
          >
            Learn more
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Radial Burst Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-[#2233FF]/20 blur-[100px] animate-pulse" />
            <div className="absolute inset-0">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-[800px] w-[2px] origin-bottom"
                  style={{
                    transform: `rotate(${i * 15}deg) translateX(-50%)`,
                    background: 'linear-gradient(to top, transparent, #2233FF)',
                    opacity: 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Making
            </motion.h1>
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white italic leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Defi
            </motion.h1>
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Easier
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              className="bg-[#2233FF] text-white hover:bg-[#2233FF]/90 rounded-full px-8 py-6 text-lg"
            >
              Join the Waitlist
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Partners Section */}
      <div className="w-full py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center gap-8 overflow-x-auto pb-4 no-scrollbar">
            {/* <Image src="/placeholder.svg" alt="Partner 1" width={40} height={40} className="w-10 h-10 opacity-50" />
            <Image src="/placeholder.svg" alt="Nibiru" width={120} height={40} className="h-8 w-auto opacity-50" />
            <Image src="/placeholder.svg" alt="Partner 3" width={40} height={40} className="w-10 h-10 opacity-50" />
            <Image src="/placeholder.svg" alt="Big Layer" width={120} height={40} className="h-8 w-auto opacity-50" />
            <Image src="/placeholder.svg" alt="Partner 5" width={40} height={40} className="w-10 h-10 opacity-50" />
            <Image src="/placeholder.svg" alt="Partner 6" width={120} height={40} className="h-8 w-auto opacity-50" /> */}
          </div>
        </div>
      </div>

      {/* Features Preview Section */}
      <section className="w-full py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto space-y-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Features Preview
            </motion.h2>
            <motion.p
              className="text-lg text-white/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Coming Soon: Next-Level DeFi Features
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[#2233FF]/20 blur-[50px] group-hover:bg-[#2233FF]/30 transition-all duration-500" />
              <div className="relative bg-[#070817]/80 rounded-2xl p-8 border border-white/10 backdrop-blur-xl space-y-8">
                <div className="grid grid-cols-2 gap-4 max-w-[200px]">
                  <div className="aspect-square rounded-full border-2 border-[#2233FF]/50 p-4">
                    <div className="w-full h-full rounded-full bg-[#2233FF]/20 flex items-center justify-center">
                      <span className="text-[#2233FF] text-2xl">₿</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-full border-2 border-[#2233FF]/50 p-4">
                    <div className="w-full h-full rounded-full bg-[#2233FF]/20 flex items-center justify-center">
                      <span className="text-[#2233FF] text-2xl">⟠</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-full border-2 border-[#2233FF]/50 p-4">
                    <div className="w-full h-full rounded-full bg-[#2233FF]/20 flex items-center justify-center">
                      <span className="text-[#2233FF] text-2xl">◇</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-full border-2 border-[#2233FF]/50 p-4">
                    <div className="w-full h-full rounded-full bg-[#2233FF]/20 flex items-center justify-center">
                      <span className="text-[#2233FF] text-2xl">⚛</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-lg">
                  Seamlessly connect and stake across Ethereum, Bitcoin, Cosmos, Nibiru, and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[#2233FF]/20 blur-[50px] group-hover:bg-[#2233FF]/30 transition-all duration-500" />
              <div className="relative bg-[#070817]/80 rounded-2xl p-8 border border-white/10 backdrop-blur-xl space-y-8">
                <div className="grid grid-cols-2 gap-8 max-w-[240px]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg border-2 border-[#2233FF]/50 p-4">
                      <div className="w-full h-full bg-[#2233FF]/20 flex items-center justify-center">
                        <span className="text-[#2233FF] text-2xl">N</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white/80 text-lg">
                  Introducing Distributed Validator Technology (DVT). Enhanced decentralization and security for your assets.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Integration Section */}
      <section className="w-full py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Seamless Integration
                  <br />
                  Across Ecosystems.
                </motion.h2>
                <motion.p
                  className="text-lg text-white/60"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Seamless Unlock cross-chain liquidity and maximize rewards across
                  blockchain ecosystems.
                </motion.p>
              </div>

              <div className="space-y-4">
                <CheckItem delay={0.4}>User-Friendly Onboarding</CheckItem>
                <CheckItem delay={0.6}>Cross-Platform Compatibility</CheckItem>
                <CheckItem delay={0.8}>Live performance metrics and updates</CheckItem>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <FloatingCoins />
            </motion.div>
          </div>
        </div>
      </section>

      <FaqSection />

    </div>
  )
}
