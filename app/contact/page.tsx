"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT_DETAILS } from "@/lib/constants";

export default function Contact() {
  const labelClass = "text-[9px] font-sans font-light tracking-[0.2em] text-grey/60 uppercase";

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        
        {/* Header Block in dark charcoal, oversized typography */}
        <section className="bg-charcoal text-white py-32 border-b border-black">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.25em] text-yellow uppercase select-none">
              <span className="w-1.5 h-1.5 bg-yellow shrink-0" />
              <span>Contact Us</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.03em] max-w-4xl leading-tight">
              Get in Touch with Our Studio
            </h1>
            <p className="mt-8 text-base md:text-lg font-sans font-light text-grey-light/60 max-w-2xl leading-relaxed">
              Reach out to VDA&apos;s workspace planners and design architects. We are ready to help you optimize every square inch.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-white py-32 md:py-40 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Office details */}
              <div className="col-span-1 lg:col-span-6 flex flex-col pr-0 lg:pr-12">
                <SectionHeading
                  eyebrow="Our Studio"
                  heading="Vinay Desai Architects HQ"
                  className="mb-8"
                />
                <p className="text-base font-sans font-light text-grey leading-relaxed max-w-lg">
                  Our design and compliance studio is located in the business center of CBD Belapur, Navi Mumbai. Stop by for an in-person layout consultation or material board review.
                </p>
              </div>

              {/* Right Column: Details List (centered divider layout style) */}
              <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t lg:border-t-0 lg:border-l border-grey-light/45 pt-12 lg:pt-0 lg:pl-16">
                
                <div className="flex items-start gap-4">
                  <div className="text-yellow shrink-0 mt-0.5 select-none">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className={`${labelClass} mb-2`}>
                      Address
                    </h4>
                    <p className="text-sm font-sans font-light text-grey leading-relaxed">
                      {CONTACT_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-yellow shrink-0 mt-0.5 select-none">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className={`${labelClass} mb-2`}>
                      Phone Call
                    </h4>
                    <p className="text-sm font-sans font-light text-grey">
                      <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-yellow transition-colors duration-300">
                        {CONTACT_DETAILS.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-yellow shrink-0 mt-0.5 select-none">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className={`${labelClass} mb-2`}>
                      Email Inquiry
                    </h4>
                    <p className="text-sm font-sans font-light text-grey">
                      <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-yellow transition-colors duration-300">
                        {CONTACT_DETAILS.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-yellow shrink-0 mt-0.5 select-none">
                    <Clock size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className={`${labelClass} mb-2`}>
                      Business Hours
                    </h4>
                    <p className="text-sm font-sans font-light text-grey">
                      {CONTACT_DETAILS.hours}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
