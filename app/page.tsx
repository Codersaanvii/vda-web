import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatStrip from "@/components/sections/StatStrip";
import Industries from "@/components/sections/Industries";
import StoryPhilosophy from "@/components/sections/StoryPhilosophy";
import Pillars from "@/components/sections/Pillars";
import ProjectsMosaic from "@/components/sections/ProjectsMosaic";
import Services from "@/components/sections/Services";
import WhyChooseVDA from "@/components/sections/WhyChooseVDA";
import Ecosystem from "@/components/sections/Ecosystem";
import VisionMission from "@/components/sections/VisionMission";
import CTAStrip from "@/components/sections/CTAStrip";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatStrip />
        <Industries />
        <StoryPhilosophy />
        <Pillars />
        <ProjectsMosaic />
        <Services />
        <WhyChooseVDA />
        <Ecosystem />
        <VisionMission />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
