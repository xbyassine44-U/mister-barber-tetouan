"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

const testimonials = siteData.testimonials;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-wood-900/8 to-matte-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold/60">
            — Social Proof —
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Ce Que Disent Nos Clients</span>
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto font-light">
            {siteData.stats.totalReviews} avis · Note moyenne de {siteData.stats.rating}/5
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 lg:p-10 rounded-sm border border-gold/10 flex flex-col justify-center min-h-[300px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-[200px] leading-none font-serif text-gold/5 select-none pointer-events-none">
              "
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < testimonials[current].rating ? "text-gold" : "text-cream/10"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed font-light italic mb-6">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-cream">{testimonials[current].name}</p>
                    <p className="font-mono text-xs text-cream/40">{testimonials[current].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center border border-gold/20 hover:border-gold/50 text-cream/60 hover:text-gold transition-all rounded-sm"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-gold w-6" : "bg-cream/20 hover:bg-cream/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center border border-gold/20 hover:border-gold/50 text-cream/60 hover:text-gold transition-all rounded-sm"
              >
                →
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.slice(0, 4).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-5 rounded-sm border border-gold/5 hover:border-gold/15 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className={`text-[10px] ${
                        j < t.rating ? "text-gold" : "text-cream/10"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-cream/70 leading-relaxed mb-3 line-clamp-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-mono text-[11px] text-cream/40">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href={`https://search.google.com/local/reviews?q=${encodeURIComponent(
              siteData.location.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-gold/60 hover:text-gold transition-colors"
          >
            Voir tous les avis Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
