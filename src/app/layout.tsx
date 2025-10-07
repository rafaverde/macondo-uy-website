import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsappButton } from "@/components/FloatingWhatsappButton";
import { GoogleTagManager } from "@next/third-parties/google";
import * as Sentry from "@sentry/nextjs";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Macondo Marketing y Comunicación",
    default: "Macondo Marketing y Comunicación",
  },

  description:
    "Una gran agencia de marketing y comunicación para empresas de cualquier tamaño.",

  keywords: [
    "marketing",
    "comunicación",
    "marketing PYMES",
    "comunicación PYMES",
    "marketing digital",
    "estrategia comercial",
    "páginas web",
    "configuración digital",
    "identidad visual",
    "campaña publicitarias",
  ],

  openGraph: {
    title: "Macondo Marketing y Comunicación",
    description:
      "Una gran agencia de marketing y comunicación para Una gran agencia de marketing y comunicaciones para empresas de cualquier tamaño.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.macondo.com.uy",
    siteName: "Macondo Marketing & Comunicaciones",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  other: {
    ...Sentry.getTraceData(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${onest.variable} ${onest.className} antialiased`}>
        <h1 className="sr-only">
          Agencia de marketing y comunicaciones en Uruguay para empresas de
          todos los tamaños.
        </h1>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsappButton />

        <GoogleTagManager gtmId="GTM-KZ4HQG3Q" />
      </body>
    </html>
  );
}
