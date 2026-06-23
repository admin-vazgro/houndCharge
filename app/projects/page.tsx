"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOLD = "#c9ad7d";
const EASE = [0.32, 0.72, 0, 1] as const;

const PROJECTS = [
  { id: 1,  name: "Hound Ares",        category: "Flagship Project",                            coverage: "Ernakulam Border Region",                                    status: "active", locations: 9,  chargers: 36, group: "flagship",   motive: "Flagship charging corridor at the Ernakulam border ensuring seamless intercity EV mobility and high charger availability." },
  { id: 2,  name: "Hound Hermes",      category: "Tourist Places – Phase 1",                    coverage: "Thiruvananthapuram to Ernakulam",                             status: "soon",   locations: 9,  chargers: 36, group: "tourist",    motive: "EV charging hubs across major tourist destinations in South Kerala, ensuring uninterrupted access for tourists and long-distance EV travelers." },
  { id: 3,  name: "Hound Hades",       category: "Tourist Places – Phase 2",                    coverage: "Thrissur to Kasaragod",                                      status: "soon",   locations: 9,  chargers: 36, group: "tourist",    motive: "Tourism-focused EV infrastructure spanning North Kerala, improving charging access across the region." },
  { id: 4,  name: "Hound Aphrodite",   category: "Hill Stations",                               coverage: "Munnar, Wayanad, Vagamon, Ponmudi, Thekkady & More",         status: "soon",   locations: 9,  chargers: 36, group: "tourist",    motive: "Reliable EV charging at Kerala's most scenic and remote hill destinations." },
  { id: 5,  name: "Hound Zeus",        category: "Pilgrimage – Phase 1",                        coverage: "Thiruvananthapuram to Ernakulam",                             status: "soon",   locations: 9,  chargers: 36, group: "pilgrimage", motive: "Charging hubs supporting sustainable religious tourism across South Kerala." },
  { id: 6,  name: "Hound Artemis",     category: "Pilgrimage – Phase 2",                        coverage: "Thrissur to Kasaragod",                                      status: "soon",   locations: 9,  chargers: 36, group: "pilgrimage", motive: "Statewide pilgrimage route EV coverage across North Kerala." },
  { id: 7,  name: "Hound Apollo",      category: "NH 66 – Phase 1",                             coverage: "645 km Coastal Kerala",                                      status: "soon",   locations: 10, chargers: 40, group: "highway",    motive: "The backbone EV corridor along NH 66 with strategically placed charging hubs." },
  { id: 8,  name: "Hound Hera",        category: "NH 66 – Phase 2",                             coverage: "NH 66",                                                      status: "soon",   locations: 10, chargers: 40, group: "highway",    motive: "Additional charging hubs positioned every 40 km for maximum reliability." },
  { id: 9,  name: "Hound Dionysus",    category: "NH 66 – Phase 3",                             coverage: "High Density Corridor",                                      status: "soon",   locations: 10, chargers: 40, group: "highway",    motive: "High-density charging deployment eliminating dead zones along NH 66." },
  { id: 10, name: "Hound Athena",      category: "NH 66 – Phase 4",                             coverage: "Full Corridor Completion",                                   status: "soon",   locations: 10, chargers: 40, group: "highway",    motive: "Complete NH 66 corridor coverage across Kerala." },
  { id: 11, name: "Hound Demeter",     category: "NH 544",                                      coverage: "160 km within Kerala",                                       status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "High-speed interstate EV travel support across NH 544." },
  { id: 12, name: "Hound Hephaestus",  category: "NH 85",                                       coverage: "168 km Commercial & Tourist Regions",                        status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Charging hubs linking commercial and tourist regions." },
  { id: 13, name: "Hound Hestia",      category: "NH 183",                                      coverage: "215 km Central & High Range Kerala",                         status: "soon",   locations: 9,  chargers: 36, group: "highway",    motive: "Extending EV accessibility into Central and High Range Kerala." },
  { id: 14, name: "Hound Enodia",      category: "NH 183A",                                     coverage: "117 km",                                                     status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Reliable charging access across the NH 183A corridor." },
  { id: 15, name: "Hound Eos",         category: "NH 766",                                      coverage: "117 km Interstate",                                          status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Supporting smooth interstate EV travel." },
  { id: 16, name: "Hound Hypnos",      category: "NH 966",                                      coverage: "125 km Economic Corridor",                                   status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Connecting major economic centers through EV infrastructure." },
  { id: 17, name: "Hound Taurus",      category: "NH 744",                                      coverage: "81 km Cross-Border",                                         status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Enabling seamless movement between Kerala and neighboring states." },
  { id: 18, name: "Hound Gemini",      category: "NH 185",                                      coverage: "96 km High Range",                                           status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Connecting remote highland communities to the charging network." },
  { id: 19, name: "Hound Virgo",       category: "MC Road – SH 1",                              coverage: "237 km Cross-Kerala Corridor",                               status: "soon",   locations: 9,  chargers: 36, group: "highway",    motive: "A parallel EV mobility corridor across Kerala." },
  { id: 20, name: "Hound Libra",       category: "SH 2",                                        coverage: "Thiruvananthapuram to Thenmala",                             status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Opening eastern Kerala to reliable electric mobility." },
  { id: 21, name: "Hound Scorpio",     category: "SH 8",                                        coverage: "153 km Punalur to Muvattupuzha",                             status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Continuous charging coverage along SH 8." },
  { id: 22, name: "Hound Sagittarius", category: "SH 16",                                       coverage: "114 km Aluva to Munnar",                                     status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Supporting tourism and hill travel." },
  { id: 23, name: "Hound Capricorn",   category: "SH 19",                                       coverage: "106 km Munnar to Kumali",                                    status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Strengthening eco-friendly tourism connectivity." },
  { id: 24, name: "Hound Aquarius",    category: "SH 29",                                       coverage: "100 km Kozhikode to Gudalur",                                status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Connecting North Kerala to the Nilgiri highlands." },
  { id: 25, name: "Hound Pisces",      category: "SH 39",                                       coverage: "110 km Perumbilavu to Nilambur",                             status: "soon",   locations: 8,  chargers: 32, group: "highway",    motive: "Strengthening regional EV connectivity in central Malabar." },
  { id: 26, name: "Hound Leo",         category: "SH 44",                                       coverage: "150 km Sabarimala to Neriyamangalam",                        status: "soon",   locations: 8,  chargers: 32, group: "pilgrimage", motive: "Supporting pilgrimage and tourism travel." },
  { id: 27, name: "Hound Alpha",       category: "Kerala–Tamil Nadu Border Network",             coverage: "Kerala–Tamil Nadu",                                          status: "soon",   locations: 9,  chargers: 36, group: "urban",      motive: "Seamless EV travel across major border crossings." },
  { id: 28, name: "Hound Beta",        category: "Kerala–Karnataka Border Network",              coverage: "Kerala–Karnataka",                                           status: "soon",   locations: 9,  chargers: 36, group: "urban",      motive: "Cross-state electric mobility infrastructure." },
  { id: 29, name: "Hound Gamma",       category: "Major Towns in Kerala",                       coverage: "Urban Network",                                              status: "soon",   locations: 10, chargers: 40, group: "urban",      motive: "City-level EV charging hubs across Kerala." },
  { id: 30, name: "Hound Poseidon",    category: "Beach Destinations",                          coverage: "Coastal Kerala",                                             status: "soon",   locations: 9,  chargers: 36, group: "tourist",    motive: "Charging infrastructure for Kerala's beach tourism network." },
  { id: 31, name: "Hound Varuna",      category: "Coastal Line Network",                        coverage: "Coastal Kerala",                                             status: "soon",   locations: 10, chargers: 40, group: "tourist",    motive: "Charging hubs across Kerala's coastal routes." },
  { id: 32, name: "Hound Sigma",       category: "Hospitals Network",                           coverage: "Major Hospitals Across Kerala",                              status: "soon",   locations: 10, chargers: 40, group: "urban",      motive: "Convenient EV charging access at major hospitals across Kerala." },
  { id: 33, name: "Hound Vayu",        category: "Metro Stations Network",                      coverage: "Urban Metro Corridors",                                      status: "soon",   locations: 8,  chargers: 32, group: "urban",      motive: "EV charging infrastructure integrated with metro transit hubs." },
  { id: 34, name: "Hound Epsilon",     category: "KSRTC Bus Stations Network",                  coverage: "Major KSRTC Bus Stations Across Kerala",                     status: "soon",   locations: 10, chargers: 40, group: "urban",      motive: "EV charging hubs at major KSRTC bus stations across Kerala." },
  { id: 35, name: "Hound Odin",        category: "KTDC Hotels Network",                         coverage: "KTDC Properties Across Kerala",                              status: "soon",   locations: 8,  chargers: 32, group: "tourist",    motive: "EV charging hubs across major KTDC hotels and tourism destinations." },
  { id: 36, name: "Hound Thor",        category: "PWD Guest Houses Network",                    coverage: "Major PWD Guest Houses Across Kerala",                       status: "soon",   locations: 8,  chargers: 32, group: "urban",      motive: "EV charging hubs at major PWD guest houses across Kerala." },
  { id: 37, name: "Hound Prithvi",     category: "Forest Areas Network",                        coverage: "Forest Access Points & Eco-Tourism Destinations Across Kerala", status: "soon", locations: 8,  chargers: 32, group: "tourist",    motive: "EV charging hubs supporting eco-tourism and forest travel across Kerala." },
  { id: 38, name: "Hound Agni",        category: "Industrial Area Network",                     coverage: "Major Industrial Areas Across Kerala",                       status: "soon",   locations: 9,  chargers: 36, group: "urban",      motive: "EV charging hubs supporting electric freight and industrial transportation across Kerala." },
  { id: 39, name: "Hound Delta",       category: "Shopping Malls Network",                      coverage: "Major Shopping Malls Across Kerala",                         status: "soon",   locations: 10, chargers: 40, group: "urban",      motive: "EV charging hubs at major shopping and retail destinations across Kerala." },
  { id: 40, name: "Hound Helios",      category: "Amusement Park & Children's Park Network",    coverage: "Major Amusement Parks & Children's Parks Across Kerala",     status: "soon",   locations: 10, chargers: 40, group: "tourist",    motive: "EV charging hubs at major amusement and children's park destinations across Kerala." },
];

const FILTERS = [
  { label: "All",        value: "all"       },
  { label: "Flagship",  value: "flagship"  },
  { label: "Tourist",   value: "tourist"   },
  { label: "Pilgrimage",value: "pilgrimage"},
  { label: "Highways",  value: "highway"   },
  { label: "Urban",     value: "urban"     },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.group === active);

  return (
    <div style={{ background: "#000", minHeight: "100dvh" }}>

      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <div
        style={{
          paddingTop:    "clamp(120px, 14vw, 180px)",
          paddingBottom: "clamp(40px, 5vw, 64px)",
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
        }}
      >
        <motion.a
          href="/"
          className="inline-flex items-center gap-2"
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      11,
            fontWeight:    400,
            color:         "rgba(255,255,255,0.4)",
            letterSpacing: "0.12em",
            textDecoration:"none",
            marginBottom:  "clamp(24px, 3vw, 40px)",
            display:       "inline-flex",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </motion.a>

        <motion.p
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      18,
            fontWeight:    400,
            color:         GOLD,
            letterSpacing: "1px",
            margin:        "0 0 16px 0",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          THE PROJECTS
        </motion.p>

        <motion.h1
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      "clamp(2.4rem, 4.5vw, 68px)",
            fontWeight:    300,
            letterSpacing: "-2px",
            lineHeight:    "1.1",
            color:         "white",
            margin:        "0 0 clamp(16px, 2vw, 24px) 0",
          }}
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
        >
          100+ Projects.{" "}
          <span style={{ color: GOLD, fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 400 }}>
            One Mission.
          </span>
        </motion.h1>

        <motion.p
          style={{
            fontFamily:    "var(--font-manrope), sans-serif",
            fontSize:      16,
            fontWeight:    400,
            color:         "rgba(253,255,234,0.55)",
            letterSpacing: "0.5px",
            lineHeight:    "26px",
            maxWidth:      560,
            margin:        0,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          A strategic EV charging network spanning Kerala — from highway corridors to pilgrimage routes, hill stations to urban hubs.
        </motion.p>
      </div>

      {/* ── Filter tabs ────────────────────────────────────────────────── */}
      <div
        style={{
          paddingLeft:  "clamp(24px, 9.2vw, 139px)",
          paddingRight: "clamp(24px, 9.2vw, 139px)",
          marginBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      10,
                fontWeight:    active === f.value ? 600 : 400,
                letterSpacing: "0.15em",
                padding:       "7px 16px",
                borderRadius:  9999,
                border:        active === f.value ? `1px solid ${GOLD}` : "1px solid rgba(255,255,255,0.15)",
                background:    active === f.value ? "rgba(201,173,125,0.12)" : "transparent",
                color:         active === f.value ? GOLD : "rgba(255,255,255,0.5)",
                cursor:        "pointer",
                transition:    "all 300ms cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Project grid ───────────────────────────────────────────────── */}
      <div
        style={{
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: 16 }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              style={{
                borderRadius: 16,
                padding:      1.5,
                background:   project.status === "active"
                  ? "rgba(201,173,125,0.15)"
                  : "rgba(255,255,255,0.05)",
              }}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4), ease: EASE }}
            >
              <div
                style={{
                  borderRadius: 15,
                  background:   "#080808",
                  padding:      "clamp(20px, 2.5vw, 28px)",
                  height:       "100%",
                  display:      "flex",
                  flexDirection:"column",
                  gap:          16,
                  boxShadow:    "inset 0 1px 1px rgba(255,255,255,0.04)",
                }}
              >
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <p
                      style={{
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      9,
                        fontWeight:    400,
                        color:         "rgba(201,173,125,0.5)",
                        letterSpacing: "2px",
                        margin:        "0 0 6px 0",
                        textTransform: "uppercase",
                      }}
                    >
                      {String(project.id).padStart(2, "0")}
                    </p>
                    <h3
                      style={{
                        fontFamily:    "var(--font-manrope), sans-serif",
                        fontSize:      "clamp(1.1rem, 1.8vw, 22px)",
                        fontWeight:    300,
                        color:         "white",
                        letterSpacing: "-0.5px",
                        lineHeight:    "1.2",
                        margin:        0,
                      }}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Status badge */}
                  {project.status === "active" ? (
                    <span
                      style={{
                        display:       "inline-flex",
                        alignItems:    "center",
                        gap:           5,
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      8,
                        fontWeight:    400,
                        color:         GOLD,
                        letterSpacing: "1.5px",
                        background:    "rgba(201,173,125,0.1)",
                        border:        `1px solid rgba(201,173,125,0.25)`,
                        borderRadius:  20,
                        padding:       "4px 10px",
                        flexShrink:    0,
                        whiteSpace:    "nowrap",
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD, boxShadow: `0 0 6px ${GOLD}`, flexShrink: 0 }} />
                      ACTIVE
                    </span>
                  ) : (
                    <span
                      style={{
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      8,
                        fontWeight:    400,
                        color:         "rgba(255,255,255,0.3)",
                        letterSpacing: "1.5px",
                        background:    "rgba(255,255,255,0.04)",
                        border:        "1px solid rgba(255,255,255,0.08)",
                        borderRadius:  20,
                        padding:       "4px 10px",
                        flexShrink:    0,
                        whiteSpace:    "nowrap",
                      }}
                    >
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Category + Coverage */}
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <p
                    style={{
                      fontFamily:    "var(--font-space-grotesk), sans-serif",
                      fontSize:      10,
                      fontWeight:    400,
                      color:         GOLD,
                      letterSpacing: "0.8px",
                      margin:        0,
                    }}
                  >
                    {project.category}
                  </p>
                  <p
                    style={{
                      fontFamily:    "var(--font-manrope), sans-serif",
                      fontSize:      12,
                      fontWeight:    400,
                      color:         "rgba(255,255,255,0.35)",
                      letterSpacing: "0.3px",
                      margin:        0,
                    }}
                  >
                    {project.coverage}
                  </p>
                </div>

                {/* Motive */}
                <p
                  style={{
                    fontFamily:    "var(--font-manrope), sans-serif",
                    fontSize:      13,
                    fontWeight:    400,
                    color:         "rgba(253,255,234,0.5)",
                    letterSpacing: "0.3px",
                    lineHeight:    "20px",
                    margin:        0,
                    flexGrow:      1,
                  }}
                >
                  {project.motive}
                </p>

                {/* Stats */}
                <div
                  style={{
                    display:       "flex",
                    gap:           24,
                    paddingTop:    14,
                    borderTop:     "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      "clamp(1.2rem, 2vw, 26px)",
                        fontWeight:    400,
                        color:         GOLD,
                        letterSpacing: "-1px",
                        lineHeight:    1,
                        margin:        "0 0 4px 0",
                      }}
                    >
                      {project.locations}
                    </p>
                    <p
                      style={{
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      9,
                        fontWeight:    300,
                        color:         "rgba(255,255,255,0.35)",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        margin:        0,
                      }}
                    >
                      Locations
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      "clamp(1.2rem, 2vw, 26px)",
                        fontWeight:    400,
                        color:         GOLD,
                        letterSpacing: "-1px",
                        lineHeight:    1,
                        margin:        "0 0 4px 0",
                      }}
                    >
                      {project.chargers}
                    </p>
                    <p
                      style={{
                        fontFamily:    "var(--font-space-grotesk), sans-serif",
                        fontSize:      9,
                        fontWeight:    300,
                        color:         "rgba(255,255,255,0.35)",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        margin:        0,
                      }}
                    >
                      Chargers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
