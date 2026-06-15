"use client";

import { motion } from "framer-motion";

const GOLD     = "#c9ad7d";
const GOLD_ALT = "#d5b281";

// Figma node 70:97 — frame 1512×712px, bg-black, relative
//
// Two absolute layers:
//
// 1. Text block (70:106): left=0 top=60px w=1512px
//      flex-col gap=14px items-center
//      Label / Headline / Subtitle (all centered)
//
// 2. Image (70:93): left=0 top=257px h=455px w=1512px
//      img inside: h=221.69% top=-97.87% (overflow-hidden clip)
//      Image 1536×1024 rendered at 1512px wide → ~1009px tall
//      Visible crop: y=445→900 of 1009px → objectPosition "center 80%"
//
// top ratios at 1512×712:
//   text  → 60/712  = 8.4%
//   image → 257/712 = 36.1%  (fills exactly to bottom: 257+455=712)

export default function EmotionalSection() {
  return (
    <section
      id="vision"
      style={{
        position:   "relative",
        width:      "100%",
        height:     "clamp(460px, 47.1vw, 712px)",
        background: "black",
        overflow:   "hidden",
      }}
    >
      {/* ── Text block — absolute top=60px, full width, centered ─────── */}
      <motion.div
        className="items-start md:items-center px-6 md:px-0"
        style={{
          position:      "absolute",
          left:          0,
          right:         0,
          top:           "clamp(32px, 3.97vw, 60px)",
          display:       "flex",
          flexDirection: "column",
          gap:           14,
          zIndex:        1,
        }}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Label — Space Grotesk 400, 18px, #c9ad7d, tracking 1px, lh 32px */}
        <p
          className="text-left md:text-center"
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      18,
            fontWeight:    400,
            color:         GOLD,
            letterSpacing: "1px",
            lineHeight:    "32px",
            margin:        0,
          }}
        >
          OUR VISION
        </p>

        {/* Headline — Manrope 400, 62px, tracking -3.1px, lh 77px */}
        <p
          className="text-left md:text-center heading-ls"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(1.6rem, 4.1vw, 62px)",
            fontWeight:    400,
            letterSpacing: "-3.1px",
            lineHeight:    "1.24",
            margin:        0,
          }}
        >
          <span style={{ color: "white" }}>Imagine Owning A Piece Of Every </span>
          <span style={{ color: GOLD_ALT }}>Electric Journey</span>
        </p>

        {/* Subtitle — Manrope 400, 16px, tracking 1px */}
        <p
          className="text-left md:text-center"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      16,
            fontWeight:    400,
            letterSpacing: "1px",
            lineHeight:    "26px",
            margin:        0,
          }}
        >
          <span style={{ color: "#fdffea" }}>
            Every taxi . Every delivery. Every commute . Every road trip .{" "}
          </span>
          <span style={{ color: GOLD }}>Every electric mile</span>
        </p>
      </motion.div>

      {/* ── Hero image — absolute top=257px (36.1%), h=455px (63.9%) ─── */}
      {/* Rendered at full width. 1536×1024 image → ~1009px at 1512w.    */}
      {/* objectPosition 80% shows y=445→900 of 1009px (Figma crop).     */}
      <motion.div
        style={{
          position: "absolute",
          left:     0,
          right:    0,
          top:      "36.1%",
          bottom:   0,
          overflow: "hidden",
          zIndex:   2,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.15 }}
        viewport={{ once: true }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vision-hero.png"
          alt=""
          style={{
            width:          "100%",
            height:         "100%",
            objectFit:      "cover",
            objectPosition: "center 80%",
            display:        "block",
          }}
        />
      </motion.div>
    </section>
  );
}
