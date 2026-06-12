import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mister Barber | Premium Hair Styling & Grooming — Tétouan",
  description:
    "Barber shop de luxe à Tétouan, Maroc. Coupe homme, taille de barbe, soins visage et traitements kératine. Prenez rendez-vous en ligne.",
  keywords: [
    "barber tetouan",
    "coiffeur tetouan",
    "mister barber",
    "coupe homme tetouan",
    "barber shop maroc",
    "grooming tetouan",
  ],
  openGraph: {
    title: "Mister Barber | Premium Hair Styling & Grooming",
    description:
      "Barber shop de luxe à Tétouan. Coupe, barbe, soins visage et traitements premium.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased noise-overlay">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
