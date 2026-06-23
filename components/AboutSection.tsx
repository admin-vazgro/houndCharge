"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";
const EASE = [0.32, 0.72, 0, 1] as const;

export default function AboutSection() {
  return (
    <section id="about" className="bg-black overflow-hidden">

      {/* ── About Hound Charge ──────────────────────────────────────── */}
      <div
        style={{
          paddingTop:    "clamp(80px, 10vw, 152px)",
          paddingBottom: "clamp(64px, 8vw, 120px)",
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
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
            margin:        "0 0 clamp(24px, 3vw, 48px) 0",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
        >
          ABOUT HOUND CHARGE
        </motion.p>

        <div className="flex flex-col lg:flex-row" style={{ gap: "clamp(40px, 6vw, 96px)" }}>
          {/* Left: opening statement */}
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: EASE }}
            viewport={{ once: true }}
          >
            <h2
              className="heading-ls"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      "clamp(2.4rem, 5.5vw, 82px)",
                fontWeight:    300,
                letterSpacing: "-2.5px",
                lineHeight:    "1.05",
                color:         "white",
                margin:        0,
                textWrap:      "balance",
              } as React.CSSProperties}
            >
              India is{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontStyle:  "italic",
                  fontWeight: 400,
                  color:      GOLD,
                }}
              >
                charging
              </span>{" "}
              forward.
            </h2>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      "clamp(1.1rem, 2.1vw, 32px)",
                fontWeight:    300,
                color:         "rgba(255,255,255,0.42)",
                letterSpacing: "-0.5px",
                lineHeight:    "1.35",
                marginTop:     "clamp(12px, 1.5vw, 22px)",
                marginBottom:  0,
              }}
            >
              And we&apos;re building what powers it.
            </p>
          </motion.div>

          {/* Right: description paragraphs */}
          <motion.div
            className="lg:flex-1 flex flex-col"
            style={{ gap: 20, maxWidth: 560 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "#fdffea",
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              The electric revolution isn&apos;t coming, it&apos;s already here. And at the heart of it is a question that determines everything: where do you charge?
            </p>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.6)",
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              Without an answer, the revolution stalls. Without infrastructure, ambition has nowhere to go.
            </p>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.6)",
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              Hound Charge exists to answer that question permanently. We are the EV charging infrastructure arm of Hound Mobility, engineered to fuel India&apos;s electric transition with charging solutions that are reliable, scalable, and built for what&apos;s coming next.
            </p>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         GOLD,
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              Not just for today&apos;s EVs. For the millions that are on their way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gold divider */}
      <motion.div
        style={{
          marginLeft:  "clamp(24px, 9.2vw, 139px)",
          marginRight: "clamp(24px, 9.2vw, 139px)",
          height:      1,
          background:  "linear-gradient(to right, rgba(201,173,125,0.55), rgba(201,173,125,0.08))",
        }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.0, ease: EASE }}
        viewport={{ once: true }}
      />

      {/* ── About Hound Mobility ────────────────────────────────────── */}
      <div
        style={{
          paddingTop:    "clamp(64px, 8vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 152px)",
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
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
            margin:        "0 0 clamp(24px, 3vw, 48px) 0",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
        >
          ABOUT HOUND MOBILITY
        </motion.p>

        <div className="flex flex-col lg:flex-row" style={{ gap: "clamp(40px, 6vw, 96px)" }}>

          {/* Left: headline + tagline */}
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: EASE }}
            viewport={{ once: true }}
          >
            <h2
              className="heading-ls"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      "clamp(2rem, 4.1vw, 62px)",
                fontWeight:    300,
                letterSpacing: "-1.86px",
                lineHeight:    "1.18",
                color:         "white",
                margin:        "0 0 clamp(20px, 2.5vw, 36px) 0",
                textWrap:      "balance",
              } as React.CSSProperties}
            >
              India didn&apos;t need another mobility company.{" "}
              <span style={{ color: GOLD }}>It needed a revolution.</span>
            </h2>

            {/* Tagline card */}
            <div
              style={{
                borderTop:   "1px solid rgba(201,173,125,0.22)",
                paddingTop:  "clamp(16px, 2vw, 28px)",
                marginTop:   "clamp(16px, 2vw, 28px)",
              }}
            >
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      10,
                  fontWeight:    400,
                  color:         "rgba(255,255,255,0.28)",
                  letterSpacing: "3px",
                  margin:        "0 0 8px 0",
                  textTransform: "uppercase",
                }}
              >
                HOUND MOBILITY
              </p>
              <p
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      "clamp(1rem, 1.6vw, 24px)",
                  fontWeight:    400,
                  color:         GOLD,
                  letterSpacing: "0.5px",
                  lineHeight:    "1.4",
                  margin:        0,
                }}
              >
                Driving the Future. Charging the Nation.
              </p>
            </div>
          </motion.div>

          {/* Right: description */}
          <motion.div
            className="lg:flex-1 flex flex-col"
            style={{ gap: 20, maxWidth: 560 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "#fdffea",
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              A revolution to reduce emissions and redefine how millions move. Through intelligent EV fleets, advanced mobility technology, and a growing charging network — Hound Mobility is building a cleaner, smarter India.
            </p>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.6)",
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              By 2030, we&apos;re deploying 1,000 electric cars and 500 electric buses, while Hound Charge ensures charging is never a barrier to adoption.
            </p>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.6)",
                letterSpacing: "1px",
                lineHeight:    "26px",
                margin:        0,
              }}
            >
              Every ride replaces pollution with progress. Every kilometer moves India closer to a zero-emission future. More than a company, Hound Mobility is driving India&apos;s commercial EV revolution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
