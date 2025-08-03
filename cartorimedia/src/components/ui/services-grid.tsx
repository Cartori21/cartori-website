"use client";

import { motion } from "motion/react";
import { Scissors, Clapperboard, Volume2, Sparkles, Zap, ArrowRightLeft, RotateCcw, Video } from "lucide-react";

interface ServicesGridProps {
    className?: string;
}

export const ServicesGrid = ({
    className = "",
}: ServicesGridProps) => {
    const services = [
        {
            icon: <Scissors className="w-8 h-8 text-red-500" />,
            title: "Cutting & Trimming",
            description: "Removing unnecessary pauses, filler words, and stutters for concise content."
        },
        {
            icon: <Clapperboard className="w-8 h-8 text-gray-600" />,
            title: "B-Roll Integration",
            description: "Incorporating relevant footage to support main talking points."
        },
        {
            icon: <Volume2 className="w-8 h-8 text-gray-800" />,
            title: "Audio Enhancement",
            description: "Reducing noise, leveling audio, and adding professional sound design."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
            title: "Motion Graphics & Text",
            description: "Creating dynamic animations and text overlays to highlight key points."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Pacing & Timing",
            description: "Ensuring logical and smooth flow from one point to the next."
        },
        {
            icon: <ArrowRightLeft className="w-8 h-8 text-blue-500" />,
            title: "Transitions",
            description: "Implementing smooth scene transitions that maintain natural flow."
        },
        {
            icon: <RotateCcw className="w-8 h-8 text-orange-500" />,
            title: "Rotoscoping",
            description: "Replacing backgrounds with relevant visuals for immersive presentation."
        },
        {
            icon: <Video className="w-8 h-8 text-gray-600" />,
            title: "Final Export",
            description: "Ensuring optimal video quality and format for the platform."
        }
    ];

    return (
        <section className={`py-8 md:py-16 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-background border-2 border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-600 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};