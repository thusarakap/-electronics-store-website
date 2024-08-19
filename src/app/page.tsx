import { HeroSection } from "@/components/home/HeroSection";
import { SpecialOffersSection } from "@/components/home/SpecialOffersSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";

export default function Home() {
  return (
    <main className="flex-1">
        <HeroSection />
        <SpecialOffersSection />
        <CategoriesSection />
    </main>
  );
}
