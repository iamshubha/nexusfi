'use client'

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is NexusFinance?",
    answer: "NexusFinance is a revolutionary DeFi platform that simplifies cross-chain staking and liquidity management across multiple blockchain ecosystems."
  },
  {
    question: "How does liquid staking work?",
    answer: "Liquid staking allows you to stake your assets while receiving liquid tokens in return, enabling you to participate in DeFi activities while earning staking rewards."
  },
  {
    question: "What are Liquid Staking Tokens (LSTs)?",
    answer: "Liquid Staking Tokens (LSTs) are tokens that represent your staked assets. They can be traded or used in DeFi protocols while your original assets remain staked."
  },
  {
    question: "How secure is the staking process?",
    answer: "Our staking process is secured by advanced cryptographic protocols, distributed validator technology, and regular security audits to ensure the safety of your assets."
  },
  {
    question: "Can I unstake my assets instantly?",
    answer: "Yes, our platform provides flexible unstaking options. However, some blockchain networks may have native unstaking periods that we must adhere to."
  },
  {
    question: "Is Bitcoin staking supported?",
    answer: "Yes, we support Bitcoin staking through our advanced cross-chain integration, allowing you to earn rewards while maintaining security."
  }
]

export function FaqSection() {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            We&apos;ve Got the Answers
            <br />
            You&apos;re Looking For
          </h2>
          <p className="text-lg text-white/60">
            Find answers to common queries about our product, features, and services. If you
            need more information, we&apos;re here to help!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="bg-[#2233FF]/10 hover:bg-[#2233FF]/20 px-6 rounded-lg text-white hover:no-underline transition-all duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4 text-white/60">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

