import type { ReactNode } from "react";
import { Carousel } from "@/components/ui/Carousel";

type ContentSectionProps = {
  title: string;
  children: ReactNode;
  dense?: boolean;
};

export function ContentSection({
  title,
  children,
  dense,
}: ContentSectionProps) {
  return (
    <section className={dense ? "space-y-3" : "space-y-4"}>
      <header className="flex items-end justify-between gap-2">
        <div className="space-y-1">
          <h2 className="text-sm font-semibold text-zinc-50 md:text-base">
            {title}
          </h2>
        </div>
      </header>

      <Carousel>{children}</Carousel>
    </section>
  );
}

