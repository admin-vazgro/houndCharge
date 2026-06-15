"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";
const GOLD_WARM = "#dbb781";

// Figma frame: 1512×854px
// Layout: flex-row, gap=184px, items-center, justify-center
// Left: 606×606px dashboard screenshot image
// Right (66:60): flex-col gap=24px, items-start, justify-center
//   Text block (66:33): flex-col gap=8px
//     Label (66:29): Space Grotesk 400, 18px, #c9ad7d, tracking 1px, lh 32px
//     Content (66:10): flex-col gap=19px
//       Headline (66:11): Manrope 400, 62px, -3.1px, lh 77px, w=506px
//       Description (66:12): Manrope 400, 16px, #fdffea, tracking 1px, lh 26px
//   Bullet list (66:47): flex-col gap=16px
//     Each row: flex gap=13px items-center
//       Dot: 13×13px gold circle
//       Text: Manrope 400, 14px, #fdffea, tracking 1px, lh 24px

const features = [
  "Real-time utilisation & uptime per hub",
  "Revenue, payout and ROI dashboard",
  "Quarterly distributions & annual audited reports",
  "Multi-project portfolio view",
  "Priority allocation on new launches",
  "Secondary marketplace for buying/selling units",
];

export default function DashboardSection() {
  return (
    <section
      id="dashboard"
      className="bg-black overflow-hidden"
      style={{
        paddingTop:    "clamp(64px, 9.25vw, 140px)",
        paddingBottom: "clamp(64px, 9.25vw, 140px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-center"
        style={{ gap: "clamp(48px, 12.2vw, 184px)" }}
      >

        {/* ── Left: dashboard screenshot — Figma 606×606px ─────────── */}
        {/* order-last on mobile so text reads first; lg:order-first restores desktop position */}
        <motion.div
          className="relative shrink-0 overflow-hidden order-last lg:order-first"
          style={{
            width:  "clamp(280px, 40.1vw, 606px)",
            height: "clamp(280px, 40.1vw, 606px)",
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dashboard-mockup.png"
            alt="Hound Charge Investor Platform dashboard"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* ── Right (66:60): flex-col gap=24px ────────────────────── */}
        <div
          className="flex flex-col shrink-0 items-start justify-center"
          style={{ gap: 24 }}
        >

          {/* Text block (66:33): gap=8px between label and headline+desc */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>

            {/* Label (66:29) */}
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
              INVESTORS PLATFORM
            </motion.p>

            {/* Content block (66:10): gap=19px between headline and description */}
            <div style={{ display: "flex", flexDirection: "column", gap: 19 }}>

              {/* Headline (66:11): Manrope Regular 400, 62px, -3.1px, lh 77px, w=506px */}
              <motion.div
                className="heading-ls"
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      "clamp(2rem, 4.1vw, 62px)",
                  fontWeight:    400,
                  letterSpacing: "-3.1px",
                  lineHeight:    "1.24",
                  maxWidth:      506,
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p style={{ color: "white", margin: 0 }}>Total Transparency</p>
                <p style={{ margin: 0 }}>
                  <span style={{ color: "white" }}>From </span>
                  <span style={{ color: GOLD_WARM }}>Day One</span>
                </p>
              </motion.div>

              {/* Description (66:12): full parent width (506px driven by headline) */}
              <motion.p
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      16,
                  fontWeight:    400,
                  color:         "#fdffea",
                  letterSpacing: "1px",
                  lineHeight:    "26px",
                  maxWidth:      506,
                  margin:        0,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Every investor gets access to the Hound Charge Investor Platform — live performance data, revenue monitoring, and full portfolio visibility from the moment you invest.
              </motion.p>
            </div>
          </div>

          {/* Bullet list (66:47): flex-col gap=16px, each row: dot + text */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {features.map((f) => (
              <div
                key={f}
                style={{ display: "flex", gap: 13, alignItems: "center" }}
              >
                {/* 13×13px gold dot (Figma: Ellipse33 image) */}
                <div
                  style={{
                    width:        13,
                    height:       13,
                    borderRadius: "50%",
                    background:   GOLD,
                    flexShrink:   0,
                  }}
                />
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
                  {f}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
