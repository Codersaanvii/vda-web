"use client";

import React from "react";
import StatBlock from "@/components/ui/StatBlock";
import { STATS } from "@/lib/constants";

export default function StatStrip() {
  return (
    <section className="bg-charcoal text-white py-12 md:py-16 border-b border-black relative overflow-hidden select-none">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        
        {/* Stat 1 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <StatBlock
            value={STATS[0].value}
            label={STATS[0].label}
            theme="dark"
          />
        </div>

        {/* Vertical Separator 1 (Centered, 1px hairline, 45% of strip height) */}
        <div className="hidden md:block w-[1px] h-12 bg-white/10 shrink-0 self-center" />

        {/* Stat 2 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <StatBlock
            value={STATS[1].value}
            label={STATS[1].label}
            theme="dark"
          />
        </div>

        {/* Vertical Separator 2 */}
        <div className="hidden md:block w-[1px] h-12 bg-white/10 shrink-0 self-center" />

        {/* Stat 3 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <StatBlock
            value={STATS[2].value}
            label={STATS[2].label}
            theme="dark"
          />
        </div>

      </div>
    </section>
  );
}
