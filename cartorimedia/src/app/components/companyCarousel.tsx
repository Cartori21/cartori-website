"use client";

import { InfiniteSlider } from "./infinteSlider";
import Image from "next/image";
import Link from "next/link";
import { companies } from "@/data/companies";
import { useState, useEffect, useRef } from "react";

export default function CompanyCarousel() {
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={carouselRef} className="py-4 md:py-4 md:pb-16 bg-background">
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex items-center mx-auto w-full max-w-max">
                    {isVisible ? (
                        <InfiniteSlider
                            direction="horizontal"
                            gap={16}
                            duration={45}
                        >
                            {companies.map((company) => (
                                <Link
                                    key={company.name}
                                    href={company.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={120}
                                        height={120}
                                        className="w-16 h-16 md:w-[120px] md:h-[120px] object-contain rounded-xl border border-primary"
                                    />
                                </Link>
                            ))}
                        </InfiniteSlider>
                    ) : (
                        <div className="h-16 md:h-[120px] w-full" />
                    )}
                </div>
            </div>
        </section>
    );
}
