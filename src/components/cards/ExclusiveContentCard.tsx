import Image from "next/image";

type ExclusiveContentCardProps = {
  imageSrc: string;
  imageAlt: string;
};

export function ExclusiveContentCard({
  imageSrc,
  imageAlt,
}: ExclusiveContentCardProps) {
  return (
    <article className="hover-lift relative h-[208px] w-[440px] shrink-0 overflow-hidden rounded-lg bg-zinc-900 mt-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="440px"
      />
    </article>
  );
}
