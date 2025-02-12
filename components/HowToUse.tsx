import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HowToUse() {
  const steps = [
    { title: "Upload", description: "Drag & drop or paste URL of your file", icon: "📁" },
    { title: "Choose Format", description: "Select your desired output format", icon: "🔄" },
    { title: "Convert", description: "Click convert and watch the magic happen", icon: "✨" },
    { title: "Download", description: "Get your newly converted file instantly", icon: "⬇️" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                {step.icon}
              </div>
              <h3 className="font-semibold text-2xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-8 h-8 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

