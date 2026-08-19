import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesIndex } from "@/components/sections/ServicesIndex";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedWork />
      <ServicesIndex />
      <CTASection />
    </>
  );
}
