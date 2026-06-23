"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";
const EASE = [0.32, 0.72, 0, 1] as const;

export default function MissionSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:    "#000",
        paddingTop:    "clamp(80px, 13vw, 200px)",
        paddingBottom: "clamp(80px, 13vw, 200px)",
        paddingLeft:   "clamp(24px, 4vw, 64px)",
        paddingRight:  "clamp(24px, 4vw, 64px)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,173,125,0.07) 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-4xl mx-auto text-left md:text-center relative z-10">

        {/* Label */}
        <motion.p
          className="text-left md:text-center"
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      11,
            fontWeight:    400,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color:         GOLD,
            margin:        "0 0 clamp(20px, 2.5vw, 32px) 0",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
        >
          Get Started
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-left md:text-center"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2.5rem, 5.5vw, 5rem)",
            fontWeight:    300,
            color:         "white",
            letterSpacing: "-0.04em",
            lineHeight:    "1.1",
            margin:        "0 0 clamp(16px, 2vw, 24px) 0",
          }}
          initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.0, delay: 0.06, ease: EASE }}
          viewport={{ once: true }}
        >
          The Future Of Mobility<br />
          <span style={{ color: GOLD }}>Will Be Owned.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-left md:text-center"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(1rem, 1.4vw, 20px)",
            fontWeight:    400,
            color:         "rgba(255,255,255,0.45)",
            lineHeight:    "1.65",
            maxWidth:      480,
            margin:        "0 auto clamp(40px, 5vw, 64px) auto",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          viewport={{ once: true }}
        >
          The only question is whether you will own part of it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 justify-start md:justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: EASE }}
          viewport={{ once: true }}
        >
          {/* Primary — Button-in-Button */}
          <a
            href="mailto:invest@houndcharge.com"
            className="inline-flex items-center gap-2 group active:scale-[0.97]"
            style={{
              background:     GOLD,
              color:          "#000",
              fontFamily:     "var(--font-space-grotesk), sans-serif",
              fontSize:       11,
              fontWeight:     700,
              letterSpacing:  "0.12em",
              padding:        "0 8px 0 22px",
              height:         48,
              borderRadius:   9999,
              textDecoration: "none",
              transition:     `opacity 350ms cubic-bezier(0.32,0.72,0,1)`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Apply for Early Access
            <span
              className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
              style={{
                width:          32,
                height:         32,
                borderRadius:   "50%",
                background:     "rgba(0,0,0,0.14)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
                transition:     `transform 350ms cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Secondary */}
          <a
            href="mailto:invest@houndcharge.com"
            className="inline-flex items-center gap-2 group active:scale-[0.97]"
            style={{
              border:         "1px solid rgba(255,255,255,0.15)",
              color:          "rgba(255,255,255,0.75)",
              fontFamily:     "var(--font-space-grotesk), sans-serif",
              fontSize:       11,
              fontWeight:     600,
              letterSpacing:  "0.12em",
              padding:        "0 8px 0 22px",
              height:         48,
              borderRadius:   9999,
              textDecoration: "none",
              transition:     `border-color 350ms cubic-bezier(0.32,0.72,0,1), color 350ms cubic-bezier(0.32,0.72,0,1)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "rgba(255,255,255,1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
            }}
          >
            Download Investor Brief
            <span
              className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
              style={{
                width:          32,
                height:         32,
                borderRadius:   "50%",
                background:     "rgba(255,255,255,0.06)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
                transition:     `transform 350ms cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="text-left md:text-center"
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      10,
            fontWeight:    400,
            color:         "rgba(255,255,255,0.3)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop:     "clamp(32px, 4vw, 48px)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          viewport={{ once: true }}
        >
          Built for transparency · liquidity · scale
        </motion.p>
      </div>
    </section>
  );
}
