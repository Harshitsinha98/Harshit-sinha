import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/layout/cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Harshit Sinha — Full Stack Engineer | Product Builder",
  description:
    "Product-focused Full Stack Engineer building scalable business software, automation systems, and modern digital products for startups and enterprises.",
  keywords: ["Full Stack Engineer", "Next.js Developer", "Product Engineer", "Harshit Sinha", "Software Engineer India"],
  openGraph: {
    title: "Harshit Sinha — Full Stack Engineer",
    description: "I build scalable business software, automation systems, and modern digital products.",
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
        </LenisProvider>
      </body>
    </html>
  );
}