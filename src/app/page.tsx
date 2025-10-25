import { CarSwipeContainer } from '@/components/CarSwipeContainer';
import { CarsListSEO } from '@/components/CarsListSEO';
import { generateStructuredData } from '@/lib/structuredData';

export default function Home() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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