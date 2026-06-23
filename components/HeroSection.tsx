"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const EASE = [0.32, 0.72, 0, 1] as const;
const GOLD = "#c9ad7d";
const PLAYBACK_RATE = 0.55;

const avatars = [
  { bg: "#5B4E8B" },
  { bg: "#2C6E9E" },
  { bg: "#B56A35" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = PLAYBACK_RATE;
    const handleCanPlay = () => { video.playbackRate = PLAYBACK_RATE; };
    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>

      {/* ── Background video ─────────────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ animation: "slowZoom 28s ease-in-out infinite alternate" }}
      >
        <source src="/hero_v2.mp4" type="video/mp4" />
      </video>

      {/* Dark tint */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.18)" }} />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 48%, transparent 18%, rgba(0,0,0,0.52) 52%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Top + bottom crush */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 66%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-end md:justify-center flex-1"
        style={{
          paddingLeft:   "clamp(30px, 5.5vw, 84px)",
          paddingRight:  "clamp(30px, 5.5vw, 84px)",
          paddingTop:    "clamp(120px, 14vw, 200px)",
          paddingBottom: "clamp(60px, 8vw, 100px)",
        }}
      >

        {/* Eyebrow badge */}
        <motion.div
          style={{ marginBottom: "clamp(20px, 2.5vw, 32px)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:           8,
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      9,
              fontWeight:    400,
              letterSpacing: "0.22em",
              color:         GOLD,
              border:        "1px solid rgba(201,173,125,0.3)",
              borderRadius:  9999,
              padding:       "5px 12px 5px 8px",
              background:    "rgba(201,173,125,0.07)",
            }}
          >
            <span
              style={{
                width:        5,
                height:       5,
                borderRadius: "50%",
                background:   GOLD,
                boxShadow:    `0 0 8px ${GOLD}`,
                flexShrink:   0,
              }}
            />
            NOW ACCEPTING INVESTORS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="hidden md:block text-white font-normal"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2.8rem, 4.75vw, 72px)",
            fontWeight:    300,
            letterSpacing: "-0.05em",
            lineHeight:    "0.94",
            maxWidth:      720,
            margin:        0,
          }}
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.0, delay: 0.12, ease: EASE }}
        >
          {`Own The `}
          <span
            style={{
              color:      GOLD,
              fontFamily: "var(--font-playfair), serif",
              fontStyle:  "italic",
              fontWeight: 400,
              fontSize:   "clamp(3rem, 5.4vw, 82px)",
              letterSpacing: "-0.05em",
            }}
          >
            Infrastructure
          </span>
          {` Powering India's EV Future`}
        </motion.h1>

        {/* Mobile headline */}
        <motion.h1
          className="block md:hidden text-white font-normal"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2.2rem, 9vw, 3rem)",
            fontWeight:    300,
            letterSpacing: "-0.04em",
            lineHeight:    "1.05",
            margin:        0,
          }}
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.0, delay: 0.12, ease: EASE }}
        >
          Own India&apos;s first{" "}
          <span
            style={{
              color:      GOLD,
              fontFamily: "var(--font-playfair), serif",
              fontStyle:  "italic",
              fontWeight: 400,
            }}
          >
            Investable
          </span>{" "}
          EV Charging Asset Network
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(14px, 1.2vw, 16px)",
            fontWeight:    400,
            lineHeight:    "1.7",
            letterSpacing: "0.5px",
            color:         "rgba(253,255,234,0.75)",
            maxWidth:      440,
            margin:        "clamp(16px, 2vw, 24px) 0 0 0",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
        >
          Hound Charge turns high-speed charging infrastructure into a
          fractional, liquid asset class backed by real on-ground projects.
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ marginTop: "clamp(28px, 3.5vw, 40px)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.46, ease: EASE }}
        >
          <a
            href="#investor-form"
            className="inline-flex items-center gap-2.5 group active:scale-[0.97]"
            style={{
              background:     "#0a0a0a",
              color:          "white",
              fontFamily:     "var(--font-space-grotesk), sans-serif",
              fontSize:       11,
              fontWeight:     700,
              letterSpacing:  "0.1em",
              padding:        "0 6px 0 18px",
              height:         46,
              borderRadius:   9999,
              textDecoration: "none",
              border:         "1px solid rgba(255,255,255,0.08)",
              transition:     `all 400ms cubic-bezier(${EASE.join(",")})`,
              display:        "inline-flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            GET STARTED NOW
            <span
              className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-hover:scale-105"
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                width:          34,
                height:         34,
                borderRadius:   "50%",
                background:     "white",
                flexShrink:     0,
                transition:     `transform 350ms cubic-bezier(${EASE.join(",")})`,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Avatar row */}
        <motion.div
          className="flex items-center gap-4"
          style={{ marginTop: "clamp(20px, 2.8vw, 32px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
        >
          <div className="flex items-center">
            {avatars.map((a, i) => (
              <div
                key={i}
                style={{
                  width:        30,
                  height:       30,
                  borderRadius: "50%",
                  border:       "1.5px solid rgba(0,0,0,0.7)",
                  background:   a.bg,
                  marginLeft:   i === 0 ? 0 : -9,
                  position:     "relative",
                  zIndex:       avatars.length - i,
                  flexShrink:   0,
                }}
              />
            ))}
          </div>
          <p
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      12,
              fontWeight:    400,
              color:         "rgba(253,255,234,0.6)",
              letterSpacing: "0.5px",
              margin:        0,
              whiteSpace:    "nowrap",
            }}
          >
            100+ early investors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
