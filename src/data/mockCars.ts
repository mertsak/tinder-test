export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  fuelType: 'Benzin' | 'Dizel' | 'Elektrik' | 'Hibrit';
  transmission: 'Manuel' | 'Otomatik';
  seats: number;
  location: string;
  rating: number;
  features: string[];
  description: string;
  availability: boolean;
}

export const mockCars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: '3 Serisi',
    year: 2023,
    price: 450,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    fuelType: 'Benzin',
    transmission: 'Otomatik',
    seats: 5,
    location: 'İstanbul, Beşiktaş',
    rating: 4.8,
    features: ['Klima', 'Bluetooth', 'GPS', 'Park Sensörü'],
    description: 'Lüks ve konforlu BMW 3 Serisi. Şehir içi ve şehir dışı yolculuklar için ideal.',
    availability: true
  },
  {
    id: '2',
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2022,
    price: 520,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    fuelType: 'Dizel',
    transmission: 'Otomatik',
    seats: 5,
    location: 'Ankara, Çankaya',
    rating: 4.9,
    features: ['Klima', 'Bluetooth', 'GPS', 'Deri Döşeme'],
    description: 'Elegant Mercedes C-Class. İş toplantıları ve özel günler için mükemmel.',
    availability: true
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A4',
    year: 2023,
    price: 480,
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&h=600&fit=crop',
    fuelType: 'Hibrit',
    transmission: 'Otomatik',
    seats: 5,
    location: 'İzmir, Konak',
    rating: 4.7,
    features: ['Klima', 'Bluetooth', 'GPS', 'Hibrit Motor'],
    description: 'Çevre dostu Audi A4 Hibrit. Yakıt tasarrufu ve performansın buluştuğu nokta.',
    availability: true
  },
  {
    id: '4',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2022,
    price: 320,
    image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
    fuelType: 'Benzin',
    transmission: 'Manuel',
    seats: 5,
    location: 'Bursa, Osmangazi',
    rating: 4.5,
    features: ['Klima', 'Bluetooth', 'GPS'],
    description: 'Ekonomik ve güvenilir Volkswagen Golf. Günlük kullanım için ideal.',
    availability: true
  },
  {
    id: '5',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    price: 380,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    fuelType: 'Hibrit',
    transmission: 'Otomatik',
    seats: 5,
    location: 'Antalya, Muratpaşa',
    rating: 4.6,
    features: ['Klima', 'Bluetooth', 'GPS', 'Hibrit Motor'],
    description: 'Güvenilir Toyota Corolla Hibrit. Uzun yolculuklar için mükemmel.',
    availability: true
  },
  {
    id: '6',
    brand: 'Ford',
    model: 'Focus',
    year: 2022,
    price: 350,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    fuelType: 'Dizel',
    transmission: 'Manuel',
    seats: 5,
    location: 'Adana, Seyhan',
    rating: 4.4,
    features: ['Klima', 'Bluetooth', 'GPS'],
    description: 'Pratik Ford Focus. Şehir içi kullanım için ekonomik seçenek.',
    availability: true
  }
];

