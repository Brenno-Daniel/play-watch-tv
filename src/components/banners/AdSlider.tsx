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
      <div className="relative w-full bg-white p-4 pb-12">
        <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "1264/336" }}>
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1264px"
            priority={activeIndex === 0}
          />
          <div className="absolute bottom-1 right-2 sm:bottom-6 sm:right-6">
            <button
              type="button"
              className={`hover-lift inline-flex max-w-[calc(100vw-3rem)] items-center gap-1 rounded px-2.5 py-1.5 text-[8px] font-extrabold uppercase leading-tight tracking-[-0.02em] text-primary transition hover:opacity-90 active:scale-[0.98] sm:max-w-none sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-base md:text-lg ${mulish.className}`}
              style={{ backgroundColor: slide.ctaBgColor }}
            >
              <span className="min-w-0 truncate">{slide.ctaLabel}</span>
              <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={14}
                height={14}
                className="h-3 w-3 shrink-0 sm:h-[14px] sm:w-[14px]"
                aria-hidden
              />
            </button>
          </div>
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
