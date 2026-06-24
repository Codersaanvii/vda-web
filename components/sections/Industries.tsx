import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section className="bg-off-white py-32 md:py-40 border-b border-grey-light/30 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          heading="Trusted Across Sectors"
          subheading="We deliver tailored, regulatory-compliant, and high-performance design solutions across a diverse spectrum of commercial industries."
          align="left"
        />

        {/* Typographic list grid (2 columns on desktop) with hairline rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 mt-16 border-t border-grey-light/45">
          {INDUSTRIES.map((industry, index) => {
            const displayIndex = String(index + 1).padStart(2, "0");
            
            return (
              <div
                key={index}
                className="group border-b border-grey-light/45 py-6 flex items-baseline gap-6 cursor-pointer"
              >
                {/* Index Numeral in grey, turns yellow on hover */}
                <span className="text-[10px] font-sans font-medium text-grey/40 group-hover:text-yellow transition-colors duration-500 w-6 shrink-0 select-none">
                  {displayIndex}
                </span>

                {/* Industry Label: quiet, sans-serif, shifts right on hover */}
                <span className="font-sans font-light text-black text-base sm:text-lg group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
