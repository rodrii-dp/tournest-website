import { Suspense } from "react"
import ToursList from "@/components/tours-list"
import TourFilters from "@/components/tour-filters"
import { Skeleton } from "@/components/ui/skeleton"
import { getTours } from "@/lib/api"

export const metadata = {
  title: "Tours Gratuitos | TourNest",
  description:
    "Explora nuestra colección de tours gratuitos en las mejores ciudades del mundo. Tours basados en propinas con guías locales expertos.",
}

export default async function ToursPage() {
  const tours = await getTours()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Descubre Nuestros Tours</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <TourFilters />
        </div>
        <div className="w-full md:w-3/4">
          <Suspense fallback={<ToursListSkeleton />}>
            <ToursList tours={tours} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ToursListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
    </div>
  )
}
