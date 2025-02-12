import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="mb-4">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p className="mb-2">123 File Conversion Street</p>
          <p className="mb-2">Digital City, DC 12345</p>
          <p className="mb-2">United States</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <p className="mb-2">Monday - Friday: 9am to 5pm</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  )
}

