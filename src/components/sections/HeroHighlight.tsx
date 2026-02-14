import Image from "next/image";
import type { HeroHighlightData } from "@/app/(web)/home/home-data";

type HeroHighlightProps = {
  data: HeroHighlightData;
};

export function HeroHighlight({ data }: HeroHighlightProps) {
  const { title, imageAlt, imageSrc } = data;

  return (
    <section aria-label={`Highlight: ${title}`} className="w-full">
      <div className="relative overflow-hidden bg-zinc-900/70">
        <div className="absolute inset-0">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-tr from-red-700 via-fuchsia-700 to-amber-400" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div
            className="absolute inset-x-0 bottom-0 h-[65%]"
            style={{
              background:
                "linear-gradient(to top, #1e1e22 0%, #1e1e22 8%, rgba(30, 30, 34, 0.85) 22%, rgba(30, 30, 34, 0.5) 40%, rgba(0, 0, 0, 0.25) 65%, transparent 100%)",
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex min-h-[520px] flex-col justify-between px-4 pb-6 pt-20 sm:px-6 sm:pb-7 sm:pt-24 md:min-h-[620px] md:px-8 md:pt-28 lg:min-h-[700px]">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-[34px] md:text-[40px] lg:text-[46px] lg:leading-none">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-200">
              <span className="uppercase tracking-[0.16em]">
                LIVE
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-200" />
              <span>Sunset</span>
              <span className="h-1 w-1 rounded-full bg-zinc-200" />
              <span>Singer camera</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="hover-lift inline-flex h-8 w-[201px] items-center justify-center gap-2 rounded-[16px] bg-accent-orange text-xs font-medium tracking-[-0.02em] text-primary shadow-md transition hover:bg-[#f17654] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4a48b]"
            >
              <Image
                src="/icons/camera.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden
              />
              Choose your camera
            </button>

            <div className="flex items-center gap-3">
              {[
                { src: "/icons/Screens.svg", label: "Choose screen layout" },
                { src: "/icons/fullscreen.svg", label: "Toggle fullscreen" },
                { src: "/icons/volume-video.svg", label: "Volume controls" },
                { src: "/icons/settings-video.svg", label: "Video settings" },
              ].map(({ src, label }) => (
                <button
                  key={src}
                  type="button"
                  aria-label={label}
                  className="hover-lift inline-flex h-12 w-12 items-center justify-center transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Image
                    src={src}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

