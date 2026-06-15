"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "VISION",    href: "#vision" },
  { label: "MODEL",     href: "#model" },
  { label: "PROJECTS",  href: "#projects" },
  { label: "INVEST",    href: "#invest" },
  { label: "ROADMAPS",  href: "#roadmap" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background:          scrolled || menuOpen ? "rgba(0,0,0,0.92)" : "transparent",
          backdropFilter:      scrolled || menuOpen ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        }}
      >
        <nav className="flex items-center justify-between px-6 md:px-14 h-[68px]">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Hound Charge"
            width={72}
            height={32}
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
            priority
          />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            className="hidden md:block bg-white text-black text-xs font-semibold tracking-[0.15em] px-6 py-2.5 rounded-full hover:bg-zinc-100 transition-colors duration-200"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            INVEST
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-6 h-px bg-white transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-px bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-white transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </nav>

        {/* Separator line */}
        <div className="flex justify-center">
          <div
            className="h-px"
            style={{ width: "61.5%", background: "rgba(255,255,255,0.18)" }}
          />
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ background: "rgba(0,0,0,0.97)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                style={{
                  fontFamily:    "var(--font-space-grotesk), sans-serif",
                  fontSize:      13,
                  fontWeight:    400,
                  letterSpacing: "0.2em",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.button
              className="mt-4 bg-white text-black text-xs font-semibold tracking-[0.15em] px-8 py-3 rounded-full"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              onClick={() => setMenuOpen(false)}
            >
              INVEST
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
