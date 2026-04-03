
"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Squares from "./Squares"; // Import the new component
import Image from "next/image";

const AnimatedIconButton = ({
    href,
    label,
    bgColor,
    textColor,
    children,
}: {
    href: string;
    label: string;
    bgColor: string;
    textColor: string;
    children: React.ReactNode;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-11 w-11 cursor-pointer items-center justify-start overflow-hidden rounded-full shadow-lg transition-all duration-300 ease-in-out hover:w-36"
        style={{ backgroundColor: bgColor }}
        aria-label={`View ${label} Profile`}
    >
        <div className="absolute flex h-full w-11 shrink-0 items-center justify-center transition-all duration-300">
            {children}
        </div>
        <div
            className="absolute right-0 w-0 opacity-0 transition-all duration-300 group-hover:w-[70%] group-hover:pr-[10px] group-hover:opacity-100"
            style={{ color: textColor }}
        >
            <span className="text-sm font-semibold">{label}</span>
        </div>
    </a>
);

export function Footer() {
    const currentYear = new Date().getFullYear();

    const productLinks = [
        { label: "Home", href: "https://brokbuddy.com" },
        { label: "Plans", href: "https://brokbuddy.com/#pricing" }, // Anchor to pricing section
        { label: "Services", href: "https://brokbuddy.com/#services" },
        { label: "Testimonials", href: "https://brokbuddy.com/#testimonials" },
    ];

    const companyLinks = [
        { label: "About Us", href: "https://brokbuddy.com/about" },
        { label: "Blogs", href: "https://brokbuddy.com/blogs" },
        { label: "Contact", href: "https://brokbuddy.com/contact" },
        { label: "Brochure", href: "/" },
    ];

    const legalLinks = [
        { label: "Terms & Conditions", href: "https://brokbuddy.com/terms" },
        { label: "Refund Policy", href: "https://brokbuddy.com/refund-policy" },
        { label: "Privacy Policy", href: "https://brokbuddy.com/privacy" },
    ];

    return (
        <footer className="bg-black border-t border-neutral-800 pt-16 pb-8 w-full relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Squares
                    speed={0.3}
                    squareSize={30}
                    direction="diagonal"
                    borderColor="hsl(var(--border))"
                    hoverFillColor="hsl(var(--secondary))"
                />
            </div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Top Section: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Col 1: Brand */}
                    <div className="space-y-4 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-1 select-none">
                            <div className="relative w-80 max-w-full h-28 -mt-6 -ml-2">
                                <Image
                                    src="/assets/brokbuddy_footer.png"
                                    alt="BrokBuddy Footer Logo"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            The all-in-one growth engine for modern real estate
                            professionals. Automate, streamline, and scale with AI.
                        </p>
                    </div>

                    {/* Wrapper for Product and Company for mobile layout */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2 lg:grid-cols-2">
                        {/* Col 2: Product */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Product</h4>
                            <ul className="space-y-3">
                                {productLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-orange-500 transition-colors duration-200 text-sm block w-fit"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Company */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Company</h4>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-orange-500 transition-colors duration-200 text-sm block w-fit"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Col 4: Company Profiles */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="text-white font-bold mb-6">Company Profiles</h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:info@brokbuddy.com"
                                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                            >
                                <Mail className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">info@brokbuddy.com</span>
                            </a>

                            {/* Social Icons */}
                            <div className="dotted-bg-orange rounded-lg p-4 flex items-center gap-3 mt-4">
                                <AnimatedIconButton
                                    href="https://www.linkedin.com/company/brokbuddy-llp/"
                                    label="LinkedIn"
                                    bgColor="#0077b5"
                                    textColor="#FFFFFF"
                                >
                                    <svg
                                        fill="currentColor"
                                        className="h-[25px] w-[25px] text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                    </svg>
                                </AnimatedIconButton>
                                <AnimatedIconButton
                                    href="https://wellfound.com/company/brokbuddy/"
                                    label="Wellfound"
                                    bgColor="#FFFFFF"
                                    textColor="#000000"
                                >
                                    <span className="font-bold text-lg">
                                        <span className="text-black">W</span>
                                        <span className="text-red-600">:</span>
                                    </span>
                                </AnimatedIconButton>
                                <AnimatedIconButton
                                    href="https://www.crunchbase.com/organization/brokbuddy/"
                                    label="Crunchbase"
                                    bgColor="#2292a7"
                                    textColor="#FFFFFF"
                                >
                                    <span className="font-bold text-lg text-white">cb</span>
                                </AnimatedIconButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Legal */}
                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-xs">
                        &copy; {currentYear} BrokBuddy LLP. All rights are reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-neutral-500 hover:text-orange-500 text-xs transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
