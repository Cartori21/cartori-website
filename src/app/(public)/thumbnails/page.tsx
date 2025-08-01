"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ThumbnailShowcase } from "@/components/ui/thumbnail-showcase";
import { MiniTestimonial } from "@/components/ui/mini-testimonial";
import { BeforeAfterCompare } from "@/components/ui/before-after-compare";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import Faq from "@/app/components/faq";
import { homeFaqItems } from "@/data/faq";

export default function ThumbnailsPage() {
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

    // Using actual thumbnail designs from thumbnails-random directory
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
                            Thumbnail Design
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
                        Thumbnails That Grab Attention, Designed for Your
                        Audience → Our approach is to create eye-catching
                        thumbnails that reflect the true content, build trust,
                        and are tailored to your niche for genuine engagement.
                    </p>
                </div>
            </section>

            {/* Thumbnail Showcase */}
            <ThumbnailShowcase className="pt-0!" />

            {/* Stats and Testimonial Section */}
            <section className="py-8 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-3xl text-primary font-light leading-relaxed text-left mb-8">
                        90% of top-performing YouTube videos use custom
                        thumbnails → Yet it&apos;s one of the most overlooked
                        parts of content creation. A great thumbnail
                        doesn&apos;t just attract attention, it earns the click.
                    </p>

                    <MiniTestimonial
                        name="Soberdogs"
                        subscribers="38K Subscribers"
                        quote="Fast and professional!"
                        avatar="/clients/soberdogs.webp"
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
            <BeforeAfterCompare
                beforeImage="/images/before-after/before.jpg"
                afterImage="/images/before-after/after.jpg"
                title="Sketch Progress"
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
            <Faq items={homeFaqItems} />
        </div>
    );
}
