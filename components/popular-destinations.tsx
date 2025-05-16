import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getPopularDestinations } from "@/lib/api"

export default async function PopularDestinations() {
  const destinations = await getPopularDestinations()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Destinos Populares</h2>
            <p className="text-gray-600">Explora nuestros destinos más visitados</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/destinations">Ver Todos los Destinos</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.slug}`}>
              <div className="group relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-sm">{destination.tourCount} tours disponibles</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
