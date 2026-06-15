"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

const traditionalItems = [
  "Single charging station",
  "One owner, full burden",
  "No structured exit",
  "Single-location exposure",
  "Zero investor transparency",
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
      <circle cx="10" cy="10" r="8.5" stroke={GOLD} strokeWidth="1" strokeOpacity="0.5" />
      <path d="M7 7l6 6M13 7l-6 6" stroke={GOLD} strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.5" />
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
      {/* ── Label + Headline + Description ──────────────────────────── */}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            color:         "#fdffea",
            letterSpacing: "1px",
            lineHeight:    "26px",
            maxWidth:      574,
            margin:        0,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hound Charge transforms EV charging infrastructure into project-based,
          fractional ownership opportunities built for serious investors.
        </motion.p>
      </div>

      {/* ── Comparison cards ─────────────────────────────────────────── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 20, marginBottom: "clamp(40px, 5.75vw, 87px)" }}
      >
        {/* Traditional Model */}
        <motion.div
          style={{
            borderRadius: 17,
            border:       "1px solid rgba(201,173,125,0.28)",
            background:   "#070707",
            padding:      "40px 43px",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
            <div
              style={{
                width:        8,
                height:       8,
                borderRadius: "50%",
                background:   "rgba(255,55,55,0.85)",
                flexShrink:   0,
              }}
            />
            <p
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      10,
                fontWeight:    400,
                color:         "rgba(255,255,255,0.6)",
                letterSpacing: "4px",
                lineHeight:    "1",
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
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <XIcon />
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      16,
                    fontWeight:    400,
                    color:         "#fdffea",
                    letterSpacing: "0.5px",
                    lineHeight:    "1",
                    margin:        0,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hound Charge — with spinning border glow */}
        <motion.div
          className="relative overflow-hidden"
          style={{ borderRadius: 17 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          viewport={{ once: true }}
        >
          {/* Rotating conic-gradient glow */}
          <div
            style={{
              position:       "absolute",
              inset:          -120,
              background:     `conic-gradient(
                from 0deg,
                transparent 0%,
                transparent 72%,
                rgba(201,173,125,0.9) 85%,
                rgba(201,173,125,0.4) 92%,
                transparent 100%
              )`,
              animation:      "borderSpin 5s linear infinite",
            }}
          />
          <div
            style={{
              position:      "absolute",
              inset:         0,
              borderRadius:  17,
              border:        "1px solid rgba(201,173,125,0.15)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position:     "absolute",
              inset:        1,
              borderRadius: 16,
              background:   "#070707",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, padding: "40px 43px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
              <div
                style={{
                  width:        8,
                  height:       8,
                  borderRadius: "50%",
                  background:   GOLD,
                  flexShrink:   0,
                }}
              />
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      10,
                  fontWeight:    400,
                  color:         "rgba(255,255,255,0.6)",
                  letterSpacing: "4px",
                  lineHeight:    "1",
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
                  transition={{ duration: 0.4, delay: i * 0.07 + 0.12 }}
                  viewport={{ once: true }}
                >
                  <CheckIcon />
                  <p
                    style={{
                      fontFamily:    "var(--font-manrope), sans-serif",
                      fontSize:      16,
                      fontWeight:    400,
                      color:         "#fdffea",
                      letterSpacing: "0.5px",
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
          fontSize:      12,
          fontWeight:    400,
          color:         "rgba(201,173,125,0.35)",
          letterSpacing: "4px",
          lineHeight:    "1",
          margin:        0,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        NOT A CHARGING STATION. AN INVESTABLE ASSET CLASS.
      </motion.p>
    </section>
  );
}
