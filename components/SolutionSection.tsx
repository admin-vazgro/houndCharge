"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";
const EASE = [0.32, 0.72, 0, 1] as const;

const traditionalItems = [
  "Single charging station",
  "No risk diversification",
  "No structured exit",
  "Single-location exposure",
  "Limited investor transparency",
];

const houndItems = [
  "Multi-hub project network",
  "Fractional ownership for investors",
  "Marketplace liquidity exit",
  "Diversified across locations",
  "Real-time investor dashboard",
];

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8.5" stroke={GOLD} strokeWidth="1" />
      <path d="M6.5 10.5l2.5 2.5 4.5-4.5" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="bg-black overflow-hidden"
      style={{
        paddingTop:    "clamp(64px, 9.25vw, 140px)",
        paddingBottom: "clamp(64px, 9.25vw, 140px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* ── Header ───────────────────────────────────────────────────── */}
      <div
        style={{
          display:       "flex",
          flexDirection: "column",
          gap:           19,
          maxWidth:      987,
          marginBottom:  "clamp(40px, 5.3vw, 80px)",
        }}
      >
        <motion.p
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      18,
            fontWeight:    400,
            color:         GOLD,
            letterSpacing: "1px",
            lineHeight:    "32px",
            margin:        0,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
        >
          THE SOLUTION
        </motion.p>

        <motion.p
          className="heading-ls"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2rem, 4.1vw, 62px)",
            fontWeight:    300,
            letterSpacing: "-1.86px",
            lineHeight:    "1.2",
            margin:        0,
          }}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true }}
        >
          <span style={{ color: "white" }}>We Didn&apos;t Build A Charging Company. </span>
          <span style={{ color: GOLD }}>We Built A Charging Asset Class.</span>
        </motion.p>

        <motion.p
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      16,
            fontWeight:    400,
            color:         "rgba(253,255,234,0.65)",
            letterSpacing: "0.5px",
            lineHeight:    "26px",
            maxWidth:      574,
            margin:        0,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          viewport={{ once: true }}
        >
          Hound Charge transforms EV charging infrastructure into project-based,
          fractional ownership opportunities built for serious investors.
        </motion.p>
      </div>

      {/* ── Comparison cards ─────────────────────────────────────────── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 16, marginBottom: "clamp(40px, 5.75vw, 87px)" }}
      >

        {/* Traditional Model — Double-Bezel outer shell */}
        <motion.div
          style={{
            borderRadius: 20,
            padding:      1.5,
            background:   "rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: EASE }}
          viewport={{ once: true }}
        >
          {/* Inner core */}
          <div
            style={{
              borderRadius: 19,
              background:   "#070707",
              padding:      "clamp(28px, 3.5vw, 44px) clamp(24px, 3vw, 44px)",
              boxShadow:    "inset 0 1px 1px rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <div
                style={{
                  width:        7,
                  height:       7,
                  borderRadius: "50%",
                  background:   "rgba(255,80,80,0.6)",
                  flexShrink:   0,
                }}
              />
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      10,
                  fontWeight:    400,
                  color:         "rgba(255,255,255,0.4)",
                  letterSpacing: "4px",
                  margin:        0,
                }}
              >
                TRADITIONAL MODEL
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {traditionalItems.map((item, i) => (
                <motion.div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                  viewport={{ once: true }}
                >
                  <XIcon />
                  <p
                    style={{
                      fontFamily:    "var(--font-manrope), sans-serif",
                      fontSize:      15,
                      fontWeight:    400,
                      color:         "rgba(253,255,234,0.5)",
                      letterSpacing: "0.3px",
                      lineHeight:    "1",
                      margin:        0,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hound Charge — spinning conic-border Double-Bezel */}
        <motion.div
          className="relative overflow-hidden"
          style={{ borderRadius: 20 }}
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
          viewport={{ once: true }}
        >
          {/* Rotating conic-gradient border */}
          <div
            aria-hidden
            style={{
              position:   "absolute",
              inset:      -120,
              background: `conic-gradient(
                from 0deg,
                transparent 0%,
                transparent 72%,
                rgba(201,173,125,0.9) 85%,
                rgba(201,173,125,0.4) 92%,
                transparent 100%
              )`,
              animation: "borderSpin 5s linear infinite",
            }}
          />
          <div
            aria-hidden
            style={{
              position:      "absolute",
              inset:         0,
              borderRadius:  20,
              border:        "1px solid rgba(201,173,125,0.15)",
              pointerEvents: "none",
            }}
          />
          {/* Inner core */}
          <div
            style={{
              position:     "absolute",
              inset:        1.5,
              borderRadius: 19,
              background:   "#070707",
              boxShadow:    "inset 0 1px 1px rgba(255,255,255,0.04)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex:   1,
              padding:  "clamp(28px, 3.5vw, 44px) clamp(24px, 3vw, 44px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <div
                style={{
                  width:        7,
                  height:       7,
                  borderRadius: "50%",
                  background:   GOLD,
                  flexShrink:   0,
                  boxShadow:    `0 0 10px ${GOLD}`,
                }}
              />
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      10,
                  fontWeight:    400,
                  color:         "rgba(255,255,255,0.55)",
                  letterSpacing: "4px",
                  margin:        0,
                }}
              >
                HOUND CHARGE
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {houndItems.map((item, i) => (
                <motion.div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 + 0.12, ease: EASE }}
                  viewport={{ once: true }}
                >
                  <CheckIcon />
                  <p
                    style={{
                      fontFamily:    "var(--font-manrope), sans-serif",
                      fontSize:      15,
                      fontWeight:    400,
                      color:         "#fdffea",
                      letterSpacing: "0.3px",
                      lineHeight:    "1",
                      margin:        0,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom tagline ───────────────────────────────────────────── */}
      <motion.p
        className="text-center"
        style={{
          fontFamily:    "var(--font-space-grotesk), sans-serif",
          fontSize:      11,
          fontWeight:    400,
          color:         "rgba(201,173,125,0.45)",
          letterSpacing: "4px",
          lineHeight:    "1",
          margin:        0,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        viewport={{ once: true }}
      >
        NOT A CHARGING STATION. AN INVESTABLE ASSET CLASS.
      </motion.p>
    </section>
  );
}
