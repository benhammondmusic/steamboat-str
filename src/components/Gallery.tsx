import Image from "next/image";
import { gallery } from "@/data/property";
import { Section } from "./Section";

export function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="The place"
      title="Room to spread out after a full day on the hill"
      intro="Photos are placeholders. Drop real images into public/images using the same filenames and they appear here automatically."
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image) => (
          <li
            key={image.src}
            className="relative aspect-4/3 overflow-hidden rounded-xl bg-snow-100 ring-1 ring-snow-200"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
