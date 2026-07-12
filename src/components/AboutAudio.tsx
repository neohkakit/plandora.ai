"use client";

import { useEffect, useRef } from "react";

export function AboutAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {
      // Browsers block autoplay until the user interacts with the page.
    });
  }, []);

  return (
    <audio
      ref={audioRef}
      className="hidden"
      autoPlay
      preload="auto"
      src="/audio/about.mp3"
    />
  );
}
