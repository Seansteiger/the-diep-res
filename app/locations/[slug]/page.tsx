import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import { ArrowLeft, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for SSG
export async function generateStaticParams() {
    return properties.map((property) => ({
        slug: property.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>
}

export default async function PropertyDetail({ params }: Props) {
    const { slug } = await params;
    const property = properties.find((p) => p.slug === slug);

    if (!property) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Nav Back */}
            <div className="fixed top-0 left-0 w-full z-50 p-4 pointer-events-none">
                <Link href="/" className="pointer-events-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white text-primary transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={property.coverImage}
                    alt={`Exterior view of ${property.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
                <div className="absolute bottom-0 left-0 p-8 container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-2">{property.name}</h1>
                    <div className="flex items-center text-foreground/80 font-body text-lg">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        {property.address}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4 drop-shadow-[0_0_15px_rgba(143,188,143,0.3)]">About the Residence</h2>
                            <p className="text-lg leading-relaxed text-foreground/80">
                                {property.description}
                            </p>
                        </section>

                        {/* Amenities */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-6 drop-shadow-[0_0_15px_rgba(143,188,143,0.3)]">Amenities</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {property.amenities.map((amenity, i) => (
                                    <div key={i} className="flex items-center p-4 rounded-xl bg-accent/5 border border-white/5">
                                        <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                                        <span className="font-medium text-foreground/90">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gallery */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-6 drop-shadow-[0_0_15px_rgba(143,188,143,0.3)]">Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.images.map((img, i) => (
                                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={img}
                                            alt={`Gallery image ${i + 1} of ${property.name}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Map */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-6 drop-shadow-[0_0_15px_rgba(143,188,143,0.3)]">Location</h2>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-white/10 h-[300px]"> {/* Reduced height */}
                                <iframe
                                    src={property.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-8">
                            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-xl">
                                <div className="mb-6">
                                    <span className="text-sm opacity-80 uppercase tracking-widest">Starting From</span>
                                    <div className="text-4xl font-bold text-secondary mt-1">R{property.price}</div>
                                    <span className="text-sm opacity-60">per month</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 opacity-90">
                                        <div className="w-2 h-2 rounded-full bg-secondary" />
                                        <span>Cash & Bursaries Accepted</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-red-300 font-semibold">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <span>NO NSFAS</span>
                                    </div>
                                </div>

                                <Link href="/#booking-section">
                                    <Button className="w-full bg-secondary text-white hover:bg-secondary/90 font-bold py-6 text-lg">
                                        Book a room
                                    </Button>
                                </Link>
                            </div>

                            {/* Direct Inquiry Form Embedded if preferred, or just link to home. 
                         For "fast" UX, keeping it on home with pre-select is good, but embedding here creates context.
                         User asked: "wire the enquiries... I need this website to be fast"
                         I'll embed the form here as well with pre-select for speed. 
                     */}
                            <div className="bg-white rounded-3xl p-6 shadow-lg border border-primary/10">
                                <h3 className="text-lg font-bold text-primary mb-4">Quick Inquiry</h3>
                                {/* We can reuse BookingForm but it has white text for dark background. 
                             We might need a variant or just wrap in dark container. 
                             Or Scroll to home.
                             Let's wrap in dark container to match component style.
                         */}
                                <div className="bg-primary rounded-2xl overflow-hidden">
                                    <BookingForm preSelectedRes={property.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
