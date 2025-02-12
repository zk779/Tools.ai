import { Suspense } from "react"
import HeroSection from "@/components/HeroSection"
import FeaturedTools from "@/components/FeaturedTools"
import WhyChooseUs from "@/components/WhyChooseUs"
import HowToUse from "@/components/HowToUse"
import AboutUs from "@/components/AboutUs"
import { unstable_noStore as noStore } from "next/cache"

export default function Home() {
  noStore()

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedTools />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HowToUse />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs />
      </Suspense>
    </div>
  )
}

