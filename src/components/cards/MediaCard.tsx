import Image from "next/image";
import type { MediaItem } from "@/app/(web)/home/home-data";

type MediaCardProps = {
  item: MediaItem;
  variant?: "default" | "compact";
};

export function MediaCard({ item, variant = "default" }: MediaCardProps) {
  const { title, category, badge, label, imageAlt, imageSrc } = item;

  const baseWidth =
    variant === "compact" ? "min-w-[150px] md:min-w-[160px]" : "min-w-[190px]";

  return (
    <article
      className={`hover-lift ${baseWidth} max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 text-xs text-zinc-100 shadow-sm transition hover:border-white/30 hover:shadow-lg hover:shadow-black/60`}
    >
      <div className="relative h-[120px] w-full overflow-hidden md:h-[140px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-tr from-zinc-800 via-zinc-700 to-zinc-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-x-2 bottom-2 flex flex-col gap-1">
          {badge && (
            <span className="self-start rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
              {badge}
            </span>
          )}
          {label && (
            <span className="self-start rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-zinc-200">
              {label}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1 px-3 py-2.5">
        <h3 className="line-clamp-2 text-[13px] font-semibold leading-snug">
          {title}
        </h3>
        <p className="line-clamp-1 text-[11px] text-zinc-400">{category}</p>
      </div>
    </article>
  );
}

