import { CalendarDays, Map, ThumbsUp } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <CalendarDays className="h-10 w-10 text-primary" />,
      title: "Reserva Gratis",
      description: "Elige tu tour, fecha y hora. No se requiere pago por adelantado.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Disfruta el Tour",
      description: "Conoce a tu guía en el punto de encuentro y disfruta de una experiencia única.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: "Paga lo que Quieras",
      description: "Al final del tour, paga lo que consideres justo basado en tu experiencia.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">¿Cómo Funciona?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestros tours son gratuitos para reservar y funcionan con un modelo basado en propinas. Así es como puedes
            disfrutar de nuestros tours:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
