"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

const footerLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Localisation", href: "#map" },
  { label: "Avis", href: "#testimonials" },
  { label: "Rendez-vous", href: "#booking" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-t from-wood-900/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold gold-gradient tracking-wider">
              {siteData.name}
            </span>
            <p className="mt-3 text-sm text-cream/50 max-w-md leading-relaxed font-light">
              {siteData.description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="font-mono text-xs text-cream/30">
                ⭐ {siteData.stats.rating} · {siteData.stats.totalReviews} avis
              </span>
              <span className="font-mono text-xs text-terminal-green/40 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
                Ouvert
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${siteData.contact.phoneRaw}`}
                  className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  {siteData.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  {siteData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  @{siteData.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-cream/30 tracking-wider">
            © {year} {siteData.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-cream/20 tracking-widest uppercase">
              Crafted with precision
            </span>
            <span className="text-cream/20">•</span>
            <span className="font-mono text-[10px] text-cream/20">
              Tétouan, Maroc
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
