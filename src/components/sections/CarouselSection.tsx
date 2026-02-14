import type { ReactNode } from "react";
import { Roboto } from "next/font/google";
import { Carousel } from "@/components/ui/Carousel";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

type CarouselSectionProps = {
  title: string;
  children: ReactNode;
  variant?: "default" | "lineUp";
  trackClassName?: string;
};

export function CarouselSection({
  title,
  children,
  variant = "default",
  trackClassName,
}: CarouselSectionProps) {
  const isLineUp = variant === "lineUp";

  return (
    <section className="space-y-1">
      <header
        className={isLineUp ? "flex h-16 items-center" : "flex items-center"}
      >
        <h2
          className={
            isLineUp
              ? `text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-primary ${roboto.className}`
              : "text-sm font-semibold text-zinc-50 md:text-base"
          }
        >
          {title}
        </h2>
      </header>
      <Carousel trackClassName={trackClassName}>{children}</Carousel>
    </section>
  );
}
