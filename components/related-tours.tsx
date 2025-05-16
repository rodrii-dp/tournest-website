import TourCard from "@/components/tour-card"
import type { Tour } from "@/lib/types"

interface RelatedToursProps {
  tours: Tour[]
}

export default function RelatedTours({ tours }: RelatedToursProps) {
  if (tours.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Otros tours en esta ciudad</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}
