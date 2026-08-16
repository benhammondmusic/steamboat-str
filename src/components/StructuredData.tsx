import { amenities, property } from "@/data/property";

export function StructuredData() {
  const { address, specs } = property;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: property.tagline,
    url: property.booking.itrip,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street} ${address.unit}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    numberOfRooms: Number(specs.bedrooms),
    maximumAttendeeCapacity: Number(specs.sleeps),
    petsAllowed: false,
    smokingAllowed: false,
    checkinTime: "16:00",
    checkoutTime: "10:00",
    amenityFeature: amenities.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "LocationFeatureSpecification",
        name: item,
        value: true,
      })),
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
