"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};
export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
        setActive(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    }, [testimonials.length]);

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, handleNext]);

    const [randomRotations, setRandomRotations] = useState<number[]>([]);

    useEffect(() => {
        setRandomRotations(
            testimonials.map(() => Math.floor(Math.random() * 21) - 10)
        );

        // Delay testimonials to appear after navbar and lines
        setTimeout(() => setIsVisible(true), 800);
    }, [testimonials]);

    const getRandomRotation = (index: number) => {
        return randomRotations[index] || 0;
    };
    return (
        <div
            className={`mx-auto sm:max-w-xl py-0 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
        >
            <div className="relative grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2 items-start md:items-stretch">
                <div>
                    <div className="relative h-40 min-[475px]:h-60 md:h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: getRandomRotation(index),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index)
                                            ? 0
                                            : getRandomRotation(index),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: getRandomRotation(index),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                        type: "tween",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                    style={{
                                        willChange: "transform",
                                        transform: "translateZ(0)",
                                    }}
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        fill
                                        sizes="(max-width: 475px) 160px, (max-width: 768px) 240px, 320px"
                                        draggable={false}
                                        className="rounded-3xl object-cover object-center"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col py-4 min-h-[230px] md:h-full">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h2 className="text-2xl font-bold text-text dark:text-white">
                            {testimonials[active].name}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {testimonials[active].designation}
                        </p>
                        <motion.p
                            className="mt-4 md:mt-8 text-base md:text-lg text-gray-500 dark:text-neutral-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {testimonials[active].quote}
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 md:pt-12 justify-center md:justify-start mt-auto">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-10 w-10 md:h-7 md:w-7 items-center justify-center rounded-full bg-primary/10 dark:bg-neutral-800 cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            <IconArrowLeft className="h-6 w-6 md:h-5 md:w-5 text-primary dark:text-neutral-400" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-10 w-10 md:h-7 md:w-7 items-center justify-center rounded-full bg-primary/10 dark:bg-neutral-800 cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <IconArrowRight className="h-6 w-6 md:h-5 md:w-5 text-primary dark:text-neutral-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
