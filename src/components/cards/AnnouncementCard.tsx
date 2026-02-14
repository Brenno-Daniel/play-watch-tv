"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { AnnouncementBadge } from "@/components/ui/AnnouncementBadge";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });

type TeslaAnnouncementCardProps = {
  logoSmallSrc?: string;
  carImageSrc?: string;
  logoBgSrc?: string;
  logoNameSrc?: string;
};

export function TeslaAnnouncementCard({
  logoSmallSrc = "/images/announcements/tesla/logo-tesla.png",
  carImageSrc = "/images/announcements/tesla/tesla-example-car.png",
  logoBgSrc = "/images/announcements/tesla/logo-tesla-background.png",
  logoNameSrc = "/images/announcements/tesla/logo-tesla-name.png",
}: TeslaAnnouncementCardProps) {
  return (
    <article
      className={`hover-lift relative flex h-[288px] w-[440px] shrink-0 flex-col overflow-hidden rounded-lg ${montserrat.className} mt-2`}
      style={{
        background: "linear-gradient(180deg, #343434 0%, #1C1C1C 60.21%)",
      }}
    >
      <div className="absolute right-2 top-2 z-10">
        <AnnouncementBadge />
      </div>

      <div className="absolute -right-12 -top-6 h-[358px] w-[277px] opacity-20" aria-hidden>
        <Image
          src={logoBgSrc}
          alt=""
          width={277}
          height={358}
          className="object-contain object-left-top h-full w-full"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col pl-4 pt-4">
        <div className="flex flex-col items-start gap-1">
          <div className="relative h-[68px] w-[104px] shrink-0">
            <Image
              src={logoSmallSrc}
              alt="Tesla"
              width={104}
              height={68}
              className="object-contain object-left"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-1 items-end gap-4 pb-4">
          <div className="relative h-[100px] w-[200px] shrink-0">
            <Image
              src={carImageSrc}
              alt="Tesla car"
              width={258}
              height={145}
              className="object-contain object-left h-full w-full"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pr-4">
            <div className="relative h-[48px] w-[100px] shrink-0">
              <Image
                src={logoNameSrc}
                alt=""
                width={126}
                height={48}
                className="object-contain object-left h-full w-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p className="text-center text-base font-medium leading-none tracking-[-0.015em] text-primary">
              Supercharger Technology
            </p>
            <button
              type="button"
              className="mt-2 inline-flex items-center gap-1.5 rounded bg-accent-red px-3 py-1.5 text-sm font-medium text-primary transition hover:opacity-90 active:scale-[0.98] underline"
            >
              <span>learn more</span>
              <Image src="/icons/arrow-right.svg" alt="" width={12} height={12} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
