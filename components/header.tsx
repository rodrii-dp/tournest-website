"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="TourNest Logo" width={32} height={32} />
            <span className="font-bold text-xl text-primary">TourNest</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/tours" className="text-gray-700 hover:text-primary transition-colors">
              Tours
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-primary transition-colors">
              Destinos
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input type="search" placeholder="Buscar tours..." className="pl-10 w-[200px] lg:w-[300px]" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button>Iniciar Sesión</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input type="search" placeholder="Buscar tours..." className="pl-10 w-full" />
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                href="/tours"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                href="/destinations"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinos
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <Button variant="outline" className="w-[48%]">
                <Globe className="h-4 w-4 mr-2" />
                Idioma
              </Button>
              <Button className="w-[48%]">Iniciar Sesión</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
