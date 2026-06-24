import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ECOSYSTEM } from "@/lib/constants";

export default function Ecosystem() {
  return (
    <section className="bg-white py-32 md:py-40 border-b border-grey-light/30 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          eyebrow="Our Network"
          heading="Our Professional Ecosystem"
          subheading="We collaborate with India's leading specialized consultants and fit-out partners to guarantee compliance, speed, and design integrity on every build."
          align="left"
        />

        {/* Typographic list index matching Industries layout motif */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 mt-16 border-t border-grey-light/45">
          {ECOSYSTEM.map((partner, index) => {
            const displayIndex = String(index + 1).padStart(2, "0");
            
            return (
              <div
                key={index}
                className="group border-b border-grey-light/45 py-6 flex items-baseline gap-6 cursor-pointer"
              >
                {/* Index Numeral */}
                <span className="text-[10px] font-sans font-medium text-grey/40 group-hover:text-yellow transition-colors duration-500 w-6 shrink-0 select-none">
                  {displayIndex}
                </span>

                {/* Partner label shifting slightly right on hover */}
                <span className="font-sans font-light text-black text-base sm:text-lg group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {partner}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
