"use client";

import { useEffect, useRef } from "react";

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
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background video — slow Ken Burns zoom */}
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

      {/* Base dark tint — matches Figma's rgba(0,0,0,0.13) layer */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.13)" }} />

      {/* Cinematic vignette — heavy black at all edges/corners, matches Figma screenshot */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 48%, transparent 22%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Extra top & bottom crush for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 22%, transparent 68%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pl-[30px] md:pl-[79px] pr-[30px] md:pr-8 pt-28 pb-16">

        {/* Mobile headline */}
        <h1
          className="block md:hidden text-white font-normal"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "38px",
            letterSpacing: "-1.9px",
            lineHeight: "1.05",
            maxWidth: 257,
          }}
        >
          Own India&apos;s first{" "}
          <span
            style={{
              color: "#c9ad7d",
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Investable
          </span>{" "}
          EV Charging asset Network
        </h1>

        {/* Desktop headline */}
        <h1
          className="hidden md:block text-white font-normal leading-[0.94]"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(2.8rem, 4.75vw, 72px)",
            letterSpacing: "-0.05em",
            maxWidth: 720,
          }}
        >
          {`Own The `}
          <span
            style={{
              color: "#c9ad7d",
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3rem, 5.4vw, 82px)",
              letterSpacing: "-0.05em",
            }}
          >
            Infrastructure
          </span>
          {` Powering India's EV Future`}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 text-[#fdffea]"
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      16,
            lineHeight:    "26px",
            letterSpacing: "1px",
            maxWidth:      454,
          }}
        >
          Hound Charge turns high-speed charging infrastructure into a
          fractional, liquid asset class backed by real on-ground projects.
        </p>

        {/* CTA button */}
        <div className="mt-8">
          <button
            className="flex items-center gap-2.5 bg-black text-white pl-4 pr-2 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            <span className="text-[12px] font-bold tracking-[0.08em]">
              GET STARTED NOW
            </span>
            <span className="flex items-center justify-center w-[39px] h-[39px] bg-white rounded-full overflow-hidden">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Avatar row */}
        <div className="mt-6 flex items-center gap-5">
          <div className="flex items-center">
            {avatars.map((a, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black"
                style={{
                  background: a.bg,
                  marginLeft: i === 0 ? 0 : -10,
                  position: "relative",
                  zIndex: avatars.length - i,
                }}
              />
            ))}
          </div>
          <p
            className="text-[#fdffea] text-[12px] md:text-base whitespace-nowrap"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              letterSpacing: "1px",
            }}
          >
            100+ early investors
          </p>
        </div>
      </div>
    </section>
  );
}
