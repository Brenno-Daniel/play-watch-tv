import Image from "next/image";
import { Roboto } from "next/font/google";

const robotoBold = Roboto({ subsets: ["latin"], weight: ["700"] });
const robotoRegular = Roboto({ subsets: ["latin"], weight: ["400"] });

type WatchAgainCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export function WatchAgainCard({ title, imageSrc, imageAlt }: WatchAgainCardProps) {
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
      <div className="absolute left-3 top-3 flex flex-col gap-0.5">
        <span
          className={`text-lg font-bold leading-tight text-white ${robotoBold.className}`}
          style={{ fontSize: "18px" }}
        >
          Watch Again
        </span>
        <span
          className={`text-base leading-tight text-white ${robotoRegular.className}`}
          style={{ fontSize: "16px" }}
        >
          Festival
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-4">
        <h3 className="text-center text-base font-semibold leading-tight text-white">
          {title}
        </h3>
      </div>
      <div className="absolute bottom-3 right-3 h-10 w-[66px] opacity-60">
        <Image
          src="/images/w-festival-vector.svg"
          alt=""
          width={66}
          height={40}
          className="object-contain object-bottom-right"
          aria-hidden
        />
      </div>
    </article>
  );
}
