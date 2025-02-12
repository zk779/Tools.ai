"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function AboutUs() {
  const faqs = [
    {
      question: "What sets GetDesiredFormat apart?",
      answer:
        "GetDesiredFormat is a cutting-edge platform that combines file conversion, AI-powered generation, and downloading capabilities. Our user-centric approach and advanced technology ensure a seamless experience for all your file manipulation needs.",
    },
    {
      question: "How do you ensure the security of my files?",
      answer:
        "We employ bank-level encryption for all file transfers and processing. Your files are automatically deleted after conversion, and we never store or access your content without permission. Your privacy and data security are our top priorities.",
    },
    {
      question: "Can I convert multiple files simultaneously?",
      answer:
        "Our platform supports batch conversions, allowing you to process multiple files at once. This feature saves time and streamlines your workflow, especially for large-scale projects.",
    },
    {
      question: "How accurate are the AI-generated videos and images?",
      answer:
        "Our AI tools utilize state-of-the-art machine learning models to generate high-quality videos and images. While the accuracy depends on the input provided, our technology consistently produces impressive results that often exceed user expectations.",
    },
    {
      question: "Is there a limit to file sizes for conversion or download?",
      answer:
        "We support large file sizes, but limits may vary depending on your subscription plan. Free users can typically convert files up to 100MB, while premium users enjoy higher limits. For specific details, please check our pricing page.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

