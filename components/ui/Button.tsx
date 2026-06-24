"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "dark" | "text-link" | "text-link-yellow";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  target,
  rel,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled = false,
  children,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans text-[10px] font-semibold tracking-[0.2em] uppercase transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-yellow text-black border border-yellow hover:bg-black hover:border-black hover:text-white px-7 py-3.5",
    secondary: "bg-grey-light text-black border border-grey-light hover:bg-black hover:border-black hover:text-white px-7 py-3.5",
    outline: "bg-transparent text-black border border-black/40 hover:border-black hover:bg-black hover:text-white px-7 py-3.5",
    "outline-white": "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white hover:text-black px-7 py-3.5",
    dark: "bg-black text-white hover:bg-charcoal border border-black px-7 py-3.5",
    "text-link": "bg-transparent text-black hover:text-yellow border-none p-0 inline-flex items-center gap-2 group tracking-[0.15em]",
    "text-link-yellow": "bg-transparent text-yellow hover:text-white border-none p-0 inline-flex items-center gap-2 group tracking-[0.15em]",
  };

  const combinedClasses = cn(baseStyles, variants[variant], className);

  const isLinkStyle = variant === "text-link" || variant === "text-link-yellow";

  const innerContent = (
    <span className="relative flex items-center gap-1">
      {children}
      {isLinkStyle && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick} target={target} rel={rel}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {innerContent}
    </button>
  );
}
