import { Amenities } from "@/components/Amenities";
import { BookingCta } from "@/components/BookingCta";
import { Footer } from "@/components/Footer";
import { FrontRange } from "@/components/FrontRange";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Nav } from "@/components/Nav";
import { SkiSection } from "@/components/SkiSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <SkiSection />
        <FrontRange />
        <Amenities />
        <Location />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
