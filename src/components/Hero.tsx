import Image from "next/image";
import Link from "next/link";

import { WAITLIST_MIND_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="business"
      className="grid min-h-[calc(100svh-50px)] flex-1 bg-white lg:grid-cols-12"
    >
      <div
        id="about"
        className="flex shrink-0 flex-col justify-between px-6 py-10 sm:px-10 lg:col-span-4 lg:min-h-[calc(100svh-50px)] lg:items-start lg:px-8 lg:py-10"
      >
        <div className="flex flex-col gap-4 max-md:pt-[60px]">
          <h1 className="flex flex-col items-start gap-0.5 text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.28] tracking-[-0.035em] text-[#2c2c2c]">
            <span>1 person</span>
            <span>$1M business</span>
            <span>24/7</span>
          </h1>

          <p className="max-w-[310px] text-[18px] font-medium leading-[1.22] tracking-[-0.02em] text-[#292929] lg:text-[19.2px]">
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
        </div>

        <Link
          href={WAITLIST_MIND_URL}
          className="mt-8 inline-flex min-h-14 w-full max-w-[195px] items-center justify-center bg-brand-pink px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-pink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-pink lg:mt-6"
        >
          Get Started
        </Link>
      </div>

      <div className="relative hidden overflow-hidden lg:col-span-8 lg:block lg:min-h-0">
        <Image
          src="/images/business-hero.jpg"
          alt="A warmly lit home office overlooking a city at dusk"
          fill
          priority
          sizes="66.67vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
