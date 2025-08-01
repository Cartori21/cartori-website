"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface InfoSectionProps {
    id: string;
    imageSrc: string;
    imageAlt: string;
    content: string[];
    highlights: { [key: string]: string[] };
    imageOrder?: "left" | "right";
}

const InfoSection = ({ id, imageSrc, imageAlt, content, highlights, imageOrder = "left" }: InfoSectionProps) => {
    const isImageLeft = imageOrder === "left";
    
    const renderTextWithHighlights = (text: string, paragraphIndex: number) => {
        const paragraphHighlights = highlights[paragraphIndex.toString()] || [];
        let result = text;
        
        paragraphHighlights.forEach(highlight => {
            const regex = new RegExp(`\\b${highlight}\\b`, 'gi');
            result = result.replace(regex, `<span class="text-primary font-semibold">${highlight}</span>`);
        });
        
        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };
    
    return (
        <section className="py-8 md:py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-6 lg:gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`lg:col-span-2 ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
                    >
                        <div className="flex justify-center">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={600}
                                height={400}
                                className="w-3/4 md:w-full h-auto max-w-sm lg:max-w-none"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`lg:col-span-3 space-y-6 ${isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
                    >
                        {content.map((paragraph, index) => (
                            <p key={`${id}-paragraph-${index}`} className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                {renderTextWithHighlights(paragraph, index)}
                            </p>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;