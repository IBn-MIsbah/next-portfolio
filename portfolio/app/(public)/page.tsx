"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Link from "next/link";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import ContactSection from "@/components/Contact";
import ToolsSection from "@/components/Tools";
import WorkSection from "@/components/Work";
import CaseStudySection from "@/components/CaseStudy";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");

  // Helper function to create the observer config
  const createEntry = (id: string) => ({
    threshold: 0.3,
    onChange: (inView: boolean) => {
      if (inView) setActiveSection(id);
    },
  });

  const { ref: homeRef } = useInView(createEntry("home"));
  const { ref: workRef } = useInView(createEntry("work"));
  const { ref: toolsRef } = useInView(createEntry("tools"));
  const { ref: caseStudyRef } = useInView(createEntry("case-study"));
  const { ref: contactRef } = useInView(createEntry("contact"));

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection innerRef={homeRef} />

        <WorkSection innerRef={workRef} />

        <ToolsSection innerRef={toolsRef} />

        <CaseStudySection innerRef={caseStudyRef} />

        <ContactSection innerRef={contactRef} />

        <footer className="py-20 border-t border-white/5 bg-[#0a0a0a] text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Link href={"https://github.com/ibn-misbah"}>
              <Github
                className="text-gray-600 hover:text-white cursor-pointer"
                size={20}
              />
            </Link>
            <Link href={"https://x.com/Ibn_Misbah"}>
              <Twitter
                className="text-gray-600 hover:text-white cursor-pointer"
                size={20}
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/kawnullah-misbahudin-32711a338/"
              }
            >
              <Linkedin
                className="text-gray-600 hover:text-white cursor-pointer"
                size={20}
              />
            </Link>
            <Link href={"https://t.me/IBn_Misbaah"}>
              <Send
                className="text-gray-600 hover:text-white cursor-pointer"
                size={20}
              />
            </Link>
          </div>
          <p className="text-gray-600 text-sm font-mono tracking-tighter">
            &copy; {year} KAWNULLAH MISBAHUDIN —{" "}
            <span className="text-blue-500">IBN_MISBAH</span>
          </p>
        </footer>
      </main>

      {/* Global CSS for Smooth Scrolling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        body { background-color: #0a0a0a; margin: 0; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
}
