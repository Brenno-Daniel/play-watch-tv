import Image from "next/image";
import { Roboto } from "next/font/google";
import type { MainHeaderData } from "@/app/(web)/home/home-data";

type NavLinkProps = {
  label: string;
  iconSrc: string;
  active?: boolean;
  showArrowDown?: boolean;
};

type MainHeaderProps = {
  data: MainHeaderData;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const btnClick =
  "transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

function NavLink({ label, iconSrc, active, showArrowDown }: NavLinkProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded px-1 py-1.5 text-[16px] leading-6 tracking-[-0.02em] font-medium ${btnClick} ${
        active ? "text-primary" : "text-zinc-300 hover:text-primary focus-visible:text-primary"
      }`}
    >
      <Image src={iconSrc} alt="" width={16} height={16} aria-hidden />
      <span>{label}</span>
      {showArrowDown && (
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden
          className="ml-0.5"
        />
      )}
    </button>
  );
}

export function MainHeader({ data }: MainHeaderProps) {
  const { imageSrc, imageAlt } = data;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 h-16 border-b border-black/40 bg-[#1E1E22]/95 ${roboto.className}`}>
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between gap-6 px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-8">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              priority
              width={160}
              height={47}
            />
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-black shadow-md">
                W
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  WLABS
                </span>
                <span className="text-sm font-semibold text-white">
                  Festival
                </span>
              </div>
            </div>
          )}

          <nav className="hidden md:flex items-center gap-6">
            <NavLink label="Home" iconSrc="/icons/home.svg" active />
            <NavLink label="Live" iconSrc="/icons/on-live.svg" />
            <NavLink
              label="Musical Styles"
              iconSrc="/icons/sound-live.svg"
              showArrowDown
            />
            <NavLink
              label="Exclusive Content"
              iconSrc="/icons/star.svg"
              showArrowDown
            />
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`hidden sm:inline-flex items-center gap-3 rounded px-2 py-1.5 ${btnClick}`}
            aria-label="User profile and settings"
          >
            <Image
              src="/icons/User.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
            <span className="whitespace-nowrap text-[16px] leading-[1.2] tracking-[-0.02em] font-bold text-primary">
              Peter Parker
            </span>
            <Image
              src="/icons/settings.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden
            />
          </button>

          <button
            type="button"
            aria-label="User profile"
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-semibold text-zinc-100 sm:hidden ${btnClick}`}
          >
            PP
          </button>
        </div>
      </div>
    </header>
  );
}

