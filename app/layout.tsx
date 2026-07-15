import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/layout/cursor";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Harshit Sinha — Product Builder & Automation",
  description:
    "I build and ship real products end-to-end using AI-assisted development, backed by a background in technical operations and automation. Open to opportunities.",
  keywords: [
    "Product Builder",
    "AI-Assisted Development",
    "Automation",
    "Next.js",
    "Harshit Sinha",
    "Technical Operations",
    "Open to work",
  ],
  openGraph: {
    title: "Harshit Sinha — Product Builder & Automation",
    description:
      "I build and ship real products end-to-end using AI-assisted development, backed by a background in technical operations and automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`
            if ('scrollRestoration' in window.history) {
              window.history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
          `}
        </Script>
      </head>
      <body className="noise">
        <LenisProvider>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}