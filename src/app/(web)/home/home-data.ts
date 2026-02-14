export type HeroHighlightData = {
  title: string;
  tag: string;
  venue: string;
  city: string;
  actions: { label: string; variant?: "primary" | "ghost" }[];
  imageAlt: string;
  /** Path relative to public/. Images can be added later. */
  imageSrc?: string;
};

export type MediaItem = {
  id: string;
  title: string;
  category: string;
  badge?: string;
  label?: string;
  imageAlt: string;
  imageSrc?: string;
};

export type FestivalForYouItem =
  | { type: "genre"; id: string; title: string; imageSrc: string; imageAlt: string }
  | { type: "announcement"; id: string; variant: "airpods" };

export type LineUpItem =
  | { type: "artist"; id: string; title: string; imageSrc: string; imageAlt: string }
  | { type: "announcement"; id: string; variant: "tesla" };

export type CategoryItem = {
  id: string;
  label: string;
  description?: string;
  colorVariant: "rock" | "pop" | "funk" | "rap" | "mpb" | "eletronic";
};

export type AdSlideItem = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaBgColor: string;
};

export type AdBannerItem = {
  brandName: string;
  title: string;
  description?: string;
  ctaLabel: string;
  size?: "lg" | "sm";
};

export type InLiveItem = {
  id: string;
  artist: string;
  stage: string;
  dateTime: string;
  imageSrc: string;
  imageAlt: string;
};

export type ExclusiveContentCarouselItem =
  | { type: "media"; id: string; imageSrc: string; imageAlt: string }
  | { type: "nike"; id: string };

export type MainHeaderData = {
  imageSrc?: string;
  imageAlt: string;
};

export const mainHeader: MainHeaderData = {
  imageSrc: "/images/logo-festival.png",
  imageAlt: "Festival logo",
};

export const heroHighlight: HeroHighlightData = {
  title: "Avril Lavigne",
  tag: "Live now",
  venue: "W Festival Stage",
  city: "Sao Paulo, Brazil",
  actions: [
    { label: "Watch now", variant: "primary" },
    { label: "See details", variant: "ghost" },
  ],
  imageAlt: "Concert stage with crowd and red lights",
  imageSrc: "/videos/avril-lavigne-live-at-rock-rio.gif",
};

export const festivalForYou: FestivalForYouItem[] = [
  { type: "genre", id: "ffy-1", title: "Rock", imageSrc: "/images/genres/rock.png", imageAlt: "Rock Festival" },
  { type: "genre", id: "ffy-2", title: "Pop", imageSrc: "/images/genres/pop.png", imageAlt: "Pop Festival" },
  { type: "announcement", id: "ffy-3", variant: "airpods" },
  { type: "genre", id: "ffy-4", title: "Funk", imageSrc: "/images/genres/funk.png", imageAlt: "Funk Festival" },
  { type: "genre", id: "ffy-5", title: "Rock", imageSrc: "/images/genres/rock.png", imageAlt: "Rock Festival" },
  { type: "genre", id: "ffy-6", title: "Pop", imageSrc: "/images/genres/pop.png", imageAlt: "Pop Festival" },
  { type: "genre", id: "ffy-7", title: "Funk", imageSrc: "/images/genres/funk.png", imageAlt: "Funk Festival" },
];

export const lineUp: LineUpItem[] = [
  {
    type: "artist",
    id: "lineup-1",
    title: "Iron Maiden",
    imageSrc: "/images/artists/iron-maiden.png",
    imageAlt: "Iron Maiden",
  },
  {
    type: "artist",
    id: "lineup-2",
    title: "Alok",
    imageSrc: "/images/artists/alok.png",
    imageAlt: "Alok",
  },
  {
    type: "artist",
    id: "lineup-3",
    title: "Rita Ora",
    imageSrc: "/images/artists/rita-ora.png",
    imageAlt: "Rita Ora",
  },
  {
    type: "artist",
    id: "lineup-4",
    title: "Dream Theate",
    imageSrc: "/images/artists/dream-theate.png",
    imageAlt: "Dream Theate",
  },
  { type: "announcement", id: "lineup-5", variant: "tesla" },
  {
    type: "artist",
    id: "lineup-6",
    title: "Dua Lipa",
    imageSrc: "/images/artists/dua-lipa.png",
    imageAlt: "Dua Lipa",
  },
  {
    type: "artist",
    id: "lineup-7",
    title: "Maneskin",
    imageSrc: "/images/artists/maneskin.png",
    imageAlt: "Maneskin",
  },
];

export const yesterdayShows: LineUpItem[] = [
  {
    type: "artist",
    id: "lineup-1",
    title: "Marshmello",
    imageSrc: "/images/artists/marshmello.png",
    imageAlt: "Iron Maiden",
  },
  {
    type: "artist",
    id: "lineup-2",
    title: "Alok",
    imageSrc: "/images/artists/alok.png",
    imageAlt: "Alok",
  },
  {
    type: "artist",
    id: "lineup-3",
    title: "Rita Ora",
    imageSrc: "/images/artists/rita-ora.png",
    imageAlt: "Rita Ora",
  },
  {
    type: "artist",
    id: "lineup-4",
    title: "Dream Theate",
    imageSrc: "/images/artists/dream-theate.png",
    imageAlt: "Dream Theate",
  },
  {
    type: "artist",
    id: "lineup-5",
    title: "Dua Lipa",
    imageSrc: "/images/artists/dua-lipa.png",
    imageAlt: "Dua Lipa",
  },
  {
    type: "artist",
    id: "lineup-6",
    title: "Maneskin",
    imageSrc: "/images/artists/maneskin.png",
    imageAlt: "Maneskin",
  },
];

export const exclusiveContent: MediaItem[] = [
  {
    id: "ex-1",
    title: "Backstage Sessions",
    category: "Exclusive • Backstage",
    badge: "EXCLUSIVE",
    imageAlt: "Crew backstage preparing the show",
    imageSrc: "/images/exclusive-content/back-stage.png",
  },
  {
    id: "ex-2",
    title: "Interviews Unplugged",
    category: "Exclusive • Interviews",
    imageAlt: "Artist being interviewed backstage",
    imageSrc: "/images/exclusive-content/interviews.png",
  },
  {
    id: "ex-3",
    title: "Studio Sessions",
    category: "Exclusive • Studio",
    imageAlt: "Band recording in the studio",
    imageSrc: "/images/exclusive-content/back-stage.png",
  },
  {
    id: "ex-4",
    title: "Studio Sessions",
    category: "Exclusive • Studio",
    imageAlt: "Band recording in the studio",
    imageSrc: "/images/exclusive-content/back-stage.png",
  },
];

export const inLiveItems: InLiveItem[] = [
  { id: "inlive-1", artist: "Demi Lovato", stage: "Stage Sunset", dateTime: "14.02.25 - 22:00 h", imageSrc: "/images/in-live/stage-sunset.png", imageAlt: "Stage Sunset" },
  { id: "inlive-2", artist: "Demi Lovato", stage: "Stage World", dateTime: "14.02.25 - 21:30 h", imageSrc: "/images/in-live/stage-world.png", imageAlt: "Stage World" },
  { id: "inlive-3", artist: "Demi Lovato", stage: "Stage Favela", dateTime: "14.02.25 - 23:00 h", imageSrc: "/images/in-live/stage-favela.png", imageAlt: "Stage Favela" },
  { id: "inlive-4", artist: "Demi Lovato", stage: "Stage Supernova", dateTime: "15.02.25 - 00:00 h", imageSrc: "/images/in-live/stage-supernova.png", imageAlt: "Stage Supernova" },
];

export const exclusiveContentCarousel: ExclusiveContentCarouselItem[] = [
  { type: "media", id: "ex-1", imageSrc: "/images/exclusive-content/back-stage.png", imageAlt: "Back Stage" },
  { type: "media", id: "ex-2", imageSrc: "/images/exclusive-content/interviews.png", imageAlt: "Interviews" },
  { type: "nike", id: "ex-nike" },
  { type: "media", id: "ex-1b", imageSrc: "/images/exclusive-content/back-stage.png", imageAlt: "Back Stage" },
  { type: "media", id: "ex-2b", imageSrc: "/images/exclusive-content/interviews.png", imageAlt: "Interviews" },
];

export const watchAgainItems: LineUpItem[] = [
  { type: "artist", id: "wa-1", title: "Alok", imageSrc: "/images/artists/alok.png", imageAlt: "Alok" },
  { type: "artist", id: "wa-2", title: "Rita Ora", imageSrc: "/images/artists/rita-ora.png", imageAlt: "Rita Ora" },
  { type: "announcement", id: "wa-3", variant: "tesla" },
  { type: "artist", id: "wa-4", title: "Dua Lipa", imageSrc: "/images/artists/dua-lipa.png", imageAlt: "Dua Lipa" },
  { type: "artist", id: "wa-5", title: "Maneskin", imageSrc: "/images/artists/maneskin.png", imageAlt: "Maneskin" },
  { type: "artist", id: "wa-6", title: "Alok", imageSrc: "/images/artists/alok.png", imageAlt: "Alok" },
  { type: "artist", id: "wa-7", title: "Rita Ora", imageSrc: "/images/artists/rita-ora.png", imageAlt: "Rita Ora" },
];

export const rockSingers: LineUpItem[] = [
  {
    type: "artist",
    id: "lineup-1",
    title: "Dream Theate",
    imageSrc: "/images/artists/dream-theate.png",
    imageAlt: "Dream Theate",
  },
  {
    type: "artist",
    id: "lineup-2",
    title: "Maneskin",
    imageSrc: "/images/artists/maneskin.png",
    imageAlt: "Maneskin",
  },
  {
    type: "artist",
    id: "lineup-3",
    title: "Coldplay",
    imageSrc: "/images/artists/coldplay.png",
    imageAlt: "Coldplay",
  },
  {
    type: "artist",
    id: "lineup-4",
    title: "Offspring",
    imageSrc: "/images/artists/offspring.png",
    imageAlt: "Offspring",
  },
  {
    type: "artist",
    id: "lineup-5",
    title: "Avril Lavigne",
    imageSrc: "/images/artists/avril-lavigne.png",
    imageAlt: "Avril Lavigne",
  },
  {
    type: "artist",
    id: "lineup-6",
    title: "Black Pantera",
    imageSrc: "/images/artists/black-pantera.png",
    imageAlt: "Black Pantera",
  },
];

export const categories: CategoryItem[] = [
  {
    id: "cat-rock",
    label: "Rock",
    description: "Festivais e shows de rock",
    colorVariant: "rock",
  },
  {
    id: "cat-pop",
    label: "Pop",
    description: "Os maiores hits ao vivo",
    colorVariant: "pop",
  },
  {
    id: "cat-funk",
    label: "Funk",
    description: "Batidas para a pista",
    colorVariant: "funk",
  },
  {
    id: "cat-rap",
    label: "Rap & Trap",
    description: "Versos e rimas ao vivo",
    colorVariant: "rap",
  },
  {
    id: "cat-mpb",
    label: "Brazilian",
    description: "Brazilian classics and MPB",
    colorVariant: "mpb",
  },
  {
    id: "cat-eletronic",
    label: "Eletronic",
    description: "Electronic festivals",
    colorVariant: "eletronic",
  },
];

export const adSlides: AdSlideItem[] = [
  {
    id: "heineken",
    imageSrc: "/images/advertisements/Heineken-adv.png",
    imageAlt: "Heineken - Born in Amsterdam, raised by the world",
    ctaLabel: "GET A TASTE OF AMSTERDAM",
    ctaBgColor: "#008630",
  },
  {
    id: "coca",
    imageSrc: "/images/advertisements/coke-adv.png",
    imageAlt: "Coke",
    ctaLabel: "GET A TASTE OF NEW COKE",
    ctaBgColor: "#DA0302",
  },
  {
    id: "heineken-2",
    imageSrc: "/images/advertisements/Heineken-adv.png",
    imageAlt: "Heineken",
    ctaLabel: "GET A TASTE OF AMSTERDAM",
    ctaBgColor: "#008630",
  },
];
