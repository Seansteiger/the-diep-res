import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 pt-16 pb-8 text-white border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-2">THE DIEP RES</h3>
                        <p className="text-white/60">Premium Student Accommodation for UJ Students</p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-secondary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="hover:text-secondary transition-colors">
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.tiktok.com/@thediep_res" target="_blank" className="hover:text-secondary transition-colors flex items-center gap-2">
                            {/* Simple TikTok SVG or Icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} The Diep Res. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
