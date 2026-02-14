import { Roboto } from "next/font/google";
import { Carousel } from "@/components/ui/Carousel";
import { GenreCard } from "@/components/cards/GenreCard";
import { AirPodsAnnouncementCard } from "@/components/cards/AirPodsAnnouncementCard";
import type { FestivalForYouItem } from "@/app/(web)/home/home-data";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

type FestivalForYouSectionProps = {
  items: FestivalForYouItem[];
};

export function FestivalForYouSection({ items }: FestivalForYouSectionProps) {
  return (
    <section
      className={`flex flex-col gap-6 md:flex-row md:items-stretch ${roboto.className}`}
    >
      {/* Fixed left panel - not scrollable */}
      <div
        className="flex w-full shrink-0 flex-col gap-5 rounded-lg bg-[#1E1E22] px-14 pt-9 pb-6 md:h-[280px] md:w-[290px]"
        style={{ minHeight: 280 }}
      >
        <div className="space-y-3">
          <h2 className="text-lg font-bold leading-[1.2] tracking-[-0.02em] text-primary">
            Festival for you
          </h2>
          <p className="text-base font-normal leading-[1.3] tracking-[-0.02em] text-primary">
            Explore your favorite genres and discover new rhythms to love!
          </p>
        </div>
        <button
          type="button"
          className="hover-lift inline-flex h-8 w-24 items-center justify-center rounded-2xl bg-accent-orange px-6 pt-0.5 text-base font-medium leading-none tracking-[-0.02em] text-primary transition hover:opacity-90 active:scale-[0.98]"
        >
          See All
        </button>
      </div>

      {/* Carousel - scrollable, 208px height */}
      <div className="min-w-0 flex-1">
        <Carousel trackClassName="h-[208px] items-center">
          {items.map((item) =>
            item.type === "genre" ? (
              <GenreCard
                key={item.id}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ) : (
              <AirPodsAnnouncementCard key={item.id} />
            )
          )}
        </Carousel>
      </div>
    </section>
  );
}
