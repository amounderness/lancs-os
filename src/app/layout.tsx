import type { Metadata } from "next";
import { Libre_Baskerville, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// The "Soil": A sturdy, industrial serif font
const baskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-serif'
});

// The "Silicon": High-readability code font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: '--font-mono' 
});

export const metadata: Metadata = {
  title: "Lancs.OS | Red Rose Systems",
  description: "The Civic Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${baskerville.variable} ${jetbrainsMono.variable} bg-slate-950 text-slate-200 antialiased`}>
        {/* The Texture Overlay: Adds film grain/noise for that "Analog" feel */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        {children}
      </body>
    </html>
  );
}