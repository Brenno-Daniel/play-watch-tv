import type { AdBannerItem } from "@/app/(web)/home/home-data";

type AdBannerProps = {
  banner: AdBannerItem;
};

export function AdBanner({ banner }: AdBannerProps) {
  const { brandName, title, description, ctaLabel, size = "lg" } = banner;

  const paddingY = size === "lg" ? "py-6 md:py-7" : "py-4 md:py-5";

  return (
    <section
      aria-label={`Ad: ${brandName}`}
      className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-400/20 text-xs text-zinc-100 shadow-md"
    >
      <div
        className={`flex flex-col items-start gap-4 px-4 ${paddingY} sm:px-6 md:flex-row md:items-center md:justify-between md:px-8`}
      >
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Sponsored • {brandName}
          </p>
          <h2 className="text-base font-semibold text-zinc-50 md:text-lg">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-[11px] text-emerald-50/80 md:text-xs">
              {description}
            </p>
          )}
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-emerald-700 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}

