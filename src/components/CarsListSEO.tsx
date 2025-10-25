// Server-side araç listesi bileşeni (SEO için)
import { mockCars } from "@/data/mockCars";
import Image from "next/image";

export function CarsListSEO() {
  return (
    <div className="hidden">
      {/* Arama motorları için görünür araç listesi */}
      <div className="cars-seo-list">
        <h1>Araç Kiralama - En İyi Fiyatlarla Araç Kirala | RentACar</h1>
        <p>
          Türkiye&apos;nin en güvenilir araç kiralama platformu. BMW, Mercedes,
          Audi ve daha fazla marka ile konum bazlı araç kiralama.
        </p>

        <div className="cars-grid">
          {mockCars.map((car) => (
            <article key={car.id} itemScope itemType="https://schema.org/Car">
              <div className="car-image">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model} - ${car.year} - ₺${car.price}/gün`}
                  width={300}
                  height={200}
                  itemProp="image"
                />
              </div>

              <div className="car-info">
                <h2 itemProp="name">
                  {car.brand} {car.model}
                </h2>
                <p itemProp="description">{car.description}</p>

                <div className="car-details">
                  <span itemProp="vehicleModelDate">{car.year}</span>
                  <span itemProp="fuelType">{car.fuelType}</span>
                  <span itemProp="vehicleTransmission">{car.transmission}</span>
                  <span itemProp="seatingCapacity">{car.seats} kişilik</span>
                </div>

                <div className="car-pricing">
                  <span itemProp="price">{car.price}</span>
                  <span itemProp="priceCurrency">TRY</span>
                  <span>/gün</span>
                </div>

                <div className="car-location">
                  <span itemProp="location">{car.location}</span>
                </div>

                <div className="car-features">
                  {car.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
