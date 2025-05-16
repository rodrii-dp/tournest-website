import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María García",
      avatar: "/images/testimonials/avatar-1.jpg",
      rating: 5,
      text: "¡Una experiencia increíble! Nuestro guía era muy conocedor y apasionado por la historia de la ciudad. Definitivamente recomendaría este tour a cualquiera que visite.",
      tour: "Barcelona Gothic Quarter Free Tour",
    },
    {
      id: 2,
      name: "John Smith",
      avatar: "/images/testimonials/avatar-2.jpg",
      rating: 5,
      text: "Este fue el punto culminante de nuestro viaje. Aprendimos tanto sobre la arquitectura y la historia local. El guía hizo que todo fuera muy interesante.",
      tour: "Madrid Old City Free Tour",
    },
    {
      id: 3,
      name: "Sophie Dubois",
      avatar: "/images/testimonials/avatar-3.jpg",
      rating: 4,
      text: "Un tour fantástico que realmente te sumerge en la cultura local. Pequeños grupos que permiten una experiencia más personalizada. ¡Lo disfruté mucho!",
      tour: "Sevilla Authentic Experience",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de viajeros han tenido experiencias increíbles con nuestros tours. Esto es lo que algunos de ellos
            tienen que decir:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="text-sm text-gray-500">Sobre: {testimonial.tour}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
