"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";
const EASE = [0.32, 0.72, 0, 1] as const;

const problems = [
  {
    number: "01",
    title:  "No Exit Opportunity",
    desc:   "Traditional charging investments lock capital indefinitely. There is no structured path to liquidate — investors are stuck until the operator decides.",
  },
  {
    number: "02",
    title:  "High Entry Barrier",
    desc:   "Building even a high power single station demands 35 lakhs in upfront capital and operational responsibility. This prices out most serious investors.",
  },
  {
    number: "03",
    title:  "Limited Access",
    desc:   "Investors have access to only basic dashboard data with limited visibility into revenue, utilization and overall station performance.",
  },
];

export default function ModelSection() {
  return (
    <section
      id="model"
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
          marginBottom:  "clamp(32px, 4.5vw, 68px)",
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
          THE PROBLEM
        </motion.p>

        <motion.p
          className="heading-ls"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2rem, 4.1vw, 62px)",
            fontWeight:    300,
            letterSpacing: "-1.24px",
            lineHeight:    "1.2",
            margin:        0,
          }}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true }}
        >
          <span style={{ color: "white" }}>Charging Infrastructure Exists. </span>
          <span style={{ color: "#dbb781" }}>Investment Infrastructure Doesn&apos;t</span>
        </motion.p>

        <motion.p
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      16,
            fontWeight:    400,
            color:         "rgba(253,255,234,0.65)",
            letterSpacing: "0.5px",
            lineHeight:    "26px",
            maxWidth:      774,
            margin:        0,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          viewport={{ once: true }}
        >
          The EV charging boom is real. But the infrastructure for investors to
          meaningfully and safely participate? It doesn&apos;t exist yet.
        </motion.p>
      </div>

      {/* ── Problem cards ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 16 }}>
        {problems.map((p, i) => (
          <motion.div
            key={p.number}
            className="relative overflow-hidden"
            style={{ borderRadius: 20, minHeight: 344 }}
            initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            viewport={{ once: true }}
          >
            {/* Rotating conic-gradient border glow */}
            <div
              aria-hidden
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
                animation:      `borderSpin ${4 + i * 0.8}s linear infinite`,
                animationDelay: `${i * -1.5}s`,
              }}
            />
            <div
              aria-hidden
              style={{
                position:      "absolute",
                inset:         0,
                borderRadius:  20,
                border:        "1px solid rgba(201,173,125,0.12)",
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

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex:   1,
                padding:  "clamp(32px, 3.5vw, 44px) clamp(28px, 3vw, 40px)",
                height:   "100%",
              }}
            >
              {/* Red corner indicator */}
              <div
                className="absolute rounded-full"
                style={{
                  width:      11,
                  height:     11,
                  top:        "clamp(28px, 3.5vw, 44px)",
                  right:      "clamp(24px, 2.5vw, 32px)",
                  background: "rgba(255,60,60,0.7)",
                }}
              />

              {/* Number + gold rule */}
              <div
                style={{
                  display:       "flex",
                  flexDirection: "column",
                  gap:           17,
                  width:         86,
                  marginBottom:  32,
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      22,
                    fontWeight:    400,
                    color:         "#9e9482",
                    letterSpacing: "1px",
                    lineHeight:    "32px",
                    margin:        0,
                  }}
                >
                  {p.number}
                </p>
                <div style={{ height: 1, background: "rgba(201,173,125,0.4)", width: "100%" }} />
              </div>

              {/* Title + desc */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize:   "clamp(1.3rem, 1.9vw, 28px)",
                    fontWeight: 300,
                    color:      "white",
                    lineHeight: "1.2",
                    margin:     0,
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      14,
                    fontWeight:    400,
                    color:         "rgba(253,255,234,0.65)",
                    letterSpacing: "0.5px",
                    lineHeight:    "24px",
                    margin:        0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
