"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT_DETAILS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Floating style with persistent white background and lift shadow
  const navTheme = (isScrolled || !isHomePage)
    ? "bg-white/95 text-black border-b border-grey-light/45 shadow-lg backdrop-blur-md"
    : "bg-white/90 text-black border-b border-grey-light/25 shadow-sm backdrop-blur-md";

  const logoTextClass = isMobileMenuOpen ? "text-white" : "text-black";
  const logoSubtextClass = isMobileMenuOpen ? "text-white/60" : "text-grey";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-600 py-4 px-6 md:px-12",
          navTheme
        )}
      >
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* VDA Custom Logo Image */}
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <Image
                src="/images/general/logo.png"
                alt="VDA Logo"
                fill
                sizes="32px"
                className={cn(
                  "object-contain transition-all duration-500",
                  isMobileMenuOpen ? "invert" : ""
                )}
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif text-[15px] leading-none tracking-[0.05em] font-light transition-colors duration-500",
                logoTextClass
              )}>
                VDA
              </span>
              <span className={cn(
                "font-sans text-[7px] tracking-[0.3em] font-light uppercase mt-1 transition-colors duration-500",
                logoSubtextClass
              )}>
                Vinay Desai Architects
              </span>
            </div>
          </Link>

          {/* Understated Links (No bold backgrounds, thin hover underline) */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[10px] font-medium tracking-[0.2em] uppercase py-1 transition-colors duration-300 hover:text-yellow/90",
                    isActive ? "text-black font-semibold" : "text-black/80"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-yellow"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA: Small filled yellow pill button */}
          <div className="hidden md:block">
            <Button
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="rounded-full px-5 py-2 text-[9px]"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 -mr-2 focus:outline-none transition-colors duration-500",
              isMobileMenuOpen ? "text-white" : "text-black"
            )}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/98 z-40 flex flex-col justify-between p-8 md:hidden text-white"
          >
            <div className="h-16" />

            <nav className="flex flex-col gap-8 justify-center items-center flex-grow">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "font-serif text-2xl font-light tracking-[0.18em] uppercase transition-colors duration-300 block text-center",
                        isActive ? "text-yellow underline underline-offset-8 decoration-1" : "text-white/80 hover:text-yellow"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6 border-t border-charcoal pt-6"
            >
              <Button
                href={CONTACT_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="text-link-yellow"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center py-2"
              >
                Get in Touch
              </Button>
              <div className="text-[8px] tracking-[0.25em] text-grey-light/40 uppercase">
                CBD Belapur, Navi Mumbai
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
