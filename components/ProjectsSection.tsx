"use client";

import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

interface Project {
  id: number;
  name: string;
  shortName: string;
  category: string;
  coverage: string;
  status: "active" | "soon";
  locations: number;
  chargers: number;
  motive: string;
  group: string;
}

const PROJECTS: Project[] = [
  { id: 1,  name: "Hound Ares",        shortName: "Ares",        category: "Flagship",                    coverage: "Ernakulam Border Region",              status: "active", locations: 12, chargers: 80, motive: "Flagship charging corridor at the Ernakulam border ensuring seamless intercity EV mobility and high charger availability.",  group: "flagship"   },
  { id: 2,  name: "Hound Hermes",      shortName: "Hermes",      category: "Tourist – Phase 1",           coverage: "Thiruvananthapuram to Ernakulam",       status: "soon",   locations: 9,  chargers: 36, motive: "EV charging hubs across major tourist destinations in South Kerala.",                                                      group: "tourist"    },
  { id: 3,  name: "Hound Hades",       shortName: "Hades",       category: "Tourist – Phase 2",           coverage: "Thrissur to Kasaragod",                 status: "soon",   locations: 9,  chargers: 36, motive: "Tourism-focused EV infrastructure spanning North Kerala.",                                                                 group: "tourist"    },
  { id: 4,  name: "Hound Aphrodite",   shortName: "Aphrodite",   category: "Hill Stations",               coverage: "Munnar, Wayanad, Vagamon & More",       status: "soon",   locations: 9,  chargers: 36, motive: "Reliable EV charging at Kerala's most scenic and remote hill destinations.",                                             group: "tourist"    },
  { id: 5,  name: "Hound Zeus",        shortName: "Zeus",        category: "Pilgrimage – Phase 1",        coverage: "Thiruvananthapuram to Ernakulam",       status: "soon",   locations: 9,  chargers: 36, motive: "Charging hubs supporting sustainable religious tourism across South Kerala.",                                            group: "pilgrimage" },
  { id: 6,  name: "Hound Artemis",     shortName: "Artemis",     category: "Pilgrimage – Phase 2",        coverage: "Thrissur to Kasaragod",                 status: "soon",   locations: 9,  chargers: 36, motive: "Statewide pilgrimage route EV coverage across North Kerala.",                                                            group: "pilgrimage" },
  { id: 7,  name: "Hound Apollo",      shortName: "Apollo",      category: "NH 66 – Phase 1",             coverage: "645 km Coastal Kerala",                 status: "soon",   locations: 10, chargers: 40, motive: "The backbone EV corridor along NH 66 with strategically placed charging hubs.",                                          group: "highways"   },
  { id: 8,  name: "Hound Hera",        shortName: "Hera",        category: "NH 66 – Phase 2",             coverage: "NH 66",                                 status: "soon",   locations: 10, chargers: 40, motive: "Additional charging hubs positioned every 40 km for maximum reliability.",                                               group: "highways"   },
  { id: 9,  name: "Hound Dionysus",    shortName: "Dionysus",    category: "NH 66 – Phase 3",             coverage: "High Density Corridor",                 status: "soon",   locations: 10, chargers: 40, motive: "High-density charging deployment eliminating dead zones along NH 66.",                                                  group: "highways"   },
  { id: 10, name: "Hound Athena",      shortName: "Athena",      category: "NH 66 – Phase 4",             coverage: "Full Corridor Completion",              status: "soon",   locations: 10, chargers: 40, motive: "Complete NH 66 corridor coverage across Kerala.",                                                                        group: "highways"   },
  { id: 11, name: "Hound Demeter",     shortName: "Demeter",     category: "NH 544",                      coverage: "160 km within Kerala",                  status: "soon",   locations: 8,  chargers: 32, motive: "High-speed interstate EV travel support across NH 544.",                                                                 group: "highways"   },
  { id: 12, name: "Hound Hephaestus", shortName: "Hephaestus", category: "NH 85",                       coverage: "168 km Commercial & Tourist",           status: "soon",   locations: 8,  chargers: 32, motive: "Charging hubs linking commercial and tourist regions.",                                                                  group: "highways"   },
  { id: 13, name: "Hound Hestia",      shortName: "Hestia",      category: "NH 183",                      coverage: "215 km Central & High Range",           status: "soon",   locations: 9,  chargers: 36, motive: "Extending EV accessibility into Central and High Range Kerala.",                                                         group: "highways"   },
  { id: 14, name: "Hound Enodia",      shortName: "Enodia",      category: "NH 183A",                     coverage: "117 km",                                status: "soon",   locations: 8,  chargers: 32, motive: "Reliable charging access across the NH 183A corridor.",                                                                  group: "highways"   },
  { id: 15, name: "Hound Eos",         shortName: "Eos",         category: "NH 766",                      coverage: "117 km Interstate",                     status: "soon",   locations: 8,  chargers: 32, motive: "Supporting smooth interstate EV travel.",                                                                               group: "highways"   },
  { id: 16, name: "Hound Hypnos",      shortName: "Hypnos",      category: "NH 966",                      coverage: "125 km Economic Corridor",              status: "soon",   locations: 8,  chargers: 32, motive: "Connecting major economic centers through EV infrastructure.",                                                          group: "highways"   },
  { id: 17, name: "Hound Taurus",      shortName: "Taurus",      category: "NH 744",                      coverage: "81 km Cross-Border",                    status: "soon",   locations: 8,  chargers: 32, motive: "Enabling seamless movement between Kerala and neighboring states.",                                                     group: "highways"   },
  { id: 18, name: "Hound Gemini",      shortName: "Gemini",      category: "NH 185",                      coverage: "96 km High Range",                      status: "soon",   locations: 8,  chargers: 32, motive: "Connecting remote highland communities to the charging network.",                                                       group: "highways"   },
  { id: 19, name: "Hound Virgo",       shortName: "Virgo",       category: "MC Road – SH 1",             coverage: "237 km Cross-Kerala",                   status: "soon",   locations: 9,  chargers: 36, motive: "A parallel EV mobility corridor across Kerala.",                                                                        group: "highways"   },
  { id: 20, name: "Hound Libra",       shortName: "Libra",       category: "SH 2",                        coverage: "Thiruvananthapuram to Thenmala",        status: "soon",   locations: 8,  chargers: 32, motive: "Opening eastern Kerala to reliable electric mobility.",                                                                 group: "highways"   },
  { id: 21, name: "Hound Scorpio",     shortName: "Scorpio",     category: "SH 8",                        coverage: "153 km Punalur to Muvattupuzha",        status: "soon",   locations: 8,  chargers: 32, motive: "Continuous charging coverage along SH 8.",                                                                            group: "highways"   },
  { id: 22, name: "Hound Sagittarius", shortName: "Sagittarius", category: "SH 16",                       coverage: "114 km Aluva to Munnar",                status: "soon",   locations: 8,  chargers: 32, motive: "Supporting tourism and hill travel.",                                                                                   group: "highways"   },
  { id: 23, name: "Hound Capricorn",   shortName: "Capricorn",   category: "SH 19",                       coverage: "106 km Munnar to Kumali",               status: "soon",   locations: 8,  chargers: 32, motive: "Strengthening eco-friendly tourism connectivity.",                                                                     group: "highways"   },
  { id: 24, name: "Hound Aquarius",    shortName: "Aquarius",    category: "SH 29",                       coverage: "100 km Kozhikode to Gudalur",           status: "soon",   locations: 8,  chargers: 32, motive: "Connecting North Kerala to the Nilgiri highlands.",                                                                   group: "highways"   },
  { id: 25, name: "Hound Pisces",      shortName: "Pisces",      category: "SH 39",                       coverage: "110 km Perumbilavu to Nilambur",        status: "soon",   locations: 8,  chargers: 32, motive: "Strengthening regional EV connectivity in central Malabar.",                                                          group: "highways"   },
  { id: 26, name: "Hound Leo",         shortName: "Leo",         category: "SH 44 – Pilgrimage",          coverage: "150 km Sabarimala to Neriyamangalam",   status: "soon",   locations: 8,  chargers: 32, motive: "Supporting pilgrimage and tourism travel.",                                                                            group: "pilgrimage" },
  { id: 27, name: "Hound Alpha",       shortName: "Alpha",       category: "Kerala–Tamil Nadu Border",    coverage: "Kerala–Tamil Nadu",                     status: "soon",   locations: 9,  chargers: 36, motive: "Seamless EV travel across major border crossings.",                                                                   group: "urban"      },
  { id: 28, name: "Hound Beta",        shortName: "Beta",        category: "Kerala–Karnataka Border",     coverage: "Kerala–Karnataka",                      status: "soon",   locations: 9,  chargers: 36, motive: "Cross-state electric mobility infrastructure.",                                                                        group: "urban"      },
  { id: 29, name: "Hound Gamma",       shortName: "Gamma",       category: "Major Towns",                 coverage: "Urban Network across Kerala",           status: "soon",   locations: 10, chargers: 40, motive: "City-level EV charging hubs across Kerala.",                                                                          group: "urban"      },
  { id: 30, name: "Hound Poseidon",    shortName: "Poseidon",    category: "Beach Destinations",          coverage: "Coastal Kerala",                        status: "soon",   locations: 9,  chargers: 36, motive: "Charging infrastructure for Kerala's beach tourism network.",                                                         group: "tourist"    },
];

const CATEGORIES = [
  {
    label: "Tourist & Hill",
    count: 4,
    desc: "South & North Kerala · Hill stations · Coastal",
    names: ["Hermes", "Hades", "Aphrodite", "Poseidon"],
  },
  {
    label: "Pilgrimage",
    count: 3,
    desc: "South Kerala · Sabarimala · North corridor",
    names: ["Zeus", "Artemis", "Leo"],
  },
  {
    label: "Highways",
    count: 19,
    desc: "NH 66 complete · 8 National · 7 State highways",
    names: ["Apollo", "Hera", "Dionysus", "Athena", "+15"],
  },
  {
    label: "Urban & Border",
    count: 3,
    desc: "Major towns · KL–TN · KL–KA crossings",
    names: ["Alpha", "Beta", "Gamma"],
  },
];

// Split pipeline into two marquee rows
const ARES = PROJECTS[0];
const ROW1 = PROJECTS.slice(1, 16);   // 15 items
const ROW2 = PROJECTS.slice(16);       // 14 items

function MarqueePill({ p }: { p: Project }) {
  const n = String(p.id).padStart(2, "0");
  return (
    <div
      style={{
        display:       "inline-flex",
        alignItems:    "center",
        gap:           10,
        flexShrink:    0,
        border:        "1px solid rgba(201,173,125,0.16)",
        borderRadius:  "9999px",
        padding:       "8px 18px 8px 14px",
        background:    "rgba(201,173,125,0.035)",
      }}
    >
      <span
        style={{
          fontFamily:    "var(--font-space-grotesk), sans-serif",
          fontSize:      10,
          fontWeight:    400,
          color:         "rgba(201,173,125,0.75)",
          letterSpacing: "1px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n}
      </span>
      <span
        style={{
          fontFamily:    "var(--font-manrope), sans-serif",
          fontSize:      13,
          fontWeight:    400,
          color:         "rgba(253,255,234,0.9)",
          letterSpacing: "0.25px",
          whiteSpace:    "nowrap",
        }}
      >
        {p.name}
      </span>
      <span
        style={{
          width:        1,
          height:       10,
          background:   "rgba(255,255,255,0.1)",
          flexShrink:   0,
        }}
      />
      <span
        style={{
          fontFamily:    "var(--font-space-grotesk), sans-serif",
          fontSize:      9,
          fontWeight:    400,
          color:         "rgba(255,255,255,0.5)",
          letterSpacing: "1px",
          whiteSpace:    "nowrap",
        }}
      >
        {p.category.toUpperCase()}
      </span>
    </div>
  );
}

export default function ProjectsSection() {
  const totals = { projects: "100+", locations: "1000+", chargers: "5000+" };

  return (
    <section
      id="projects"
      className="bg-black overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 9.25vw, 140px)",
      }}
    >
      {/* ── Header ────────────────────────────────────────────────────── */}
      <div
        style={{
          paddingLeft:  "clamp(24px, 9.2vw, 139px)",
          paddingRight: "clamp(24px, 9.2vw, 139px)",
          marginBottom: "clamp(40px, 5.5vw, 80px)",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 28 }}>
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
              <span style={{ color: "white" }}>100+ Projects. </span>
              <span style={{ color: GOLD }}>One Mission.</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex gap-8 md:gap-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { val: totals.projects,  unit: "Projects"  },
              { val: totals.locations, unit: "Locations" },
              { val: totals.chargers,  unit: "Chargers"  },
            ].map(({ val, unit }) => (
              <div key={unit}>
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
                    color:         "rgba(255,255,255,0.55)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    margin:        0,
                  }}
                >
                  {unit}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Ares hero card ──────────────────────────────────────────────── */}
      <div style={{ paddingLeft: "clamp(24px, 9.2vw, 139px)", paddingRight: "clamp(24px, 9.2vw, 139px)", marginBottom: "clamp(40px, 5.5vw, 72px)" }}>
        <motion.div
          className="relative overflow-hidden"
          style={{ borderRadius: 17 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div aria-hidden style={{ position: "absolute", inset: -160, background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(201,173,125,0.9) 84%, rgba(201,173,125,0.3) 92%, transparent 100%)`, animation: "borderSpin 5.5s linear infinite" }} />
          <div aria-hidden style={{ position: "absolute", inset: 0, borderRadius: 17, border: "1px solid rgba(201,173,125,0.14)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 1, borderRadius: 16, background: "#070707" }} />

          <div
            className="relative flex flex-col lg:flex-row items-start lg:items-center"
            style={{ zIndex: 1, padding: "clamp(28px, 3vw, 44px) clamp(24px, 3vw, 44px)", gap: "clamp(28px, 4vw, 56px)" }}
          >
            {/* Left */}
            <div className="flex-1">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, flexShrink: 0, boxShadow: `0 0 10px ${GOLD}` }} />
                <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 9, letterSpacing: "3px", color: GOLD, margin: 0 }}>
                  ACTIVE · ACCEPTING INVESTMENT
                </p>
              </div>
              <h3
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      "clamp(1.75rem, 3.5vw, 52px)",
                  fontWeight:    300,
                  letterSpacing: "-1.2px",
                  lineHeight:    "1.1",
                  color:         "white",
                  margin:        "0 0 8px 0",
                }}
              >
                {ARES.name}
              </h3>
              <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "2px", margin: "0 0 16px 0", textTransform: "uppercase" }}>
                {ARES.category} · {ARES.coverage}
              </p>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 14, color: "rgba(253,255,234,0.5)", letterSpacing: "0.5px", lineHeight: "22px", maxWidth: 440, margin: 0 }}>
                {ARES.motive}
              </p>
            </div>

            {/* Right: stats + CTA */}
            <div className="flex items-center gap-8 lg:gap-10 lg:flex-shrink-0">
              {[{ val: ARES.locations, label: "LOCATIONS" }, { val: ARES.chargers, label: "CHARGERS" }].map(({ val, label }) => (
                <div key={label} className="flex flex-col">
                  <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.75rem, 3vw, 46px)", fontWeight: 400, color: GOLD, letterSpacing: "-1.5px", lineHeight: 1, margin: "0 0 4px 0" }}>
                    {val}
                  </p>
                  <p style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "2px", margin: 0 }}>
                    {label}
                  </p>
                </div>
              ))}
              <a
                href="#investor-form"
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            8,
                  background:     GOLD,
                  color:          "#000",
                  fontFamily:     "var(--font-space-grotesk), sans-serif",
                  fontSize:       10,
                  fontWeight:     700,
                  letterSpacing:  "0.12em",
                  padding:        "0 16px 0 20px",
                  height:         40,
                  borderRadius:   "9999px",
                  textDecoration: "none",
                  whiteSpace:     "nowrap",
                  flexShrink:     0,
                }}
                className="hover:opacity-85 transition-opacity"
              >
                INVEST NOW
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Pipeline ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Category index */}
        <div
          style={{
            paddingLeft:  "clamp(24px, 9.2vw, 139px)",
            paddingRight: "clamp(24px, 9.2vw, 139px)",
            marginBottom: "clamp(28px, 3.5vw, 48px)",
          }}
        >
          <p
            style={{
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      10,
              fontWeight:    400,
              color:         "rgba(255,255,255,0.5)",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              margin:        "0 0 24px 0",
            }}
          >
            The Pipeline — 40 Projects Coming
          </p>

          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              gap:        "1px",
              border:     "1px solid rgba(201,173,125,0.1)",
              borderRadius: 12,
              overflow:   "hidden",
              background: "rgba(201,173,125,0.1)",
            }}
          >
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                style={{
                  background:    "#070707",
                  padding:       "clamp(20px, 2.5vw, 32px) clamp(16px, 2vw, 28px)",
                  display:       "flex",
                  flexDirection: "column",
                  gap:           8,
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      "clamp(1.8rem, 3vw, 44px)",
                    fontWeight:    400,
                    color:         GOLD,
                    letterSpacing: "-1.5px",
                    lineHeight:    1,
                    margin:        0,
                  }}
                >
                  {cat.count}
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      14,
                    fontWeight:    400,
                    color:         "rgba(255,255,255,0.75)",
                    letterSpacing: "0.2px",
                    lineHeight:    1.2,
                    margin:        0,
                  }}
                >
                  {cat.label}
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      11,
                    fontWeight:    400,
                    color:         "rgba(255,255,255,0.55)",
                    letterSpacing: "0.3px",
                    lineHeight:    "16px",
                    margin:        0,
                  }}
                >
                  {cat.desc}
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-space-grotesk), sans-serif",
                    fontSize:      9,
                    fontWeight:    400,
                    color:         "rgba(201,173,125,0.65)",
                    letterSpacing: "1px",
                    margin:        "4px 0 0 0",
                  }}
                >
                  {cat.names.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Marquee strips ─────────────────────────────────────────────── */}
        <div
          className="marquee-wrap relative overflow-hidden"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {/* Gradient fade edges */}
          <div
            aria-hidden
            style={{
              position:      "absolute",
              left:          0,
              top:           0,
              bottom:        0,
              width:         "clamp(60px, 8vw, 120px)",
              background:    "linear-gradient(to right, #000 30%, transparent)",
              zIndex:        2,
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position:      "absolute",
              right:         0,
              top:           0,
              bottom:        0,
              width:         "clamp(60px, 8vw, 120px)",
              background:    "linear-gradient(to left, #000 30%, transparent)",
              zIndex:        2,
              pointerEvents: "none",
            }}
          />

          {/* Row 1 — scrolls left */}
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div className="marquee-track" style={{ display: "flex", gap: 8, willChange: "transform" }}>
              {[...ROW1, ...ROW1].map((p, i) => (
                <MarqueePill key={`r1-${i}`} p={p} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div className="marquee-track-reverse" style={{ display: "flex", gap: 8, willChange: "transform" }}>
              {[...ROW2, ...ROW2].map((p, i) => (
                <MarqueePill key={`r2-${i}`} p={p} />
              ))}
            </div>
          </div>
        </div>

      </motion.div>

      {/* View All Projects CTA */}
      <div
        style={{
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
          paddingTop:    "clamp(32px, 4vw, 48px)",
          paddingBottom: "clamp(64px, 9.25vw, 140px)",
          display:       "flex",
          justifyContent:"center",
        }}
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2.5 group active:scale-[0.97]"
          style={{
            border:         "1px solid rgba(201,173,125,0.35)",
            color:          GOLD,
            fontFamily:     "var(--font-space-grotesk), sans-serif",
            fontSize:       11,
            fontWeight:     700,
            letterSpacing:  "0.12em",
            padding:        "0 6px 0 20px",
            height:         44,
            borderRadius:   9999,
            textDecoration: "none",
            background:     "rgba(201,173,125,0.05)",
            display:        "inline-flex",
            alignItems:     "center",
            transition:     "border-color 350ms cubic-bezier(0.32,0.72,0,1), background 350ms cubic-bezier(0.32,0.72,0,1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,173,125,0.65)";
            e.currentTarget.style.background  = "rgba(201,173,125,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,173,125,0.35)";
            e.currentTarget.style.background  = "rgba(201,173,125,0.05)";
          }}
        >
          VIEW ALL PROJECTS
          <span
            className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
            style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              width:          32,
              height:         32,
              borderRadius:   "50%",
              background:     "rgba(201,173,125,0.12)",
              flexShrink:     0,
              transition:     "transform 350ms cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
