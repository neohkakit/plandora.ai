"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const EYEBROW = "Your, Mind-in-Bio";
const CTA_LABEL = "Join the waitlist";
const CTA_HREF = "https://plandora.com/waitlist/mind/";

const SLIDES = [
  {
    src: "/images/hero-1.gif",
    lines: ["Link-in-bio", "that thinks"],
    subtext:
      "We marry storytelling and sales\nso creators and businesses can\nturn aspirations into actions.",
  },
  {
    src: "/images/hero-2.gif",
    lines: ["Higher", "Conversion"],
    subtext:
      "Your mind-in-bio does the\nconvincing turning followers\nwith zero intent into customers\nready to buy.",
  },
  {
    src: "/images/hero-3.gif",
    lines: ["Never Miss", "Opportunities"],
    subtext:
      "Your mind-in-bio never misses an opportunity to sell, convert and capture leads in your personality.",
  },
] as const;

const FALLBACK_DURATION_MS = 5000;

async function getGifLoopDurationMs(src: string): Promise<number> {
  if (typeof ImageDecoder === "undefined") {
    return FALLBACK_DURATION_MS;
  }

  try {
    const response = await fetch(src);
    const data = new Uint8Array(await response.arrayBuffer());
    const decoder = new ImageDecoder({ data, type: "image/gif" });
    await decoder.decode({ frameIndex: 0 });

    const track = decoder.tracks.selectedTrack;
    if (!track) {
      decoder.close();
      return FALLBACK_DURATION_MS;
    }

    const frameCount = track.frameCount;
    let total = 0;

    for (let frameIndex = 0; frameIndex < frameCount; frameIndex++) {
      const result = await decoder.decode({ frameIndex });
      const frameMs = (result.image.duration ?? 100_000) / 1000;
      total += frameMs;
      result.image.close();
    }

    decoder.close();
    return total > 0 ? total : FALLBACK_DURATION_MS;
  } catch {
    return FALLBACK_DURATION_MS;
  }
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playKey, setPlayKey] = useState(0);
  const [gifReady, setGifReady] = useState(false);
  const [durationsLoaded, setDurationsLoaded] = useState(false);
  const [durations, setDurations] = useState<number[]>(
    () => SLIDES.map(() => FALLBACK_DURATION_MS),
  );
  const imgRef = useRef<HTMLImageElement>(null);
  const imageLoadedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    void Promise.all(SLIDES.map((slide) => getGifLoopDurationMs(slide.src))).then(
      (nextDurations) => {
        if (!cancelled) {
          setDurations(nextDurations);
          setDurationsLoaded(true);
        }
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  const currentDuration = durations[index] ?? FALLBACK_DURATION_MS;
  const activeSlide = SLIDES[index];
  const canPlay = gifReady && durationsLoaded;

  const tryStartPlayback = useCallback(() => {
    if (imageLoadedRef.current && durationsLoaded) {
      setGifReady(true);
    }
  }, [durationsLoaded]);

  const restartSlide = useCallback((slideIndex: number) => {
    imageLoadedRef.current = false;
    setGifReady(false);
    setIndex(slideIndex);
    setPlayKey((key) => key + 1);
  }, []);

  const advanceSlide = useCallback(() => {
    imageLoadedRef.current = false;
    setGifReady(false);
    setIndex((current) => (current + 1) % SLIDES.length);
    setPlayKey((key) => key + 1);
  }, []);

  const handleImageReady = useCallback(() => {
    imageLoadedRef.current = true;
    tryStartPlayback();
  }, [tryStartPlayback]);

  useEffect(() => {
    imageLoadedRef.current = false;
    setGifReady(false);
    const img = imgRef.current;
    if (img?.complete) {
      handleImageReady();
    }
  }, [index, playKey, handleImageReady]);

  useEffect(() => {
    tryStartPlayback();
  }, [tryStartPlayback]);

  return (
    <div className="relative h-full min-h-[calc(100vh-3.5rem)] w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        key={`${activeSlide.src}-${playKey}`}
        src={activeSlide.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
        onLoad={handleImageReady}
      />

      <div className="absolute top-1/2 left-1/2 z-20 flex w-[calc(100%-100px)] -translate-x-1/2 -translate-y-1/2 items-center sm:justify-between">
        <p className="pointer-events-none text-5xl font-bold leading-tight text-white sm:text-6xl">
          {EYEBROW}
        </p>

        <Link
          href={CTA_HREF}
          className="relative z-30 inline-flex shrink-0 bg-white px-6 py-3 text-[15px] font-semibold text-black transition hover:bg-white/90 max-sm:hidden"
        >
          {CTA_LABEL}
        </Link>
      </div>

      <div className="pointer-events-none relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-[50px]">
        <div
          className="max-w-md sm:max-w-lg lg:max-w-xl"
          aria-live="polite"
          aria-atomic="true"
        >
          <h1
            key={`${activeSlide.src}-headline-${playKey}`}
            className="text-2xl font-bold leading-[1.12] text-white sm:text-3xl lg:text-4xl"
          >
            {activeSlide.lines.map((line, lineIndex) => (
              <span key={`${index}-${lineIndex}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            key={`${activeSlide.src}-subtext-${playKey}`}
            className="mt-3 max-w-[280px] whitespace-pre-line text-base font-medium leading-snug text-white sm:mt-4 sm:text-lg"
          >
            {activeSlide.subtext}
          </p>

          <Link
            href={CTA_HREF}
            className="pointer-events-auto mt-6 inline-flex shrink-0 bg-white px-6 py-3 text-[15px] font-semibold text-black transition hover:bg-white/90 sm:hidden"
          >
            {CTA_LABEL}
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[50px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 opacity-60">
        {SLIDES.map((slide, slideIndex) => {
          const isActive = slideIndex === index;

          if (isActive) {
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-current="true"
                onClick={() => restartSlide(slideIndex)}
                className="pointer-events-auto relative h-1.5 w-9 shrink-0 overflow-hidden rounded-full bg-white/25"
              >
                {canPlay ? (
                  <span
                    key={`progress-${index}-${playKey}-${currentDuration}`}
                    className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-white/70 animate-carousel-progress"
                    style={{ animationDuration: `${currentDuration}ms` }}
                    onAnimationEnd={(event) => {
                      if (event.animationName === "carousel-progress") {
                        advanceSlide();
                      }
                    }}
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          }

          return (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${slideIndex + 1}`}
              onClick={() => restartSlide(slideIndex)}
              className="pointer-events-auto h-1.5 w-1.5 shrink-0 rounded-full bg-white/25"
            />
          );
        })}
      </div>
    </div>
  );
}
