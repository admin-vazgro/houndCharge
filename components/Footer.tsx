import Image from "next/image";

const links = ["Vision", "Model", "Projects", "Invest", "Roadmap"];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 px-8 md:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="Hound Charge"
            width={72}
            height={32}
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
          />
          <p className="text-white/25 text-xs">© 2026 Hound Charge</p>
        </div>

        <div className="flex flex-wrap gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-[0.15em] text-white/30 hover:text-white/70 transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>

        <a
          href="mailto:invest@houndcharge.com"
          className="text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          invest@houndcharge.com
        </a>
      </div>
    </footer>
  );
}
