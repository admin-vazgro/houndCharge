"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const GOLD = "#c9ad7d";

// Figma frame: 1512×654px
// Layout: centered flex-col, gap=32px, items-center
// Label → headline+desc block (gap=19px) → stats row (gap=102px)
// All text center-aligned

const stats = [
  { value: 13,  suffix: "",   label: "STRATEGIC LOCATIONS", labelColor: "#c3c3c3" },
  { value: 65,  suffix: "",   label: "FAST CHARGERS",       labelColor: "#e0e0e0" },
  { value: 5,   suffix: "",   label: "CHARGERS PER HUB",    labelColor: "#e0e0e0" },
  { value: 120, suffix: "kW", label: "MIN CAPACITY",        labelColor: "#e0e0e0" },
];

function AnimatedCounter({ value, suffix, inView, delay }: {
  value: number;
  suffix: string;
  inView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      const duration = 1600;
      const startTime = performance.now();
      const frame = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, value, delay]);

  return <>{count}{suffix}</>;
}

export default function InvestSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="invest"
      className="bg-black overflow-hidden relative"
      style={{
        paddingTop:    "clamp(80px, 10vw, 152px)",
        paddingBottom: "clamp(80px, 10vw, 152px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* Subtle radial glow — centred behind the whole section */}
      <div
        aria-hidden
        style={{
          position:   "absolute",
          inset:      0,
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,173,125,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content — flex-col gap=32px centered */}
      <div
        className="items-start md:items-center"
        style={{
          position:      "relative",
          display:       "flex",
          flexDirection: "column",
          gap:           32,
        }}
      >

        {/* Label — Space Grotesk 400, 18px, gold, tracking 1px, lh 32px */}
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PROJECT ARES
        </motion.p>

        {/* Headline + description — gap=19px */}
        <div
          style={{
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            19,
          }}
        >
          {/* Headline — Manrope 400, 62px, -3.1px, lh 77px */}
          <motion.p
            className="text-left md:text-center heading-ls"
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      "clamp(2rem, 4.1vw, 62px)",
              fontWeight:    400,
              letterSpacing: "-3.1px",
              lineHeight:    "1.24",
              margin:        0,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <span style={{ color: "white" }}>Introducing Project </span>
            <span style={{ color: GOLD }}>Ares</span>
          </motion.p>

          {/* Description — Manrope 400, 16px, #fdffea, lh 26px, w=746px */}
          <motion.p
            className="text-left md:text-center"
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      16,
              fontWeight:    400,
              color:         "#fdffea",
              letterSpacing: "1px",
              lineHeight:    "26px",
              maxWidth:      746,
              margin:        0,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A strategic high-speed EV charging ring around Ernakulam&apos;s major entry corridors — capturing inbound EV traffic before it enters the city.
          </motion.p>
        </div>

        {/* Gold divider */}
        <motion.div
          style={{
            width:      "clamp(200px, 20vw, 320px)",
            height:     1,
            background: "linear-gradient(to right, transparent, rgba(201,173,125,0.5), transparent)",
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Stats row — gap=102px, items-end */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "clamp(28px, 6.75vw, 102px)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: 22 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Value — Space Grotesk 400, 62px, gold, h=66px */}
              <p
                style={{
                  fontFamily:  "var(--font-space-grotesk), sans-serif",
                  fontSize:    "clamp(2.5rem, 4.1vw, 62px)",
                  fontWeight:  400,
                  color:       GOLD,
                  lineHeight:  "66px",
                  margin:      0,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={statsInView}
                  delay={i * 120}
                />
              </p>
              {/* Label — Space Grotesk Light 300, 16px, tracking 1px */}
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      16,
                  fontWeight:    300,
                  color:         stat.labelColor,
                  letterSpacing: "1px",
                  margin:        0,
                  whiteSpace:    "nowrap",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
