"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    href?: string;
}

export const BlogCard = ({ 
    id, 
    title, 
    description, 
    image, 
    tags, 
    href = `/blog/${id}` 
}: BlogCardProps) => {
    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <Link href={href}>
                <div className="bg-background border-2 border-blue-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                        <div>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full uppercase tracking-wide"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {title}
                            </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};