"use client";

import { useRef, useCallback, useEffect } from "react";
import type { ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  trackClassName?: string;
};

export function Carousel({ children, trackClassName }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].pageX - touchStartX);
      if (dx > 10) e.preventDefault();
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = true;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = false;
    el.style.cursor = "grab";
    el.style.userSelect = "";
  }, []);

  const handleMouseUp = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = false;
    el.style.cursor = "grab";
    el.style.userSelect = "";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || !isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    el.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    startXRef.current = e.touches[0].pageX - el.getBoundingClientRect().left;
    scrollLeftRef.current = el.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    const x = e.touches[0].pageX - el.getBoundingClientRect().left;
    const walk = (x - startXRef.current) * 1.2;
    el.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  return (
    <div
      ref={scrollRef}
      className="carousel-container -mx-4 cursor-grab overflow-x-auto pb-1 sm:-mx-6 md:-mx-8"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className={`flex gap-4 px-4 sm:px-6 md:px-8 ${trackClassName ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}
