import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Playfair_Display } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chativ — Technology Crafted for All",
  description: "We create clear, intuitive, and accessible digital experiences shaped by real human behavior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${playfair.variable} h-full`}>
      <body
        className="min-h-full bg-black text-white"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
