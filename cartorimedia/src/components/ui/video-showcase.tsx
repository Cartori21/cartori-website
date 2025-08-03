"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionBadge } from "./section-badge";
import { Video } from "lucide-react";

interface VideoShowcaseProps {
    className?: string;
}

export const VideoShowcase = ({
    className = "",
}: VideoShowcaseProps) => {
    const [visibleCount, setVisibleCount] = useState(6);

    // All YouTube videos for showcase
    const allVideos = [
        "https://www.youtube.com/embed/ATjiamLt4Jk",
        "https://www.youtube.com/embed/ZBvMuR68Y6c",
        "https://www.youtube.com/embed/wX-y0H4uyGY",
        "https://www.youtube.com/embed/sB6jnuGXNoA",
        "https://www.youtube.com/embed/fXsQk7a1UMc",
        "https://www.youtube.com/embed/as5po0Q6ZMg",
        "https://www.youtube.com/embed/xlX0u9x18Us",
        "https://www.youtube.com/embed/RCn881-U2g0",
        "https://www.youtube.com/embed/s_K8HJtjTgE",
        "https://www.youtube.com/embed/Tlwv1h5zwOA",
        "https://www.youtube.com/embed/VyxQTxTZzsY",
        "https://www.youtube.com/embed/ZZhglT1tN44",
        "https://www.youtube.com/embed/AayisRJ9XwE",
        "https://www.youtube.com/embed/sdgH4G9O4kw",
        "https://www.youtube.com/embed/lCbNZNeknU4",
        "https://www.youtube.com/embed/p7KI9UgrYig",
        "https://www.youtube.com/embed/91c_wLqHBmE",
    ];

    const visibleVideos = allVideos.slice(0, visibleCount);
    const hasMore = visibleCount < allVideos.length;

    return (
        <section className={`py-8 md:py-16 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Badge */}
                <div className="flex justify-center mb-8">
                    <SectionBadge
                        icon={<Video className="w-4 h-4" />}
                        text="Video Showcase"
                    />
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {visibleVideos.map((videoUrl, index) => {
                        const isNewVideo = index >= visibleCount - 6;
                        const animationDelay = isNewVideo
                            ? (index - (visibleCount - 6)) * 0.05
                            : 0;

                        return (
                            <motion.div
                                key={index}
                                className="group"
                                initial={
                                    isNewVideo
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
                                <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <iframe
                                        src={videoUrl}
                                        title={`Video showcase ${index + 1}`}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
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
                            onClick={() => setVisibleCount((prev) => prev + 6)}
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