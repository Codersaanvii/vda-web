"use client";

import React from "react";

export default function CTAStrip() {
  return (
    <section className="bg-yellow text-black py-24 md:py-32 border-b border-yellow-dim relative overflow-hidden">
      
      {/* Bottom-Right Balancing Grid Lines (Lowest z-index above the yellow background) */}
      <svg 
        className="absolute bottom-0 right-0 pointer-events-none select-none z-0" 
        width="400" 
        height="400" 
        style={{ opacity: 0.09 }}
      >
        <defs>
          <pattern id="smallGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1C1C1C" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#smallGrid)" />
      </svg>

      {/* Absolute Background Blueprint Graphic Layer */}
      <div 
        className="absolute top-[-10%] left-[-15%] sm:left-[-12%] md:top-[-15%] md:left-[-6%] lg:top-[-20%] lg:left-[-4%] w-[550px] sm:w-[680px] md:w-[800px] lg:w-[950px] aspect-[4/3] opacity-[0.13] select-none pointer-events-none z-[1] transform -rotate-[18deg] text-black"
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-black"
        >
          {/* Grid lines in the background of the blueprint */}
          <path d="M 0 50 L 800 50 M 0 100 L 800 100 M 0 150 L 800 150 M 0 200 L 800 200 M 0 250 L 800 250 M 0 300 L 800 300 M 0 350 L 800 350 M 0 400 L 800 400 M 0 450 L 800 450 M 0 500 L 800 500 M 0 550 L 800 550" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
          <path d="M 50 0 L 50 600 M 100 0 L 100 600 M 150 0 L 150 600 M 200 0 L 200 600 M 250 0 L 250 600 M 300 0 L 300 600 M 350 0 L 350 600 M 400 0 L 400 600 M 450 0 L 450 600 M 500 0 L 500 600 M 550 0 L 550 600 M 600 0 L 600 600 M 650 0 L 650 600 M 700 0 L 700 600 M 750 0 L 750 600" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />

          {/* Outer Wall Boundary */}
          <rect x="60" y="60" width="680" height="480" stroke="currentColor" strokeWidth="1.5" />
          <rect x="64" y="64" width="672" height="472" stroke="currentColor" strokeWidth="0.8" />

          {/* Columns/Structural Pillars */}
          <rect x="180" y="60" width="16" height="16" fill="currentColor" />
          <rect x="360" y="60" width="16" height="16" fill="currentColor" />
          <rect x="540" y="60" width="16" height="16" fill="currentColor" />
          
          <rect x="180" y="300" width="16" height="16" fill="currentColor" />
          <rect x="360" y="300" width="16" height="16" fill="currentColor" />
          <rect x="540" y="300" width="16" height="16" fill="currentColor" />
          
          <rect x="180" y="524" width="16" height="16" fill="currentColor" />
          <rect x="360" y="524" width="16" height="16" fill="currentColor" />
          <rect x="540" y="524" width="16" height="16" fill="currentColor" />

          {/* Internal Room Dividers */}
          <line x1="60" y1="200" x2="300" y2="200" stroke="currentColor" strokeWidth="1.2" />
          <line x1="300" y1="60" x2="300" y2="200" stroke="currentColor" strokeWidth="1.2" />
          <line x1="300" y1="200" x2="500" y2="200" stroke="currentColor" strokeWidth="1.2" />
          <line x1="500" y1="200" x2="500" y2="380" stroke="currentColor" strokeWidth="1.2" />
          <line x1="300" y1="380" x2="500" y2="380" stroke="currentColor" strokeWidth="1.2" />
          <line x1="300" y1="380" x2="300" y2="540" stroke="currentColor" strokeWidth="1.2" />
          <line x1="540" y1="200" x2="740" y2="200" stroke="currentColor" strokeWidth="1.2" />
          <line x1="540" y1="60" x2="540" y2="200" stroke="currentColor" strokeWidth="1.2" />

          {/* Desk/Chair layout representation inside Conference Room A */}
          <rect x="100" y="100" width="120" height="50" stroke="currentColor" strokeWidth="0.8" rx="2" />
          <circle cx="120" cy="85" r="6" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="160" cy="85" r="6" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="200" cy="85" r="6" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="120" cy="165" r="6" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="160" cy="165" r="6" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="200" cy="165" r="6" stroke="currentColor" strokeWidth="0.8" />

          {/* Doors and Swings */}
          <line x1="300" y1="170" x2="300" y2="140" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 300 140 A 30 30 0 0 0 270 170" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="300" y1="170" x2="270" y2="170" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          
          <line x1="430" y1="540" x2="400" y2="540" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 400 540 A 30 30 0 0 0 370 510" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="370" y1="540" x2="370" y2="510" stroke="currentColor" strokeWidth="1.2" />

          <line x1="430" y1="540" x2="460" y2="540" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 460 540 A 30 30 0 0 1 490 510" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="490" y1="540" x2="490" y2="510" stroke="currentColor" strokeWidth="1.2" />

          {/* Measurement Dimension Lines & Ticks */}
          <line x1="60" y1="35" x2="740" y2="35" stroke="currentColor" strokeWidth="0.8" />
          <line x1="60" y1="30" x2="60" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="740" y1="30" x2="740" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="58" y1="37" x2="62" y2="33" stroke="currentColor" strokeWidth="1" />
          <line x1="738" y1="37" x2="742" y2="33" stroke="currentColor" strokeWidth="1" />
          <text x="400" y="28" fill="currentColor" fontSize="10" fontFamily="sans-serif" letterSpacing="0.1em" textAnchor="middle">48.50m</text>

          <line x1="35" y1="60" x2="35" y2="540" stroke="currentColor" strokeWidth="0.8" />
          <line x1="30" y1="60" x2="40" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="540" x2="40" y2="540" stroke="currentColor" strokeWidth="1" />
          <line x1="33" y1="62" x2="37" y2="58" stroke="currentColor" strokeWidth="1" />
          <line x1="33" y1="542" x2="37" y2="538" stroke="currentColor" strokeWidth="1" />
          <text x="24" y="300" fill="currentColor" fontSize="10" fontFamily="sans-serif" letterSpacing="0.1em" textAnchor="middle" transform="rotate(-90 24 300)">34.20m</text>

          <line x1="300" y1="220" x2="500" y2="220" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
          <text x="400" y="215" fill="currentColor" fontSize="8" fontFamily="sans-serif" opacity="0.6" textAnchor="middle">14.28m</text>

          {/* Technical Text Labels */}
          <text x="180" y="190" fill="currentColor" fontSize="8" fontFamily="sans-serif" letterSpacing="0.2em" opacity="0.85">CONF. ROOM A</text>
          <text x="400" y="300" fill="currentColor" fontSize="8" fontFamily="sans-serif" letterSpacing="0.2em" opacity="0.85">WORKSTATIONS B</text>
          <text x="640" y="190" fill="currentColor" fontSize="8" fontFamily="sans-serif" letterSpacing="0.2em" opacity="0.85">EXEC. SUITE C</text>
          
          <text x="80" y="500" fill="currentColor" fontSize="7" fontFamily="sans-serif" opacity="0.5">DETAIL REF: VDA-7.11</text>
          <text x="640" y="500" fill="currentColor" fontSize="7" fontFamily="sans-serif" opacity="0.5">SCALE: 1:100</text>
        </svg>
      </div>

      {/* Grid Layout over background blueprint */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full min-h-[300px] md:min-h-[400px]">
        {/* Left Spacer to push text to the right ~50-55% zone */}
        <div className="hidden lg:block lg:col-span-5" />
        
        {/* Right Zone: Headline and Copy (Vertically centered) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
          <span className="text-[10px] font-sans font-medium tracking-[0.25em] text-black/60 uppercase">
            {"// "}Collaborate With Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-black tracking-tight max-w-2xl">
            Ready to Transform <br className="hidden sm:inline" /> Your Workplace?
          </h2>
          <p className="text-sm sm:text-base font-sans font-light text-black/75 max-w-md leading-relaxed">
            Let&apos;s create something that performs as well as it looks — get in touch and let&apos;s talk design.
          </p>
        </div>
      </div>

    </section>
  );
}
