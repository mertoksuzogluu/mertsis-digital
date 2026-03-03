"use client";

import { motion } from "framer-motion";

const placeholderLogos = [
  "Marka 1",
  "Marka 2",
  "Marka 3",
  "Marka 4",
  "Marka 5",
  "Marka 6",
];

export function TrustedBy() {
  return (
    <section className="py-block border-y border-border" aria-label="Bize güvenenler">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-caption text-muted uppercase tracking-wider text-center mb-6"
        >
          Bize Güvenenler
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {placeholderLogos.map((name) => (
            <div
              key={name}
              className="h-8 px-4 flex items-center justify-center rounded border border-border bg-surface/30 text-muted text-body-sm font-medium"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
