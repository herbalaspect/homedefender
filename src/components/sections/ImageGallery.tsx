import Image from "next/image";
import { Container } from "@/components/layout/Container";

export type GalleryImage = { src: string; alt: string; caption?: string };

/**
 * 3- or 4-column image gallery. Used to drop a row of detail shots into a
 * service or category page between the body sections and the FAQ block.
 */
export function ImageGallery({
  images,
  tinted = false,
}: {
  images: GalleryImage[];
  tinted?: boolean;
}) {
  if (!images.length) return null;
  return (
    <section
      className={tinted ? "bg-gray-50 py-20 sm:py-28" : "py-20 sm:py-28"}
    >
      <Container>
        <div
          className={`grid grid-cols-1 gap-6 ${
            images.length >= 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-3"
          }`}
        >
          {images.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-img border border-gray-200 bg-white"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="px-4 py-3 text-sm text-gray-600">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
