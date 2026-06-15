"use client";

import { motion } from "framer-motion";

const GREEN = "#c9ad7d";

const bullets = [
  "Buy project shares at any point during open allocation",
  "Sell units to other investors through the secondary market",
  "Reallocate capital into newer, higher-yield project launches",
  "Build a diversified charging infrastructure portfolio over time",
];

export default function LiquiditySection() {
  return (
    <section className="bg-black py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-[11px] uppercase tracking-[0.25em] mb-8"
          style={{ color: GREEN, fontFamily: "var(--font-space-grotesk), sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Liquidity & Exit
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.h2
              className="font-light tracking-tight text-white mb-6 leading-[1.05]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Infrastructure Shouldn't Mean{" "}
              <span className="text-white/25">Locked Capital.</span>
            </motion.h2>

            <motion.p
              className="text-white/40 text-base leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Traditional charging investments are static and illiquid. Hound Charge introduces liquidity by allowing investors to buy, sell, and reallocate project shares — on their terms.
            </motion.p>

            <div className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <motion.div
                  key={b}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: GREEN }} />
                  <p className="text-white/50 text-sm leading-relaxed">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Flow visual */}
          <motion.div
            className="relative flex flex-col gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Capital flow diagram */}
            {[
              { label: "Your Capital", sub: "Starting investment", position: "top" },
              { label: "Project ARES", sub: "Active · Ernakulam", accent: true },
              { label: "Future Projects", sub: "Kerala · South India", position: "bottom" },
            ].map((node, i) => (
              <motion.div
                key={node.label}
                className="rounded-2xl p-6 flex items-center justify-between"
                style={{
                  border: node.accent ? `1px solid rgba(201,173,125,0.25)` : "1px solid rgba(255,255,255,0.07)",
                  background: node.accent ? "rgba(201,173,125,0.05)" : "rgba(255,255,255,0.02)",
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div>
                  <p
                    className="font-medium mb-1"
                    style={{ color: node.accent ? GREEN : "white", fontFamily: "var(--font-manrope)" }}
                  >
                    {node.label}
                  </p>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {node.sub}
                  </p>
                </div>
                {node.accent && (
                  <span
                    className="text-[10px] px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(201,173,125,0.12)", color: GREEN, fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Earning
                  </span>
                )}
              </motion.div>
            ))}

            {/* Marketplace hub */}
            <motion.div
              className="rounded-2xl p-6 mt-2"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.035)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium mb-1" style={{ fontFamily: "var(--font-manrope)" }}>
                    Secondary Marketplace
                  </p>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    Buy · Sell · Reallocate — anytime
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
