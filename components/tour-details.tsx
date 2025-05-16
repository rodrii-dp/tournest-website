"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star } from "lucide-react"
import type { Tour } from "@/lib/types"

interface TourDetailsProps {
  tour: Tour
}

export default function TourDetails({ tour }: TourDetailsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="overview">Descripción</TabsTrigger>
        <TabsTrigger value="stops">Paradas</TabsTrigger>
        <TabsTrigger value="meeting">Punto de Encuentro</TabsTrigger>
        <TabsTrigger value="reviews">Reseñas</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Descripción General</h2>
        <div className="prose max-w-none">
          <p className="mb-4">{tour.description}</p>
          <p className="mb-4">
            El número máximo de asistentes es 8. Si eres el único que reserva, el tour se realizará igualmente. Por
            favor, limita tu propina a lo que habrías considerado para un grupo completo.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Proveedor</h3>
            <div className="flex items-center gap-2 mb-2">
              <p className="font-medium">Nombre:</p>
              <p>{tour.provider.name}</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <p className="font-medium">Estado:</p>
              <p
                className={`${
                  tour.provider.verificationStatus === "verificado"
                    ? "text-green-600"
                    : tour.provider.verificationStatus === "pendiente"
                      ? "text-amber-600"
                      : "text-red-600"
                }`}
              >
                {tour.provider.verificationStatus.charAt(0).toUpperCase() + tour.provider.verificationStatus.slice(1)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">Contacto:</p>
              <p>{tour.provider.contact}</p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="stops">
        <h2 className="text-2xl font-semibold mb-4">Paradas del Tour</h2>
        <div className="space-y-6">
          {tour.stops.map((stop, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">
                {index + 1}. {stop.stopName}
              </h3>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <p>{stop.location.direction}</p>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="meeting">
        <h2 className="text-2xl font-semibold mb-4">Punto de Encuentro</h2>
        <div className="space-y-4 text-gray-700">
          <p className="mb-4">{tour.meetingPoint}</p>
          <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Aquí iría un mapa con la ubicación del punto de encuentro */}
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-gray-500">Mapa del punto de encuentro</p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <h2 className="text-2xl font-semibold mb-4">Reseñas</h2>
        {tour.reviews.length > 0 ? (
          <div className="space-y-6">
            {tour.reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{review.title}</h3>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">Fecha: {new Date(review.date).toLocaleDateString()}</p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Este tour aún no tiene reseñas.</p>
        )}
      </TabsContent>
    </Tabs>
  )
}
