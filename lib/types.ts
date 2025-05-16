export interface Service {
  id: string
  name: string
  icon: string
}

export interface Stop {
  location: {
    lat: number
    lng: number
    direction: string
  }
  stopName: string
}

export interface Provider {
  id: string
  name: string
  tours: string[] // Array of tour IDs
  direction: string
  contact: string
  verificationStatus: "verificado" | "pendiente" | "no verificado"
}

export interface Review {
  id: string
  title: string
  userId: string
  date: string // Date;
  rating: number // 0-5
  comment: string
}

export interface User {
  id?: string
  name: string
  email: string
  password: string
  role: "cliente" | "proveedor"
}

export interface ImageTour {
  id: string
  imageUrl: string
}

export interface Availability {
  date: string
  hours: string[]
}

export interface Tour {
  id: string
  category: string
  title: string
  images: ImageTour[]
  provider: Provider
  rating: number
  reviews: Review[]
  description: string
  duration: string
  language: string[]
  price: {
    value: number
    basedOnTips: boolean
  }
  stops: Stop[]
  location: {
    name: string
    country: string
  }
  meetingPoint: string
  availableDates: Availability[]
}

// Interfaces adicionales para la aplicación
export interface Destination {
  id: string
  name: string
  slug: string
  image: string
  tourCount: number
}
