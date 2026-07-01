"use client";
import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/sections/loading-screen";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { DemoLab } from "@/components/sections/demo-lab";
import { CaseStudies } from "@/components/sections/case-studies";
import { Experience } from "@/components/sections/experience";
import { WhyHire } from "@/components/sections/why-hire";
import { Testimonials } from "@/components/sections/testimonials";
import { GithubSection } from "@/components/sections/github";
import { ResumeSection } from "@/components/sections/resume";
import { AIAssistant } from "@/components/sections/ai-assistant";
import { Contact } from "@/components/sections/contact";
import { LOADING_DURATION_MS } from "@/lib/constants";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADING_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Hero />
      <TrustBar />
      <About />
      <Skills />
      <Projects />
      <DemoLab />
      <CaseStudies />
      <Experience />
      <WhyHire />
      <Testimonials />
      <GithubSection />
      <ResumeSection />
      <AIAssistant />
      <Contact />
    </>
  );
}
