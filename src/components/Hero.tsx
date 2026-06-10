import { HeroCarousel } from "@/components/HeroCarousel";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex-1 bg-black">
      <HeroCarousel />
    </section>
  );
}
