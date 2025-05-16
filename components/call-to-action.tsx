import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para explorar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Reserva tu tour gratuito hoy y descubre las maravillas de nuestras ciudades con guías locales expertos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/tours">Explorar Tours</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
            <Link href="/contact">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
