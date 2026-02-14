"use client";

import Image from "next/image";
import { Roboto } from "next/font/google";
import { AnnouncementBadge } from "@/components/ui/AnnouncementBadge";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const batteryItems = [
  { value: "24", unit: "hrs", text: "of listening time with multiple additional charges in the case" },
  { value: "4.5", unit: "hrs", text: "of listening time on one charge" },
  { value: "1", unit: "hrs", text: "of listening time on only 5 minutes of charging" },
] as const;

type AirPodsAnnouncementCardProps = {
  appleLogoSrc?: string;
  airpodsImageSrc?: string;
};

export function AirPodsAnnouncementCard({
  appleLogoSrc = "/images/announcements/apple/apple-logo.png",
  airpodsImageSrc = "/images/announcements/apple/airpods-pro.png",
}: AirPodsAnnouncementCardProps) {
  return (
    <article
      className={`hover-lift relative flex h-[208px] w-[440px] shrink-0 overflow-hidden rounded-lg bg-black ${roboto.className} mt-2`}
    >
      <div className="absolute left-4 top-4 z-10 h-6 w-6">
        <Image
          src={appleLogoSrc}
          alt="Apple"
          width={24}
          height={24}
          className="object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="flex flex-1 items-center gap-2 pl-4 pt-12">
        <span className="text-base font-normal leading-none tracking-[-0.015em] text-primary">
          AirPods
        </span>
        <div className="relative h-[100px] w-[120px] shrink-0">
          <div className="absolute inset-0 bg-white/10 blur-2xl" />
          <Image
            src={airpodsImageSrc}
            alt="AirPods Pro"
            fill
            className="relative object-contain drop-shadow-lg"
            sizes="120px"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <span className="text-base font-normal leading-none tracking-[-0.015em] text-primary">
          Pro
        </span>
      </div>

      <div className="flex w-[200px] shrink-0 flex-col justify-center gap-2 pr-4">
        <div className="space-y-2">
          {batteryItems.map(({ value, unit, text }) => (
            <p key={value} className="text-[8px] leading-none tracking-[-0.015em] text-primary">
              <span className="text-xs font-bold">{value} {unit}</span>{" "}
              <span className="font-normal">{text}</span>
            </p>
          ))}
        </div>
        <button
          type="button"
          className="mt-2 self-start text-sm font-bold leading-none tracking-[-0.017em] text-primary underline decoration-solid underline-offset-2 transition hover:opacity-90 active:scale-[0.98]"
        >
          <span className="inline-flex items-center gap-1.5 underline">
            buy now
            <Image
              src="/icons/arrow-right.svg"
              alt=""
              width={12}
              height={12}
              aria-hidden
            />
          </span>
        </button>
      </div>

      <div className="absolute right-2 top-2 z-10">
        <AnnouncementBadge />
      </div>
    </article>
  );
}
