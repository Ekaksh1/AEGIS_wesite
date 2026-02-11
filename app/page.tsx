import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeBar } from "@/components/marquee-bar";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { HowItWorks } from "@/components/how-it-works";
import { Architecture } from "@/components/architecture";
import { TechStack } from "@/components/tech-stack";
import { UseCases } from "@/components/use-cases";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <Features />
        <Stats />
        <HowItWorks />
        <Architecture />
        <TechStack />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
