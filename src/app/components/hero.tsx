"use client";

import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useRef, useState } from "react";
import BlurText from "@/components/ui/blurtext";
import { motion } from "motion/react";

const Hero = () => {
    const testimonials = [
        {
            quote: "Thanks to Cartori, we went from 0 to 200k subscribers and continue to grow.",
            name: "Addiction Mindset",
            designation: "Addiction Recovery Expert",
            src: "/clients/am.webp",
        },
        {
            quote: "Working with Cartori has been awesome - great editing and real growth for my channel.",
            name: "ODAAT Gambling Awareness",
            designation: "Gambling Recovery & Awareness",
            src: "/clients/odaat.webp",
        },
        {
            quote: "Cartori transformed my social media presence and helped my business grow significantly.",
            name: "Soberdogs",
            designation: "Addiction Recovery & Education",
            src: "/clients/soberdogs.webp",
        },
    ];

    const sloganRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLImageElement>(null);
    const [linesVisible, setLinesVisible] = useState(false);
    const [workedWithVisible, setWorkedWithVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [initialHeight, setInitialHeight] = useState<number | null>(null);

    useEffect(() => {
        // Capture the initial viewport height including browser UI adjustments
        if (typeof window !== "undefined") {
            setInitialHeight(window.innerHeight);
        }
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const positionLines = () => {
            if (
                sloganRef.current &&
                testimonialsRef.current &&
                linesRef.current
            ) {
                const containerRect =
                    linesRef.current.offsetParent?.getBoundingClientRect() || {
                        top: 0,
                    };
                const sloganBottom =
                    sloganRef.current.getBoundingClientRect().bottom;
                const testimonialsTop =
                    testimonialsRef.current.getBoundingClientRect().top;
                const middlePoint =
                    (testimonialsTop - sloganBottom) / 2 + sloganBottom;

                linesRef.current.style.position = "absolute";
                linesRef.current.style.top = `${
                    middlePoint - containerRect.top
                }px`;
                linesRef.current.style.transform = "translate(0%, -50%)";

                if (!linesVisible) {
                    setLinesVisible(true);
                }
            }
        };

        // Small delay to ensure layout is stable before positioning
        const timeoutId = setTimeout(positionLines, 50);
        window.addEventListener("resize", positionLines);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", positionLines);
        };
    }, [linesVisible]);

    useEffect(() => {
        // Animate "We have worked with" text after testimonials appear
        setTimeout(() => setWorkedWithVisible(true), 1500);
    }, []);

    return (
        <div
            className="md:h-screen md:min-h-[880px] relative pt-[calc(var(--navbar-height)+3vh)] md:pt-[calc(var(--navbar-height)+5rem)] flex flex-col px-6 md:px-0"
            style={{
                height:
                    isMounted && initialHeight ? `${initialHeight}px` : "100vh",
                minHeight:
                    isMounted && initialHeight ? `${initialHeight}px` : "100vh",
            }}
        >
            <div ref={sloganRef} className="mx-auto text-center max-w-max mb-5">
                <motion.h1
                    className="text-text text-[calc(1rem+4.5vw)] min-[400px]:text-[calc(1rem+5vw)] min-[475px]:text-[calc(1rem+5.8vw)] xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight whitespace-nowrap"
                    style={{
                        backgroundImage:
                            "-webkit-linear-gradient(45deg, #2958ec, #28296600 160%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        willChange: "transform", // Optimize for animations
                        transform: "translateZ(0)", // Force hardware acceleration
                    }}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.1,
                        type: "tween", // Use tween instead of spring for better performance
                    }}
                >
                    Grow your audience
                </motion.h1>
                <BlurText
                    className="text-text text-lg min-[475px]:text-xl xs:text-lg md:text-2xl font-medium min-[385px]:px-[15px]"
                    style={{ justifyContent: "center" }}
                    text="with expert editing and strategic social media marketing."
                    delay={100}
                    animateBy="words"
                    direction="top"
                />
            </div>

            <div className="flex-1 relative hidden md:block">
                <Image
                    ref={linesRef}
                    src="/images/illustrations/lines.svg"
                    alt="Decorative lines"
                    width={1000}
                    height={0}
                    className={`w-full absolute transition-opacity duration-300 ${
                        linesVisible ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>

            <div
                ref={testimonialsRef}
                className="flex-1 md:mt-auto mb-6 md:mb-30 md:pt-8 flex items-center md:block"
            >
                <AnimatedTestimonials testimonials={testimonials} />
            </div>

            <p
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center font-light text-primary text-xl md:text-2xl whitespace-nowrap transition-all duration-700 ${
                    workedWithVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                }`}
            >
                We have worked with
            </p>
        </div>
    );
};

export default Hero;
