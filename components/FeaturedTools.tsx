import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileImage, FileText, FileVideo, Download } from "lucide-react"
import { motion } from "framer-motion"

const tools = [
  { name: "Image Converter", icon: FileImage, description: "Transform images to various formats with ease" },
  { name: "Document Converter", icon: FileText, description: "Effortlessly convert documents to any format" },
  { name: "AI Video Generator", icon: FileVideo, description: "Create stunning videos using cutting-edge AI" },
  { name: "YouTube Downloader", icon: Download, description: "Download YouTube content hassle-free" },
]

export default function FeaturedTools() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <tool.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

