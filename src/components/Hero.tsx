"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData, bookingMessages } from "@/data/siteData";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const whatsappUrl = `https://wa.me/${siteData.contact.phoneRaw}?text=${bookingMessages.general}`;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-wood-900 via-matte-black to-wood-800 z-10" />
        <div className="absolute inset-0 z-[3] opacity-[0.15] pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201,168,76,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201,168,76,0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(90,58,42,0.4) 0%, transparent 50%)
          `,
        }} />
        <div className="absolute inset-0 z-[4] opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(201,168,76,0.3) 25%, rgba(201,168,76,0.3) 26%, transparent 27%, transparent 74%, rgba(201,168,76,0.3) 75%, rgba(201,168,76,0.3) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(201,168,76,0.3) 25%, rgba(201,168,76,0.3) 26%, transparent 27%, transparent 74%, rgba(201,168,76,0.3) 75%, rgba(201,168,76,0.3) 76%, transparent 77%)
          `,
          backgroundSize: '80px 80px',
        }} />

        <div className="absolute inset-0 z-[5]">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-matte-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-matte-black to-transparent" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-gold/70 mb-6 border border-gold/20 px-4 py-1.5 glass">
            Tétouan — Maroc
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4"
        >
          <span className="gold-gradient text-shadow-gold">{siteData.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl lg:text-2xl font-light text-cream/80 max-w-2xl mb-2 tracking-wide"
        >
          {siteData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-1.5 font-mono text-xs text-terminal-green/60">
            <span className="inline-block w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            <span>Ouvert aujourd'hui</span>
          </div>
          <span className="text-cream/20">|</span>
          <span className="font-mono text-xs text-cream/40">⭐ {siteData.stats.rating}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 overflow-hidden rounded-sm"
          >
            <span className="absolute inset-0 bg-gold transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
            <span className="relative z-10 font-mono text-sm tracking-widest uppercase text-matte-black">
              Prendre Rendez-vous
            </span>
          </a>

          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-3.5 border border-gold/30 hover:border-gold/70 transition-all duration-500 rounded-sm"
          >
            <span className="font-mono text-sm tracking-widest uppercase text-cream/70 group-hover:text-gold transition-colors duration-500">
              Nos Services
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/30">
            Descendre
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
