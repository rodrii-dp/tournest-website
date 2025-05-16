"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TourFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [durationRange, setDurationRange] = useState([0, 8])

  const cities = [
    { id: "barcelona", label: "Barcelona" },
    { id: "madrid", label: "Madrid" },
    { id: "sevilla", label: "Sevilla" },
    { id: "valencia", label: "Valencia" },
    { id: "malaga", label: "Málaga" },
  ]

  const languages = [
    { id: "spanish", label: "Español" },
    { id: "english", label: "Inglés" },
    { id: "french", label: "Francés" },
    { id: "german", label: "Alemán" },
    { id: "italian", label: "Italiano" },
  ]

  const categories = [
    { id: "history", label: "Historia" },
    { id: "culture", label: "Cultura" },
    { id: "food", label: "Gastronomía" },
    { id: "nature", label: "Naturaleza" },
    { id: "architecture", label: "Arquitectura" },
  ]

  return (
    <div className="border rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-4">Filtros</h2>

      <Accordion type="multiple" defaultValue={["cities", "price", "duration"]}>
        <AccordionItem value="cities">
          <AccordionTrigger>Ciudades</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {cities.map((city) => (
                <div key={city.id} className="flex items-center space-x-2">
                  <Checkbox id={`city-${city.id}`} />
                  <label htmlFor={`city-${city.id}`} className="text-sm">
                    {city.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="languages">
          <AccordionTrigger>Idiomas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {languages.map((language) => (
                <div key={language.id} className="flex items-center space-x-2">
                  <Checkbox id={`language-${language.id}`} />
                  <label htmlFor={`language-${language.id}`} className="text-sm">
                    {language.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="categories">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.id}`} />
                  <label htmlFor={`category-${category.id}`} className="text-sm">
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">€{priceRange[0]}</span>
                <span className="text-sm">€{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger>Duración</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 8]} max={8} step={0.5} value={durationRange} onValueChange={setDurationRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">{durationRange[0]} horas</span>
                <span className="text-sm">{durationRange[1]} horas</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <Button className="w-full">Aplicar Filtros</Button>
        <Button variant="outline" className="w-full">
          Limpiar Filtros
        </Button>
      </div>
    </div>
  )
}
