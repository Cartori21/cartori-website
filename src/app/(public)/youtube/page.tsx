"use client";

import { motion } from "motion/react";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import { Target, Search, Users, Shield } from "lucide-react";
import Faq from "@/app/components/faq";
import { FAQItem } from "@/data/faq";

export default function YouTubePage() {
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
            question: "Do I need a large channel already?",
            answer: "No. We work with channels of all sizes, including businesses starting from zero.",
        },
        {
            question: "Can YouTube Actually bring in leads for my business?",
            answer: "Yes - when done right, YouTube is one of the most powerful lead generation tools. We design your content to rank in search, build trust with viewers, and guide them to take action (like booking a call, filling out a form, etc)",
        },
        {
            question: "How fast will I see results?",
            answer: "Growth timelines vary, but most clients see meaningful results within 60-90 days. Our search driven strategy focuses on long-term, compounding results, not viral trends.",
        },
        {
            question: "Do you write scripts for my YouTube videos?",
            answer: "Yes, we are able to write scripts for your YouTube videos. We also can provide general outlines that structure your video and provide insights on what to talk about.",
        },
        {
            question: "What does a YouTube marketing agency do?",
            answer: "A YouTube marketing agency helps businesses grow their presence on YouTube by handling strategy, optimization, content guidance, and analytics. At Cartori Media, we focus on helping niche businesses use YouTube to attract leads and generate long-term growth",
        },
        {
            question: "What kinds of businesses do you work with?",
            answer: "We specialize in service-based and niche industries like addiction recovery, mental health, healthcare, coaching, and education. If you're selling a service or expertise, we can help.",
        },
        {
            question: "What if I'm uncomfortable on camera?",
            answer: "We coach you on how to feel comfortable and natural when filming. And if needed, we offer a professional presenter who can record the videos on your behalf using your brand and message.",
        },
        {
            question: "How do you measure success with YouTube marketing?",
            answer: "We track growth in views, subscribers, watch time, click-through-rate, and content output. We recognize that leads and conversions are most likely your number one priority, however we do not guarantee conversions as this is mostly out of our control.",
        },
        {
            question: "Do I need expensive equipment to get started?",
            answer: "Not at all. Quality content matters more than an expensive camera. Oftentimes, just a smartphone and basic lighting is enough to get started.",
        },
        {
            question: "Is YouTube better than paid advertising?",
            answer: "Organic YouTube content can outperform ads in cost-efficiency and long-term ROI. While paid ads disappear when your budget runs out, a good YouTube video can generate quality leads for years.",
        },
    ];

    const approaches = [
        {
            icon: Target,
            title: "Conversion-Focused Content",
            description:
                "Views are only step one. We structure your content to turn a viewer into qualified leads",
        },
        {
            icon: Search,
            title: "Search Intent First",
            description:
                "Helping you target what people in your niche are already searching for, not just what sounds good on camera",
        },
        {
            icon: Users,
            title: "Niche Audience Targeting",
            description:
                "Reach the people who need your service, not just inflate your view count",
        },
        {
            icon: Shield,
            title: "Trust Building Content",
            description:
                "Position your business as the authority in your space by solving real viewer problems",
        },
    ];

    const steps = [
        {
            number: "1",
            title: "Strategy & Research",
            description:
                "We begin with a deep dive into your goals, audience, and market. Using keyword data and industry insights, we craft a channel strategy that's built to grow long term, not just go viral.",
            subtitle:
                "This is where we lay the foundation for every video to bring you the right viewers.",
            services: [
                "Keyword & Topic Research",
                "Channel & Content Audit",
                "Competitor Analysis",
                "Strategic Planning & Positioning",
                "Monthly Content Calendar",
                "Industry Insights",
            ],
        },
        {
            number: "2",
            title: "Create Content",
            description:
                "Develop compelling, brand-aligned videos that keep viewers watching and build trust with your audience. We recognize that this is often the hardest part for businesses, that's why we help streamline this process and make it as easy as possible.",
            subtitle:
                "Whether you're filming yourself or want full production support, we guide you every step.",
            services: [
                "Content Ideation",
                "Hook & Script Writing",
                "Retention Strategy",
                "Conversion Optimized Call-To-Actions",
                "Long-Form and Short-Form Video Structure",
                "On-Camera Delivery Coaching",
                "Done-For-You Recording (Optional)",
            ],
        },
        {
            number: "3",
            title: "Optimize",
            description:
                "Before any video goes live, we fully optimize it for discovery. Our team handles SEO, metadata, and YouTube specific tactics to make sure your content ranks and gets seen.",
            subtitle: "",
            services: [
                "SEO Titles, Tags, & Descriptions",
                "Thumbnail A/B Testing",
                "Playlist & Endscreens",
                "Viewer Retention Tools",
                "YouTube Search Optimization",
            ],
        },
        {
            number: "4",
            title: "Analyze",
            description:
                "After publishing, we monitor performance, spot trends, and adjust course based on the data. Every month, you'll know what's working and what to do next.",
            subtitle: "",
            services: [
                "Monthly Analytics Report",
                "Performance-Based Strategy Updates",
                "Title & Thumbnail Refinements",
                "Watch-Time Analysis",
                "Audience Insights",
                "Search Ranking Tracking",
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
                            We Turn Niche YouTube Channels into{" "}
                            <span className="text-blue-600">
                                High Quality Leads
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Helping You Increase Your Brand&apos;s Visibility,
                            Trust, and Revenue
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
                            We don&apos;t chase viral trends. We build organic,
                            consistent growth that puts you in front of the
                            right audience
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
                            Curious if this works for your business? Book a free
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
                            With the right strategy, your channel can be your
                            business&apos;s best source of lead generation. At
                            Cartori Media, we follow a proven process built
                            specifically for niche-focused businesses. Whether
                            you&apos;re starting from scratch, or building an
                            existing channel. Our step-by-step framework is
                            designed to attract the right audience, earn trust,
                            and generate leads.
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
                            Let&apos;s talk about what your channel could be
                            doing - Schedule a free call
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
                                title: "Niche Expertise",
                                description:
                                    "We specialize in industries where content can directly drive leads and sales",
                            },
                            {
                                title: "Proven Results",
                                description:
                                    "Our clients generate millions of views and, more importantly, real leads every month",
                            },
                            {
                                title: "Done-For-You",
                                description:
                                    "We handle research, planning, optimization, and growth, so you can focus on your expertise",
                            },
                            {
                                title: "Transparent Communication",
                                description:
                                    "Clear monthly reports, strategy calls, and actionable next steps",
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
                                className="bg-white p-6 rounded-2xl border border-blue-200"
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

            {/* Results Section */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Results We&apos;ve Helped Generate
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                metric: "19M+",
                                description:
                                    "Views generated for clients in 2024",
                            },
                            {
                                metric: "0 → 218K",
                                description: "Subscribers grown for one client",
                                link: "https://www.youtube.com/@AddictionMindset",
                            },
                            {
                                metric: "2x",
                                description: "Search Traffic Volume increase",
                            },
                            {
                                metric: "4x",
                                description: "Watch time improvement",
                            },
                            {
                                metric: "15 Leads",
                                description:
                                    "converted to paying clients with 1 video",
                            },
                            {
                                metric: "2+ Years",
                                description:
                                    "Evergreen content strategy still bringing qualified leads",
                            },
                        ].map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white p-6 rounded-2xl border border-blue-200"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {result.metric}
                                </div>
                                <p className="text-gray-600">
                                    {result.link ? (
                                        <a
                                            href={result.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline cursor-pointer hover:text-blue-600"
                                        >
                                            {result.description}
                                        </a>
                                    ) : (
                                        result.description
                                    )}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.button
                            onClick={scrollToContact}
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl text-lg hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Want results like these? Get a free audit
                        </motion.button>
                    </motion.div>
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
