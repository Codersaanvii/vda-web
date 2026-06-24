import React from "react";
import { CONTACT_DETAILS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* 4-column contact bar with hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
          
          {/* Column 1: Write To Us */}
          <div className="border-b border-white/10 md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 p-6 md:p-8 flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans font-medium">
              Write To Us
            </h4>
            <p className="text-xs font-sans font-light text-grey-light/60 leading-relaxed">
              For submissions, inquiries and collaboration opportunities:
            </p>
            <a
              href="mailto:info@vdaarchitects.com"
              className="text-xs font-sans font-light text-white hover:text-yellow transition-colors duration-300 w-fit"
            >
              info@vdaarchitects.com
            </a>
          </div>

          {/* Column 2: Meet Us */}
          <div className="border-b border-white/10 md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 p-6 md:p-8 flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans font-medium">
              Meet Us
            </h4>
            <p className="text-xs font-sans font-light text-grey-light/60 leading-relaxed">
              CBD Belapur, Navi Mumbai
            </p>
          </div>



          {/* Column 4: Socials */}
          <div className="border-b border-white/10 md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 p-6 md:p-8 flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans font-medium">
              Socials
            </h4>
            <div className="flex flex-col gap-2">
              {/* Socials */}
              <a
                href={CONTACT_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-light text-grey-light/60 hover:text-yellow transition-colors duration-300 w-fit"
              >
                Instagram ↗
              </a>
              <a
                href={CONTACT_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-light text-grey-light/60 hover:text-yellow transition-colors duration-300 w-fit"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans font-light tracking-[0.1em] text-grey-light/30">
          <div>
            © {currentYear} Vinay Desai Architects. All rights reserved.
          </div>
          <div>
            Strategic Commercial Design
          </div>
        </div>

      </div>
    </footer>
  );
}
