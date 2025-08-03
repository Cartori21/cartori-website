"use client";

import { useState, useEffect } from "react";
import { shortsVideoUrls } from "@/data/shortsVideos";
import { motion } from "motion/react";
import { SectionBadge } from "./section-badge";
import { VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShortsShowcaseProps {
    className?: string;
}

export const ShortsShowcase = ({ className = "" }: ShortsShowcaseProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [shuffledShorts, setShuffledShorts] = useState(shortsVideoUrls);

    const shuffleArray = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMounted) {
            setShuffledShorts(shuffleArray(shortsVideoUrls));
        }
    }, [isMounted]);

    const initialVisibleCount = isMobile ? 4 : 8;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    useEffect(() => {
        if (isMounted) {
            setVisibleCount(isMobile ? 4 : 8);
        }
    }, [isMobile, isMounted]);

    const allShorts = isMounted ? shuffledShorts : shortsVideoUrls;

    const visibleShorts = allShorts.slice(0, visibleCount);
    const hasMore = visibleCount < allShorts.length;

    return (
        <section className={cn(`py-8 md:py-16 px-6`, className)}>
            <div className="max-w-7xl mx-auto">
                {/* Section Badge */}
                <div className="flex justify-center mb-8">
                    <SectionBadge
                        icon={<VideoIcon className="w-4 h-4" />}
                        text="Shorts Showcase"
                    />
                </div>

                {/* Shorts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {visibleShorts.map((videoUrl, index) => {
                        const isNewShort = index >= visibleCount - 8;
                        const animationDelay = isNewShort
                            ? (index - (visibleCount - 8)) * 0.05
                            : 0;

                        return (
                            <motion.div
                                key={index}
                                className="group"
                                initial={
                                    isNewShort
                                        ? { opacity: 0, y: 20, scale: 0.9 }
                                        : { opacity: 1, y: 0, scale: 1 }
                                }
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: animationDelay,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gray-100">
                                    <iframe
                                        src={videoUrl}
                                        title={`YouTube video player ${
                                            index + 1
                                        }`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-lg"
                                    ></iframe>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 4)}
                            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
