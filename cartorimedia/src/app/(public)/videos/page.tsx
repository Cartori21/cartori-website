"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { VideoShowcase } from "@/components/ui/video-showcase";
import { ServicesGrid } from "@/components/ui/services-grid";
import { MiniTestimonial } from "@/components/ui/mini-testimonial";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import Faq from "@/app/components/faq";
import { homeFaqItems } from "@/data/faq";

const VideosPage = () => {
    const scrollToContact = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            const navbarHeight = 80;
            const elementTop = contactForm.offsetTop;
            const elementHeight = contactForm.offsetHeight;
            const windowHeight = window.innerHeight;
            const offsetPosition = elementTop - (windowHeight - navbarHeight - elementHeight) / 2;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const shuffleThumbnails = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const baseThumbnailImages = [
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
    ];

    const [thumbnailImages, setThumbnailImages] = useState(baseThumbnailImages);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            setThumbnailImages(shuffleThumbnails(baseThumbnailImages));
        }
    }, [isMounted]);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="pt-[var(--navbar-height)] px-6">
                <div className="max-w-7xl mx-auto pt-16 md:pt-24">
                    <div className="text-center mb-8 md:mb-16">
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight px-2"
                            style={{
                                backgroundImage:
                                    "-webkit-linear-gradient(45deg, #2958ec, #28296600 160%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                willChange: "transform",
                                transform: "translateZ(0)",
                            }}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.1,
                                type: "tween",
                            }}
                        >
                            Video & Podcast Editing
                        </motion.h1>
                    </div>

                    {/* 3D Marquee */}
                    <div className="mx-auto max-w-7xl rounded-3xl bg-background p-2 ring-1 ring-neutral-700/10">
                        <ThreeDMarquee
                            images={isMounted ? thumbnailImages : baseThumbnailImages}
                            aspectRatio="16/9"
                        />
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <section className="py-8 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-3xl text-primary font-light leading-relaxed text-left">
                        We enhance your long-form content and podcasts to keep
                        your audience hooked from start to finish → Our mission
                        is to help you deliver professional, engaging, and
                        educational content that keeps people watching,
                        listening, and learning.
                    </p>
                </div>
            </section>

            {/* Video Showcase Section */}
            <VideoShowcase />

            {/* Services Grid */}
            <ServicesGrid />

            {/* Stats and Testimonial Section */}
            <section className="py-8 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-3xl text-primary font-light leading-relaxed text-left mb-8">
                        From the first cut to the final export, we handle every
                        stage of production with care. Here&apos;s how we
                        transform your long-form content into engaging,
                        high-quality videos and podcasts.
                    </p>

                    <MiniTestimonial
                        name="Addiction Mindset"
                        subscribers="200K Subscribers"
                        quote="Highly efficient and reliable."
                        avatar="/clients/addiction-mindset.webp"
                        verified={true}
                    />

                    <div className="flex justify-center mt-6">
                        <button 
                            onClick={scrollToContact}
                            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-8 md:py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
                        <Socials />
                        <Contact />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Faq items={homeFaqItems} />
        </div>
    );
};

export default VideosPage;
