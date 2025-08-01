"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionBadge } from "./section-badge";
import { ImageIcon } from "lucide-react";

interface ThumbnailShowcaseProps {
    className?: string;
}

export const ThumbnailShowcase = ({
    className = "",
}: ThumbnailShowcaseProps) => {
    const [visibleCount, setVisibleCount] = useState(9);

    // All thumbnail designs from thumbnails-random directory
    const allThumbnails = [
        "/images/thumbnails-random/1.webp",
        "/images/thumbnails-random/2.webp",
        "/images/thumbnails-random/3.webp",
        "/images/thumbnails-random/4.webp",
        "/images/thumbnails-random/5.webp",
        "/images/thumbnails-random/6.webp",
        "/images/thumbnails-random/7.webp",
        "/images/thumbnails-random/8.webp",
        "/images/thumbnails-random/9.webp",
        "/images/thumbnails-random/10.webp",
        "/images/thumbnails-random/11.webp",
        "/images/thumbnails-random/12.webp",
        "/images/thumbnails-random/13.webp",
        "/images/thumbnails-random/14.webp",
        "/images/thumbnails-random/15.webp",
        "/images/thumbnails-random/16.webp",
        "/images/thumbnails-random/17.webp",
        "/images/thumbnails-random/18.webp",
        "/images/thumbnails-random/19.webp",
        "/images/thumbnails-random/20.webp",
        "/images/thumbnails-random/21.webp",
        "/images/thumbnails-random/22.webp",
        "/images/thumbnails-random/23.webp",
        "/images/thumbnails-random/24.webp",
        "/images/thumbnails-random/25.webp",
        "/images/thumbnails-random/26.webp",
        "/images/thumbnails-random/27.webp",
        "/images/thumbnails-random/28.webp",
        "/images/thumbnails-random/29.webp",
        "/images/thumbnails-random/30.webp",
        "/images/thumbnails-random/31.webp",
        "/images/thumbnails-random/32.webp",
        "/images/thumbnails-random/33.webp",
        "/images/thumbnails-random/34.webp",
        "/images/thumbnails-random/35.webp",
        "/images/thumbnails-random/36.webp",
        "/images/thumbnails-random/37.webp",
        "/images/thumbnails-random/38.webp",
        "/images/thumbnails-random/39.webp",
        "/images/thumbnails-random/40.webp",
        "/images/thumbnails-random/41.webp",
        "/images/thumbnails-random/42.webp",
        "/images/thumbnails-random/43.webp",
        "/images/thumbnails-random/44.webp",
        "/images/thumbnails-random/45.webp",
        "/images/thumbnails-random/46.webp",
        "/images/thumbnails-random/47.webp",
    ];

    const visibleThumbnails = allThumbnails.slice(0, visibleCount);
    const hasMore = visibleCount < allThumbnails.length;

    return (
        <section className={`py-8 md:py-16 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Badge */}
                <div className="flex justify-center mb-8">
                    <SectionBadge
                        icon={<ImageIcon className="w-4 h-4" />}
                        text="Thumbnail Showcase"
                    />
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {visibleThumbnails.map((thumbnail, index) => {
                        const isNewThumbnail = index >= visibleCount - 9;
                        const animationDelay = isNewThumbnail
                            ? (index - (visibleCount - 9)) * 0.05
                            : 0;

                        return (
                            <motion.div
                                key={index}
                                className="group"
                                initial={
                                    isNewThumbnail
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
                                <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                                    <Image
                                        src={thumbnail}
                                        alt={`Thumbnail design ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 9)}
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
