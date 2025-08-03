"use client";

import { motion } from "motion/react";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import { Target, Heart, Users, Camera } from "lucide-react";
import Faq from "@/app/components/faq";
import { FAQItem } from "@/data/faq";

export default function ShortFormPage() {
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

    const faqData: FAQItem[] = [
        {
            question: "Do I need a large following already?",
            answer: "No. We work with accounts of all sizes, including businesses starting from zero on short-form platforms.",
        },
        {
            question: "Can short-form content actually bring in leads for my business?",
            answer: "Yes - when done right, short-form content is a powerful tool for lead generation. We create content that builds trust, showcases your expertise, and guides viewers to take action.",
        },
        {
            question: "How fast will I see results with short-form content?",
            answer: "Growth timelines vary, but most clients see meaningful results within 30-60 days. Our strategy focuses on consistent, high-quality content that builds genuine engagement across platforms.",
        },
        {
            question: "Do you create short-form content for us?",
            answer: "Yes, we help with content strategy, scripting, editing, and optimization across all major short-form platforms including TikTok, Instagram Reels, and YouTube Shorts.",
        },
        {
            question: "What does a short-form content agency do?",
            answer: "A short-form content agency helps businesses grow their presence across platforms like TikTok, Instagram Reels, and YouTube Shorts through content strategy, creation, optimization, and analytics. At Cartori Media, we focus on helping businesses use short-form content to attract leads and build brand awareness.",
        },
        {
            question: "What kinds of businesses do you work with?",
            answer: "We specialize in service-based businesses that can benefit from short-form content's viral potential - coaching, consulting, lifestyle brands, and professional services that want to reach younger audiences.",
        },
        {
            question:
                "What if I'm not comfortable being on camera?",
            answer: "We provide guidance on content creation and can help you develop a content strategy that works with your comfort level and brand style, including behind-the-scenes content and voiceovers.",
        },
        {
            question: "How do you measure success with short-form content?",
            answer: "We track engagement rates, follower growth, reach, completion rates, and most importantly, lead generation and conversion metrics across all platforms.",
        },
        {
            question: "Do I need professional video equipment to get started?",
            answer: "Not at all. We can help you create engaging content with your smartphone and basic lighting. Authenticity often performs better than overly polished content in short-form formats.",
        },
        {
            question: "Is short-form content better than other social media formats?",
            answer: "Short-form content excels for viral reach and younger demographics. We help you determine if short-form content aligns with your target audience and business goals.",
        },
    ];

    const approaches = [
        {
            icon: Target,
            title: "Brand-Focused Content",
            description:
                "Every video is designed to reinforce your brand identity and attract your ideal customers",
        },
        {
            icon: Heart,
            title: "Engagement-First Strategy",
            description:
                "We create content that sparks genuine conversations and builds a loyal community across platforms",
        },
        {
            icon: Users,
            title: "Audience-Centric Approach",
            description:
                "Understanding your ideal customer to create content that resonates and converts across all platforms",
        },
        {
            icon: Camera,
            title: "Viral Storytelling",
            description:
                "Leveraging short-form content's viral potential to tell your brand story and showcase your expertise",
        },
    ];

    const steps = [
        {
            number: "1",
            title: "Strategy & Audit",
            description:
                "We start by understanding your brand, audience, and goals. We analyze your current short-form content presence and develop a comprehensive strategy for growth.",
            subtitle:
                "This foundation ensures every piece of content serves your business objectives.",
            services: [
                "Short-Form Account Audit",
                "Competitor & Market Analysis",
                "Content Strategy Development",
                "Hashtag Research & Strategy",
                "Content Calendar Planning",
                "Audience Persona Mapping",
            ],
        },
        {
            number: "2",
            title: "Content Creation",
            description:
                "We help you create compelling, on-brand content that engages your audience and showcases your expertise. From TikToks to Reels to Shorts, we ensure consistency across all platforms.",
            subtitle:
                "Quality content that builds trust and drives engagement with your target audience.",
            services: [
                "Video Editing",
                "Content Repurposing",
                "Video Ideas & Concepts",
                "Caption Writing",
                "Visual Content Guidelines",
                "Content Creation Coaching",
            ],
        },
        {
            number: "3",
            title: "Optimize & Post",
            description:
                "We optimize every video for maximum reach and engagement. From trending hashtags to optimal posting times, we ensure your content gets seen by the right people.",
            subtitle: "",
            services: [
                "Optimal Posting Schedule",
                "Hashtag Optimization",
                "Story Highlights Setup",
                "SEO Optimization",
                "Conversion Optimization",
                "Automated Scheduling",
            ],
        },
        {
            number: "4",
            title: "Engage & Analyze",
            description:
                "We monitor performance, engage with your community, and adjust strategy based on data. Monthly reports keep you informed of progress and next steps.",
            subtitle: "",
            services: [
                "DM & Comment Management",
                "Performance Analytics",
                "Monthly Strategy Reports",
                "Engagement Rate Optimization",
                "Follower Growth Analysis",
                "Post Timing Optimization",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-background">
                <div className="max-w-7xl mx-auto w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Attract High-Intent Leads With Engaging{" "}
                            <span className="text-blue-600">
                                Short-Form Content
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Build Brand Awareness, Engagement, and Convert
                            Viewers into Customers
                        </p>

                        <motion.button
                            onClick={scrollToContact}
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Discovery Call
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We don&apos;t just create infographics. We create
                            strategic content that builds genuine connections
                            and drives real business results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {approaches.map((approach, index) => {
                            const IconComponent = approach.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl border border-blue-200"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {approach.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {approach.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <motion.button
                            onClick={scrollToContact}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ready to grow your short-form presence? Book a free
                            call
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            What We Do
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Short-form content success requires more than just posting
                            content. Our proven process helps businesses
                            leverage TikTok, Instagram Reels, and YouTube Shorts to build
                            brand awareness, engage audiences, and generate
                            qualified leads through strategic content and
                            community building.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
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

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {step.subtitle && (
                                        <p className="text-gray-700 font-medium mb-6 italic">
                                            {step.subtitle}
                                        </p>
                                    )}

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                            Services Include:
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {step.services.map(
                                                (service, serviceIndex) => (
                                                    <div
                                                        key={serviceIndex}
                                                        className="flex items-center"
                                                    >
                                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                                                        <span className="text-gray-700">
                                                            {service}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* CTA after step 2 */}
                                    {index === 1 && (
                                        <motion.div className="mt-6 pt-6 border-t border-gray-200">
                                            <motion.button
                                                onClick={scrollToContact}
                                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Ready to get started? Schedule a
                                                call
                                            </motion.button>
                                        </motion.div>
                                    )}
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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <motion.button
                            onClick={scrollToContact}
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl text-lg hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let&apos;s discuss your short-form strategy -
                            Schedule a free call
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Why Cartori Media Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Cartori Media?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Visual Brand Expertise",
                                description:
                                    "We understand how to create cohesive, engaging visual content that represents your brand",
                            },
                            {
                                title: "Results-Driven Strategy",
                                description:
                                    "Our short-form strategies are designed to drive real business outcomes, not just vanity metrics",
                            },
                            {
                                title: "Full-Service Support",
                                description:
                                    "From strategy to execution, we handle all aspects of your short-form presence",
                            },
                            {
                                title: "Transparent Reporting",
                                description:
                                    "Regular reports showing engagement, growth, and lead generation metrics",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Faq items={faqData} title="Frequently Asked Questions" />

            {/* Contact Section */}
            <section id="contact" className="py-8 md:py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
                        <Socials />
                        <Contact />
                    </div>
                </div>
            </section>
        </div>
    );
}
