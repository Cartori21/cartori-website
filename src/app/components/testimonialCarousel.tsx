"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialVideos } from "@/data/testimonials";

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
                rootMargin: "100px",
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) =>
                (prev - 1 + testimonialVideos.length) % testimonialVideos.length
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const scrollToContact = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            const navbarHeight = 80; // h-20 = 80px
            const elementTop = contactForm.offsetTop;
            const elementHeight = contactForm.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate position to center the form in viewport, accounting for navbar
            const offsetPosition =
                elementTop - (windowHeight - navbarHeight - elementHeight) / 2;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-8 md:py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-text mb-4">
                        What our clients have to say
                    </h2>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Video Container */}
                    <motion.div
                        ref={carouselRef}
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                    >
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        {isVisible ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full"
                                >
                                    <iframe
                                        src={`https://www.youtube.com/embed/${testimonialVideos[currentIndex].videoId}?rel=0&modestbranding=1`}
                                        title={
                                            testimonialVideos[currentIndex]
                                                .title
                                        }
                                        allow=""
                                        allowFullScreen
                                        loading="lazy"
                                        className="w-full h-full border-0"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <div className="text-gray-500">
                                    Loading video...
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonialVideos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    index === currentIndex
                                        ? "bg-primary scale-125"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={scrollToContact}
                        className="bg-primary text-white px-6 py-[0.75rem] md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-primary/90 transition-colors shadow-lg cursor-pointer"
                    >
                        Get in touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
