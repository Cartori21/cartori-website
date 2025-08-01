"use client";

import { motion } from "motion/react";

const Facts = () => {
    const facts = [
        {
            value: "<24h",
            label: "Turnaround",
            description: "Launch your content quickly with our fast editing and marketing services.",
        },
        {
            value: "200%+",
            label: "Output Growth", 
            description: "Maximize your output without compromising quality.",
        },
        {
            value: "18",
            label: "Extra Hours/Week",
            description: "Reclaim your time with effortless content management.",
        },
    ];

    return (
        <section className="py-8 md:py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1
                            }}
                            whileHover={{ 
                                scale: 1.02, 
                                y: -5,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-primary shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                            style={{
                                willChange: "transform",
                                transform: "translateZ(0)",
                            }}
                        >
                            <div className="text-left">
                                <div
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
                                    style={{
                                        backgroundImage: "-webkit-linear-gradient(45deg, #2958ec, #28296600 160%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {fact.value}
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                                    {fact.label}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {fact.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facts;
