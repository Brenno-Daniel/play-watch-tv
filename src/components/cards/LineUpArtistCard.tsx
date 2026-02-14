import Image from "next/image";

type LineUpArtistCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export function LineUpArtistCard({
  title,
  imageSrc,
  imageAlt,
}: LineUpArtistCardProps) {
  return (
    <article className="hover-lift relative h-[288px] w-[208px] shrink-0 overflow-hidden rounded-lg mt-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="208px"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 60%, #000000 97.28%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-4">
        <h3 className="text-center text-base font-semibold leading-tight text-primary">
          {title}
        </h3>
      </div>
    </article>
  );
}
