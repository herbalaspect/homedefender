import Image from "next/image";

/**
 * Tinted hero background. Renders an absolutely-positioned full-bleed image
 * plus the navy → darker-navy gradient overlay used across templated heroes.
 * Drop this inside a `<section className="relative isolate overflow-hidden">`.
 */
export function HeroBackground({ src }: { src: string }) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26, 46, 59, 0.65), rgba(26, 46, 59, 0.92))",
        }}
        aria-hidden="true"
      />
    </>
  );
}
