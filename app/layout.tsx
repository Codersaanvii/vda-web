import type { Metadata } from "next";
import { Schibsted_Grotesk, Fraunces } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Vinay Desai Architects (VDA) | Strategic Workplace & Commercial Interior Design",
  description: "Vinay Desai Architects (VDA) has 25+ years of experience delivering 450+ commercial interior projects across 10 lakh+ sq ft in Navi Mumbai and across India.",
  metadataBase: new URL("https://www.vdaarchitects.com"),
  openGraph: {
    title: "Vinay Desai Architects (VDA)",
    description: "Strategic Workplace & Commercial Interior Design. From Square Foot to Square Inch.",
    url: "https://www.vdaarchitects.com",
    siteName: "VDA Architects",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-grey font-sans flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
