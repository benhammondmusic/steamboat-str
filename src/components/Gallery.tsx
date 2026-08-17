import Image from "next/image";
import { areaGallery, gallery } from "@/data/property";
import { Section } from "./Section";

type GalleryImage = { src: string; alt: string };

function Grid({ images, eager = 0 }: { images: readonly GalleryImage[]; eager?: number }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <li key={image.src} className="relative aspect-4/3 overflow-hidden rounded-md bg-snow-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading={index < eager ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

export function Gallery() {
  return (
    <Section
      id="gallery"
      title="Photos"
      intro="The condo and the neighborhood, all shot in summer."
    >
      <Grid images={gallery} eager={3} />

      <div className="mt-12 border-t border-snow-200 pt-4">
        <h3 className="font-display text-lg font-semibold text-pine-700">{areaGallery.heading}</h3>
        <p className="mt-1 mb-4 text-sm text-ink/50">{areaGallery.note}</p>
        <Grid images={areaGallery.images} />
      </div>
    </Section>
  );
}
