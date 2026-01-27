"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");

  // Helper function to create the observer config
  const createEntry = (id: string) => ({
    threshold: 0.2,
    onChange: (inView: boolean) => {
      if (inView) setActiveSection(id);
    },
  });

  const { ref: homeRef } = useInView(createEntry("home"));
  const { ref: workRef } = useInView(createEntry("work"));
  const { ref: toolsRef } = useInView(createEntry("tools"));
  const { ref: caseStudyRef } = useInView(createEntry("case-study"));

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection innerRef={homeRef} />

        {/* Work Section Placeholder */}
        <section
          ref={workRef}
          id="work"
          className="min-h-screen w-full flex items-center justify-center border-t border-white/5 bg-[#0a0a0a]"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">
              Selected Work
            </h2>
            <p className="text-gray-500">
              Showcasing digital products and experiments.
            </p>
          </div>
        </section>

        {/* Tools Section Placeholder */}
        <section
          ref={toolsRef}
          id="tools"
          className="min-h-screen w-full flex items-center justify-center border-t border-white/5 bg-[#0d0d0d]"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-gray-500">
              The tools I use to bring ideas to life.
            </p>
          </div>
        </section>

        {/* Case Study Section Placeholder */}
        <section
          ref={caseStudyRef}
          id="case-study"
          className="min-h-screen w-full flex items-center justify-center border-t border-white/5 bg-[#0a0a0a]"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Deep Dives</h2>
            <p className="text-gray-500">
              Case studies of complex engineering challenges.
            </p>
          </div>
        </section>
      </main>

      {/* Global CSS for Smooth Scrolling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        body { background-color: #0a0a0a; margin: 0; }
      `,
        }}
      />
    </div>
  );
}
