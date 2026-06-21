"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

const phases = [
  {
    phase: "PHASE 1",
    period: "2025 – 2026",
    title: "Project ARES",
    desc: "Live charging ring around Ernakulam's border-entry corridors. 10 strategic locations, 75 fast chargers across 2 mega hubs and 8 mini hubs — capturing inbound EV traffic at district entry points.",
    live: true,
  },
  {
    phase: "PHASE 2",
    period: "2026 – 2027",
    title: "Kerala Expansion",
    desc: "Multi-project portfolio across Kerala — pilgrimage routes, NH-66 highway corridor, coastal tourism circuits, and hill station routes.",
    live: false,
  },
  {
    phase: "PHASE 3",
    period: "2027 – 2028",
    title: "South India Portfolio",
    desc: "Expansion into Karnataka, Tamil Nadu, Telangana — tech parks, airports, metro cores, and industrial SEZ hubs.",
    live: false,
  },
  {
    phase: "PHASE 4",
    period: "2028+",
    title: "Liquidity Marketplace",
    desc: "Full secondary marketplace launch. 1,000+ chargers under management. A complete investable EV charging asset network spanning South India.",
    live: false,
  },
];

const NODE_SIZE = 32;
const LINE_LEFT = NODE_SIZE / 2 - 0.5; // centres the 1px line under the node

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="bg-black overflow-hidden"
      style={{
        paddingTop:    "clamp(64px, 9.25vw, 140px)",
        paddingBottom: "clamp(64px, 9.25vw, 140px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* ── Label + Headline ──────────────────────────────────────────── */}
      <div
        style={{
          display:       "flex",
          flexDirection: "column",
          gap:           19,
          marginBottom:  "clamp(48px, 6.6vw, 100px)",
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
          THE ROADMAP
        </motion.p>

        <motion.p
          className="heading-ls"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2rem, 4.1vw, 62px)",
            fontWeight:    300,
            letterSpacing: "-1.86px",
            lineHeight:    "1.24",
            maxWidth:      900,
            margin:        0,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span style={{ color: "white" }}>From One Project To </span>
          <span style={{ color: GOLD }}>A South India Charging Asset Network.</span>
        </motion.p>
      </div>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <div style={{ position: "relative" }}>

        {/* Vertical connector line — runs full height of timeline */}
        <div
          style={{
            position:   "absolute",
            left:       LINE_LEFT,
            top:        NODE_SIZE,
            bottom:     NODE_SIZE,
            width:      1,
            background: `linear-gradient(to bottom,
              rgba(201,173,125,0.55) 0%,
              rgba(201,173,125,0.2) 60%,
              transparent 100%)`,
            pointerEvents: "none",
          }}
        />

        {phases.map((p, i) => (
          <motion.div
            key={p.phase}
            style={{
              display:       "flex",
              gap:           "clamp(24px, 3.2vw, 48px)",
              alignItems:    "flex-start",
              paddingBottom: i < phases.length - 1 ? "clamp(40px, 5.3vw, 80px)" : 0,
            }}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* ── Node ─────────────────────────────────────────────── */}
            <div
              style={{
                flexShrink: 0,
                width:      NODE_SIZE,
                height:     NODE_SIZE,
                borderRadius: "50%",
                border:     p.live
                  ? `1.5px solid ${GOLD}`
                  : "1.5px solid rgba(255,255,255,0.18)",
                background: p.live ? "rgba(201,173,125,0.08)" : "black",
                boxShadow:  p.live ? `0 0 20px rgba(201,173,125,0.25)` : "none",
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
                position:   "relative",
                zIndex:     1,
              }}
            >
              {p.live && (
                <span
                  style={{
                    width:        9,
                    height:       9,
                    borderRadius: "50%",
                    background:   GOLD,
                    display:      "block",
                    boxShadow:    `0 0 8px rgba(201,173,125,0.7)`,
                  }}
                />
              )}
            </div>

            {/* ── Content ──────────────────────────────────────────── */}
            <div style={{ paddingTop: 4 }}>

              {/* Phase label + date + LIVE badge */}
              <div
                style={{
                  display:    "flex",
                  alignItems: "center",
                  gap:        10,
                  marginBottom: 12,
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      10,
                    fontWeight:    400,
                    color:         "rgba(255,255,255,0.4)",
                    letterSpacing: "2.5px",
                    margin:        0,
                  }}
                >
                  {p.phase}
                </p>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 10 }}>·</span>
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      10,
                    fontWeight:    400,
                    color:         "rgba(255,255,255,0.4)",
                    letterSpacing: "1px",
                    margin:        0,
                  }}
                >
                  {p.period}
                </p>
                {p.live && (
                  <span
                    style={{
                      fontFamily:    "var(--font-space-grotesk), sans-serif",
                      fontSize:      9,
                      fontWeight:    400,
                      color:         GOLD,
                      letterSpacing: "2px",
                      background:    "rgba(201,173,125,0.1)",
                      border:        "1px solid rgba(201,173,125,0.25)",
                      borderRadius:  20,
                      padding:       "3px 10px",
                    }}
                  >
                    LIVE
                  </span>
                )}
              </div>

              {/* Phase title — Manrope Light 300, 32px */}
              <p
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      20,
                  fontWeight:    300,
                  color:         "white",
                  letterSpacing: "-0.5px",
                  lineHeight:    "1.2",
                  margin:        "0 0 14px 0",
                }}
              >
                {p.title}
              </p>

              {/* Description — Manrope 400, 16px, #fdffea, lh 26px */}
              <p
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      14,
                  fontWeight:    400,
                  color:         "rgba(253,255,234,0.55)",
                  letterSpacing: "0.5px",
                  lineHeight:    "26px",
                  maxWidth:      640,
                  margin:        0,
                }}
              >
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
