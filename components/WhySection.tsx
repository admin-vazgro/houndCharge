"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const GOLD = "#c9ad7d";
const EASE = [0.32, 0.72, 0, 1] as const;
const easeStr = `cubic-bezier(0.32,0.72,0,1)`;

const rows = [
  { label: "OWNERSHIP",       franchise: "Operator only",              company: "Company only",       hound: "You — fractional" },
  { label: "ENTRY COST",      franchise: "20 lakhs",                   company: "35 lakhs",           hound: "₹5L minimum" },
  { label: "EXIT PATH",       franchise: "None structured",            company: "None",               hound: "Marketplace liquidity" },
  { label: "TRANSPARENCY",    franchise: "Minimal dashboard",          company: "Minimal dashboard",  hound: "Dedicated investor mobile application" },
  { label: "DIVERSIFICATION", franchise: "Single location",            company: "Single location",    hound: "Multi hub, multi project" },
  { label: "UTILISATION",     franchise: "Depends upon your location", company: "Single location",    hound: "Data backed location" },
];

export default function WhySection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section
      id="why"
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
          WHY HOUND CHARGE
        </motion.p>

        <motion.p
          className="heading-ls"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2rem, 4.1vw, 62px)",
            fontWeight:    300,
            letterSpacing: "-1.86px",
            lineHeight:    "1.24",
            margin:        0,
          }}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true }}
        >
          <span style={{ color: "white" }}>Not A Franchise. Not A Station. </span>
          <span style={{ color: GOLD }}>Not A Bet On One Location.</span>
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
          Compare every model available to an investor who wants exposure to EV charging infrastructure.
        </motion.p>
      </div>

      {/* ── Comparison table ─────────────────────────────────────────── */}
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <div style={{ minWidth: 600 }}>
          {/* Double-Bezel outer shell */}
          <motion.div
            className="relative"
            style={{
              borderRadius: 20,
              padding:      1.5,
              background:   "rgba(201,173,125,0.1)",
            }}
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            viewport={{ once: true }}
          >
            {/* Inner core */}
            <div
              style={{
                borderRadius: 19,
                overflow:     "hidden",
                background:   "#070707",
                boxShadow:    "inset 0 1px 1px rgba(255,255,255,0.04)",
              }}
            >

              {/* Column headers */}
              <div
                style={{
                  display:             "grid",
                  gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
                  borderBottom:        "1px solid rgba(201,173,125,0.1)",
                }}
              >
                <div style={{ padding: "20px 28px" }} />
                {["FRANCHISE", "COMPANY-OWNED"].map((col) => (
                  <div
                    key={col}
                    style={{
                      padding:       "20px 28px",
                      fontFamily:    "var(--font-space-grotesk), sans-serif",
                      fontSize:      10,
                      fontWeight:    400,
                      color:         "rgba(255,255,255,0.4)",
                      letterSpacing: "3px",
                      borderLeft:    "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {col}
                  </div>
                ))}
                {/* Hound Charge column header */}
                <div
                  style={{
                    padding:       "20px 28px",
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      10,
                    fontWeight:    400,
                    color:         GOLD,
                    letterSpacing: "3px",
                    borderLeft:    "1px solid rgba(201,173,125,0.2)",
                    background:    "rgba(201,173,125,0.04)",
                  }}
                >
                  HOUND CHARGE
                </div>
              </div>

              {/* Data rows */}
              {rows.map((row, i) => {
                const active = hoveredRow === i;
                return (
                  <motion.div
                    key={row.label}
                    style={{
                      display:             "grid",
                      gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
                      borderTop:           "1px solid rgba(255,255,255,0.05)",
                      background:          active ? "rgba(201,173,125,0.03)" : "transparent",
                      transition:          `background 450ms ${easeStr}`,
                      cursor:              "default",
                    }}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: EASE }}
                    viewport={{ once: true }}
                  >
                    {/* Label */}
                    <div
                      style={{
                        padding:       "22px 28px",
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      10,
                        fontWeight:    400,
                        color:         active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)",
                        letterSpacing: "2px",
                        display:       "flex",
                        alignItems:    "center",
                        transition:    `color 450ms ${easeStr}`,
                      }}
                    >
                      {row.label}
                    </div>

                    {/* Franchise */}
                    <div
                      style={{
                        padding:       "22px 28px",
                        fontFamily:    "var(--font-manrope), sans-serif",
                        fontSize:      14,
                        fontWeight:    400,
                        color:         active ? "rgba(253,255,234,0.6)" : "rgba(253,255,234,0.35)",
                        letterSpacing: "0.5px",
                        lineHeight:    "24px",
                        display:       "flex",
                        alignItems:    "center",
                        borderLeft:    "1px solid rgba(255,255,255,0.06)",
                        transition:    `color 450ms ${easeStr}`,
                      }}
                    >
                      {row.franchise}
                    </div>

                    {/* Company */}
                    <div
                      style={{
                        padding:       "22px 28px",
                        fontFamily:    "var(--font-manrope), sans-serif",
                        fontSize:      14,
                        fontWeight:    400,
                        color:         active ? "rgba(253,255,234,0.6)" : "rgba(253,255,234,0.35)",
                        letterSpacing: "0.5px",
                        lineHeight:    "24px",
                        display:       "flex",
                        alignItems:    "center",
                        borderLeft:    "1px solid rgba(255,255,255,0.06)",
                        transition:    `color 450ms ${easeStr}`,
                      }}
                    >
                      {row.company}
                    </div>

                    {/* Hound Charge — always gold */}
                    <div
                      style={{
                        padding:       "22px 28px",
                        fontFamily:    "var(--font-manrope), sans-serif",
                        fontSize:      14,
                        fontWeight:    400,
                        color:         GOLD,
                        letterSpacing: "0.5px",
                        lineHeight:    "24px",
                        display:       "flex",
                        alignItems:    "center",
                        gap:           10,
                        borderLeft:    "1px solid rgba(201,173,125,0.18)",
                        background:    active ? "rgba(201,173,125,0.07)" : "rgba(201,173,125,0.025)",
                        transition:    `background 450ms ${easeStr}`,
                      }}
                    >
                      <span
                        style={{
                          width:        5,
                          height:       5,
                          borderRadius: "50%",
                          background:   GOLD,
                          flexShrink:   0,
                          opacity:      active ? 1 : 0.55,
                          boxShadow:    active ? `0 0 8px ${GOLD}` : "none",
                          transition:   `opacity 450ms ${easeStr}, box-shadow 450ms ${easeStr}`,
                        }}
                      />
                      {row.hound}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
