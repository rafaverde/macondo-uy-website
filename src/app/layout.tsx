import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsappButton } from "@/components/FloatingWhatsappButton";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Macondo Marketing e Comunicación",
  description:
    "Una gran agencia de marketing e comunicación para Una gran agencia de marketing y comunicaciones para empresas de cualquier tamaño.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${onest.variable} ${onest.className} antialiased`}>
        <h1 className="sr-only">
          Agencia de marketing y comunicaciones en Uruguay para empresas de
          todos los tamaños.
        </h1>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
