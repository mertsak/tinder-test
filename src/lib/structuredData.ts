import { mockCars } from '@/data/mockCars';

export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "RentACar - Araç Kiralama",
    "description": "Türkiye'nin en güvenilir araç kiralama platformu",
    "url": "https://rentacar.com",
    "logo": "https://rentacar.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "İstanbul"
    },
    "telephone": "+90 212 555 0123",
    "email": "info@rentacar.com",
    "priceRange": "₺300-₺600",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "TRY",
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Araç Kiralama Kataloğu",
      "itemListElement": mockCars.map((car, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Car",
          "name": `${car.brand} ${car.model}`,
          "brand": {
            "@type": "Brand",
            "name": car.brand
          },
          "model": car.model,
          "vehicleModelDate": car.year,
          "fuelType": car.fuelType,
          "vehicleTransmission": car.transmission,
          "numberOfDoors": 4,
          "seatingCapacity": car.seats,
          "image": car.image,
          "description": car.description
        },
        "price": car.price,
        "priceCurrency": "TRY",
        "availability": car.availability ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "validFrom": new Date().toISOString().split('T')[0],
        "position": index + 1
      }))
    }
  };

  return structuredData;
}
