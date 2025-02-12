import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/image-converter" className="text-muted-foreground hover:text-primary">
                  Image Converter
                </Link>
              </li>
              <li>
                <Link href="/pdf-converter" className="text-muted-foreground hover:text-primary">
                  PDF Converter
                </Link>
              </li>
              <li>
                <Link href="/document-converter" className="text-muted-foreground hover:text-primary">
                  Document Converter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">AI Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-video-generator" className="text-muted-foreground hover:text-primary">
                  AI Video Generator
                </Link>
              </li>
              <li>
                <Link href="/ai-image-generator" className="text-muted-foreground hover:text-primary">
                  AI Image Generator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          © {new Date().getFullYear()} GetDesiredFormat. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

