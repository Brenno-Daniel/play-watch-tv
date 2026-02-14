"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Mulish } from "next/font/google";
import type { AdSlideItem } from "@/app/(web)/home/home-data";

const mulish = Mulish({ subsets: ["latin"], weight: ["800"] });

const AUTO_ADVANCE_MS = 5000;

type AdSliderProps = {
  slides: AdSlideItem[];
};

export function AdSlider({ slides }: AdSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, slides.length - 1)));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const slide = slides[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden rounded-sm"
      aria-label="Advertisement slider"
    >
      <div className="relative h-full w-full bg-white p-4 pb-10">
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt}
          width={1264}
          height={336}
          className="object-cover"
          priority={activeIndex === 0}
        />

        <div className="absolute bottom-16 right-8">
          <button
            type="button"
            className={`hover-lift inline-flex items-center gap-2.5 rounded px-5 py-2.5 text-lg font-extrabold uppercase leading-none tracking-[-0.02em] text-primary transition hover:opacity-90 active:scale-[0.98] ${mulish.className}`}
            style={{ backgroundColor: slide.ctaBgColor }}
          >
            <span>{slide.ctaLabel}</span>
            <Image
              src="/icons/arrow-right.svg"
              alt=""
              width={14}
              height={14}
              aria-hidden
            />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{
              width: i === activeIndex ? 12 : 8,
              height: i === activeIndex ? 12 : 8,
              backgroundColor: "#E96744",
              opacity: i === activeIndex ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </section>
  );
}
