"use client";

import Image from "next/image";
import { Bebas_Neue, Mulish } from "next/font/google";
import { AnnouncementBadge } from "@/components/ui/AnnouncementBadge";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const mulish = Mulish({ subsets: ["latin"], weight: ["400"] });

const NIKE_BRAND = "#C39E93";

type NikeCardProps = {
  logoSrc?: string;
  shoeImageSrc?: string;
  thumbnails?: { src: string; alt: string }[];
};

export function NikeCard({
  logoSrc = "/images/announcements/nike/nike-logo.png",
  shoeImageSrc = "/images/announcements/nike/air-max-90-futura.png",
  thumbnails = [
    { src: "/images/announcements/nike/thumb-1.png", alt: "Color 1" },
    { src: "/images/announcements/nike/thumb-2.png", alt: "Color 2" },
    { src: "/images/announcements/nike/thumb-3.png", alt: "Color 3" },
  ],
}: NikeCardProps) {
  return (
    <article
      className="hover-lift flex h-[208px] w-[440px] shrink-0 flex-col overflow-hidden rounded-lg bg-[#F6F6F6] px-4 py-3 mt-2"
      style={{ borderRadius: 8 }}
    >
      <div className="flex items-start justify-between">
        <div className="relative h-[27px] w-[48px] shrink-0">
          <Image
            src={logoSrc}
            alt="Nike"
            width={48}
            height={27}
            className="object-contain object-left"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <AnnouncementBadge />
      </div>

      <div className="mt-2 flex flex-1 gap-4">
        <div className="relative h-[100px] w-[180px] shrink-0">
          <Image
            src={shoeImageSrc}
            alt="Nike Air Max 90 Futura"
            width={180}
            height={100}
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3
            className={`text-2xl font-normal uppercase leading-none ${bebas.className}`}
            style={{ color: NIKE_BRAND, fontSize: "24px" }}
          >
            Nike Air Max 90 Futura
          </h3>
          <p
            className={`mt-1.5 text-[8px] leading-snug text-zinc-600 ${mulish.className}`}
          >
            the nike air max 90 futura re-imagines the icon of air through your
            eyes—from design to testing to styling.
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-2">
          {thumbnails.map((t, i) => (
            <div
              key={i}
              className="relative h-6 w-[45px] shrink-0 overflow-hidden rounded border border-zinc-200"
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={45}
                height={24}
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="hover-lift inline-flex items-center gap-1 rounded px-3 py-1.5 text-sm font-medium text-white transition active:scale-[0.98] underline"
          style={{ backgroundColor: NIKE_BRAND }}
        >
          <span>learn more</span>
          <Image src="/icons/arrow-right.svg" alt="" width={12} height={12} aria-hidden />
        </button>
      </div>
    </article>
  );
}
