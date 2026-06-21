"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#c9ad7d";

type FilterKey = "all" | "flagship" | "tourist" | "pilgrimage" | "highways" | "urban";

interface Project {
  id: number;
  name: string;
  category: string;
  coverage: string;
  status: "active" | "soon";
  locations: number;
  chargers: number;
  motive: string;
  group: FilterKey;
}

const PROJECTS: Project[] = [
  { id: 1,  name: "Hound Ares",        category: "Flagship",                    coverage: "Ernakulam Border Region",              status: "active", locations: 9,  chargers: 36, motive: "Flagship charging corridor at the Ernakulam border ensuring seamless intercity EV mobility and high charger availability.",    group: "flagship"   },
  { id: 2,  name: "Hound Hermes",      category: "Tourist Places – Phase 1",    coverage: "Thiruvananthapuram to Ernakulam",       status: "soon",   locations: 9,  chargers: 36, motive: "EV charging hubs across major tourist destinations in South Kerala.",                                                          group: "tourist"    },
  { id: 3,  name: "Hound Hades",       category: "Tourist Places – Phase 2",    coverage: "Thrissur to Kasaragod",                 status: "soon",   locations: 9,  chargers: 36, motive: "Tourism-focused EV infrastructure spanning North Kerala.",                                                                       group: "tourist"    },
  { id: 4,  name: "Hound Aphrodite",   category: "Hill Stations",               coverage: "Munnar, Wayanad, Vagamon & More",       status: "soon",   locations: 9,  chargers: 36, motive: "Reliable EV charging at Kerala's most scenic and remote hill destinations.",                                                    group: "tourist"    },
  { id: 5,  name: "Hound Zeus",        category: "Pilgrimage – Phase 1",        coverage: "Thiruvananthapuram to Ernakulam",       status: "soon",   locations: 9,  chargers: 36, motive: "Charging hubs supporting sustainable religious tourism across South Kerala.",                                                    group: "pilgrimage" },
  { id: 6,  name: "Hound Artemis",     category: "Pilgrimage – Phase 2",        coverage: "Thrissur to Kasaragod",                 status: "soon",   locations: 9,  chargers: 36, motive: "Statewide pilgrimage route EV coverage across North Kerala.",                                                                    group: "pilgrimage" },
  { id: 7,  name: "Hound Apollo",      category: "NH 66 – Phase 1",             coverage: "645 km Coastal Kerala",                 status: "soon",   locations: 10, chargers: 40, motive: "The backbone EV corridor along NH 66 with strategically placed charging hubs.",                                                  group: "highways"   },
  { id: 8,  name: "Hound Hera",        category: "NH 66 – Phase 2",             coverage: "NH 66",                                 status: "soon",   locations: 10, chargers: 40, motive: "Additional charging hubs positioned every 40 km for maximum reliability.",                                                        group: "highways"   },
  { id: 9,  name: "Hound Dionysus",    category: "NH 66 – Phase 3",             coverage: "High Density Corridor",                 status: "soon",   locations: 10, chargers: 40, motive: "High-density charging deployment eliminating dead zones along NH 66.",                                                           group: "highways"   },
  { id: 10, name: "Hound Athena",      category: "NH 66 – Phase 4",             coverage: "Full Corridor Completion",              status: "soon",   locations: 10, chargers: 40, motive: "Complete NH 66 corridor coverage across Kerala.",                                                                                  group: "highways"   },
  { id: 11, name: "Hound Demeter",     category: "NH 544",                      coverage: "160 km within Kerala",                  status: "soon",   locations: 8,  chargers: 32, motive: "High-speed interstate EV travel support across NH 544.",                                                                         group: "highways"   },
  { id: 12, name: "Hound Hephaestus", category: "NH 85",                       coverage: "168 km Commercial & Tourist Regions",   status: "soon",   locations: 8,  chargers: 32, motive: "Charging hubs linking commercial and tourist regions.",                                                                          group: "highways"   },
  { id: 13, name: "Hound Hestia",      category: "NH 183",                      coverage: "215 km Central & High Range Kerala",    status: "soon",   locations: 9,  chargers: 36, motive: "Extending EV accessibility into Central and High Range Kerala.",                                                                  group: "highways"   },
  { id: 14, name: "Hound Enodia",      category: "NH 183A",                     coverage: "117 km",                                status: "soon",   locations: 8,  chargers: 32, motive: "Reliable charging access across the NH 183A corridor.",                                                                          group: "highways"   },
  { id: 15, name: "Hound Eos",         category: "NH 766",                      coverage: "117 km Interstate",                     status: "soon",   locations: 8,  chargers: 32, motive: "Supporting smooth interstate EV travel.",                                                                                         group: "highways"   },
  { id: 16, name: "Hound Hypnos",      category: "NH 966",                      coverage: "125 km Economic Corridor",              status: "soon",   locations: 8,  chargers: 32, motive: "Connecting major economic centers through EV infrastructure.",                                                                   group: "highways"   },
  { id: 17, name: "Hound Taurus",      category: "NH 744",                      coverage: "81 km Cross-Border",                    status: "soon",   locations: 8,  chargers: 32, motive: "Enabling seamless movement between Kerala and neighboring states.",                                                               group: "highways"   },
  { id: 18, name: "Hound Gemini",      category: "NH 185",                      coverage: "96 km High Range",                      status: "soon",   locations: 8,  chargers: 32, motive: "Connecting remote highland communities to the charging network.",                                                                 group: "highways"   },
  { id: 19, name: "Hound Virgo",       category: "MC Road – SH 1",             coverage: "237 km Cross-Kerala Corridor",          status: "soon",   locations: 9,  chargers: 36, motive: "A parallel EV mobility corridor across Kerala.",                                                                                  group: "highways"   },
  { id: 20, name: "Hound Libra",       category: "SH 2",                        coverage: "Thiruvananthapuram to Thenmala",        status: "soon",   locations: 8,  chargers: 32, motive: "Opening eastern Kerala to reliable electric mobility.",                                                                           group: "highways"   },
  { id: 21, name: "Hound Scorpio",     category: "SH 8",                        coverage: "153 km Punalur to Muvattupuzha",        status: "soon",   locations: 8,  chargers: 32, motive: "Continuous charging coverage along SH 8.",                                                                                       group: "highways"   },
  { id: 22, name: "Hound Sagittarius", category: "SH 16",                       coverage: "114 km Aluva to Munnar",                status: "soon",   locations: 8,  chargers: 32, motive: "Supporting tourism and hill travel.",                                                                                             group: "highways"   },
  { id: 23, name: "Hound Capricorn",   category: "SH 19",                       coverage: "106 km Munnar to Kumali",               status: "soon",   locations: 8,  chargers: 32, motive: "Strengthening eco-friendly tourism connectivity.",                                                                                group: "highways"   },
  { id: 24, name: "Hound Aquarius",    category: "SH 29",                       coverage: "100 km Kozhikode to Gudalur",           status: "soon",   locations: 8,  chargers: 32, motive: "Connecting North Kerala to the Nilgiri highlands.",                                                                              group: "highways"   },
  { id: 25, name: "Hound Pisces",      category: "SH 39",                       coverage: "110 km Perumbilavu to Nilambur",        status: "soon",   locations: 8,  chargers: 32, motive: "Strengthening regional EV connectivity in central Malabar.",                                                                     group: "highways"   },
  { id: 26, name: "Hound Leo",         category: "SH 44 – Pilgrimage",          coverage: "150 km Sabarimala to Neriyamangalam",   status: "soon",   locations: 8,  chargers: 32, motive: "Supporting pilgrimage and tourism travel.",                                                                                       group: "pilgrimage" },
  { id: 27, name: "Hound Alpha",       category: "Kerala–Tamil Nadu Border",    coverage: "Kerala–Tamil Nadu",                     status: "soon",   locations: 9,  chargers: 36, motive: "Seamless EV travel across major border crossings.",                                                                              group: "urban"      },
  { id: 28, name: "Hound Beta",        category: "Kerala–Karnataka Border",     coverage: "Kerala–Karnataka",                      status: "soon",   locations: 9,  chargers: 36, motive: "Cross-state electric mobility infrastructure.",                                                                                   group: "urban"      },
  { id: 29, name: "Hound Gamma",       category: "Major Towns",                 coverage: "Urban Network across Kerala",           status: "soon",   locations: 10, chargers: 40, motive: "City-level EV charging hubs across Kerala.",                                                                                     group: "urban"      },
  { id: 30, name: "Hound Poseidon",    category: "Beach Destinations",          coverage: "Coastal Kerala",                        status: "soon",   locations: 9,  chargers: 36, motive: "Charging infrastructure for Kerala's beach tourism network.",                                                                    group: "tourist"    },
];

// Totals: 261 locations, 1044 chargers
const TOTALS = { projects: 30, locations: 261, chargers: 1044 };

const FILTERS: { key: FilterKey; label: string; count: number }[] = [
  { key: "all",        label: "ALL",             count: 30 },
  { key: "flagship",   label: "FLAGSHIP",        count: 1  },
  { key: "tourist",    label: "TOURIST & HILL",  count: 4  },
  { key: "pilgrimage", label: "PILGRIMAGE",      count: 3  },
  { key: "highways",   label: "HIGHWAYS",        count: 19 },
  { key: "urban",      label: "URBAN & BORDER",  count: 3  },
];

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const pipeline = useMemo(
    () => PROJECTS.filter(p => p.id > 1 && (filter === "all" || filter === p.group)),
    [filter]
  );

  const ares = PROJECTS[0];

  return (
    <section
      id="projects"
      className="bg-black overflow-hidden"
      style={{
        paddingTop:    "clamp(64px, 9.25vw, 140px)",
        paddingBottom: "clamp(64px, 9.25vw, 140px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between"
        style={{ gap: "clamp(24px, 3vw, 40px)", marginBottom: "clamp(40px, 5.5vw, 80px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      18,
              fontWeight:    400,
              color:         GOLD,
              letterSpacing: "1px",
              lineHeight:    "32px",
              margin:        "0 0 14px 0",
            }}
          >
            THE PROJECTS
          </p>
          <h2
            className="heading-ls"
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      "clamp(2rem, 4.1vw, 62px)",
              fontWeight:    300,
              letterSpacing: "-1.86px",
              lineHeight:    "1.18",
              margin:        0,
            }}
          >
            <span style={{ color: "white" }}>30 Projects. </span>
            <span style={{ color: GOLD }}>One Mission.</span>
          </h2>
        </motion.div>

        {/* Portfolio totals */}
        <motion.div
          className="flex gap-8 md:gap-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { val: TOTALS.projects,  label: "Projects"  },
            { val: TOTALS.locations, label: "Locations" },
            { val: TOTALS.chargers,  label: "Chargers"  },
          ].map(({ val, label }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      "clamp(1.5rem, 2.6vw, 40px)",
                  fontWeight:    400,
                  color:         GOLD,
                  letterSpacing: "-1.5px",
                  lineHeight:    1,
                  margin:        "0 0 4px 0",
                }}
              >
                {val}
              </p>
              <p
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      10,
                  fontWeight:    300,
                  color:         "rgba(255,255,255,0.35)",
                  letterSpacing: "2px",
                  margin:        0,
                  textTransform: "uppercase",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Ares hero card ─────────────────────────────────────────────── */}
      <motion.div
        className="relative overflow-hidden"
        style={{ borderRadius: 17, marginBottom: "clamp(40px, 5.5vw, 80px)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Conic spin glow */}
        <div
          aria-hidden
          style={{
            position:   "absolute",
            inset:      -160,
            background: `conic-gradient(
              from 0deg,
              transparent 0%,
              transparent 70%,
              rgba(201,173,125,0.9) 84%,
              rgba(201,173,125,0.35) 92%,
              transparent 100%
            )`,
            animation: "borderSpin 5.5s linear infinite",
          }}
        />
        <div aria-hidden style={{ position: "absolute", inset: 0, borderRadius: 17, border: "1px solid rgba(201,173,125,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 1, borderRadius: 16, background: "#070707" }} />

        <div
          className="relative flex flex-col lg:flex-row"
          style={{ zIndex: 1, padding: "clamp(32px, 3.5vw, 52px) clamp(28px, 3vw, 48px)", gap: "clamp(32px, 4vw, 64px)" }}
        >
          {/* Left */}
          <div className="flex-1">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: GOLD, flexShrink: 0, boxShadow: `0 0 10px ${GOLD}` }} />
              <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 10, fontWeight: 400, color: GOLD, letterSpacing: "3px", margin: 0 }}>
                ACTIVE — ACCEPTING INVESTMENT
              </p>
            </div>

            <h3
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      "clamp(2rem, 4vw, 58px)",
                fontWeight:    300,
                letterSpacing: "-1.5px",
                lineHeight:    "1.1",
                color:         "white",
                margin:        "0 0 10px 0",
              }}
            >
              {ares.name}
            </h3>
            <p
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      11,
                fontWeight:    400,
                color:         "rgba(255,255,255,0.4)",
                letterSpacing: "2px",
                margin:        "0 0 20px 0",
                textTransform: "uppercase",
              }}
            >
              {ares.category}
            </p>
            <p
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      15,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.6)",
                letterSpacing: "0.5px",
                lineHeight:    "24px",
                maxWidth:      480,
                margin:        "0 0 28px 0",
              }}
            >
              {ares.motive}
            </p>

            {/* Coverage */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgba(255,255,255,0.4)" />
              </svg>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px", margin: 0 }}>
                {ares.coverage}
              </p>
            </div>
          </div>

          {/* Right: stats + CTA */}
          <div className="flex flex-row lg:flex-col items-start lg:items-end justify-between lg:justify-center" style={{ gap: 28, flexShrink: 0 }}>
            <div className="flex gap-8 lg:gap-12">
              {[
                { val: ares.locations, label: "LOCATIONS" },
                { val: ares.chargers,  label: "CHARGERS"  },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col lg:items-end">
                  <p
                    style={{
                      fontFamily:    "var(--font-space-grotesk), sans-serif",
                      fontSize:      "clamp(2rem, 3.3vw, 52px)",
                      fontWeight:    400,
                      color:         GOLD,
                      letterSpacing: "-2px",
                      lineHeight:    1,
                      margin:        "0 0 4px 0",
                    }}
                  >
                    {val}
                  </p>
                  <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 9, fontWeight: 300, color: "rgba(255,255,255,0.35)", letterSpacing: "2px", margin: 0 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#investor-form"
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            10,
                background:     GOLD,
                color:          "#000",
                fontFamily:     "var(--font-space-grotesk), sans-serif",
                fontSize:       11,
                fontWeight:     700,
                letterSpacing:  "0.12em",
                padding:        "0 20px 0 24px",
                height:         44,
                borderRadius:   "9999px",
                textDecoration: "none",
                whiteSpace:     "nowrap",
              }}
              className="hover:opacity-85 transition-opacity"
            >
              INVEST NOW
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Pipeline ────────────────────────────────────────────────────── */}
      <div>
        {/* Sub-header */}
        <motion.div
          style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      13,
              fontWeight:    400,
              color:         "rgba(255,255,255,0.35)",
              letterSpacing: "2px",
              margin:        "0 0 20px 0",
              textTransform: "uppercase",
            }}
          >
            The Pipeline
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      10,
                    fontWeight:    400,
                    letterSpacing: "1.5px",
                    padding:       "7px 14px",
                    borderRadius:  "9999px",
                    border:        active ? `1px solid rgba(201,173,125,0.6)` : "1px solid rgba(255,255,255,0.12)",
                    background:    active ? "rgba(201,173,125,0.1)" : "transparent",
                    color:         active ? GOLD : "rgba(255,255,255,0.4)",
                    cursor:        "pointer",
                    transition:    "all 0.2s ease",
                    display:       "flex",
                    alignItems:    "center",
                    gap:           6,
                  }}
                >
                  {f.label}
                  <span
                    style={{
                      fontFamily:    "var(--font-space-grotesk), sans-serif",
                      fontSize:      9,
                      color:         active ? "rgba(201,173,125,0.7)" : "rgba(255,255,255,0.2)",
                      letterSpacing: "0",
                    }}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Table */}
        <AnimatePresence mode="wait">
          {filter === "flagship" ? (
            <motion.p
              key="flagship-empty"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      14,
                fontWeight:    400,
                color:         "rgba(255,255,255,0.3)",
                letterSpacing: "1px",
                lineHeight:    "24px",
                padding:       "32px 0",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Hound Ares is our inaugural live project — shown above. The full pipeline opens for investment as each project launches.
            </motion.p>
          ) : (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Table container with horizontal scroll on mobile */}
              <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                <div style={{ minWidth: 580 }}>
                  <div
                    style={{
                      borderRadius: 14,
                      border:       "1px solid rgba(201,173,125,0.18)",
                      background:   "#070707",
                      overflow:     "hidden",
                    }}
                  >
                    {/* Table header */}
                    <div
                      style={{
                        display:             "grid",
                        gridTemplateColumns: "44px 1fr 1fr 60px 60px 100px",
                        borderBottom:        "1px solid rgba(201,173,125,0.12)",
                        padding:             "0 24px",
                      }}
                    >
                      {["#", "PROJECT", "COVERAGE", "LOC", "CHG", "STATUS"].map((h, i) => (
                        <div
                          key={h}
                          style={{
                            padding:       "14px 0",
                            paddingRight:  i < 5 ? 16 : 0,
                            fontFamily:    "var(--font-space-grotesk), sans-serif",
                            fontSize:      9,
                            fontWeight:    400,
                            color:         "rgba(255,255,255,0.3)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            textAlign:     i >= 3 && i < 5 ? "right" : "left",
                          }}
                        >
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Table rows */}
                    {pipeline.map((p, i) => {
                      const hovered = hoveredRow === p.id;
                      return (
                        <motion.div
                          key={p.id}
                          onMouseEnter={() => setHoveredRow(p.id)}
                          onMouseLeave={() => setHoveredRow(null)}
                          style={{
                            display:             "grid",
                            gridTemplateColumns: "44px 1fr 1fr 60px 60px 100px",
                            padding:             "0 24px",
                            borderTop:           "1px solid rgba(255,255,255,0.045)",
                            background:          hovered ? "rgba(201,173,125,0.03)" : "transparent",
                            transition:          "background 0.2s ease",
                            cursor:              "default",
                          }}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: i * 0.025 }}
                        >
                          {/* Number */}
                          <div style={{ padding: "16px 0", display: "flex", alignItems: "center" }}>
                            <p
                              style={{
                                fontFamily:    "var(--font-space-grotesk), sans-serif",
                                fontSize:      12,
                                fontWeight:    400,
                                color:         hovered ? "rgba(201,173,125,0.7)" : "rgba(201,173,125,0.3)",
                                letterSpacing: "1px",
                                margin:        0,
                                transition:    "color 0.2s ease",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {pad(p.id)}
                            </p>
                          </div>

                          {/* Project name + category */}
                          <div style={{ padding: "16px 16px 16px 0", display: "flex", flexDirection: "column", gap: 3, justifyContent: "center" }}>
                            <p
                              style={{
                                fontFamily:    "var(--font-manrope), sans-serif",
                                fontSize:      14,
                                fontWeight:    400,
                                color:         hovered ? "#fdffea" : "rgba(253,255,234,0.7)",
                                letterSpacing: "0.25px",
                                lineHeight:    1.2,
                                margin:        0,
                                transition:    "color 0.2s ease",
                              }}
                            >
                              {p.name}
                            </p>
                            <p
                              style={{
                                fontFamily:    "var(--font-space-grotesk), sans-serif",
                                fontSize:      10,
                                fontWeight:    400,
                                color:         "rgba(255,255,255,0.25)",
                                letterSpacing: "0.5px",
                                margin:        0,
                              }}
                            >
                              {p.category}
                            </p>
                          </div>

                          {/* Coverage */}
                          <div style={{ padding: "16px 16px 16px 0", display: "flex", alignItems: "center" }}>
                            <p
                              style={{
                                fontFamily:    "var(--font-manrope), sans-serif",
                                fontSize:      12,
                                fontWeight:    400,
                                color:         "rgba(253,255,234,0.35)",
                                letterSpacing: "0.25px",
                                lineHeight:    "18px",
                                margin:        0,
                              }}
                            >
                              {p.coverage}
                            </p>
                          </div>

                          {/* Locations */}
                          <div style={{ padding: "16px 16px 16px 0", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <p
                              style={{
                                fontFamily:    "var(--font-space-grotesk), sans-serif",
                                fontSize:      14,
                                fontWeight:    400,
                                color:         hovered ? "rgba(201,173,125,0.85)" : "rgba(201,173,125,0.5)",
                                letterSpacing: "0.5px",
                                margin:        0,
                                transition:    "color 0.2s ease",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {p.locations}
                            </p>
                          </div>

                          {/* Chargers */}
                          <div style={{ padding: "16px 16px 16px 0", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <p
                              style={{
                                fontFamily:    "var(--font-space-grotesk), sans-serif",
                                fontSize:      14,
                                fontWeight:    400,
                                color:         hovered ? "rgba(201,173,125,0.85)" : "rgba(201,173,125,0.5)",
                                letterSpacing: "0.5px",
                                margin:        0,
                                transition:    "color 0.2s ease",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {p.chargers}
                            </p>
                          </div>

                          {/* Status */}
                          <div style={{ padding: "16px 0", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <span
                              style={{
                                fontFamily:    "var(--font-space-grotesk), sans-serif",
                                fontSize:      9,
                                fontWeight:    400,
                                letterSpacing: "1.5px",
                                padding:       "4px 10px",
                                borderRadius:  20,
                                color:         "rgba(255,255,255,0.3)",
                                border:        "1px solid rgba(255,255,255,0.1)",
                                whiteSpace:    "nowrap",
                              }}
                            >
                              COMING SOON
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Row count */}
              {pipeline.length > 0 && (
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      10,
                    fontWeight:    400,
                    color:         "rgba(255,255,255,0.18)",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    margin:        "16px 0 0 0",
                    textAlign:     "right",
                  }}
                >
                  {pipeline.length} project{pipeline.length !== 1 ? "s" : ""} in pipeline
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
