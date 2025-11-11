import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "ARAN",
//   description:
//     "Leading Contracting & Engineering Solutions Across Saudi Arabia",
//   keywords:
//     "contracting, Saudi Arabia, security services, civil engineering, electrical services, mechanical engineering, ARAN",
//   openGraph: {
//     title: "ARAN",
//     description: "Elite contracting services across Saudi Arabia",
//     type: "website",
//   },
// };

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default:
      "ARAN - Leading Contracting & Engineering Solutions in Saudi Arabia",
    template: "%s | ARAN - Saudi Arabia's Premier Contracting Company",
  },
  description:
    "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
  // Enhanced Keywords for Google SEO
  keywords: [
    // Core Services
    "contracting company Saudi Arabia",
    "engineering solutions KSA",
    "construction services Saudi Arabia",
    "ARAN contracting",

    // Service-Specific
    "security services Saudi Arabia",
    "civil engineering KSA",
    "electrical contracting Riyadh",
    "mechanical engineering services",
    "HVAC installation Saudi Arabia",
    "building maintenance KSA",
    "infrastructure development",
    "project management Saudi Arabia",

    // Location-Specific
    "contractors in Riyadh",
    "construction company Jeddah",
    "engineering services Dammam",
    "contractors in Makkah",
    "construction services Medina",
    "contractors in Eastern Province",

    // Industry-Specific
    "commercial construction Saudi Arabia",
    "industrial contracting KSA",
    "residential construction services",
    "government contracting Saudi Arabia",
    "turnkey projects KSA",
    "fit-out contractors Saudi Arabia",

    // Technical Services
    "electrical installations",
    "plumbing services",
    "fire safety systems",
    "smart building solutions",
    "energy efficiency solutions",
    "facilities management",
  ].join(", "),

  // Author & Publisher Info
  authors: [{ name: "ARAN" }],
  creator: "ARAN",
  publisher: "ARAN",

  // Application Name
  applicationName: "ARAN",

  // Referrer Policy
  referrer: "origin-when-cross-origin",

  // Language & Region
  metadataBase: new URL("https://aran-5zwy.vercel.app"),

  // Robots & Crawling Instructions
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

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: "https://aran-5zwy.vercel.app",
    siteName: "ARAN Contracting & Engineering",
    title: "ARAN - Leading Contracting & Engineering Solutions in Saudi Arabia",
    description:
      "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
    images: [
      {
        url: "/logos/logo-full.png",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@ARAN_KSA", // Replace with your Twitter handle
    creator: "@ARAN_KSA",
    title: "ARAN - Leading Contracting & Engineering Solutions in Saudi Arabia",
    description:
      "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
    images: {
      url: "/logos/logo-full.png",
      alt: "ARAN Contracting & Engineering Solutions",
    },
  },

  // Alternate Languages (if you have Arabic version)
  alternates: {
    canonical: "https://aran-5zwy.vercel.app",
    languages: {
      "en-SA": "https://aran-5zwy.vercel.app",
      "ar-SA": "https://aran-5zwy.vercel.app",
    },
  },

  // Icons & Favicons
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/logos/logo-full.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logos/logo-full.png",
      },
    ],
  },

  // Manifest for PWA (optional)
  manifest: "/site.webmanifest",

  // Category
  category: "Construction & Engineering Services",

  // Additional metadata
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2b5797", // Customize to your brand color
    "theme-color": "#ffffff",
  },
};

// JSON-LD Structured Data for Google (Add this in your root layout)
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "ARAN Contracting & Engineering",
  image: "https://aran-5zwy.vercel.app/logos/logo-full.png",
  "@id": "https://aran-5zwy.vercel.app",
  url: "https://aran-5zwy.vercel.app",
  telephone: "+966 56 314 3298", // Add your phone
  email: "naeem.siddique@aransaudiar.com", // Add your email
  address: {
    "@type": "PostalAddress",
    streetAddress: "King Fahad Rd",
    addressLocality: "Dammam",
    addressRegion: "Eastern Province",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7136, // Riyadh coordinates - update to your location
    longitude: 46.6753,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Riyadh",
    },
    {
      "@type": "City",
      name: "Jeddah",
    },
    {
      "@type": "City",
      name: "Dammam",
    },
    {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/aran", // Add your social media
    "https://twitter.com/ARAN_KSA",
    "https://www.facebook.com/ARAN",
    "https://www.instagram.com/aran_ksa",
  ],
  priceRange: "SAR",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    opens: "08:00",
    closes: "17:00",
  },
  serviceArea: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  description:
    "Saudi Arabia's premier contracting company - Security, Civil, Electrical & Mechanical Engineering Excellence",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
