import type { Metadata } from "next";

import { AboutAudio } from "@/components/AboutAudio";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Plandora",
  description:
    "Plandora's vision: a digital mind that runs your business like you, so you can plan your corporate exit.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Navbar />

      <main className="flex justify-center px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <article className="w-full max-w-[680px] px-[50px] text-left">
          <p className="mb-6 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-[#292929]">
            Written by @kitneoh, 12 July 2026.
          </p>

          <h1 className="mb-5 text-[clamp(2rem,5vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.035em]">
            1 person. $1M business. 24/7.
          </h1>

          <AboutAudio />

          <div className="mt-5 space-y-6 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-[#292929] lg:text-base">
            <p>
              I was made redundant in June 2023. No backup plan. Like most people,
              I started job hunting but I couldn&apos;t see myself going back to the
              corporate world.
            </p>

            <p>
              Here&apos;s the uncomfortable truth: in the AI era, job security
              doesn&apos;t really exist anymore. Gone are the days of comfortably
              sitting in a role for 5+ years. Software engineers, product managers,
              marketers, consultants — every month are made redundant.
            </p>

            <p>
              Sam Altman predicted we&apos;d see a 1-person $1 billion company.
              It&apos;s already happening. But $1B isn&apos;t the point for most of us.
              What&apos;s actually achievable for all of us, right now, with agentic tools
              is a $50K business. Then $100K. Then $500K. Then $1M.
            </p>

            <p>
              And here&apos;s what we believe at Plandora: the best agent to run your
              business isn&apos;t some generic AI.
              <br />
              It&apos;s <strong className="font-bold">YOU</strong>.
              <br />
              Your knowledge.
              <br />
              Your experience.
              <br />
              Your way of talking to customers and followers.
            </p>

            <p>
              That&apos;s why we built the{" "}
              <strong className="font-bold">digital mind</strong>{" "}
              first. It answers your
              customers&apos; repeated questions, sells your products, recommends what
              you&apos;d recommend.
            </p>

            <p>
              And soon, autonomously: replying to DMs and comments, drafting emails,
              finding content ideas from your own content, scanning competitors,
              creating landing pages and apps.
            </p>

            <p>
              Here&apos;s the magic: it keeps learning and remembering so it gets
              better at running your business every single day.
            </p>

            <p>
              We are building the possibility for the first step toward your corporate
              exit. This is Plandora&apos;s mission.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
