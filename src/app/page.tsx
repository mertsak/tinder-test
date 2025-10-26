import { CarSwipeContainer } from '@/components/CarSwipeContainer';
import { CarsListSEO } from '@/components/CarsListSEO';
import { generateStructuredData } from '@/lib/structuredData';
import Link from 'next/link';

export default function Home() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Header with Auth Links */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RentACar</h1>
              <p className="text-gray-600">Araç kiralama platformu</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Giriş Yap
              </Link>
              <Link
                href="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* SEO için görünür araç listesi */}
      <CarsListSEO />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <CarSwipeContainer />
        </div>
      </div>
    </>
  );
}