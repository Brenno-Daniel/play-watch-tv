import Image from "next/image";

const socials = [
  { src: "/images/socials/Logo Youtube.svg", alt: "YouTube", href: "#" },
  { src: "/images/socials/Logo Linkedin.svg", alt: "LinkedIn", href: "#" },
  { src: "/images/socials/Logo Instagram.svg", alt: "Instagram", href: "#" },
  { src: "/images/socials/Logo Facebook.svg", alt: "Facebook", href: "#" },
  { src: "/images/socials/tik tok.svg", alt: "TikTok", href: "#" },
  { src: "/images/socials/Logo Twiter.svg", alt: "Twitter", href: "#" },
] as const;

const footerLinks = [
  { label: "About Labs Festival", href: "#" },
  { label: "Terms of use and privacy", href: "#" },
  { label: "Send feedback", href: "#" },
];

export function MainFooter() {
  return (
    <footer className="mt-6 w-full border-t border-white/10 bg-[#1a1a1a] px-4 py-8 text-xs text-zinc-400 sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-[11px] leading-relaxed text-zinc-500">
            Check the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
            America, LLC. All rights reserved. HBO and related trademarks are
            the property of WarnerMedia Direct Latin America, LLC. This
            product uses the TMDb API but is not endorsed or certified by TMDb.
            Globo, NBCUniversal, Telecine, Paramount+ and other brands are
            property of their respective owners.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socials.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                aria-label={alt}
                className="opacity-80 transition hover:opacity-100"
              >
                <Image
                  src={src}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </a>
            ))}
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-zinc-400 decoration-zinc-600 transition hover:text-zinc-300"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
          <Image
            src="/images/logo-festival.png"
            alt="W Labs Festival"
            width={160}
            height={48}
            className="h-10 w-auto object-contain object-left lg:object-right"
          />
          <p className="text-[11px] text-zinc-500">
            © 2024 Watch Brasil. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              aria-label="Download on Google Play"
              className="inline-block opacity-90 transition hover:opacity-100"
            >
              <Image
                src="/images/google-play.png"
                alt="GET IT ON Google Play"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </a>
            <a
              href="#"
              aria-label="Download on the App Store"
              className="inline-block opacity-90 transition hover:opacity-100"
            >
              <Image
                src="/images/app-store.png"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
