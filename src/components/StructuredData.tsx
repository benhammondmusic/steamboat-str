import { amenities, property } from "@/data/property";
import { isTodo } from "./Todo";

export function StructuredData() {
  const { address, specs } = property;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: property.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street} ${address.unit}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    amenityFeature: amenities.flatMap((group) =>
      group.items.map((item) => ({ "@type": "LocationFeatureSpecification", name: item })),
    ),
    ...(isTodo(specs.sleeps) ? {} : { maximumAttendeeCapacity: Number(specs.sleeps) }),
    ...(isTodo(specs.bedrooms) ? {} : { numberOfRooms: Number(specs.bedrooms) }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
