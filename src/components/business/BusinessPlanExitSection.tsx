import Image from "next/image";
import Link from "next/link";

import { WHATSAPP_SALES_URL } from "@/lib/contact";

export function BusinessPlanExitSection() {
  return (
    <section className="relative min-h-[min(100svh,640px)] w-full overflow-hidden">
      <Image
        src="/images/business-plan-exit-section@2x.png"
        alt="A university campus at dusk with students walking between buildings"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex min-h-[min(100svh,640px)] flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="max-w-[18ch] text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white">
          Prepare for the AI era
        </h2>

        <Link
          href={WHATSAPP_SALES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 min-w-[148px] items-center justify-center bg-[#008DFF] px-8 text-[15px] font-semibold text-white transition-colors hover:bg-[#0078E0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Talk to Sales
        </Link>
      </div>
    </section>
  );
}
