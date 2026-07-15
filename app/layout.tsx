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
  title: "Harshit Sinha — Full Stack Engineer | Open to Roles",
  description:
    "Full Stack Software Engineer with 3+ years shipping production web apps, automation systems, and scalable backends. Open to full-time software engineering roles.",
  keywords: [
    "Full Stack Engineer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Harshit Sinha",
    "Software Engineer India",
    "Open to work",
  ],
  openGraph: {
    title: "Harshit Sinha — Full Stack Engineer | Open to Roles",
    description:
      "Full Stack Software Engineer shipping production web apps, automation, and scalable backends. Open to full-time roles.",
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