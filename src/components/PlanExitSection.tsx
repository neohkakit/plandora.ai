import Image from "next/image";
import Link from "next/link";

import { WAITLIST_MIND_URL } from "@/lib/contact";

export function PlanExitSection() {
  return (
    <section className="relative min-h-[min(100svh,640px)] w-full overflow-hidden">
      <Image
        src="/images/plan-exit-section@2x.jpg"
        alt="A person working at a desk at night with fireworks over the city outside"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex min-h-[min(100svh,640px)] flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="max-w-[18ch] text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white">
          Plan your exit, tonight
        </h2>

        <Link
          href={WAITLIST_MIND_URL}
          className="mt-8 inline-flex min-h-12 min-w-[148px] items-center justify-center bg-brand-pink px-8 text-[15px] font-semibold text-white transition-colors hover:bg-brand-pink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
