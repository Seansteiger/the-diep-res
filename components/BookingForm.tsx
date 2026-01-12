"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CONTACT_NUMBER, properties } from "@/lib/data";

interface BookingFormProps {
    preSelectedRes?: string;
}

export function BookingForm({ preSelectedRes }: BookingFormProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [residence, setResidence] = useState(preSelectedRes || properties[0].name);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone) return;

        const message = `Hi Batshidi, my name is ${name}. I am interested in ${residence} and would like to book a viewing/get more info.`;
        const whatsappUrl = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
        >
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-heading">Book A Viewing</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-white/80 text-sm mb-1 ml-2">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                        required
                    />
                </div>
                <div>
                    <label className="block text-white/80 text-sm mb-1 ml-2">Phone Number</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="081 234 5678"
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                        required
                    />
                </div>
                <div>
                    <label className="block text-white/80 text-sm mb-1 ml-2">Interested Residence</label>
                    <div className="relative">
                        <select
                            value={residence}
                            onChange={(e) => setResidence(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary appearance-none cursor-pointer"
                        >
                            {properties.map(p => (
                                <option key={p.id} value={p.name} className="bg-primary text-white">
                                    {p.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                            ▼
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold mt-4"
                >
                    Send
                </Button>
            </form>
        </motion.div>
    );
}
