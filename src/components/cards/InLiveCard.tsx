import Image from "next/image";
import { Roboto } from "next/font/google";
import type { InLiveItem } from "@/app/(web)/home/home-data";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

type InLiveCardProps = InLiveItem;

export function InLiveCard({ artist, stage, dateTime, imageSrc, imageAlt }: InLiveCardProps) {
  return (
    <article
      className="hover-lift flex h-[288px] w-[440px] shrink-0 flex-col overflow-hidden rounded-lg bg-zinc-900 mt-2"
      style={{
        letterSpacing: "-0.02em",
        lineHeight: "100%",
        fontSize: "14px",
      }}
    >
      <div className="relative h-[208px] w-full shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={440}
          height={208}
          className="object-cover"
          sizes="440px"
        />
      </div>
      <div className={`flex flex-1 items-start justify-between gap-4 px-3 py-2 ${roboto.className}`}>
        <div className="flex min-w-0 flex-col gap-3">
          <span style={{ color: "#E96744" }}>{artist}</span>
          <span className="text-[#FAFAFA]">{stage}</span>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-3 text-right">
          <span style={{ color: "#FF2828" }}>• Live</span>
          <span className="text-[#FAFAFA]">{dateTime}</span>
        </div>
      </div>
    </article>
  );
}
