import Image from "next/image";
import { motion } from "framer-motion";

const GOLD = "#c9ad7d";

const links = ["Vision", "Model", "Projects", "Invest", "Roadmap"];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>

      {/* Contact Us band */}
      <div
        style={{
          paddingTop:    "clamp(56px, 7vw, 96px)",
          paddingBottom: "clamp(48px, 6vw, 80px)",
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
          borderBottom:  "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p
          style={{
            fontFamily:    "var(--font-space-grotesk), sans-serif",
            fontSize:      18,
            fontWeight:    400,
            color:         GOLD,
            letterSpacing: "1px",
            lineHeight:    "32px",
            margin:        "0 0 clamp(32px, 4vw, 52px) 0",
          }}
        >
          CONTACT US
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(32px, 5vw, 72px)" }}>

          {/* Address */}
          <div>
            <p
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      10,
                fontWeight:    400,
                color:         "rgba(255,255,255,0.28)",
                letterSpacing: "2.5px",
                margin:        "0 0 14px 0",
                textTransform: "uppercase",
              }}
            >
              Address
            </p>
            <address
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      14,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.55)",
                letterSpacing: "0.5px",
                lineHeight:    "24px",
                fontStyle:     "normal",
                margin:        0,
              }}
            >
              Hound Charge<br />
              Elite Miles, 4th Floor, V Cinemas Building<br />
              Seaport–Airport Road, Vidya Nagar Colony<br />
              Thrikkakara, Kakkanad<br />
              Kochi, Kerala – 682022<br />
              India
            </address>
          </div>

          {/* Phone */}
          <div>
            <p
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      10,
                fontWeight:    400,
                color:         "rgba(255,255,255,0.28)",
                letterSpacing: "2.5px",
                margin:        "0 0 14px 0",
                textTransform: "uppercase",
              }}
            >
              Phone
            </p>
            <a
              href="tel:+919249548354"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      14,
                fontWeight:    400,
                color:         "rgba(253,255,234,0.55)",
                letterSpacing: "0.5px",
                lineHeight:    "24px",
                textDecoration: "none",
                display:       "block",
                transition:    "color 0.2s ease",
              }}
              className="hover:text-white/80"
            >
              +91 92495 48354
            </a>
          </div>

          {/* Email */}
          <div>
            <p
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      10,
                fontWeight:    400,
                color:         "rgba(255,255,255,0.28)",
                letterSpacing: "2.5px",
                margin:        "0 0 14px 0",
                textTransform: "uppercase",
              }}
            >
              Email
            </p>
            <a
              href="mailto:hello@houndcharge.com"
              style={{
                fontFamily:    "var(--font-manrope), sans-serif",
                fontSize:      14,
                fontWeight:    400,
                color:         GOLD,
                letterSpacing: "0.5px",
                lineHeight:    "24px",
                textDecoration: "none",
                display:       "block",
                transition:    "opacity 0.2s ease",
              }}
              className="hover:opacity-80"
            >
              hello@houndcharge.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between"
        style={{
          paddingTop:    "clamp(24px, 3vw, 36px)",
          paddingBottom: "clamp(24px, 3vw, 36px)",
          paddingLeft:   "clamp(24px, 9.2vw, 139px)",
          paddingRight:  "clamp(24px, 9.2vw, 139px)",
          gap:           24,
        }}
      >
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png"
            alt="Hound Charge"
            width={72}
            height={32}
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
          />
          <p
            style={{
              fontFamily:    "var(--font-space-grotesk), sans-serif",
              fontSize:      11,
              color:         "rgba(255,255,255,0.2)",
              letterSpacing: "0.5px",
            }}
          >
            © 2026 Hound Charge
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-white/70"
              style={{
                fontFamily:    "var(--font-space-grotesk), sans-serif",
                fontSize:      11,
                letterSpacing: "0.15em",
                color:         "rgba(255,255,255,0.28)",
                textDecoration: "none",
              }}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
