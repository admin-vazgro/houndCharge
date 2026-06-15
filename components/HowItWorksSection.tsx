"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

// Figma frame: 1512×1018px
// Section padding: 87px top/bottom (5.75vw), 139px left/right (9.2vw)
// Content area: 1234px wide × 844px tall
//
// Left column:  left=139 → 843px  (704px wide = 57% of 1234px)
// Right column: left=843 → 1373px (530px wide)
//
// Text block: top=87px from section top
//   label 32px + gap 8 + headline 149px + gap 8 + desc ~52px ≈ 249px total
//   Text ends ≈ 336px from section top
//
// Steps: top=362px from section top → 275px from content top (362−87)
//
// Video: left column below text, from ~336px to 931px (section bottom − 87px padding)
//   height ≈ 595px, width = 704px
//
// Connector line heights (Figma exact):
//   01→02: 61px  (top=418, bottom=479)
//   02→03: 73px  (top=531, bottom=604)
//   03→04: 62px  (top=660, bottom=722)
//   04→05: 70px  (top=774, bottom=844)

const steps = [
  {
    number: "01",
    title:  "Choose a Project",
    desc:   "Invest in professionally selected EV charging infrastructure projects across strategic geographies.",
    lineH:  61,
  },
  {
    number: "02",
    title:  "Own Fractional Shares",
    desc:   "Start with a minimum of ₹5,00,000 and own a real, documented stake in physical charging infrastructure.",
    lineH:  73,
  },
  {
    number: "03",
    title:  "Track Performance",
    desc:   "Monitor real-time revenue, utilisation rates, and returns from the Hound Charge investor dashboard.",
    lineH:  62,
  },
  {
    number: "04",
    title:  "Grow Your Portfolio",
    desc:   "Existing investors get priority access and early-access pricing on every new project launch.",
    lineH:  70,
  },
  {
    number: "05",
    title:  "Exit Through Marketplace",
    desc:   "Buy, sell, or reallocate project shares through the secondary investor marketplace — on your timeline.",
    lineH:  0,
  },
];

export default function HowItWorksSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.7;
    const onCanPlay = () => { v.playbackRate = 0.7; };
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section
      id="how-it-works"
      className="bg-black overflow-hidden"
      style={{
        paddingTop:    "clamp(64px, 9.25vw, 140px)",
        paddingBottom: "clamp(64px, 9.25vw, 140px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* Content area: 844px tall at 1512px (1018 − 87 − 87) */}
      <div
        className="flex flex-col md:flex-row"
        style={{ minHeight: "clamp(400px, 55.8vw, 844px)" }}
      >

        {/* ── Left column: text + video ──────────────────────────────────
            704px wide = 57% of 1234px content area                      */}
        <div
          className="flex flex-col"
          style={{ flex: "0 0 57%", paddingRight: "clamp(16px, 2.6vw, 40px)" }}
        >
          {/* Text block — gap 8px between all three elements */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>

            {/* HOW IT WORKS — 18px Space Grotesk, gold, tracking 1px, lh 32px */}
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
              HOW IT WORKS
            </motion.p>

            {/* Headline — Manrope Light 62px tracking -1.24px lh 71px, h=149px */}
            <motion.div
              className="heading-ls"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      "clamp(2rem, 4.1vw, 62px)",
                fontWeight:    300,
                letterSpacing: "-1.24px",
                lineHeight:    "1.2",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p style={{ color: "white", margin: 0 }}>Infrastructure</p>
              <p style={{ margin: 0 }}>
                <span style={{ color: "white" }}>Investing, </span>
                <span style={{ color: GOLD }}>Simplified</span>
              </p>
            </motion.div>

            {/* Description — Manrope 16px #fdffea lh 26px tracking 1px */}
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
              The EV charging boom is real. But the infrastructure for investors
              to meaningfully and safely participate? It doesn&apos;t exist yet.
            </motion.p>
          </div>

          {/* ── Video ────────────────────────────────────────────────────
              Figma: left col, from text bottom (~336px) to section
              bottom − padding (~931px) = 595px tall, 704px wide.
              flex:1 fills remaining height in the 844px container.      */}
          <motion.div
            className="relative overflow-hidden"
            style={{
              marginTop:    "clamp(16px, 1.7vw, 26px)",
              height:       "clamp(240px, 38vw, 560px)",
              borderRadius: 12,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-contain object-center"
            >
              <source src="/infra.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
              }}
            />
          </motion.div>
        </div>

        {/* ── Right column: steps ────────────────────────────────────────
            Steps start at top=362px from section top.
            From content top: 362 − 87 = 275px → paddingTop clamp        */}
        <div
          className="flex-1 mt-12 md:mt-0"
          style={{ paddingTop: "clamp(0px, 18.25vw, 275px)" }}
        >
          {steps.map((step, i) => {
            const isLast = step.lineH === 0;
            return (
              <motion.div
                key={step.number}
                style={{ display: "flex", gap: 13, alignItems: "flex-start" }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Badge + vertical connector line
                    Badge: 50px wide, border 0.5px gold, radius 30, padding 10px
                    Line: exact Figma heights — 61 / 73 / 62 / 70px
                    Row height = max(badge+line, content) → spacing is
                    driven purely by the badge-col, no paddingBottom needed */}
                <div
                  style={{
                    flexShrink:    0,
                    width:         50,
                    display:       "flex",
                    flexDirection: "column",
                    alignItems:    "center",
                  }}
                >
                  <div
                    style={{
                      border:         "0.5px solid #c9ad7d",
                      borderRadius:   30,
                      width:          50,
                      padding:        "10px 0",
                      display:        "flex",
                      justifyContent: "center",
                      alignItems:     "center",
                      flexShrink:     0,
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
                      {step.number}
                    </p>
                  </div>

                  {!isLast && (
                    <div
                      style={{
                        width:      1,
                        height:     step.lineH,
                        flexShrink: 0,
                        background: "linear-gradient(to bottom, rgba(201,173,125,0.45), rgba(201,173,125,0.06))",
                      }}
                    />
                  )}
                </div>

                {/* Step content — small paddingTop to align title with badge mid */}
                <div
                  style={{
                    display:       "flex",
                    flexDirection: "column",
                    gap:           4,
                    paddingTop:    8,
                  }}
                >
                  {/* Title — Manrope Light 20px gold lh 32px */}
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize:   20,
                      fontWeight: 300,
                      color:      GOLD,
                      lineHeight: "32px",
                      margin:     0,
                    }}
                  >
                    {step.title}
                  </p>
                  {/* Desc — Manrope 14px #fdffea tracking 1px lh 24px w=458px */}
                  <p
                    style={{
                      fontFamily:    "var(--font-manrope), sans-serif",
                      fontSize:      14,
                      fontWeight:    400,
                      color:         "#fdffea",
                      letterSpacing: "1px",
                      lineHeight:    "24px",
                      maxWidth:      458,
                      margin:        0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
