import type { CategoryItem } from "@/app/(web)/home/home-data";

type CategoryCardProps = {
  item: CategoryItem;
};

const colorMap: Record<CategoryItem["colorVariant"], string> = {
  rock: "from-rose-500/30 via-rose-600/40 to-amber-400/40",
  pop: "from-fuchsia-500/35 via-pink-500/35 to-sky-400/40",
  funk: "from-amber-400/40 via-orange-500/40 to-rose-500/40",
  rap: "from-slate-700/80 via-slate-900/60 to-emerald-400/40",
  mpb: "from-emerald-500/35 via-emerald-600/35 to-lime-400/35",
  eletronic: "from-sky-500/40 via-indigo-500/40 to-fuchsia-500/40",
};

export function CategoryCard({ item }: CategoryCardProps) {
  const gradient = colorMap[item.colorVariant];

  return (
    <button
      type="button"
      className="group min-w-[120px] max-w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 p-[1px] text-left text-xs text-zinc-100 transition hover:-translate-y-1 hover:border-white/40 hover:shadow-lg hover:shadow-black/70"
    >
      <div
        className={`flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br ${gradient} px-3 py-3`}
      >
        <div className="space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200/90">
            Genre
          </span>
          <p className="text-sm font-semibold text-zinc-50">{item.label}</p>
        </div>
        {item.description && (
          <p className="mt-2 line-clamp-2 text-[11px] text-zinc-100/80">
            {item.description}
          </p>
        )}
      </div>
    </button>
  );
}

