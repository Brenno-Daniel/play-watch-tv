import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

export function AnnouncementBadge() {
  return (
    <div className="flex items-center gap-1 rounded bg-accent-orange px-2 py-1">
      <span
        className={`text-[10px] font-light leading-none tracking-[-0.02em] text-primary ${roboto.className}`}
      >
        Announcement
      </span>
      <Image src="/icons/info.svg" alt="" width={9} height={9} aria-hidden />
    </div>
  );
}
