import type { ReactNode } from "react";

type HorizontalScrollProps = {
  children: ReactNode;
};

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className="carousel-container -mx-4 overflow-x-auto pb-1 sm:-mx-6 md:-mx-8">
      <div className="flex gap-4 px-4 sm:px-6 md:px-8">{children}</div>
    </div>
  );
}

