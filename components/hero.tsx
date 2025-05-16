import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Descubre el mundo con guías locales</h1>
            <p className="text-xl mb-8">
              Tours gratuitos basados en propinas en las mejores ciudades del mundo. Reserva ahora y paga lo que
              consideres justo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/tours">Explorar Tours</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/destinations">Ver Destinos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
