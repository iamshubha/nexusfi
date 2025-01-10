'use client'

import { motion } from "framer-motion"
// import Image from "next/image"

export function FloatingCoins() {
  const coins = [
    { id: 1, x: 0, y: 0, size: 80, delay: 0 },    // Center coin (Atom)
    { id: 2, x: -60, y: -40, size: 40, delay: 0.2 },  // ETH
    { id: 3, x: 40, y: -60, size: 40, delay: 0.4 },   // BTC
    { id: 4, x: -40, y: 60, size: 40, delay: 0.6 },   // Chain
    { id: 5, x: 60, y: 40, size: 40, delay: 0.8 },    // Avalanche
    { id: 6, x: 20, y: -20, size: 40, delay: 1 },     // Nibiru
  ]

  return (
    <div className="relative w-[300px] h-[300px]">
      {coins.map((coin) => (
        <motion.div
          key={coin.id}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            width: coin.size,
            height: coin.size,
          }}
          initial={{
            x: coin.x - coin.size / 2,
            y: coin.y - coin.size / 2,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [
              coin.y - coin.size / 2,
              coin.y - coin.size / 2 - 10,
              coin.y - coin.size / 2
            ]
          }}
          transition={{
            delay: coin.delay,
            duration: 2,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2233FF] to-[#7747FF] shadow-lg shadow-[#2233FF]/20 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-white font-bold">
              {coin.id === 1 && "⚛"}
              {coin.id === 2 && "⟠"}
              {coin.id === 3 && "₿"}
              {coin.id === 4 && "◇"}
              {coin.id === 5 && "A"}
              {coin.id === 6 && "N"}
            </div>
          </div>
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[#7747FF]/20 blur-[100px] rounded-full animate-pulse" />
    </div>
  )
}

