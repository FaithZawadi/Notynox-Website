import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Notynox Engineering Limited | Civil Engineering & Construction Kenya",
    template: "%s | Notynox Engineering Limited",
  },
  description:
    "Notynox Engineering Limited — Leading civil engineering and construction company in Nairobi, Kenya. Specialists in road construction, structural engineering, building development, water infrastructure, and scaffolding across East Africa since 2013.",
  keywords: [
    "civil engineering Kenya",
    "construction company Nairobi",
    "road construction Kenya",
    "structural engineering East Africa",
    "building construction Nairobi",
    "water infrastructure Kenya",
    "scaffolding services Kenya",
    "Notynox Engineering",
    "infrastructure development Kenya",
  ],
  authors: [{ name: "Notynox Engineering Limited" }],
  creator: "Notynox Engineering Limited",
  publisher: "Notynox Engineering Limited",
  metadataBase: new URL("https://notynox.co.ke"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://notynox.co.ke",
    siteName: "Notynox Engineering Limited",
    title: "Notynox Engineering Limited | Civil Engineering & Construction Kenya",
    description:
      "Building durable infrastructure across East Africa. Expert civil engineering, road construction, structural works, and water systems since 2013.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notynox Engineering Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notynox Engineering Limited",
    description:
      "Leading civil engineering and construction company in Nairobi, Kenya.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ea580c" />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
