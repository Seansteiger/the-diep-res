"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { HERO_IMAGE } from "@/lib/data";

export function Hero() {
    const scrollToBooking = () => {
        const element = document.getElementById("booking-section");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /> {/* Ambient Gradient overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-secondary font-bold tracking-widest text-lg md:text-xl mb-4 uppercase">
                        Welcome To
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-white font-heading font-bold text-5xl md:text-7xl mb-6">
                        THE DIEP RES
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/90 font-body text-xl md:text-2xl mb-8 max-w-2xl"
                >
                    Premium Student Accommodation for UJ Students
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button
                        size="lg"
                        onClick={scrollToBooking}
                        className="bg-secondary text-white hover:bg-secondary/90 font-bold"
                    >
                        BOOK A VIEWING
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
