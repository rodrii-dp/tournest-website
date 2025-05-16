import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Tour } from "@/lib/types"

interface TourCardProps {
  tour: Tour
  isFeatured?: boolean
}

export default function TourCard({ tour, isFeatured = false }: TourCardProps) {
  // Crear un slug a partir del título y el ID
  const slug = `${tour.title.toLowerCase().replace(/\s+/g, "-")}-${tour.id}`

  return (
    <Link href={`/tours/${slug}`}>
      <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={tour.images[0]?.imageUrl || "/placeholder.svg"}
            alt={tour.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {isFeatured && <Badge className="absolute top-2 left-2 bg-primary">Destacado</Badge>}
        </div>

        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {tour.rating ? (
              <>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(tour.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                <span className="ml-1 text-sm font-medium">{tour.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({tour.reviews.length})</span>
              </>
            ) : (
              <span className="text-sm text-gray-500">Sin valoraciones</span>
            )}
          </div>

          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tour.title}</h3>

          <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
            <MapPin size={14} />
            <span>
              {tour.location.name}, {tour.location.country}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
            <Clock size={14} />
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Desde</p>
              <p className="font-bold text-primary">
                {tour.price.value === 0 ? "€0 (Propina)" : `€${tour.price.value}`}
              </p>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              Reserva Gratis
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  )
}
