import Image from "next/image";

type GenreCardProps = {
  imageSrc: string;
  imageAlt: string;
};

export function GenreCard({ imageSrc, imageAlt }: GenreCardProps) {
  return (
    <article className="hover-lift relative h-[208px] w-[208px] shrink-0 overflow-hidden rounded-lg mt-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="208px"
      />
    </article>
  );
}
