"use client"

import { useState } from "react"
import { CalendarIcon, ChevronDown, ChevronUp, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import type { Tour } from "@/lib/types"

interface TourBookingCardProps {
  tour: Tour
}

export default function TourBookingCard({ tour }: TourBookingCardProps) {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [language, setLanguage] = useState<string>("")
  const [participants, setParticipants] = useState<string>("1")
  const [isDetailsOpen, setIsDetailsOpen] = useState(true)

  // Encontrar las fechas disponibles para el tour
  const availableDates = tour.availableDates.map((avail) => new Date(avail.date))

  // Encontrar las horas disponibles para la fecha seleccionada
  const getAvailableHours = () => {
    if (!date) return []

    const selectedDate = format(date, "yyyy-MM-dd")
    const dateInfo = tour.availableDates.find((avail) => avail.date === selectedDate)
    return dateInfo?.hours || []
  }

  const availableHours = getAvailableHours()

  const handleBooking = () => {
    // Implementar lógica de reserva
    console.log({ date, time, language, participants })
    alert("¡Reserva realizada con éxito!")
  }

  return (
    <div className="border rounded-lg overflow-hidden sticky top-20">
      <div className="p-6 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Reserva este tour</h3>
          <div>
            <p className="text-xs text-gray-500">Desde</p>
            <p className="font-bold text-primary text-xl">
              {tour.price.value === 0 ? "€0 (Propina)" : `€${tour.price.value}`}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Fecha</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-gray-400")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: es }) : "Selecciona una fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Deshabilitar fechas que no están en availableDates
                    return !availableDates.some(
                      (availableDate) =>
                        availableDate.getDate() === date.getDate() &&
                        availableDate.getMonth() === date.getMonth() &&
                        availableDate.getFullYear() === date.getFullYear(),
                    )
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Hora</label>
            <Select value={time} onValueChange={setTime} disabled={!date || availableHours.length === 0}>
              <SelectTrigger className={!time ? "text-gray-400" : ""}>
                <SelectValue placeholder="Selecciona una hora" />
              </SelectTrigger>
              <SelectContent>
                {availableHours.map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Idioma</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className={!language ? "text-gray-400" : ""}>
                <SelectValue placeholder="Selecciona un idioma" />
              </SelectTrigger>
              <SelectContent>
                {tour.language.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Participantes</label>
            <Select value={participants} onValueChange={setParticipants}>
              <SelectTrigger>
                <SelectValue placeholder="Número de participantes" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "persona" : "personas"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full" disabled={!date || !time || !language} onClick={handleBooking}>
            Reservar Ahora
          </Button>
        </div>

        <div className="mt-6 border-t pt-4">
          <button
            className="flex items-center justify-between w-full text-sm font-medium"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          >
            Detalles de la reserva
            {isDetailsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isDetailsOpen && (
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <div>
                  <p className="font-medium">Duración</p>
                  <p className="text-gray-600">{tour.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gray-500" />
                <div>
                  <p className="font-medium">Tamaño del grupo</p>
                  <p className="text-gray-600">Máximo 8 personas</p>
                </div>
              </div>
              <div className="p-3 bg-green-50 text-green-700 rounded-md mt-4">
                <p className="font-medium">Reserva Gratuita. Cancelación Gratuita</p>
                <p className="text-sm">
                  {tour.price.basedOnTips
                    ? "Sin precio fijo — paga lo que consideres que vale el tour."
                    : `Precio fijo: €${tour.price.value}`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
