

'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Main() {
    return (
        <div className="min-h-screen bg-[#070817] overflow-hidden">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Image
                        src="./nexusFi-08.svg"
                        alt="Nexusfi Logo"
                        width={120}
                        height={40}
                        className="w-auto h-8"
                    />
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
        </div>
    )
}

