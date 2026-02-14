import { PageShell } from "@/components/layout/PageShell";
import { MainHeader } from "@/components/layout/MainHeader";
import { MainFooter } from "@/components/layout/MainFooter";
import { HeroHighlight } from "@/components/sections/HeroHighlight";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { FestivalForYouSection } from "@/components/sections/FestivalForYouSection";
import { LineUpArtistCard } from "@/components/cards/LineUpArtistCard";
import { TeslaAnnouncementCard } from "@/components/cards/AnnouncementCard";
import { InLiveCard } from "@/components/cards/InLiveCard";
import { ExclusiveContentCard } from "@/components/cards/ExclusiveContentCard";
import { NikeCard } from "@/components/cards/NikeCard";
import { WatchAgainCard } from "@/components/cards/WatchAgainCard";
import { AdSlider } from "@/components/banners/AdSlider";
import {
  adSlides,
  exclusiveContentCarousel,
  festivalForYou,
  heroHighlight,
  inLiveItems,
  lineUp,
  mainHeader,
  rockSingers,
  watchAgainItems,
  yesterdayShows,
} from "@/app/(web)/home/home-data";

export default function Home() {
  return (
    <>
      <MainHeader data={mainHeader} />
      <HeroHighlight data={heroHighlight} />
      <PageShell>
        <CarouselSection title="Line Up" variant="lineUp">
          {lineUp.map((item) =>
            item.type === "artist" ? (
              <LineUpArtistCard
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ) : (
              <TeslaAnnouncementCard key={item.id} />
            )
          )}
        </CarouselSection>

        <FestivalForYouSection items={festivalForYou} />

        <div className="w-full px-0">
          <AdSlider slides={adSlides} />
        </div>

        <CarouselSection title="In Live" variant="lineUp">
          {inLiveItems.map((item) => (
            <InLiveCard key={item.id} {...item} />
          ))}
        </CarouselSection>

        <CarouselSection title="Yesterday shows" variant="lineUp">
          {yesterdayShows.map((item) =>
            item.type === "artist" ? (
              <LineUpArtistCard
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ) : (
              <TeslaAnnouncementCard key={item.id} />
            )
          )}
        </CarouselSection>

        <CarouselSection title="Exclusive Content" variant="lineUp">
          {exclusiveContentCarousel.map((item) =>
            item.type === "media" ? (
              <ExclusiveContentCard
                key={item.id}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ) : (
              <NikeCard key={item.id} />
            )
          )}
        </CarouselSection>

        <CarouselSection title="Rock Singers" variant="lineUp">
          {rockSingers.map((item) =>
            item.type === "artist" ? (
              <LineUpArtistCard
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ) : (
              <TeslaAnnouncementCard key={item.id} />
            )
          )}
        </CarouselSection>

        <div className="w-full px-0">
          <AdSlider slides={adSlides} />
        </div>

        <CarouselSection title="Watch Again" variant="lineUp">
          {watchAgainItems.map((item) =>
            item.type === "artist" ? (
              <WatchAgainCard
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ) : (
              <TeslaAnnouncementCard key={item.id} />
            )
          )}
        </CarouselSection>
      </PageShell>
      <MainFooter />
    </>
  );
}
