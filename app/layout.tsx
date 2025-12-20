import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Transition from "@/components/Transition/Transition";
import PageTransition from "@/components/Transition/PageTransition";
import { CursorProvider } from "@/context/CursorContext";

/**
 * Font configuration using Next.js font optimization
 * Next.js automatically optimizes Google Fonts by self-hosting them
 * This improves performance and privacy (no external requests to Google)
 *
 * The `variable` property creates CSS variables that can be used in Tailwind config
 * Example: font-family: var(--font-marcellus)
 */
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"], // Only loading the regular weight (400)
  variable: "--font-marcellus", // CSS variable name for this font
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Loading all available weights
  variable: "--font-montserrat", // CSS variable name for this font
});

/**
 * Metadata API - Next.js 13+ App Router feature
 * This metadata is used for SEO and generates the <head> tags automatically
 * You can also export dynamic metadata using generateMetadata function
 *
 * Comprehensive SEO metadata including:
 * - Title and description for search engines
 * - Open Graph tags for social media sharing (Facebook, LinkedIn, etc.)
 * - Twitter Card tags for Twitter sharing
 * - Keywords for SEO
 * - Author information
 * - Icons and images for better presentation
 */
export const metadata: Metadata = {
  // Primary title - appears in browser tab and search results
  title: {
    default:
      "Premium Skincare Salon - Natural Beauty Starts Here | Facial Treatments & Skincare Services",
    template: "%s | Premium Skincare Salon",
  },
  // Meta description - shown in search engine results (keep under 160 characters)
  description:
    "Discover premium skincare treatments at our luxury salon. Offering Classic Facials, Chemical Peels, HydraFacial, and eyebrow services with 97% natural ingredients. 13+ years of expertise serving 35k+ happy clients. Book your appointment today!",
  // Keywords for SEO (Note: Modern SEO focuses more on content, but keywords still help)
  keywords: [
    "skincare salon",
    "facial treatments",
    "luxury skincare",
    "HydraFacial",
    "chemical peel",
    "classic facial",
    "eyebrow waxing",
    "eyebrow shaping",
    "natural skincare",
    "skincare services",
    "beauty salon",
    "radiant skin",
    "healthy complexion",
    "customized skincare",
    "premium facial",
    "skincare Los Angeles",
    "professional skincare",
    "beauty treatments",
    "skin care spa",
  ],
  // Author information
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://arnob-mahmud.vercel.app/",
    },
  ],
  // Creator/developer information
  creator: "Arnob Mahmud",
  // Publisher information
  publisher: "Arnob Mahmud",
  // Application name (for mobile app-like experience)
  applicationName: "Premium Skincare Salon",
  // Referrer policy for security
  referrer: "origin-when-cross-origin",
  // Format detection (prevents auto-detection of phone numbers, etc.)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Metadata for different categories
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://skincare-salon-arnob.vercel.app"
  ),
  // Open Graph metadata (for Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Premium Skincare Salon",
    title: "Premium Skincare Salon - Natural Beauty Starts Here",
    description:
      "Discover premium skincare treatments at our luxury salon. Offering Classic Facials, Chemical Peels, HydraFacial, and eyebrow services with 97% natural ingredients. 13+ years of expertise serving 35k+ happy clients.",
    images: [
      {
        url: "/assets/home/img.png",
        width: 864,
        height: 650,
        alt: "Premium Skincare Salon - Natural Beauty Treatments",
      },
      {
        url: "/assets/logo.svg",
        width: 120,
        height: 44,
        alt: "Premium Skincare Salon Logo",
      },
    ],
  },
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Premium Skincare Salon - Natural Beauty Starts Here",
    description:
      "Discover premium skincare treatments with 97% natural ingredients. 13+ years of expertise, 35k+ happy clients. Book your appointment today!",
    images: ["/assets/home/img.png"],
    creator: "@arnobmahmud", // Update with actual Twitter handle if available
  },
  // Robots directive for search engines
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons configuration
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // Manifest for PWA (if you add a manifest.json later)
  // manifest: "/manifest.json",
  // Category for app stores (if applicable)
  category: "Beauty & Skincare",
};

/**
 * RootLayout - The root layout component for the entire application
 * This wraps all pages and provides shared UI elements like header, navigation, etc.
 *
 * Key concepts:
 * - layout.tsx in Next.js App Router creates a shared layout that wraps all child pages
 * - children prop contains the active page content
 * - This layout persists across route changes, only children change
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      {/* 
        Applying font variables to body so they're available throughout the app
        overflow-x-hidden prevents horizontal scrolling on mobile
      */}
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        {/* 
          CursorProvider wraps the entire app to provide custom cursor functionality
          This context makes cursor handlers available to all child components
        */}
        <CursorProvider>
          {/* Transition component creates the page transition overlay effect */}
          <Transition />
          {/* Header component appears on all pages */}
          <Header />
          {/* 
            PageTransition wraps page content to provide fade-in/fade-out effects
            The children prop contains the current page content (Home, About, Contact, etc.)
          */}
          <PageTransition>{children}</PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}
