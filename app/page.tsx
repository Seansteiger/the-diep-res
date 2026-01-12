import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { properties } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Locations Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary text-4xl font-heading font-bold mb-4">Our Residences</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Choose from our two premium properties, both situated conveniently close to UJ APK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {properties.map((property, index) => (
              <LocationCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>



      {/* Booking Section */}
      <section id="booking-section" className="relative py-24 bg-primary overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <BookingForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
