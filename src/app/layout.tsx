import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Random Hadith Generator",
  description:
    "Discover authentic hadiths from various collections. A professional tool for Islamic knowledge seekers.",
  keywords: [
    "hadith",
    "Islam",
    "Islamic knowledge",
    "Bukhari",
    "Muslim",
    "Abu Dawud",
    "Tirmidhi",
    "Ibn Majah",
    "Nasai",
  ],
  authors: [{ name: "Dr King BD" }],
  openGraph: {
    title: "Random Hadith Generator",
    description: "Discover authentic hadiths from various collections.",
    url: "https://your-domain.com",
    siteName: "Random Hadith Generator",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Hadith Generator",
    description: "Discover authentic hadiths from various collections.",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

