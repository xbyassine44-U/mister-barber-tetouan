"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { formatWhatsAppUrl } from "@/utils/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-wood-900/10 to-matte-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold/60">
            — Prestations —
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Services & Tarifs</span>
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto font-light tracking-wide">
            Des coupes classiques aux soins premium, chaque service est réalisé avec une précision
            artisanale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {siteData.services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelected(selected === service.id ? null : service.id)}
              className={`group relative cursor-pointer rounded-sm p-6 transition-all duration-500 ${
                selected === service.id
                  ? "glass-gold border-gold/40"
                  : hovered === service.id
                  ? "glass border-gold/20"
                  : "glass border-gold/5 hover:border-gold/15"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <motion.span
                    animate={{ scale: selected === service.id ? 1.05 : 1 }}
                    className="font-mono text-lg font-bold text-gold"
                  >
                    {service.price}
                  </motion.span>
                </div>

                <h3 className="text-lg font-semibold text-cream mb-2">{service.name}</h3>

                <AnimatePresence>
                  {(selected === service.id || hovered === service.id) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-cream/60 leading-relaxed mb-4"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-[11px] text-cream/40 tracking-wider">
                    {service.duration}
                  </span>
                  <a
                    href={formatWhatsAppUrl(service.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[11px] tracking-widest uppercase text-gold/60 hover:text-gold transition-colors duration-300"
                  >
                    Réserver →
                  </a>
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-sm pointer-events-none transition-opacity duration-500 ${
                  hovered === service.id ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  boxShadow: "inset 0 0 30px rgba(201, 168, 76, 0.05)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 font-mono text-xs text-cream/40">
            <span className="inline-block w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            Prix TTC — Paiement espèces ou QR code
          </div>
        </motion.div>
      </div>
    </section>
  );
}
