import { Suspense } from "react"
import Image from "next/image"
import { Clock, MapPin, Globe, Star } from "lucide-react"
import { getTourBySlug, getRelatedTours } from "@/lib/api"
import TourBookingCard from "@/components/tour-booking-card"
import TourDetails from "@/components/tour-details"
import RelatedTours from "@/components/related-tours"
import { Skeleton } from "@/components/ui/skeleton"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tourId = params.slug.split("-").pop() || ""
  const tour = await getTourBySlug(params.slug)

  return {
    title: `${tour.title} | TourNest`,
    description: tour.description.substring(0, 160),
    openGraph: {
      title: tour.title,
      description: tour.description.substring(0, 160),
      images: [{ url: tour.images[0]?.imageUrl || "/placeholder.svg", width: 1200, height: 630, alt: tour.title }],
    },
  }
}

export default async function TourPage({ params }: { params: { slug: string } }) {
  const tour = await getTourBySlug(params.slug)
  const relatedTours = await getRelatedTours(tour.id, tour.location)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">{tour.title}</h1>

      {tour.rating ? (
        <div className="flex items-center gap-1 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(tour.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          <span className="ml-2 font-medium">{tour.rating.toFixed(1)}</span>
          <span className="text-gray-500">({tour.reviews.length})</span>
        </div>
      ) : (
        <p className="text-gray-500 mb-4">Tour sin suficientes valoraciones</p>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src={tour.images[0]?.imageUrl || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {tour.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
              {tour.images.map((image, index) => (
                <div key={image.id} className="relative h-20 w-32 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={image.imageUrl || "/placeholder.svg"}
                    alt={`${tour.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 p-4 border rounded-lg">
              <Clock className="text-primary" />
              <div>
                <p className="text-sm text-gray-500">Duración</p>
                <p className="font-medium">{tour.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 border rounded-lg">
              <MapPin className="text-primary" />
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="font-medium">
                  {tour.location.name}, {tour.location.country}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 border rounded-lg">
              <Globe className="text-primary" />
              <div>
                <p className="text-sm text-gray-500">Idiomas</p>
                <p className="font-medium">{tour.language.join(", ")}</p>
              </div>
            </div>
          </div>

          <TourDetails tour={tour} />
        </div>

        <div className="w-full lg:w-1/3">
          <TourBookingCard tour={tour} />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="mt-12">
            <Skeleton className="h-8 w-48 mb-6" />
            <Skeleton className="h-64 w-full" />
          </div>
        }
      >
        <RelatedTours tours={relatedTours} />
      </Suspense>
    </div>
  )
}
