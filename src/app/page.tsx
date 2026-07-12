import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PlanExitSection } from "@/components/PlanExitSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <PlanExitSection />
    </div>
  );
}
