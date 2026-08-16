import { Amenities } from "@/components/Amenities";
import { BookingCta } from "@/components/BookingCta";
import { Footer } from "@/components/Footer";
import { FrontRange } from "@/components/FrontRange";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HouseRules } from "@/components/HouseRules";
import { Location } from "@/components/Location";
import { Nav } from "@/components/Nav";
import { Seasons } from "@/components/Seasons";
import { SkiSection } from "@/components/SkiSection";
import { Sleeping } from "@/components/Sleeping";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <Sleeping />
        <SkiSection />
        <FrontRange />
        <Amenities />
        <Seasons />
        <Location />
        <HouseRules />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
