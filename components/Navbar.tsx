"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const navItems = [
  {
    name: "Tools",
    items: [
      { name: "Image Converter", path: "/image-converter" },
      { name: "PDF Converter", path: "/pdf-converter" },
      { name: "Document Converter", path: "/document-converter" },
    ],
  },
  {
    name: "AI Generators",
    items: [
      { name: "AI Image Generator", path: "/ai-image-generator" },
      { name: "AI Video Generator", path: "/ai-video-generator" },
    ],
  },
  {
    name: "Downloaders",
    items: [
      { name: "Spotify Song Downloader", path: "/spotify-downloader" },
      { name: "YouTube Audio Downloader", path: "/youtube-audio-downloader" },
      { name: "YouTube Video Downloader", path: "/youtube-video-downloader" },
    ],
  },
  { name: "Pricing", path: "/pricing" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <Link href="/" className="font-bold text-2xl">
          GetDesiredFormat
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) =>
            item.items ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.path}>
                      <Link href={subItem.path} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  )
}

