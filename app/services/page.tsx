import React from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";


export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        
        {/* Header Block in dark charcoal, oversized typography */}
        <section className="bg-charcoal text-white py-32 border-b border-black">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.25em] text-yellow uppercase select-none">
              <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
              <span>Our Expertise</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.03em] max-w-4xl leading-tight">
              A Complete Architectural Delivery Framework
            </h1>
            <p className="mt-8 text-base md:text-lg font-sans font-light text-grey-light/60 max-w-2xl leading-relaxed">
              We manage the entire lifecycle of commercial design, coordinating specialized engineers and vendors to ensure your space performs flawlessly.
            </p>
          </div>
        </section>

        {/* Detailed Services Overview - Redesigned, clean lines, no cards */}
        <section className="bg-white py-32 md:py-40 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col gap-24 md:gap-32">
              
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 border-t border-grey-light/45 pt-16 group max-w-4xl"
                >
                  <span className="font-serif text-3xl md:text-4xl text-yellow font-light select-none">
                    {service.number}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-black font-light leading-snug tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-[15px] sm:text-base font-sans font-light text-grey leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Closing CTA Strip - Solid Yellow Background */}
        <section className="bg-yellow text-black py-32 border-t border-yellow-dim relative overflow-hidden text-center flex flex-col items-center justify-center gap-6">
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-black tracking-tight">
              Need a Function-Led Layout for Your Office?
            </h2>
            <p className="text-sm md:text-base font-sans font-light text-black/75 max-w-sm mx-auto leading-relaxed">
              Book a consulting session to audit your current workspace flow and departments layout.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="text-link" className="text-xs text-black hover:text-black/70 transition-colors">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
