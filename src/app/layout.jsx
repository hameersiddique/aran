import { Geist, Geist_Mono } from "next/font/google";
import LayoutClient from "./LayoutClient";
import "./globals.css";

export const metadata = {
  title: {
    default:
      "ARAN - Leading Contracting & Engineering Solutions Across Saudi Arabia",
    template: "%s | ARAN - Saudi Arabia's Premier Contracting Company",
  },
  description:
    "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
  keywords: [
    "contracting company Saudi Arabia",
    "engineering solutions KSA",
    "construction services Saudi Arabia",
    "ARAN contracting",
    "security services Saudi Arabia",
    "civil engineering KSA",
    "electrical contracting Riyadh",
    "mechanical engineering services",
    "HVAC installation Saudi Arabia",
    "building maintenance KSA",
    "infrastructure development",
    "project management Saudi Arabia",
    "contractors in Riyadh",
    "construction company Jeddah",
    "engineering services Dammam",
    "contractors in Makkah",
    "construction services Medina",
    "contractors in Eastern Province",
    "commercial construction Saudi Arabia",
    "industrial contracting KSA",
    "residential construction services",
    "government contracting Saudi Arabia",
    "turnkey projects KSA",
    "fit-out contractors Saudi Arabia",
    "electrical installations",
    "plumbing services",
    "fire safety systems",
    "smart building solutions",
    "energy efficiency solutions",
    "facilities management",
  ].join(", "),
  authors: [{ name: "ARAN" }],
  creator: "ARAN",
  publisher: "ARAN",
  applicationName: "ARAN",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://aran-5zwy.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: "https://aran-5zwy.vercel.app",
    siteName: "ARAN Contracting & Engineering",
    title:
      "ARAN - Leading Contracting & Engineering Solutions Across Saudi Arabia",
    description:
      "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
    images: [
      {
        url: "/logos/logo-full-3.png",
        width: 600,
        height: 315,
        alt: "ARAN Contracting & Engineering Solutions - Saudi Arabia's Leading Contractor",
        type: "image/jpeg",
      },
      {
        url: "/logos/logo.png",
        width: 300,
        height: 300,
        alt: "ARAN Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ARAN_KSA",
    creator: "@ARAN_KSA",
    title:
      "ARAN - Leading Contracting & Engineering Solutions Across Saudi Arabia",
    description:
      "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
    images: {
      url: "/logos/logo-full-3.png",
      alt: "ARAN Contracting & Engineering Solutions",
    },
  },
  alternates: {
    canonical: "https://aran-5zwy.vercel.app",
    languages: {
      "en-SA": "https://aran-5zwy.vercel.app",
      "ar-SA": "https://aran-5zwy.vercel.app",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/logos/logo-full-3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logos/logo-full-3.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Construction & Engineering Services",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2b5797",
    "theme-color": "#ffffff",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: "ARAN Contracting & Engineering",
              image: "https://aran-5zwy.vercel.app/logos/logo-full-3.png",
              "@id": "https://aran-5zwy.vercel.app",
              url: "https://aran-5zwy.vercel.app",
              telephone: "+966 56 314 3298",
              email: "info@aransaudiar.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "King Fahad Rd",
                addressLocality: "Dammam",
                addressRegion: "Eastern Province",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.4207,
                longitude: 50.0888,
              },
              areaServed: [
                { "@type": "City", name: "Riyadh" },
                { "@type": "City", name: "Jeddah" },
                { "@type": "City", name: "Dammam" },
                { "@type": "Country", name: "Saudi Arabia" },
              ],
              sameAs: [
                "https://www.linkedin.com/company/aran",
                "https://twitter.com/ARAN_KSA",
                "https://www.facebook.com/ARAN",
                "https://www.instagram.com/aran_ksa",
              ],
              priceRange: "SAR",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
              serviceArea: {
                "@type": "Country",
                name: "Saudi Arabia",
              },
              description:
                "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
            }),
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
