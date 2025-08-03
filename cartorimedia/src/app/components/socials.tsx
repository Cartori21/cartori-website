"use client";

import { motion } from "motion/react";
import { Play, Camera, Mail } from "lucide-react";

const Socials = () => {
    const socialLinks = [
        {
            name: "YouTube",
            username: "Cartorimedia",
            url: "https://www.youtube.com/channel/UCkCfDygzdyaXmW4SKwxHvaA",
            icon: Play,
            color: "#FF0000",
        },
        {
            name: "Instagram",
            username: "Cartorimedia",
            url: "https://www.instagram.com/cartorimedia/",
            icon: Camera,
            color: "#E4405F",
        },
        {
            name: "Email",
            username: "contact@cartorimedia.com",
            url: "mailto:contact@cartorimedia.com",
            icon: Mail,
            color: "#2958ec",
        },
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 md:mb-10"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-3">
                    Connect With Us
                </h3>
                <p className="text-gray-600 max-w-xl">
                    Follow us for the latest updates and success stories.
                </p>
            </motion.div>

            <div className="grid gap-4 md:gap-5">
                {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.01,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center p-4 md:p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-[border-color,box-shadow] duration-300 group"
                        >
                            <motion.div
                                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full mr-4 md:mr-5"
                                style={{ backgroundColor: social.color }}
                                whileHover={{ rotate: 3 }}
                                transition={{ duration: 0.1 }}
                            >
                                <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </motion.div>
                            <div className="flex-1">
                                <h4 className="text-lg md:text-xl font-semibold text-text group-hover:text-primary transition-colors">
                                    {social.name}
                                </h4>
                                <p className="text-gray-600 text-sm md:text-base">
                                    {social.username}
                                </p>
                            </div>
                            <motion.div
                                className="opacity-50 group-hover:opacity-100 transition-opacity duration-150"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.1 }}
                            >
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </motion.div>
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
};

export default Socials;
