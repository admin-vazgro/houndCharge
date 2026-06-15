"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

// Figma section: 1512×933px
// Text block: left=139, top=87, w=847
// Cards: left=[139,557,975], top=502, w=398, h=344, gap=20

const problems = [
  {
    number: "01",
    title:  "No Exit Opportunity",
    desc:   "Traditional charging investments lock capital indefinitely. There is no structured path to liquidate — investors are stuck until the operator decides.",
  },
  {
    number: "02",
    title:  "High Entry Barrier",
    desc:   "Building even a single station demands crores in upfront capital and operational responsibility. This prices out most serious investors.",
  },
  {
    number: "03",
    title:  "Zero Transparency",
    desc:   "Investors receive no real-time visibility into utilisation, revenue, or on-ground performance. It's a black box from day one.",
  },
];

export default function ModelSection() {
  return (
    <section
      id="model"
      className="bg-black overflow-hidden"
      style={{
        // Figma: 87px top/bottom, 139px left/right
        paddingTop:    "clamp(64px, 9.25vw, 140px)",
        paddingBottom: "clamp(64px, 9.25vw, 140px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* ── Label + Headline + Description ──────────────────────────── */}
      {/* Figma: w=847px, gap=19px, top=87px                            */}
      <div
        style={{
          display:       "flex",
          flexDirection: "column",
          gap:           19,
          maxWidth:      987,
          // Gap from text bottom to cards: 402 - 87 - ~247px text = ~68px
          marginBottom:  "clamp(32px, 4.5vw, 68px)",
        }}
      >
        {/* THE PROBLEM — 18px Space Grotesk, gold, tracking 1px, lh 32px */}
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
          THE PROBLEM
        </motion.p>

        {/* Headline — 62px Manrope Light, white + gold split, tracking -1.24px, lh 71px */}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span style={{ color: "white" }}>Charging Infrastructure Exists. </span>
          <span style={{ color: "#dbb781" }}>Investment Opportunity Doesn&apos;t.</span>
        </motion.p>

        {/* Description — 16px Manrope, #fdffea, lh 26px, tracking 1px, w=774px */}
        <motion.p
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      16,
            fontWeight:    400,
            color:         "#fdffea",
            letterSpacing: "1px",
            lineHeight:    "26px",
            maxWidth:      774,
            margin:        0,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The EV charging boom is real. But the infrastructure for investors to
          meaningfully and safely participate? It doesn&apos;t exist yet.
        </motion.p>
      </div>

      {/* ── Problem cards ──────────────────────────────────────────── */}
      {/* Figma: w=398, h=344, gap=20, left=[139,557,975]              */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 20 }}
      >
        {problems.map((p, i) => (
          <motion.div
            key={p.number}
            className="relative overflow-hidden"
            style={{
              borderRadius: 17,
              minHeight:    344,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            {/* Rotating conic-gradient border glow */}
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
                animation:      `borderSpin ${4 + i * 0.8}s linear infinite`,
                animationDelay: `${i * -1.5}s`,
              }}
            />

            {/* Static dim border visible when glow has swept past */}
            <div
              style={{
                position:      "absolute",
                inset:         0,
                borderRadius:  17,
                border:        "1px solid rgba(201,173,125,0.15)",
                pointerEvents: "none",
              }}
            />

            {/* Inner background — 1px inset reveals glow at edge */}
            <div
              style={{
                position:     "absolute",
                inset:        1,
                borderRadius: 16,
                background:   "#070707",
              }}
            />

            {/* Card content */}
            <div
              style={{
                position: "relative",
                zIndex:   1,
                padding:  "43px 40px",
                height:   "100%",
              }}
            >
              {/* Red corner dot — Figma: left=360 in 398px card → right=25 */}
              <div
                className="absolute rounded-full"
                style={{
                  width:      13,
                  height:     13,
                  top:        43,
                  right:      25,
                  background: "rgba(255,55,55,0.85)",
                }}
              />

              {/* Number + gold separator line — Figma: w=86px, gap=17px */}
              <div
                style={{
                  display:       "flex",
                  flexDirection: "column",
                  gap:           17,
                  width:         86,
                  marginBottom:  35,
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
                <div
                  style={{
                    height:     1,
                    background: "rgba(201,173,125,0.5)",
                    width:      "100%",
                  }}
                />
              </div>

              {/* Title + description — Figma: gap=28px */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {/* 28px Manrope Light, white, lh 32px */}
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize:   28,
                    fontWeight: 300,
                    color:      "white",
                    lineHeight: "32px",
                    margin:     0,
                  }}
                >
                  {p.title}
                </p>
                {/* 14px Manrope, #fdffea, tracking 1px, lh 24px */}
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      14,
                    fontWeight:    400,
                    color:         "#fdffea",
                    letterSpacing: "1px",
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
