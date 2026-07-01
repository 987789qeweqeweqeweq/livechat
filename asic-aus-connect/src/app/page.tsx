import { SiteHeader } from "@/components/SiteHeader";
import { HeroSearch } from "@/components/HeroSearch";
import { JumpNav } from "@/components/JumpNav";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { LatestNews } from "@/components/LatestNews";
import { WhatWeDo } from "@/components/WhatWeDo";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import {
  InvestigationsSection,
  DealingWithASICSection,
} from "@/components/FeatureBlock";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSearch />
        <JumpNav />
        <FeaturedCarousel />
        <LatestNews />
        <WhatWeDo />
        <ResourcesGrid />
        <InvestigationsSection />
        <DealingWithASICSection />
      </main>
      <SiteFooter />
    </>
  );
}
