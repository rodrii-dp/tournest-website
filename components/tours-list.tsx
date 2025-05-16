import TourCard from "@/components/tour-card"
import type { Tour } from "@/lib/types"

interface ToursListProps {
  tours: Tour[]
}

export default function ToursList({ tours }: ToursListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">{tours.length} tours encontrados</p>
        <select className="border rounded-md p-2 text-sm">
          <option value="recommended">Recomendados</option>
          <option value="price-low">Precio: Bajo a Alto</option>
          <option value="price-high">Precio: Alto a Bajo</option>
          <option value="rating">Mejor Valorados</option>
          <option value="duration-short">Duración: Corta a Larga</option>
          <option value="duration-long">Duración: Larga a Corta</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  )
}
