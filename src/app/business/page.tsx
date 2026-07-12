import type { Metadata } from "next";

import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessNavbar } from "@/components/business/BusinessNavbar";
import { BusinessPlanExitSection } from "@/components/business/BusinessPlanExitSection";

export const metadata: Metadata = {
  title: "Business | Plandora",
  description:
    "Plandora creates your digital mind — answers questions, qualifies leads, and runs your business 24/7.",
};

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BusinessNavbar />
      <BusinessHero />
      <BusinessPlanExitSection />
    </div>
  );
}
