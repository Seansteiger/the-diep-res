"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Wifi } from "lucide-react";
import { Property } from "@/lib/data";
import { cn } from "@/lib/utils";

interface LocationCardProps {
    property: Property;
    index: number;
}

export function LocationCard({ property, index }: LocationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-[500px] w-full overflow-hidden rounded-3xl cursor-pointer"
        >
            <Link href={`/locations/${property.slug}`}>
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${property.coverImage}')` }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-white font-heading text-3xl font-bold mb-2">
                        {property.name}
                    </h3>
                    <div className="flex items-center text-white/80 mb-4 font-body text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-secondary" />
                        {property.address}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {property.amenities.slice(0, 3).map((amenity, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white">
                                {amenity}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-secondary text-lg font-bold">R{property.price}</span>
                            <span className="text-white/60 text-sm">/month</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                            <ArrowRight className="w-5 h-5 text-white group-hover:text-white" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
