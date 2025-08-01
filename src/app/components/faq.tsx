"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { FAQItem } from "@/data/faq";

interface FaqProps {
    items: FAQItem[];
    defaultOpenIndex?: number | null;
    title?: string;
}

const Faq = ({ items, defaultOpenIndex = null, title }: FaqProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-6 md:py-24 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                {title && (
                    <h3 className="text-2xl md:text-4xl font-bold text-center text-text mb-8 md:mb-12">
                        {title}
                    </h3>
                )}
                <div className="space-y-3 md:space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 py-4 md:px-6 md:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                                aria-expanded={openIndex === index}
                                aria-label={`Toggle FAQ: ${item.question}`}
                            >
                                <h4 className="text-base md:text-lg font-semibold text-primary pr-3 md:pr-4 leading-tight">
                                    {item.question}
                                </h4>
                                <div className="flex-shrink-0">
                                    <motion.div
                                        animate={{
                                            rotate:
                                                openIndex === index ? 45 : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Plus className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                    </motion.div>
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4 pt-0 md:px-6 md:pb-5">
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
