"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const GOLD     = "#c9ad7d";
const VB_W     = 1512;          // exact Figma frame width
const VB_H     = 884;           // exact Figma frame height
const GLOW_LEN = 130;

// ─── Exact Figma path (from line node positions in the 1512×884 frame) ───────
// Line2: (712,0)→(452,368)   length ≈ 451px
// Line3: (452,368)→(608,382) length ≈ 157px  (short horizontal kink)
// Line4: (608,382)→(395,760) length ≈ 434px
// Total ≈ 1042px
const PATH_D =
  "M 712 0 " +
  "L 452 368 " +
  "L 608 382 " +
  "L 395 760";

// t values derived from cumulative segment lengths / total path length
// 2015 sits on Line2 at 26.5% of that segment → 0.265×451/1042 = 0.115
// 2020 is at the Line2/Line3 junction → 451/1042 = 0.433
// 2025 placed at mid-point of Line4        → (451+157+217)/1042 = 0.793
// 2030 placed near end of Line4            → (451+157+420)/1042 = 0.987
const MILESTONES: {
  year: string;
  desc: string;
  side: "left" | "right";
  t: number;
}[] = [
  { year: "2015", desc: "EVs are a niche.",                                     side: "right", t: 0.115 },
  { year: "2020", desc: "EV adoption begins.",                                  side: "left",  t: 0.433 },
  { year: "2025", desc: "Millions of EVs enter Indian roads.",                  side: "right", t: 0.793 },
  { year: "2030", desc: "Every major city depends on charging infrastructure.", side: "right", t: 0.970 },
];

// ── SVG dot — 2015 uses the larger 43px Figma dot, others 23px ───────────────

function SvgDot({ cx, cy, progress, threshold, large }: {
  cx: number; cy: number;
  progress: MotionValue<number>;
  threshold: number;
  large?: boolean;
}) {
  const opacity = useTransform(
    progress,
    [Math.max(0, threshold - 0.09), threshold, 1],
    [0, 1, 1],
  );
  return (
    <motion.circle
      cx={cx} cy={cy}
      r={large ? 20 : 11}
      fill={GOLD}
      filter={large ? "url(#dot-glow-large)" : "url(#dot-glow)"}
      style={{ opacity }}
    />
  );
}

// ── Milestone label ───────────────────────────────────────────────────────────
// Figma fonts:
//   year  — Manrope Regular 400, 32px, #c9ad7d
//   desc  — Manrope Light   300, 18px, white, tracking 0.18px
// 2020 label goes LEFT of its dot with right-aligned text (exact Figma layout)

function MilestoneLabel({ x, y, milestone, progress, threshold }: {
  x: number; y: number;
  milestone: (typeof MILESTONES)[0];
  progress: MotionValue<number>;
  threshold: number;
}) {
  const opacity = useTransform(
    progress,
    [Math.max(0, threshold - 0.09), threshold, 1],
    [0, 1, 1],
  );
  const ty = useTransform(progress, [Math.max(0, threshold - 0.09), threshold], [12, 0]);

  const xPct   = (x / VB_W) * 100;
  const yPct   = (y / VB_H) * 100;
  const isLeft = milestone.side === "left";

  // motion.div handles only opacity + y-lift animation.
  // A plain inner div owns the horizontal offset transform so the two
  // never conflict (Framer Motion overrides the CSS `transform` property
  // on the motion element itself when animating y).
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: `${xPct}%`, top: `${yPct}%`, opacity, y: ty }}
    >
      <div style={{
        transform: isLeft
          ? "translate(calc(-100% - 18px), -50%)"
          : "translate(18px, -50%)",
        textAlign: isLeft ? "right" : "left",
        maxWidth:  240,
      }}>
        {/* 32px Manrope Regular gold — exact Figma spec */}
        <p style={{
          fontFamily:   "var(--font-manrope), sans-serif",
          fontSize:     "clamp(1.25rem, 2.12vw, 32px)",
          fontWeight:   400,
          color:        GOLD,
          lineHeight:   1,
          marginBottom: 4,
        }}>
          {milestone.year}
        </p>
        {/* 18px Manrope Light white, tracking 0.18px — exact Figma spec */}
        <p style={{
          fontFamily:    "var(--font-manrope), sans-serif",
          fontSize:      "clamp(0.875rem, 1.19vw, 18px)",
          fontWeight:    300,
          color:         "white",
          letterSpacing: "0.18px",
          lineHeight:    1.4,
        }}>
          {milestone.desc}
        </p>
      </div>
    </motion.div>
  );
}

// ── "The Evolution" block ─────────────────────────────────────────────────────
// Figma: ml-[586px] mt-[350px] w-[571px] inside px-[177px] container
// Absolute canvas position: x=763px, y=350px  (1512×884 frame)
// Title: Manrope Regular 400, 72px, white, tracking -3.6px, line-height 77px
// Body:  Manrope Regular 400, 18px, #fdffea,  tracking 1px,  line-height 32px

function EvolutionBlock({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.12, 1], [0, 1, 1]);
  const ty      = useTransform(progress, [0, 0.12], [20, 0]);

  // Convert Figma px to percentages of the 1512×884 frame
  const leftPct  = (763 / VB_W) * 100;   // 50.46%
  const topPct   = (350 / VB_H) * 100;   // 39.61%
  const widthPct = (571 / VB_W) * 100;   // 37.77%

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left:   `${leftPct}%`,
        top:    `${topPct}%`,
        width:  `${widthPct}%`,
        opacity,
        y: ty,
      }}
    >
      {/* 62px Manrope Light, tracking -1.86px, line-height 77px */}
      <p style={{
        fontFamily:    "var(--font-manrope), sans-serif",
        fontSize:      "clamp(2rem, 4.1vw, 62px)",
        fontWeight:    300,
        color:         "white",
        letterSpacing: "-1.86px",
        lineHeight:    "1.24",
        marginBottom:  "19px",
      }}>
        The Evolution
      </p>
      {/* 16px Manrope Regular, tracking 1px, line-height 26px */}
      <p style={{
        fontFamily:    "var(--font-manrope), sans-serif",
        fontSize:      16,
        fontWeight:    400,
        color:         "#fdffea",
        letterSpacing: "1px",
        lineHeight:    "26px",
      }}>
        Every major shift creates a new layer of infrastructure. The EV
        revolution is creating demand for a vast charging network, opening a
        rare opportunity to invest in the foundation of tomorrow&apos;s mobility
        economy.
      </p>
    </motion.div>
  );
}

// ── Scroll hint ───────────────────────────────────────────────────────────────

function ScrollHint({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05], [1, 0]);
  return (
    <motion.div
      className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <p style={{
        fontFamily:    "var(--font-space-grotesk), sans-serif",
        fontSize:      "9px",
        color:         "rgba(255,255,255,0.2)",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
      }}>
        scroll
      </p>
      <motion.div
        className="w-px h-7 origin-top"
        style={{ background: `linear-gradient(to bottom, ${GOLD}88, transparent)` }}
        animate={{ scaleY: [1, 0.2, 1] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// ── Mobile milestone dot (inline SVG — 31×31 gold circle) ────────────────────

function MilestoneDot() {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="15.5" cy="15.5" r="5.5" fill={GOLD} />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef   = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(1042);
  const [pts,     setPts]     = useState<{ x: number; y: number }[]>([]);

  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ["start start", "end end"],
  });

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    setPathLen(len);
    setPts(
      MILESTONES.map((m) => {
        const pt = el.getPointAtLength(len * m.t);
        return { x: pt.x, y: pt.y };
      })
    );
  }, []);

  const drawOffset = useTransform(scrollYProgress, [0, 1], [pathLen, 0]);
  const headOffset = useTransform(scrollYProgress, [0, 1], [GLOW_LEN / 2, GLOW_LEN / 2 - pathLen]);

  return (
    <>
    {/* ── Desktop: scroll-driven lightning bolt animation ───────────────────── */}
    <div className="hidden md:block">
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* ── SVG canvas ──────────────────────────────────────────────── */}
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          <defs>
            {/* Crisp rail glow */}
            <filter id="rail-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Wide ambient halo */}
            <filter id="halo" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
            </filter>
            {/* Comet head bloom */}
            <filter id="head-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="b1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="8"  result="b2" />
              <feMerge>
                <feMergeNode in="b1" />
                <feMergeNode in="b2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Standard dot glow (23px nodes) */}
            <filter id="dot-glow" x="-300%" y="-300%" width="700%" height="700%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Large dot glow (43px node — 2015) */}
            <filter id="dot-glow-large" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Hidden path used only for measurement */}
          <path ref={measureRef} d={PATH_D} fill="none" stroke="none" />

          {/* Dim background rail (always visible, shows full route) */}
          <path
            d={PATH_D} fill="none"
            stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"
            strokeLinejoin="round" strokeLinecap="round"
          />

          {/* Soft ambient halo behind the drawing front */}
          <motion.path
            d={PATH_D} fill="none"
            stroke={GOLD} strokeWidth="14" strokeOpacity="0.10"
            strokeLinejoin="round" strokeLinecap="round"
            filter="url(#halo)"
            style={{ strokeDasharray: pathLen, strokeDashoffset: drawOffset }}
          />

          {/* Crisp gold rail — main line */}
          <motion.path
            d={PATH_D} fill="none"
            stroke={GOLD} strokeWidth="1.5"
            strokeLinejoin="round" strokeLinecap="round"
            filter="url(#rail-glow)"
            style={{ strokeDasharray: pathLen, strokeDashoffset: drawOffset }}
          />

          {/* Bright comet head */}
          <motion.path
            d={PATH_D} fill="none"
            stroke={GOLD} strokeWidth="5"
            strokeLinejoin="round" strokeLinecap="round"
            filter="url(#head-glow)"
            style={{
              strokeDasharray:  `${GLOW_LEN} ${pathLen}`,
              strokeDashoffset: headOffset,
            }}
          />

          {/* Vertical drop lines under each node */}
          {pts.map((pt, i) => (
            <line key={`vl-${i}`}
              x1={pt.x} y1={pt.y} x2={pt.x} y2={VB_H + 10}
              stroke="rgba(255,255,255,0.07)" strokeWidth="1"
            />
          ))}

          {/* Milestone dots */}
          {pts.map((pt, i) => (
            <SvgDot
              key={`d-${i}`}
              cx={pt.x} cy={pt.y}
              progress={scrollYProgress}
              threshold={MILESTONES[i].t}
              large={MILESTONES[i].year === "2015"}
            />
          ))}
        </svg>

        {/* ── HTML label overlay ──────────────────────────────────────── */}
        <div className="absolute inset-0">
          {pts.map((pt, i) => (
            <MilestoneLabel
              key={`l-${i}`}
              x={pt.x} y={pt.y}
              milestone={MILESTONES[i]}
              progress={scrollYProgress}
              threshold={MILESTONES[i].t}
            />
          ))}
        </div>

        {/* "The Evolution" text block — exact Figma position */}
        <EvolutionBlock progress={scrollYProgress} />

        <ScrollHint progress={scrollYProgress} />
      </div>
    </div>
    </div>

    {/* ── Mobile: static list layout ───────────────────────────────────────── */}
    <section className="block md:hidden bg-black px-[30px] pt-16 pb-20">
      {/* "The Evolution" block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-ls" style={{
          fontFamily:    "var(--font-manrope), sans-serif",
          fontSize:      32,
          fontWeight:    400,
          color:         "white",
          letterSpacing: "-1.6px",
          lineHeight:    "1.15",
          marginBottom:  16,
        }}>
          The Evolution
        </h2>
        <p style={{
          fontFamily:    "var(--font-manrope), sans-serif",
          fontSize:      14,
          fontWeight:    300,
          color:         "#fdffea",
          letterSpacing: "1px",
          lineHeight:    "25px",
          maxWidth:      318,
          marginBottom:  48,
        }}>
          Every major shift creates a new layer of infrastructure. The EV
          revolution is creating demand for a vast charging network, opening a
          rare opportunity to invest in the foundation of tomorrow&apos;s mobility
          economy.
        </p>
      </motion.div>

      {/* Milestone list */}
      <div className="flex flex-col gap-[52px]">
        {MILESTONES.map((m, i) => (
          <motion.div
            key={m.year}
            className="flex gap-[8px] items-start"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="shrink-0 mt-[2px]">
              <MilestoneDot />
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize:   18,
                fontWeight: 400,
                color:      GOLD,
                lineHeight: "1.2",
              }}>
                {m.year}
              </p>
              <p style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      14,
                fontWeight:    300,
                color:         "white",
                letterSpacing: "0.14px",
                lineHeight:    "1.5",
                marginTop:     2,
              }}>
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}
