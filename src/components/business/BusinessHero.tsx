import Image from "next/image";
import Link from "next/link";

import { WHATSAPP_SALES_URL } from "@/lib/contact";

export function BusinessHero() {
  return (
    <section
      id="business"
      className="grid min-h-[calc(100svh-50px)] flex-1 bg-white lg:grid-cols-12"
    >
      <div
        id="about"
        className="flex min-h-[calc(100svh-50px)] shrink-0 flex-col justify-between px-6 py-6 sm:px-10 lg:col-span-4 lg:items-start lg:px-8"
      >
        <div className="flex flex-col gap-4">
          <h1 className="flex flex-col items-start gap-0.5 text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.28] tracking-[-0.035em] text-[#2c2c2c]">
            <span>AI Agent</span>
            <span>Education</span>
            <span>Sales Support</span>
            <span>24/7</span>
          </h1>

          <p className="max-w-[310px] text-[16.2px] font-medium leading-[1.22] tracking-[-0.02em] text-[#292929] lg:text-[17.28px]">
            Plandora creates your <strong className="font-bold">digital mind</strong> to answer repeated questions, like you,
            <br />
            qualify leads, like you,
            <br />
            collect leads, like you,
            <br />
            convert leads, like you,
            <br />
            Run and improve your business,{" "}
            <strong className="font-bold">24/7</strong>.
          </p>

          <div>
            <p className="text-[13px] font-medium tracking-[-0.01em] text-[#6b6b6b]">
              Trusted by
            </p>
            <Image
              src="/images/trust-by-smu.png"
              alt="SMU Institute of Innovation and Entrepreneurship"
              width={117}
              height={117}
              className="mt-2 h-auto w-[117px] object-contain"
            />
          </div>
        </div>

        <Link
          href={WHATSAPP_SALES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-14 w-full max-w-[195px] items-center justify-center bg-[#008DFF] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#0078E0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008DFF]"
        >
          Talk to Sales
        </Link>
      </div>

      <div className="relative hidden overflow-hidden lg:col-span-8 lg:block lg:min-h-0">
        <Image
          src="/images/business-page-hero.jpg"
          alt="A library with tall bookshelves overlooking an autumn sunset"
          fill
          priority
          sizes="66.67vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
