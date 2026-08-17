import Image from "next/image";
import { gallery } from "@/data/property";
import { Section } from "./Section";

export function Gallery() {
  return (
    <Section id="gallery" title="Photos" intro="All shot in summer. Winter photos to come.">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image, index) => (
          <li
            key={image.src}
            className="relative aspect-4/3 overflow-hidden rounded-md bg-snow-100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading={index < 3 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
