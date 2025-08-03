"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { showcaseVideos } from "@/data/videoShowcase";

const VideoShowcase = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const activeVideo = showcaseVideos[activeVideoIndex];
    const videoRef = useRef<HTMLDivElement>(null);

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
                rootMargin: "100px",
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-8 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Mobile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:hidden space-y-6 mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-text">
                        Leading The Way In Addiction Recovery Content
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Since our first projects in 2019, our impact has grown
                        each year, and today, we can proudly call ourselves the
                        leading force in marketing and editing for the addiction
                        recovery niche.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Video Player */}
                    <motion.div className="space-y-3 md:space-y-6">
                        {/* Main Video */}
                        <div
                            ref={videoRef}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                        >
                            {isVisible ? (
                                <iframe
                                    key={activeVideo.id}
                                    src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0&modestbranding=1`}
                                    title={activeVideo.title}
                                    allow=""
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-full border-0"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                    <div className="text-gray-500">
                                        Loading video...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Video Thumbnails */}
                        <div className="grid grid-cols-4 gap-3">
                            {showcaseVideos.map((video, index) => (
                                <motion.button
                                    key={video.id}
                                    onClick={() => setActiveVideoIndex(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                                        index === activeVideoIndex
                                            ? "ring-2 ring-primary ring-offset-2"
                                            : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                                    }`}
                                >
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
                                    />
                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 bg-transparent bg-opacity-30 flex items-center justify-center">
                                        <div className="w-8 h-8 bg-background/90 bg-opacity-90 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-gray-800 ml-0.5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col h-full"
                    >
                        {/* Desktop Header */}
                        <div className="hidden lg:block space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-text">
                                Leading The Way In Addiction Recovery Content
                            </h2>

                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Since our first projects in 2019, our impact has
                                grown each year, and today, we can proudly call
                                ourselves the leading force in marketing and
                                editing for the addiction recovery niche.
                            </p>
                        </div>

                        <motion.div
                            key={activeVideo.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="space-y-4 mt-auto"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                                Current Video: {activeVideo.title}
                            </h3>
                            <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                                <div>
                                    <p className="text-lg md:text-2xl font-bold text-primary">
                                        {activeVideo.views}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-600">
                                        Views
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg md:text-2xl font-bold text-primary">
                                        {activeVideo.likes}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-600">
                                        Likes
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg md:text-2xl font-bold text-primary">
                                        {activeVideo.subscribers}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-600">
                                        Subscribers
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
