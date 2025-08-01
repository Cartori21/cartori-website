"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import Faq from "@/app/components/faq";
import { FAQItem } from "@/data/faq";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function ConferencePage() {
    const [showMore, setShowMore] = useState(false);

    const scrollToContact = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            const navbarHeight = 80;
            const elementTop = contactForm.offsetTop;
            const elementHeight = contactForm.offsetHeight;
            const windowHeight = window.innerHeight;
            const offsetPosition =
                elementTop - (windowHeight - navbarHeight - elementHeight) / 2;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const conferenceFaqItems: FAQItem[] = [
        {
            question: "How does Cartori Media help social media channels grow?",
            answer: "We provide comprehensive social media growth services including content creation, strategic planning, audience engagement, and performance analytics to help your channels reach their full potential.",
        },
        {
            question: "What services does Cartori Media offer?",
            answer: "We offer video editing, thumbnail design, content strategy, social media management, YouTube optimization, and comprehensive growth consulting for addiction recovery and mental health channels.",
        },
        {
            question:
                "What makes you different from other social media growth services?",
            answer: "At Cartori Media, we take a highly specialized and hands-on approach to grow addiction recovery social media channels. By specializing in the addiction recovery niche, we are able to understand the audience better than any other.",
        },
        {
            question: "Why is YouTube Important?",
            answer: "YouTube is the world's second-largest search engine and provides an incredible platform for reaching people who need support. It allows for long-form content that can truly impact lives and build meaningful communities.",
        },
        {
            question: "Can YouTube Actually bring in leads for my business?",
            answer: "Yes - when done right, YouTube is one of the most powerful lead generation tools. We design your content to rank in search, build trust with viewers, and guide them to take action (like booking a call, filling out a form, etc)",
        },
        {
            question: "Is YouTube better than paid advertising?",
            answer: "Organic YouTube content can outperform ads in cost-efficiency and long-term ROI. While paid ads disappear when your budget runs out, a good YouTube video can generate quality leads for years.",
        },
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            {/* Hero Section with Contact Form */}
            <section className="pt-[var(--navbar-height)] min-h-[calc(100vh-var(--navbar-height))] flex items-center px-4 md:px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                        {/* Left side - Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8">
                                Ready to{" "}
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #2563eb, #2563eb, #1e3a8a, #2563eb, #2563eb)",
                                        backgroundSize: "400% 400%",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        animation:
                                            "gradient-shift 6s ease-in-out infinite",
                                    }}
                                >
                                    Scale?
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                Thanks for connecting with us at the conference!
                                Let&apos;s discuss how we can help grow your
                                channel and create content that converts.
                            </p>

                            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs md:text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">
                                        YouTube Strategy & Optimization
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs md:text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">
                                        Custom Thumbnail Design
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs md:text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">
                                        Video Editing & Production
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs md:text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">
                                        Short-Form Media Strategy
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
                                <p className="text-blue-800 font-medium">
                                    🎉 <strong>Conference Special:</strong>{" "}
                                    You&apos;re automatically entered into our
                                    end-of-July raffle just by filling out the
                                    form!
                                </p>
                            </div>
                        </motion.div>

                        {/* Right side - Contact form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white rounded-2xl border-1 border-gray-200 p-4 md:p-6 lg:p-8 relative overflow-hidden">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                                    Let&apos;s Work Together
                                </h2>
                                <Contact />
                                <BorderBeam
                                    duration={8}
                                    size={400}
                                    borderWidth={2}
                                    className="from-transparent via-blue-500 to-transparent"
                                />
                                <BorderBeam
                                    duration={8}
                                    size={400}
                                    borderWidth={2}
                                    delay={4}
                                    className="from-transparent via-blue-500 to-transparent"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator - desktop only */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <span className="text-sm text-gray-600 font-medium">
                                Discover our approach
                            </span>
                            <div className="relative">
                                {/* Spinning gradient circle background */}
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear",
                                        },
                                        scale: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                    }}
                                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
                                />

                                {/* Stationary arrow */}
                                <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                    </svg>
                                </div>

                                {/* Pulsing ring */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 0, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left side - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl flex items-center justify-center">
                                <Image
                                    src="/images/conference/NCPG-Conference-2025-Networking-70-scaled.jpg"
                                    alt="QR Page Illustration"
                                    width={600}
                                    height={450}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </motion.div>

                        {/* Right side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Approach to{" "}
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #2563eb, #2563eb, #1e3a8a, #2563eb, #2563eb)",
                                        backgroundSize: "400% 400%",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        animation:
                                            "gradient-shift 6s ease-in-out infinite",
                                    }}
                                >
                                    Social Media Growth
                                </span>{" "}
                                in the Addiction Recovery Space
                            </h2>

                            <style jsx>{`
                                @keyframes gradient-shift {
                                    0% {
                                        background-position: 0% 50%;
                                    }
                                    50% {
                                        background-position: 100% 50%;
                                    }
                                    100% {
                                        background-position: 0% 50%;
                                    }
                                }
                            `}</style>

                            <div className="text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    At Cartori Media, we specialize in growing
                                    purpose-driven YouTube and social media
                                    channels - especially in the addiction
                                    recovery space. We don&apos;t just
                                    understand content - we understand
                                    addiction. Our team brings both lived
                                    experience and years of hands-on work with
                                    recovery creators, treatment centers, and
                                    advocacy groups.
                                </p>

                                <p>
                                    Our approach starts with understanding your
                                    message and your audience. We work closely
                                    with you to develop a tailored content
                                    strategy that aligns with your mission and
                                    speaks directly to the people who need it
                                    most. Whether you&apos;re educating,
                                    inspiring, or building trust, we make sure
                                    your content is optimized to connect and
                                    convert.
                                </p>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: showMore ? "auto" : 0,
                                        opacity: showMore ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="mb-4">
                                        We combine expert editing, SEO
                                        optimization, analytics, thumbnail
                                        design, and strategy - all tailored to
                                        your goals. The result is content that
                                        not only looks professional but actually
                                        connects, retains, and converts. We
                                        specialize in building content that will
                                        generate you consistent views over
                                        years, helping you get qualified leads
                                        for a fraction of the cost of
                                        traditional PPC (Pay Per Click).
                                    </p>
                                </motion.div>

                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
                                >
                                    <span>
                                        {showMore ? "Show Less" : "Show More"}
                                    </span>
                                    {showMore ? (
                                        <ChevronUp className="w-4 h-4" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left md:text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our{" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #2563eb, #2563eb, #1e3a8a, #2563eb, #2563eb)",
                                    backgroundSize: "400% 400%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation:
                                        "gradient-shift 6s ease-in-out infinite",
                                }}
                            >
                                Social Media Growth Services
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl md:mx-auto leading-relaxed">
                            We offer a wide range of services designed to grow
                            your content across platforms and save you time in
                            the process. Every part of our workflow is built to
                            improve consistency, quality, and reach - whether
                            you&apos;re focused on YouTube, short-form media, or
                            both. Our services include:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "YouTube Strategy & Channel Growth",
                                description:
                                    "We develop a content strategy based on what's working in your niche - combining data analysis, platform expertise, and proven tactics to drive consistent, organic growth.",
                            },
                            {
                                title: "Short-Form Editing and Marketing",
                                description:
                                    "We handle the full short-form process - from content strategy and scripting to editing and optimization - across Instagram, TikTok, Facebook, and other platforms.",
                            },
                            {
                                title: "SEO, Titles & Descriptions",
                                description:
                                    "Metadata that gets results: we write titles and descriptions that improve search performance and increase click-through rates.",
                            },
                            {
                                title: "Long-Form Video Editing",
                                description:
                                    "Professional, high-retention edits for podcasts, interviews, and educational content - delivered fast and ready to publish.",
                            },
                            {
                                title: "Thumbnail Design",
                                description:
                                    "Thumbnails that grab attention and are designed for your audience. We create eye-catching visuals that reflect the true content, build trust, and are tailored to your niche for genuine engagement.",
                            },
                            {
                                title: "Analytics & Performance Insights",
                                description:
                                    "Ongoing reporting and insights to track your growth, improve decisions, and refine your content strategy over time.",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white rounded-2xl p-6 border border-blue-200 relative overflow-hidden"
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 mx-auto">
                                    <Image
                                        src="/images/logos/icon-logo.svg"
                                        alt="Cartori Media Icon"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left md:text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-left md:text-center">
                                    {service.description}
                                </p>
                                <BorderBeam
                                    duration={6}
                                    size={200}
                                    borderWidth={1}
                                    delay={0}
                                    className="from-transparent via-blue-400 to-transparent"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner Section */}
            <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Floating Circles */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-blue-400/30"
                            style={{
                                width: 80 + i * 30,
                                height: 80 + i * 30,
                                left: `${10 + i * 20}%`,
                                top: `${10 + i * 15}%`,
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.4, 0.2],
                                y: [0, -20, 0],
                                x: [0, i % 2 === 0 ? 10 : -10, 0],
                            }}
                            transition={{
                                duration: 4 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Floating Dots */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`dot-${i}`}
                            className="absolute w-3 h-3 rounded-full bg-blue-300/50"
                            style={{
                                left: `${15 + i * 10}%`,
                                top: `${15 + (i % 4) * 20}%`,
                            }}
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                y: [0, -15, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Large Background Circles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={`large-circle-${i}`}
                            className="absolute rounded-full bg-blue-400/20"
                            style={{
                                width: 120 + i * 40,
                                height: 120 + i * 40,
                                right: `${10 + i * 25}%`,
                                top: `${15 + i * 25}%`,
                            }}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.1, 0.25, 0.1],
                                y: [0, -10, 0],
                                x: [0, i % 2 === 0 ? 8 : -8, 0],
                            }}
                            transition={{
                                duration: 7 + i * 0.8,
                                repeat: Infinity,
                                delay: i * 1,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Small Accent Circles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`accent-circle-${i}`}
                            className="absolute rounded-full bg-blue-300/35"
                            style={{
                                width: 20 + i * 6,
                                height: 20 + i * 6,
                                left: `${20 + i * 12}%`,
                                top: `${25 + (i % 3) * 20}%`,
                            }}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.5, 0.2],
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 3.5 + i * 0.3,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left md:text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Getting started with Cartori Media is simple
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 max-w-4xl md:mx-auto leading-relaxed mb-8">
                            We streamline the entire process so you can focus on
                            what matters - creating. Whether you&apos;re
                            launching something new or scaling an existing
                            channel, we make onboarding fast, transparent, and
                            tailored to your goals. Reach out to get started:
                            contact@cartorimedia.com
                        </p>
                        <div className="flex justify-start md:justify-center">
                            <motion.button
                                onClick={scrollToContact}
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Cartori Media Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left md:text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose{" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #2563eb, #2563eb, #1e3a8a, #2563eb, #2563eb)",
                                    backgroundSize: "400% 400%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation:
                                        "gradient-shift 6s ease-in-out infinite",
                                }}
                            >
                                Cartori Media?
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl md:mx-auto leading-relaxed">
                            At Cartori Media, we specialize in growing
                            purpose-driven content in the addiction recovery
                            space through strategy, storytelling, and smart
                            execution. With lived experience, industry
                            expertise, and a track record of results,
                            here&apos;s why creators and organizations trust us
                            to grow with them:
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {[
                            {
                                number: "1",
                                title: "Deep Expertise in Recovery Content",
                                description:
                                    "For the past 6 years, our team has worked with creators, treatment centers, and nonprofits in the recovery space and we understand how to translate powerful stories into real growth.",
                            },
                            {
                                number: "2",
                                title: "End-to-End Support",
                                description:
                                    "From content strategy and scripting to editing, thumbnails, and analytics, we handle it all. You focus on showing up and creating; we take care of the rest.",
                            },
                            {
                                number: "3",
                                title: "Platform-Specific Growth Systems",
                                description:
                                    "We don't believe in one-size-fits-all. We build customized strategies that work across YouTube, Instagram, TikTok, and more, driven by data, not guesswork.",
                            },
                            {
                                number: "4",
                                title: "Creators as Partners, Not Clients",
                                description:
                                    "We grow with the people we work with. That means real collaboration, honest feedback, and a shared commitment to your success.",
                            },
                            {
                                number: "5",
                                title: "Quality That Saves You Time",
                                description:
                                    "Our edits don't just look good, they're built for retention, clarity, and audience trust. With fast turnaround and a proven system, you can publish more content with less stress.",
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -15 : 15,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Content */}
                                <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-blue-200">
                                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-4">
                                        <span className="text-3xl md:text-4xl font-bold text-blue-600">
                                            {step.number}
                                        </span>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 mb-0 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Step Number Circle */}
                                <div className="flex-shrink-0 order-first lg:order-last">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-xl md:text-2xl font-bold text-white">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
            <Faq items={conferenceFaqItems} />
        </div>
    );
}
