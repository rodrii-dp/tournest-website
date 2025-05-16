import Link from "next/link"
import TourCard from "@/components/tour-card"
import { Button } from "@/components/ui/button"
import { getFeaturedTours } from "@/lib/api"

export default async function FeaturedTours() {
  const tours = await getFeaturedTours()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Tours Destacados</h2>
            <p className="text-gray-600">Descubre nuestros tours más populares en todo el mundo</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/tours">Ver Todos los Tours</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} isFeatured={true} />
          ))}
        </div>
      </div>
    </section>
  )
}
