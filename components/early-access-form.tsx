'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from 'react'
import { submitEarlyAccess } from '../actions/early-access'

export function EarlyAccessForm() {
  const [state, formAction] = useActionState(submitEarlyAccess, null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #2233FF 0%, rgba(34, 51, 255, 0) 100%)',
            opacity: 0.3,
            filter: 'blur(100px)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-md w-full space-y-8"
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
            Get Early Access
          </motion.h2>
        </div>

        <motion.form
          action={async (formData) => {
            setIsSubmitting(true)
            await formAction(formData)
            setIsSubmitting(false)
          }}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <Label htmlFor="wallet" className="text-white">
              Wallet Address
            </Label>
            <Input
              id="wallet"
              name="wallet"
              placeholder="nibi1*0j8.......u6q"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="bob@gmail.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2233FF] text-white hover:bg-[#2233FF]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Give me early access'}
          </Button>

          {state?.error && (
            <p className="text-red-500 text-sm text-center">{state.error}</p>
          )}
          {state?.success && (
            <p className="text-green-500 text-sm text-center">{state.success}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  )
}

