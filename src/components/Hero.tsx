import Image from "next/image";
import Link from "next/link";

import { WAITLIST_MIND_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="business"
      className="grid min-h-[calc(100svh-50px)] flex-1 bg-white md:grid-cols-12"
    >
      <div
        id="about"
        className="flex h-[500px] shrink-0 flex-col justify-start px-6 py-10 sm:px-10 md:col-span-4 md:items-start md:px-6 md:py-10 lg:px-8"
      >
        <h1 className="mt-[100px] flex flex-col items-start gap-0.5 text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.28] tracking-[-0.035em] text-[#2c2c2c]">
          <span>1 person</span>
          <span>$1M business</span>
          <span>24/7</span>
        </h1>

        <p className="mt-10 max-w-[310px] text-[18px] font-medium leading-[1.22] tracking-[-0.02em] text-[#292929] lg:text-[19.2px]">
          Plandora creates your <strong className="font-bold">digital mind</strong>.
          <br />
          Answers repeated questions, like you.
          <br />
          Sells your products, like you.
          <br />
          Recommends affiliates, like you.
          <br />
          Runs and improve your business,{" "}
          <strong className="font-bold">24/7</strong>.
        </p>

        <Link
          href={WAITLIST_MIND_URL}
          className="mt-[120px] inline-flex min-h-14 w-full max-w-[195px] items-center justify-center bg-brand-pink px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-pink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-pink"
        >
          Get Started
        </Link>
      </div>

      <div className="relative min-h-[55svh] overflow-hidden md:col-span-8 md:min-h-0">
        <Image
          src="/images/business-hero.png"
          alt="A warmly lit home office overlooking a city at dusk"
          fill
          priority
          sizes="(min-width: 768px) 66.67vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
