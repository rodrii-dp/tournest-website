import Hero from "@/components/hero"
import FeaturedTours from "@/components/featured-tours"
import HowItWorks from "@/components/how-it-works"
import PopularDestinations from "@/components/popular-destinations"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTours />
      <HowItWorks />
      <PopularDestinations />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
