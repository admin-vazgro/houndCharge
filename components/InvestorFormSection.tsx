"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#c9ad7d";

const PROJECTS = [
  "Hound Ares — Ernakulam Border (Active)",
  "Hound Hermes — Tourist Places Phase 1",
  "Hound Hades — Tourist Places Phase 2",
  "Hound Aphrodite — Hill Stations",
  "Hound Zeus — Pilgrimage Phase 1",
  "Hound Artemis — Pilgrimage Phase 2",
  "Hound Apollo — NH 66 Phase 1",
  "Hound Hera — NH 66 Phase 2",
  "Hound Dionysus — NH 66 Phase 3",
  "Hound Athena — NH 66 Phase 4",
  "Hound Demeter — NH 544",
  "Hound Hephaestus — NH 85",
  "Hound Hestia — NH 183",
  "Hound Enodia — NH 183A",
  "Hound Eos — NH 766",
  "Hound Hypnos — NH 966",
  "Hound Taurus — NH 744",
  "Hound Gemini — NH 185",
  "Hound Virgo — MC Road SH 1",
  "Hound Libra — SH 2",
  "Hound Scorpio — SH 8",
  "Hound Sagittarius — SH 16",
  "Hound Capricorn — SH 19",
  "Hound Aquarius — SH 29",
  "Hound Pisces — SH 39",
  "Hound Leo — SH 44 Pilgrimage",
  "Hound Alpha — Kerala–Tamil Nadu Border",
  "Hound Beta — Kerala–Karnataka Border",
  "Hound Gamma — Major Towns",
  "Hound Poseidon — Beach Destinations",
];

function TokenStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const amount = value * 5;
  return (
    <div className="flex flex-col" style={{ gap: 8 }}>
      <div
        style={{
          display:       "flex",
          alignItems:    "center",
          gap:           0,
          border:        "1px solid rgba(201,173,125,0.22)",
          borderRadius:  8,
          background:    "rgba(255,255,255,0.025)",
          overflow:      "hidden",
        }}
      >
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          className="flex items-center justify-center transition-colors"
          style={{
            width:      48,
            height:     48,
            flexShrink: 0,
            color:      "rgba(201,173,125,0.8)",
            fontSize:   20,
            fontFamily: "var(--font-space-grotesk), sans-serif",
            background: "rgba(201,173,125,0.04)",
            borderRight: "1px solid rgba(201,173,125,0.12)",
          }}
          aria-label="Decrease tokens"
        >
          −
        </button>

        <div className="flex flex-col items-center justify-center flex-1" style={{ padding: "6px 16px" }}>
          <p
            style={{
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      22,
              fontWeight:    400,
              color:         GOLD,
              letterSpacing: "-0.5px",
              lineHeight:    1,
              margin:        0,
            }}
          >
            {value}
          </p>
          <p
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      11,
              fontWeight:    400,
              color:         "rgba(255,255,255,0.28)",
              letterSpacing: "0.5px",
              lineHeight:    1,
              margin:        "4px 0 0 0",
            }}
          >
            {value === 1 ? "token" : "tokens"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex items-center justify-center transition-colors"
          style={{
            width:      48,
            height:     48,
            flexShrink: 0,
            color:      "rgba(201,173,125,0.8)",
            fontSize:   20,
            fontFamily: "var(--font-space-grotesk), sans-serif",
            background: "rgba(201,173,125,0.04)",
            borderLeft: "1px solid rgba(201,173,125,0.12)",
          }}
          aria-label="Increase tokens"
        >
          +
        </button>
      </div>

      <p
        style={{
          fontFamily:    "var(--font-manrope), sans-serif",
          fontSize:      12,
          fontWeight:    400,
          color:         GOLD,
          letterSpacing: "0.5px",
          lineHeight:    1,
          margin:        0,
        }}
      >
        ₹{amount} Lakhs total investment
      </p>
    </div>
  );
}

const inputBase: React.CSSProperties = {
  width:         "100%",
  height:        48,
  background:    "rgba(255,255,255,0.025)",
  border:        "1px solid rgba(201,173,125,0.22)",
  borderRadius:  8,
  padding:       "0 16px",
  fontFamily:    "var(--font-manrope), sans-serif",
  fontSize:      14,
  fontWeight:    400,
  color:         "#fdffea",
  letterSpacing: "0.5px",
  outline:       "none",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col" style={{ gap: 8 }}>
      <label
        style={{
          fontFamily:    "var(--font-space-grotesk), sans-serif",
          fontSize:      10,
          fontWeight:    400,
          color:         "rgba(255,255,255,0.45)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          display:       "block",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function InvestorFormSection() {
  const [name,     setName]     = useState("");
  const [mobile,   setMobile]   = useState("");
  const [email,    setEmail]    = useState("");
  const [project,  setProject]  = useState(PROJECTS[0]);
  const [tokens,   setTokens]   = useState(1);
  const [remarks,  setRemarks]  = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !mobile || !email) return;
    setLoading(true);
    const body = encodeURIComponent(
      `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nProject: ${project}\nTokens: ${tokens} (₹${tokens * 5} Lakhs)\nRemarks: ${remarks}`
    );
    setTimeout(() => {
      window.open(
        `mailto:invest@houndcharge.com?subject=Investor%20Enquiry%20—%20${encodeURIComponent(project)}&body=${body}`,
        "_blank"
      );
      setSubmitted(true);
      setLoading(false);
    }, 800);
  }

  return (
    <section
      id="investor-form"
      className="bg-black overflow-hidden relative"
      style={{
        paddingTop:    "clamp(80px, 10vw, 152px)",
        paddingBottom: "clamp(80px, 10vw, 152px)",
        paddingLeft:   "clamp(24px, 9.2vw, 139px)",
        paddingRight:  "clamp(24px, 9.2vw, 139px)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(201,173,125,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative" style={{ maxWidth: 840, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          style={{ marginBottom: "clamp(40px, 5vw, 72px)" }}
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
              margin:        "0 0 16px 0",
            }}
          >
            INVEST IN PROJECT ARES
          </p>
          <h2
            className="heading-ls"
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      "clamp(2rem, 4.1vw, 62px)",
              fontWeight:    300,
              letterSpacing: "-1.86px",
              lineHeight:    "1.18",
              margin:        "0 0 16px 0",
            }}
          >
            <span style={{ color: "white" }}>Register Your </span>
            <span style={{ color: GOLD }}>Interest.</span>
          </h2>
          <p
            style={{
              fontFamily:    "var(--font-manrope), sans-serif",
              fontSize:      16,
              fontWeight:    400,
              color:         "rgba(253,255,234,0.5)",
              letterSpacing: "1px",
              lineHeight:    "26px",
              maxWidth:      520,
              margin:        0,
            }}
          >
            Our team will reach out within 24 hours with the full investor brief and onboarding details.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            /* ── Success state ─────────────────────────── */
            <motion.div
              key="success"
              className="flex flex-col items-center text-center"
              style={{ padding: "clamp(48px, 6vw, 80px) 40px" }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  width:        56,
                  height:       56,
                  borderRadius: "50%",
                  border:       `1px solid ${GOLD}`,
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  background:   "rgba(201,173,125,0.07)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      "clamp(1.4rem, 2.5vw, 36px)",
                  fontWeight:    300,
                  color:         "white",
                  letterSpacing: "-0.8px",
                  lineHeight:    "1.2",
                  margin:        "0 0 12px 0",
                }}
              >
                Interest Registered.
              </p>
              <p
                style={{
                  fontFamily:    "var(--font-manrope), sans-serif",
                  fontSize:      14,
                  fontWeight:    400,
                  color:         "rgba(253,255,234,0.5)",
                  letterSpacing: "1px",
                  lineHeight:    "24px",
                  maxWidth:      400,
                  margin:        0,
                }}
              >
                Your email client should have opened. We&apos;ll be in touch within 24 hours with the full investor brief.
              </p>
            </motion.div>
          ) : (
            /* ── Form ──────────────────────────────────── */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="relative overflow-hidden"
              style={{ borderRadius: 17 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Rotating conic glow border */}
              <div
                aria-hidden
                style={{
                  position:   "absolute",
                  inset:      -140,
                  background: `conic-gradient(
                    from 0deg,
                    transparent 0%,
                    transparent 75%,
                    rgba(201,173,125,0.7) 87%,
                    rgba(201,173,125,0.25) 93%,
                    transparent 100%
                  )`,
                  animation: "borderSpin 6s linear infinite",
                }}
              />
              <div
                aria-hidden
                style={{
                  position:      "absolute",
                  inset:         0,
                  borderRadius:  17,
                  border:        "1px solid rgba(201,173,125,0.12)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position:     "absolute",
                  inset:        1,
                  borderRadius: 16,
                  background:   "#070707",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex:   1,
                  padding:  "clamp(32px, 4vw, 56px) clamp(24px, 3.5vw, 52px)",
                }}
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: "clamp(20px, 2.5vw, 32px)" }}
                >
                  {/* Name */}
                  <Field label="Full Name">
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={inputBase}
                      className="placeholder-white/20 focus:border-[rgba(201,173,125,0.55)] transition-colors duration-200"
                    />
                  </Field>

                  {/* Mobile */}
                  <Field label="Mobile Number">
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      style={inputBase}
                      className="placeholder-white/20 focus:border-[rgba(201,173,125,0.55)] transition-colors duration-200"
                    />
                  </Field>

                  {/* Email */}
                  <Field label="Email Address">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputBase}
                      className="placeholder-white/20 focus:border-[rgba(201,173,125,0.55)] transition-colors duration-200"
                    />
                  </Field>

                  {/* Project */}
                  <Field label="Project">
                    <select
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      style={{
                        ...inputBase,
                        cursor:             "pointer",
                        appearance:         "none",
                        backgroundImage:    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9ad7d' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat:   "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight:       40,
                      } as React.CSSProperties}
                      className="focus:border-[rgba(201,173,125,0.55)] transition-colors duration-200"
                    >
                      {PROJECTS.map((p) => (
                        <option key={p} value={p} style={{ background: "#070707", color: "#fdffea" }}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* No. of tokens */}
                  <Field label="Number of Tokens (₹5 Lakhs each)">
                    <TokenStepper value={tokens} onChange={setTokens} />
                  </Field>

                  {/* Remarks */}
                  <Field label="Remarks (Optional)">
                    <textarea
                      placeholder="Any questions or notes for our team"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      rows={3}
                      style={{
                        ...inputBase,
                        height:     "auto",
                        padding:    "12px 16px",
                        resize:     "vertical",
                        lineHeight: "22px",
                      } as React.CSSProperties}
                      className="placeholder-white/20 focus:border-[rgba(201,173,125,0.55)] transition-colors duration-200"
                    />
                  </Field>
                </div>

                {/* Submit */}
                <div style={{ marginTop: "clamp(28px, 3.5vw, 44px)" }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-3 transition-opacity hover:opacity-85 disabled:opacity-60"
                    style={{
                      background:    GOLD,
                      color:         "#000",
                      fontFamily:    "var(--font-space-grotesk), sans-serif",
                      fontSize:      12,
                      fontWeight:    700,
                      letterSpacing: "0.12em",
                      padding:       "0 24px 0 28px",
                      height:        48,
                      borderRadius:  "9999px",
                      cursor:        loading ? "not-allowed" : "pointer",
                      border:        "none",
                    }}
                  >
                    {loading ? "SENDING…" : "REGISTER INTEREST"}
                    {!loading && (
                      <span
                        style={{
                          width:        32,
                          height:       32,
                          borderRadius: "50%",
                          background:   "rgba(0,0,0,0.12)",
                          display:      "flex",
                          alignItems:   "center",
                          justifyContent: "center",
                          flexShrink:   0,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </button>

                  <p
                    style={{
                      fontFamily:    "var(--font-manrope), sans-serif",
                      fontSize:      12,
                      fontWeight:    400,
                      color:         "rgba(255,255,255,0.2)",
                      letterSpacing: "0.5px",
                      lineHeight:    "20px",
                      marginTop:     14,
                    }}
                  >
                    Your information is used solely to process your investor enquiry.
                  </p>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
