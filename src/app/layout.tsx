import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Station2290 - Кофейня в Махачкале',
    default: 'Station2290 - Кофейня в Махачкале | Кофе, Коктейли, Десерты'
  },
  description: "Station2290 - уютная кофейня в центре Махачкалы. Свежеобжаренный кофе, авторские коктейли и изысканные десерты. Место встреч для кофейных гурманов и ценителей качества.",
  keywords: ["кофейня махачкала", "кофе махачкала", "station2290", "коктейли махачкала", "десерты махачкала", "кофе дагестан", "кофейня дагестан"],
  authors: [{ name: "Station2290" }],
  creator: "Station2290",
  publisher: "Station2290",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://station2290.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    title: 'Station2290 - Кофейня в Махачкале | Кофе, Коктейли, Десерты',
    description: 'Station2290 - уютная кофейня в центре Махачкалы. Свежеобжаренный кофе, авторские коктейли и изысканные десерты.',
    siteName: 'Station2290',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Station2290 - Кофейня в Махачкале',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Station2290 - Кофейня в Махачкале',
    description: 'Уютная кофейня в центре Махачкалы. Свежеобжаренный кофе, авторские коктейли и изысканные десерты.',
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
