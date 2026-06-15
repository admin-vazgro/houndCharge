"use client";

import { motion } from "framer-motion";

const GREEN = "#c9ad7d";

const traditional = [
  "Single charging station",
  "One owner, full burden",
  "No structured exit",
  "Single-location exposure",
  "Zero investor transparency",
];

const houndcharge = [
  "Multi-hub project network",
  "Fractional ownership for investors",
  "Marketplace liquidity exit",
  "Diversified across locations",
  "Real-time investor dashboard",
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-[11px] uppercase tracking-[0.25em] mb-8 font-medium"
          style={{ color: GREEN, fontFamily: "var(--font-space-grotesk), sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Solution
        </motion.p>

        <motion.h2
          className="font-light tracking-tight text-white mb-6 leading-[1.05]"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            maxWidth: "48rem",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We Didn't Build A Charging Company.{" "}
          <span style={{ color: GREEN }}>We Built A Charging Asset Class.</span>
        </motion.h2>

        <motion.p
          className="text-white/40 text-lg max-w-xl leading-relaxed mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hound Charge transforms EV charging infrastructure into project-based, fractional ownership opportunities built for serious investors.
        </motion.p>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            className="rounded-2xl p-10"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.015)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(255,55,55,0.75)" }} />
              <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Traditional Model</p>
            </div>
            <div className="flex flex-col gap-4">
              {traditional.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5 opacity-40">
                    <circle cx="7" cy="7" r="6.5" stroke="rgba(255,55,55,0.7)" />
                    <path d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5" stroke="rgba(255,55,55,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className="text-white/35 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hound Charge */}
          <motion.div
            className="rounded-2xl p-10"
            style={{
              border: `1px solid rgba(201,173,125,0.2)`,
              background: "rgba(201,173,125,0.04)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full" style={{ background: GREEN, boxShadow: `0 0 8px ${GREEN}` }} />
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: GREEN }}>Hound Charge</p>
            </div>
            <div className="flex flex-col gap-4">
              {houndcharge.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                    <circle cx="7" cy="7" r="6.5" stroke={GREEN} strokeOpacity="0.6" />
                    <path d="M4 7L6.2 9.5L10 4.5" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-white/75 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-white/20 text-sm tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Not a charging station. An investable asset class.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
