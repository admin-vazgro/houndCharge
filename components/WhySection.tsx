"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

const rows = [
  { label: "OWNERSHIP",       franchise: "Operator only",            company: "Company only",       hound: "You — fractional" },
  { label: "ENTRY COST",      franchise: "20 lakhs",                 company: "35 lakhs",           hound: "₹5L minimum" },
  { label: "EXIT PATH",       franchise: "None structured",          company: "None",               hound: "Marketplace liquidity" },
  { label: "TRANSPARENCY",    franchise: "Minimal dashboard",        company: "Minimal dashboard",  hound: "Dedicated investor mobile application" },
  { label: "DIVERSIFICATION", franchise: "Single location",          company: "Single location",    hound: "Multi hub, multi project" },
  { label: "UTILISATION",     franchise: "Depends upon your location", company: "Single location", hound: "Data backed location" },
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
      {/* ── Label + Headline + Description ──────────────────────────── */}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          Compare every model available to an investor who wants exposure to EV charging infrastructure.
        </motion.p>
      </div>

      {/* ── Comparison table ─────────────────────────────────────────── */}
      {/* Horizontal scroll wrapper on mobile */}
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <div style={{ minWidth: 600 }}>
      <motion.div
        className="relative overflow-hidden"
        style={{
          borderRadius: 17,
          border:       "1px solid rgba(201,173,125,0.28)",
          background:   "#070707",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            borderBottom:        "1px solid rgba(201,173,125,0.15)",
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
                color:         "rgba(255,255,255,0.5)",
                letterSpacing: "3px",
                borderLeft:    "1px solid rgba(201,173,125,0.12)",
              }}
            >
              {col}
            </div>
          ))}
          {/* Hound Charge header — gold accent */}
          <div
            style={{
              padding:       "20px 28px",
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      10,
              fontWeight:    400,
              color:         GOLD,
              letterSpacing: "3px",
              borderLeft:    "1px solid rgba(201,173,125,0.28)",
              background:    "rgba(201,173,125,0.05)",
            }}
          >
            HOUND CHARGE
          </div>
        </div>

        {/* Data rows */}
        {rows.map((row, i) => {
          const isHovered = hoveredRow === i;
          return (
            <motion.div
              key={row.label}
              style={{
                display:             "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
                borderTop:           "1px solid rgba(201,173,125,0.1)",
                background:          isHovered ? "rgba(201,173,125,0.04)" : "transparent",
                transition:          "background 0.25s ease",
                cursor:              "default",
              }}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              viewport={{ once: true }}
            >
              {/* Row label */}
              <div
                style={{
                  padding:       "22px 28px",
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      10,
                  fontWeight:    400,
                  color:         isHovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.5)",
                  letterSpacing: "2px",
                  display:       "flex",
                  alignItems:    "center",
                  transition:    "color 0.25s ease",
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
                  color:         isHovered ? "rgba(253,255,234,0.65)" : "rgba(253,255,234,0.45)",
                  letterSpacing: "0.5px",
                  lineHeight:    "24px",
                  display:       "flex",
                  alignItems:    "center",
                  borderLeft:    "1px solid rgba(201,173,125,0.1)",
                  transition:    "color 0.25s ease",
                }}
              >
                {row.franchise}
              </div>

              {/* Company-Owned */}
              <div
                style={{
                  padding:       "22px 28px",
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      14,
                  fontWeight:    400,
                  color:         isHovered ? "rgba(253,255,234,0.65)" : "rgba(253,255,234,0.45)",
                  letterSpacing: "0.5px",
                  lineHeight:    "24px",
                  display:       "flex",
                  alignItems:    "center",
                  borderLeft:    "1px solid rgba(201,173,125,0.1)",
                  transition:    "color 0.25s ease",
                }}
              >
                {row.company}
              </div>

              {/* Hound Charge — always gold, brightens further on hover */}
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
                  borderLeft:    "1px solid rgba(201,173,125,0.28)",
                  background:    isHovered ? "rgba(201,173,125,0.08)" : "rgba(201,173,125,0.03)",
                  transition:    "background 0.25s ease",
                }}
              >
                <span
                  style={{
                    width:        5,
                    height:       5,
                    borderRadius: "50%",
                    background:   GOLD,
                    flexShrink:   0,
                    opacity:      isHovered ? 1 : 0.7,
                    transition:   "opacity 0.25s ease",
                  }}
                />
                {row.hound}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </div>
      </div>
    </section>
  );
}
