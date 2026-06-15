"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

// Figma stat widths: 255 / whitespace-nowrap+387 / 374
const stats = [
  { value: "5 Cr",     desc: "EVs on Indian roads by 2030",                    maxW: 255 },
  { value: "₹1.5L Cr", desc: "Charging infrastructure investment needed",       maxW: 387 },
  { value: "0",        desc: "Structured investors participation models today", maxW: 374 },
];

export default function VisionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.75;
    const onCanPlay = () => { v.playbackRate = 0.75; };
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section id="vision" className="bg-black relative">

      {/* ── Video block ───────────────────────────────────────────────
          Figma: container top=-31px, h=530px → visible height = 499px.
          We recreate this by making the container 499px tall with
          overflow:hidden, and positioning the video 31px above the top.
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: 499 }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-0 w-full object-cover object-center"
          style={{ top: -31, height: 530 }}
        >
          <source src="/opportunity.mp4" type="video/mp4" />
        </video>

        {/* Gradient: Figma top=400px (within 530px container, offset -31 → 431px from visible top).
            Translated to our 499px container: gradient starts at 400-31=369px from visible top. */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            top:        369,
            height:     165,
            background: "linear-gradient(to bottom, rgba(1,1,1,0) 6.6%, #000 50.3%)",
          }}
        />
      </div>

      {/* ── Content block ─────────────────────────────────────────────
          Figma: content top=565px from section top; video visible bottom=499px.
          Gap = 565 - 499 = 66px padding-top on the content area.
          Section total height = 1193px → bottom padding = 1193 - 565 - content_height.
          Using clamp for responsive bottom padding.
      ─────────────────────────────────────────────────────────────── */}
      <div
        className="bg-black"
        style={{
          paddingTop:    66,
          paddingBottom: "clamp(80px, 13vw, 196px)",
        }}
      >
        {/* Inner container: 1302px wide, 105px horizontal margins in 1512px frame */}
        <div
          className="mx-auto flex flex-col items-center"
          style={{
            maxWidth: 1302,
            padding:  "0 clamp(24px, 6.9vw, 105px)",
            gap:      80,
          }}
        >

          {/* ── Label + Headline + Description — centered ────────────── */}
          <div
            className="flex flex-col items-start md:items-center md:justify-center text-left md:text-center w-full"
            style={{ gap: 19 }}
          >
            {/* THE OPPORTUNITY — 18px Space Grotesk, gold, tracking 1px, lh 32px */}
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              THE OPPORTUNITY
            </motion.p>

            {/* Headline — 62px Manrope Light, white, tracking -1.86px, lh 77px */}
            <motion.div
              className="w-full heading-ls"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      "clamp(2rem, 4.1vw, 62px)",
                fontWeight:    300,
                color:         "white",
                letterSpacing: "-1.86px",
                lineHeight:    "1.24",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p style={{ margin: 0 }}>Every EV Needs Power.</p>
              <p style={{ margin: 0 }}>Someone Will Own The Network.</p>
            </motion.div>

            {/* Description — 16px Manrope, #fdffea, tracking 1px, lh 26px, w=882px */}
            <motion.p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      16,
                fontWeight:    400,
                color:         "#fdffea",
                letterSpacing: "1px",
                lineHeight:    "26px",
                maxWidth:      882,
                margin:        0,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              India&apos;s EV adoption is accelerating faster than infrastructure can
              keep up. As electric vehicles scale, charging becomes one of the
              most critical — and most underinvested — layers of the mobility
              economy.
            </motion.p>
          </div>

          {/* ── Stats row — centered, gap 84px ───────────────────────── */}
          {/* Figma: flex gap-[84px] items-center justify-center          */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center md:justify-center w-full"
            style={{ gap: "clamp(32px, 5.56vw, 84px)" }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                className="flex flex-col items-start"
                style={{ maxWidth: stat.maxW }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                {/* 72px Space Grotesk, gold, tracking -3.6px, lh 77px */}
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      "clamp(2.5rem, 4.76vw, 72px)",
                    fontWeight:    400,
                    color:         GOLD,
                    letterSpacing: "-3.6px",
                    lineHeight:    "1.24",
                    margin:        0,
                    whiteSpace:    "nowrap",
                  }}
                >
                  {stat.value}
                </p>
                {/* 14px Manrope, #fdffea, tracking 1px, lh 32px */}
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      14,
                    fontWeight:    400,
                    color:         "#fdffea",
                    letterSpacing: "1px",
                    lineHeight:    "32px",
                    margin:        0,
                  }}
                >
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
