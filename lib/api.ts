// Actualizar la API simulada para usar las nuevas interfaces
import type { Tour, Destination } from "@/lib/types"

// Simulación de API - En producción, esto se conectaría a tu backend real
export async function getTours(): Promise<Tour[]> {
  // Simular una llamada a la API
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      category: "historia",
      title: "Barcelona Gothic Quarter Free Tour",
      images: [
        { id: "img1", imageUrl: "/images/tours/barcelona-gothic.jpg" },
        { id: "img2", imageUrl: "/images/tours/barcelona-gaudi.jpg" },
      ],
      provider: {
        id: "prov1",
        name: "Barcelona Free Tours",
        tours: ["1", "5"],
        direction: "Barcelona, España",
        contact: "info@barcelonafreetours.com",
        verificationStatus: "verificado",
      },
      rating: 4.8,
      reviews: [
        {
          id: "rev1",
          title: "Excelente tour",
          userId: "user1",
          date: "2023-04-15",
          rating: 5,
          comment: "Una experiencia increíble, el guía era muy conocedor y apasionado.",
        },
        {
          id: "rev2",
          title: "Muy recomendable",
          userId: "user2",
          date: "2023-05-20",
          rating: 4,
          comment: "Aprendí mucho sobre la historia de Barcelona.",
        },
      ],
      description:
        "Explora el fascinante Barrio Gótico de Barcelona, uno de los barrios medievales mejor conservados de Europa. Descubre sus calles estrechas, plazas encantadoras y la impresionante arquitectura gótica mientras aprendes sobre la rica historia de la ciudad.",
      duration: "1h 30min",
      language: ["Español", "Inglés", "Francés"],
      price: {
        value: 0,
        basedOnTips: true,
      },
      stops: [
        {
          location: {
            lat: 41.3851,
            lng: 2.1734,
            direction: "Plaza Catalunya",
          },
          stopName: "Plaza Catalunya",
        },
        {
          location: {
            lat: 41.3833,
            lng: 2.1763,
            direction: "Catedral de Barcelona",
          },
          stopName: "Catedral de Barcelona",
        },
      ],
      location: {
        name: "Barcelona",
        country: "España",
      },
      meetingPoint: "Hard Rock (Plaza Catalunya)",
      availableDates: [
        {
          date: "2023-08-15",
          hours: ["09:30", "11:00", "16:00"],
        },
        {
          date: "2023-08-16",
          hours: ["09:30", "11:00", "16:00"],
        },
      ],
    },
    {
      id: "2",
      category: "historia",
      title: "Madrid Old City Free Tour",
      images: [{ id: "img3", imageUrl: "/images/tours/madrid-old-city.jpg" }],
      provider: {
        id: "prov2",
        name: "Madrid Walking Tours",
        tours: ["2"],
        direction: "Madrid, España",
        contact: "info@madridwalkingtours.com",
        verificationStatus: "verificado",
      },
      rating: 4.9,
      reviews: [
        {
          id: "rev3",
          title: "Fantástico recorrido",
          userId: "user3",
          date: "2023-06-10",
          rating: 5,
          comment: "El mejor tour que he hecho en Madrid.",
        },
      ],
      description:
        "Descubre el Madrid de los Austrias y los Borbones en este fascinante recorrido por el casco antiguo de la capital española. Visita la Puerta del Sol, la Plaza Mayor y el Palacio Real mientras aprendes sobre la historia y cultura madrileña.",
      duration: "2h",
      language: ["Español", "Inglés"],
      price: {
        value: 0,
        basedOnTips: true,
      },
      stops: [
        {
          location: {
            lat: 40.4168,
            lng: -3.7038,
            direction: "Puerta del Sol",
          },
          stopName: "Puerta del Sol",
        },
        {
          location: {
            lat: 40.4155,
            lng: -3.7074,
            direction: "Plaza Mayor",
          },
          stopName: "Plaza Mayor",
        },
      ],
      location: {
        name: "Madrid",
        country: "España",
      },
      meetingPoint: "Puerta del Sol (Oso y Madroño)",
      availableDates: [
        {
          date: "2023-08-15",
          hours: ["10:00", "16:00"],
        },
        {
          date: "2023-08-16",
          hours: ["10:00", "16:00"],
        },
      ],
    },
    {
      id: "3",
      category: "cultura",
      title: "Sevilla Authentic Experience",
      images: [{ id: "img4", imageUrl: "/images/tours/sevilla-authentic.jpg" }],
      provider: {
        id: "prov3",
        name: "Sevilla Cultural Tours",
        tours: ["3"],
        direction: "Sevilla, España",
        contact: "info@sevillaculturaltours.com",
        verificationStatus: "verificado",
      },
      rating: 4.7,
      reviews: [
        {
          id: "rev4",
          title: "Muy cultural",
          userId: "user4",
          date: "2023-05-05",
          rating: 5,
          comment: "Aprendí mucho sobre la historia y cultura de Sevilla.",
        },
      ],
      description:
        "Sumérgete en la auténtica Sevilla con este tour que te llevará por el Barrio de Santa Cruz, la antigua judería de la ciudad. Descubre rincones encantadores, patios floridos y la rica historia de una de las ciudades más bellas de España.",
      duration: "2h 30min",
      language: ["Español", "Inglés", "Francés"],
      price: {
        value: 0,
        basedOnTips: true,
      },
      stops: [
        {
          location: {
            lat: 37.3861,
            lng: -5.993,
            direction: "Plaza del Triunfo",
          },
          stopName: "Plaza del Triunfo",
        },
        {
          location: {
            lat: 37.3859,
            lng: -5.9923,
            direction: "Barrio de Santa Cruz",
          },
          stopName: "Barrio de Santa Cruz",
        },
      ],
      location: {
        name: "Sevilla",
        country: "España",
      },
      meetingPoint: "Plaza del Triunfo",
      availableDates: [
        {
          date: "2023-08-15",
          hours: ["09:00", "17:00"],
        },
        {
          date: "2023-08-16",
          hours: ["09:00", "17:00"],
        },
      ],
    },
    {
      id: "4",
      category: "arquitectura",
      title: "Valencia: City of Arts and Sciences",
      images: [{ id: "img5", imageUrl: "/images/tours/valencia-arts.jpg" }],
      provider: {
        id: "prov4",
        name: "Valencia Experience",
        tours: ["4"],
        direction: "Valencia, España",
        contact: "info@valenciaexperience.com",
        verificationStatus: "verificado",
      },
      rating: 4.6,
      reviews: [
        {
          id: "rev5",
          title: "Arquitectura impresionante",
          userId: "user5",
          date: "2023-07-01",
          rating: 5,
          comment: "Las explicaciones sobre la arquitectura fueron fascinantes.",
        },
      ],
      description:
        "Explora la impresionante Ciudad de las Artes y las Ciencias de Valencia, un complejo arquitectónico futurista diseñado por Santiago Calatrava. Descubre la combinación perfecta de arte, ciencia y tecnología en este tour fascinante.",
      duration: "2h",
      language: ["Español", "Inglés"],
      price: {
        value: 0,
        basedOnTips: true,
      },
      stops: [
        {
          location: {
            lat: 39.4568,
            lng: -0.351,
            direction: "Ciudad de las Artes y las Ciencias",
          },
          stopName: "Museo de las Ciencias",
        },
        {
          location: {
            lat: 39.4542,
            lng: -0.3486,
            direction: "L'Oceanogràfic",
          },
          stopName: "L'Oceanogràfic (exterior)",
        },
      ],
      location: {
        name: "Valencia",
        country: "España",
      },
      meetingPoint: "Entrada del Museo de las Ciencias",
      availableDates: [
        {
          date: "2023-08-15",
          hours: ["10:00", "12:00", "16:00"],
        },
        {
          date: "2023-08-16",
          hours: ["10:00", "12:00", "16:00"],
        },
      ],
    },
    {
      id: "5",
      category: "arquitectura",
      title: "Barcelona's Best: Gaudi and the Gothic Quarter",
      images: [{ id: "img6", imageUrl: "/images/tours/barcelona-gaudi.jpg" }],
      provider: {
        id: "prov1",
        name: "Barcelona Free Tours",
        tours: ["1", "5"],
        direction: "Barcelona, España",
        contact: "info@barcelonafreetours.com",
        verificationStatus: "verificado",
      },
      rating: 4.9,
      reviews: [
        {
          id: "rev6",
          title: "Lo mejor de Barcelona",
          userId: "user6",
          date: "2023-06-20",
          rating: 5,
          comment: "Combina perfectamente las obras de Gaudí con el Barrio Gótico.",
        },
      ],
      description:
        "Combina lo mejor de Barcelona en un solo tour: las obras maestras de Gaudí y el encantador Barrio Gótico. Admira la Sagrada Familia y Casa Batlló desde el exterior, y luego adéntrate en las calles medievales del corazón histórico de la ciudad.",
      duration: "2h 30min",
      language: ["Español", "Inglés", "Francés", "Alemán"],
      price: {
        value: 0,
        basedOnTips: true,
      },
      stops: [
        {
          location: {
            lat: 41.3851,
            lng: 2.1734,
            direction: "Plaza Catalunya",
          },
          stopName: "Plaza Catalunya",
        },
        {
          location: {
            lat: 41.4036,
            lng: 2.1744,
            direction: "Sagrada Familia",
          },
          stopName: "Sagrada Familia (exterior)",
        },
      ],
      location: {
        name: "Barcelona",
        country: "España",
      },
      meetingPoint: "Plaça de Catalunya",
      availableDates: [
        {
          date: "2023-08-15",
          hours: ["09:00", "11:00", "15:00"],
        },
        {
          date: "2023-08-16",
          hours: ["09:00", "11:00", "15:00"],
        },
      ],
    },
    {
      id: "6",
      category: "cultura",
      title: "Málaga: Picasso's Birthplace Tour",
      images: [{ id: "img7", imageUrl: "/images/tours/malaga-picasso.jpg" }],
      provider: {
        id: "prov5",
        name: "Málaga Cultural Tours",
        tours: ["6"],
        direction: "Málaga, España",
        contact: "info@malagaculturaltours.com",
        verificationStatus: "verificado",
      },
      rating: 4.5,
      reviews: [
        {
          id: "rev7",
          title: "Excelente para amantes del arte",
          userId: "user7",
          date: "2023-07-15",
          rating: 4,
          comment: "Muy interesante para conocer la influencia de Málaga en Picasso.",
        },
      ],
      description:
        "Descubre la Málaga de Picasso en este fascinante recorrido por los lugares relacionados con la vida del genial artista. Visita su casa natal, recorre el centro histórico y aprende sobre la influencia de la ciudad en su obra.",
      duration: "2h",
      language: ["Español", "Inglés"],
      price: {
        value: 0,
        basedOnTips: true,
      },
      stops: [
        {
          location: {
            lat: 36.7213,
            lng: -4.4214,
            direction: "Plaza de la Merced",
          },
          stopName: "Plaza de la Merced",
        },
        {
          location: {
            lat: 36.7212,
            lng: -4.4197,
            direction: "Casa Natal de Picasso",
          },
          stopName: "Casa Natal de Picasso",
        },
      ],
      location: {
        name: "Málaga",
        country: "España",
      },
      meetingPoint: "Plaza de la Merced",
      availableDates: [
        {
          date: "2023-08-15",
          hours: ["10:00", "12:00", "17:00"],
        },
        {
          date: "2023-08-16",
          hours: ["10:00", "12:00", "17:00"],
        },
      ],
    },
  ]
}

export async function getFeaturedTours(): Promise<Tour[]> {
  const tours = await getTours()
  // Simulamos que los tours con ID 1, 2 y 5 son destacados
  return tours.filter((tour) => ["1", "2", "5"].includes(tour.id))
}

export async function getTourBySlug(slug: string): Promise<Tour> {
  const tours = await getTours()
  // Convertimos el slug a un ID para esta simulación
  const tourId = slug.split("-").pop() || ""
  const tour = tours.find((tour) => tour.id === tourId)

  if (!tour) {
    throw new Error(`Tour with slug ${slug} not found`)
  }

  return tour
}

export async function getRelatedTours(tourId: string, location: { name: string; country: string }): Promise<Tour[]> {
  const tours = await getTours()
  return tours.filter((tour) => tour.id !== tourId && tour.location.name === location.name).slice(0, 3)
}

export async function getPopularDestinations(): Promise<Destination[]> {
  // Simular una llamada a la API
  await new Promise((resolve) => setTimeout(resolve, 300))

  return [
    {
      id: "1",
      name: "Barcelona",
      slug: "barcelona",
      image: "/images/destinations/barcelona.jpg",
      tourCount: 12,
    },
    {
      id: "2",
      name: "Madrid",
      slug: "madrid",
      image: "/images/destinations/madrid.jpg",
      tourCount: 8,
    },
    {
      id: "3",
      name: "Sevilla",
      slug: "sevilla",
      image: "/images/destinations/sevilla.jpg",
      tourCount: 6,
    },
    {
      id: "4",
      name: "Valencia",
      slug: "valencia",
      image: "/images/destinations/valencia.jpg",
      tourCount: 5,
    },
    {
      id: "5",
      name: "Málaga",
      slug: "malaga",
      image: "/images/destinations/malaga.jpg",
      tourCount: 4,
    },
    {
      id: "6",
      name: "Granada",
      slug: "granada",
      image: "/images/destinations/granada.jpg",
      tourCount: 3,
    },
  ]
}
