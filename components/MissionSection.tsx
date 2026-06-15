"use client";

import { motion } from "framer-motion";

const GREEN = "#c9ad7d";

export default function MissionSection() {
  return (
    <section
      className="py-32 md:py-52 px-6 md:px-16 relative overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, rgba(201,173,125,0.07) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-4xl mx-auto text-left md:text-center relative z-10">
        <motion.p
          className="text-[11px] uppercase tracking-[0.25em] mb-8"
          style={{ color: GREEN, fontFamily: "var(--font-space-grotesk), sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get Started
        </motion.p>

        <motion.h2
          className="font-light text-white mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          The Future Of Mobility{" "}
          <br />
          <span style={{ color: GREEN }}>Will Be Owned.</span>
        </motion.h2>

        <motion.p
          className="text-white/35 text-xl leading-relaxed mb-16 max-w-lg mx-auto"
          style={{ fontFamily: "var(--font-manrope)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The only question is whether you will own part of it.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-start md:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:invest@houndcharge.com"
            className="inline-block w-fit px-9 py-4 rounded-full text-base font-semibold tracking-wide transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: GREEN,
              color: "#000",
              fontFamily: "var(--font-space-grotesk)",
              boxShadow: `0 0 30px rgba(201,173,125,0.25)`,
            }}
          >
            Apply for Early Access
          </a>
          <a
            href="mailto:invest@houndcharge.com"
            className="inline-block w-fit px-9 py-4 rounded-full text-base font-semibold tracking-wide border transition-all hover:bg-white hover:text-black"
            style={{
              borderColor: "rgba(255,255,255,0.18)",
              color: "white",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Download Investor Brief
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-12 text-white/18 text-xs uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Built for transparency · liquidity · scale
        </motion.p>
      </div>
    </section>
  );
}
