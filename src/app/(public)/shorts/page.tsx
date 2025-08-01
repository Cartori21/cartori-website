"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ShortsShowcase } from "@/components/ui/shorts-showcase";
import { MiniTestimonial } from "@/components/ui/mini-testimonial";
import { ShortsBeforeAfterCompare } from "@/components/ui/shorts-before-after-compare";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import Faq from "@/app/components/faq";
import { shortsFaqItems } from "@/data/shortsFaq";
// import { ThumbnailShowcase } from "@/components/ui/thumbnail-showcase";
// import { MiniTestimonial } from "@/components/ui/mini-testimonial";
// import { BeforeAfterCompare } from "@/components/ui/before-after-compare";
// import Contact from "@/app/components/contactForm";
// import Socials from "@/app/components/socials";
// import Faq from "@/app/components/faq";
// import { homeFaqItems } from "@/data/faq";

const ShortsPage = () => {
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
        "/images/thumbnails-shorts-random/1.png",
        "/images/thumbnails-shorts-random/2.png",
        "/images/thumbnails-shorts-random/3.png",
        "/images/thumbnails-shorts-random/4.png",
        "/images/thumbnails-shorts-random/5.png",
        "/images/thumbnails-shorts-random/6.png",
        "/images/thumbnails-shorts-random/7.png",
        "/images/thumbnails-shorts-random/8.png",
        "/images/thumbnails-shorts-random/1.png",
        "/images/thumbnails-shorts-random/2.png",
        "/images/thumbnails-shorts-random/3.png",
        "/images/thumbnails-shorts-random/4.png",
        "/images/thumbnails-shorts-random/5.png",
        "/images/thumbnails-shorts-random/6.png",
        "/images/thumbnails-shorts-random/7.png",
        "/images/thumbnails-shorts-random/8.png",
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
                            Short-Form Editing
                        </motion.h1>
                    </div>

                    {/* 3D Marquee */}
                    <div className="mx-auto max-w-7xl rounded-3xl bg-background p-2 ring-1 ring-neutral-700/10">
                        <ThreeDMarquee
                            images={isMounted ? thumbnailImages : baseThumbnailImages}
                            aspectRatio="9/16"
                        />
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <section className="py-8 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-3xl text-primary font-light leading-relaxed text-left">
                        We turn long-form content into viral clips → built to
                        hook your audience in seconds, across all platforms,
                        with fast turnaround and consistent results.
                    </p>
                </div>
            </section>

            {/* Shorts Showcase Section */}
            <ShortsShowcase className="pt-0!" />

            {/* Stats and Testimonial Section */}
            <section className="py-8 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-3xl text-primary font-light leading-relaxed text-left mb-8">
                        Over 90% of all internet traffic is driven by short-form
                        videos → not using it means missing one of the most
                        effective tools for growth and visibility.
                    </p>

                    <MiniTestimonial
                        name="ODAAT"
                        subscribers="2M Subscribers"
                        quote="Quick turnaround and awesome work."
                        avatar="/clients/odaat.webp"
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

            {/* Before/After Compare */}
            <ShortsBeforeAfterCompare
                beforeShortUrl="https://www.youtube.com/embed/Nqon_pUM7cY"
                afterShortUrl="https://www.youtube.com/embed/G5ZonnM_HdQ"
            />

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
            <Faq items={shortsFaqItems} />
        </div>
    );
};

export default ShortsPage;
