import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="TourNest Logo" width={32} height={32} />
              <span className="font-bold text-xl text-primary">TourNest</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Descubre las mejores ciudades del mundo con guías locales expertos. Tours gratuitos basados en propinas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Destinos Populares</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours/barcelona" className="text-gray-600 hover:text-primary transition-colors">
                  Barcelona
                </Link>
              </li>
              <li>
                <Link href="/tours/madrid" className="text-gray-600 hover:text-primary transition-colors">
                  Madrid
                </Link>
              </li>
              <li>
                <Link href="/tours/sevilla" className="text-gray-600 hover:text-primary transition-colors">
                  Sevilla
                </Link>
              </li>
              <li>
                <Link href="/tours/valencia" className="text-gray-600 hover:text-primary transition-colors">
                  Valencia
                </Link>
              </li>
              <li>
                <Link href="/tours/malaga" className="text-gray-600 hover:text-primary transition-colors">
                  Málaga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/become-guide" className="text-gray-600 hover:text-primary transition-colors">
                  Conviértete en Guía
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-600 hover:text-primary transition-colors">
                  Política de Cancelación
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TourNest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
