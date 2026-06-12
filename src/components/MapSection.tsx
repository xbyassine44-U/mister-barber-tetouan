"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function MapSection() {
  const coords = siteData.location.coordinates;

  return (
    <section id="map" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-wood-900/5 to-matte-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold/60">
            — Localisation —
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Nous Trouver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-6 rounded-sm border border-gold/10">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-4">
                Adresse
              </h3>
              <p className="text-lg text-cream/90 mb-1">{siteData.location.address}</p>
              <p className="text-sm text-cream/50 font-light">{siteData.location.landmark}</p>
            </div>

            <div className="glass p-6 rounded-sm border border-gold/10">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-4">
                Horaires
              </h3>
              <div className="space-y-2">
                {siteData.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-sm text-cream/70 font-mono">{h.day}</span>
                    <span className="text-sm text-cream/90 font-mono">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-sm border border-gold/10">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-cream/80">
                  <span className="text-gold/60">Tél :</span> {siteData.contact.phone}
                </p>
                <p className="text-cream/80">
                  <span className="text-gold/60">Email :</span> {siteData.contact.email}
                </p>
                <p className="text-cream/80">
                  <span className="text-gold/60">Instagram :</span> @{siteData.contact.instagram}
                </p>
              </div>
            </div>

            <a
              href={siteData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center font-mono text-xs tracking-widest uppercase text-matte-black bg-gold hover:bg-gold-light transition-all duration-300 rounded-sm"
            >
              Ouvrir dans Google Maps →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 h-[400px] lg:h-[500px] glass rounded-sm overflow-hidden border border-gold/10"
          >
            <iframe
              title="Mister Barber Tétouan"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.5)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
              }&q=${encodeURIComponent(
                siteData.location.address
              )}&center=${coords.lat},${coords.lng}&zoom=16&language=fr`}
            />
            {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
              <div className="w-full h-full flex items-center justify-center bg-matte-black-800">
                <div className="text-center p-8">
                  <p className="font-mono text-xs tracking-wider text-cream/40 mb-2">
                    CARTE INTÉGRÉE
                  </p>
                  <p className="text-2xl mb-2">📍</p>
                  <p className="text-cream/60 text-sm">{siteData.location.address}</p>
                  <p className="text-cream/40 text-xs mt-2">
                    Ajoutez une clé API Google Maps dans .env.local pour activer la carte interactive
                  </p>
                  <a
                    href={siteData.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 font-mono text-xs text-gold border border-gold/30 hover:border-gold/60 transition-colors rounded-sm"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
