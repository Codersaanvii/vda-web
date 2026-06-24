import React from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";

// Deliverables mock details for B2B depth
const serviceDeliverables = [
  [
    "Growth & head-count projection mapping",
    "Departmental adjacency matrix designs",
    "Flexible/hybrid work policy structural integration",
    "Employee workspace sentiment surveys & auditing",
  ],
  [
    "Optimized circulation and occupancy layouts",
    "Emergency escape and egress compliance planning",
    "Filing and submission blueprints for municipal code",
    "Detailed zoning maps and spatial partitions",
  ],
  [
    "Custom thematic material boards & tactile styling",
    "Ergonomic furniture and acoustics integrations",
    "Visual renders and high-fidelity walkthroughs",
    "Lighting architecture & lumen level planning",
  ],
  [
    "Comprehensive Good For Construction (GFC) drawings",
    "Bespoke millwork and joinery shop drawings",
    "Complete Bill of Quantities (BoQ) drafting",
    "Detailed specifications for technical bidding",
  ],
  [
    "Seamless clash-detection across MEP & HVAC systems",
    "Structural coordination and weight capacity checks",
    "Low-voltage and IT cabling path routing details",
    "Integrated ceiling and partition layout designs",
  ],
  [
    "Unified aesthetic guidelines for specialized vendors",
    "Review of structural, HVAC, and electrical shop drawings",
    "Conducting design alignment coordination meets",
    "Resolving site-specific engineering conflicts",
  ],
  [
    "Regular site inspections and design conformity audits",
    "Mock-up approvals for materials and finishes",
    "Technical snagging lists and defect corrections",
    "As-Built drawing compliance checks and verification",
  ],
];

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
              
              {SERVICES.map((service, index) => {
                const deliverables = serviceDeliverables[index] || [];

                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-grey-light/45 pt-16 group"
                  >
                    {/* Column 1: Number & Title & Description */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
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

                    {/* Column 2: Deliverables Checklist (Typographic, no boxed container) */}
                    <div className="lg:col-span-6 lg:col-start-7 pt-2">
                      <h3 className="flex items-center gap-2 text-[10px] font-sans font-medium tracking-[0.22em] text-black uppercase mb-8 select-none">
                        <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
                        <span>Key Deliverables & Responsibilities</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-baseline gap-3 py-2 border-b border-grey-light/30">
                            {/* Quiet yellow dash matching WhyChooseVDA motif */}
                            <span className="text-yellow font-light select-none">
                              —
                            </span>
                            <span className="text-sm font-sans font-light text-grey leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

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
