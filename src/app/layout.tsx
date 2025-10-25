import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Araç Kiralama - En İyi Fiyatlarla Araç Kirala | RentACar",
  description: "Türkiye'nin en güvenilir araç kiralama platformu. BMW, Mercedes, Audi ve daha fazla marka ile konum bazlı araç kiralama. Günlük, haftalık, aylık kiralama seçenekleri.",
  keywords: "araç kiralama, rent a car, araba kiralama, günlük araç kiralama, haftalık araç kiralama, İstanbul araç kiralama, Ankara araç kiralama, İzmir araç kiralama",
  authors: [{ name: "RentACar" }],
  creator: "RentACar",
  publisher: "RentACar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rentacar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Araç Kiralama - En İyi Fiyatlarla Araç Kirala",
    description: "Türkiye'nin en güvenilir araç kiralama platformu. Konum bazlı araç kiralama ile ihtiyacınıza uygun aracı bulun.",
    url: 'https://rentacar.com',
    siteName: 'RentACar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RentACar - Araç Kiralama',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Araç Kiralama - En İyi Fiyatlarla Araç Kirala",
    description: "Türkiye'nin en güvenilir araç kiralama platformu. Konum bazlı araç kiralama ile ihtiyacınıza uygun aracı bulun.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
