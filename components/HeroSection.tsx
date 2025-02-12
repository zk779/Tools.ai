"use client"

import { motion } from "framer-motion"
import { FileUpload } from "./FileUpload"

export default function HeroSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--dark-red))] to-[hsl(var(--light-red))] leading-tight">
          Transform Your Files <br /> with Unparalleled Ease
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
          Harness the power of AI to convert, generate, and download any file format in seconds. Experience the future
          of file manipulation.
        </p>
        <FileUpload className="max-w-2xl mx-auto" onUpload={(files) => console.log("Uploaded files:", files)} />
      </motion.div>
    </section>
  )
}

