import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const reasons = [
    "Lightning-fast conversions",
    "Wide range of supported formats",
    "Bank-level security and privacy",
    "Intuitive, user-friendly interface",
    "Cutting-edge AI-powered tools",
    "24/7 expert customer support",
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose GetDesiredFormat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4 bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-primary/10"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="text-primary h-6 w-6 flex-shrink-0" />
              </div>
              <span className="text-lg font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

