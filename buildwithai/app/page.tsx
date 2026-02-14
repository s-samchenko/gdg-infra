"use client";
import dynamic from "next/dynamic";
import AgendaTeaser from "@buildwithai/sections/AgendaTeaser";
import Contact from "@buildwithai/sections/Contact";
import FAQ from "@buildwithai/sections/FAQ";
import Speakers from "@buildwithai/sections/Speakers";
import Sponsors from "@buildwithai/sections/Sponsors";
import WorkshopsPreview from "@buildwithai/sections/WorkshopsPreview";
import { HeroSection } from "@buildwithai//sections/Herosection";
import { StatsSection } from "@buildwithai//sections/Statssection";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        {/* Content sections with space theme background */}
        <div className="relative bg-gradient-to-b from-black/50 via-[#0a0a1f]/80 to-black/50">
          <StatsSection />
          <Speakers />
          <AgendaTeaser />
          <WorkshopsPreview />
          <Sponsors />
          <FAQ />
          <Contact />
        </div>
      </div>
    </main>
  );
}
