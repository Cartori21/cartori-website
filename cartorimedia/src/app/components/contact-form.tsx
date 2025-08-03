"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const getBrowserInfo = (userAgent: string): string => {
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg"))
        return "Chrome";
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
        return "Safari";
    if (userAgent.includes("Edg")) return "Edge";
    if (userAgent.includes("Opera")) return "Opera";
    return "Unknown Browser";
};

const getOSInfo = (userAgent: string): string => {
    if (userAgent.includes("Windows NT 10.0")) return "Windows 10/11";
    if (userAgent.includes("Windows NT 6.3")) return "Windows 8.1";
    if (userAgent.includes("Windows NT 6.2")) return "Windows 8";
    if (userAgent.includes("Windows NT 6.1")) return "Windows 7";
    if (userAgent.includes("Mac OS X")) return "macOS";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Android")) return "Android";
    if (userAgent.includes("iPhone") || userAgent.includes("iPad"))
        return "iOS";
    return "Unknown OS";
};

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Discord webhook URL - you'll need to replace this with your actual webhook URL
            const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

            if (!webhookUrl) {
                throw new Error("Discord webhook URL not configured");
            }

            // Get additional information
            const userAgent = navigator.userAgent;
            const browser = getBrowserInfo(userAgent);
            const os = getOSInfo(userAgent);
            const screenResolution = `${screen.width}x${screen.height}`;
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const language = navigator.language;

            // Get IP and location info (this will be the server's IP in production)
            let locationInfo = "Unknown";
            try {
                const ipResponse = await fetch(
                    "https://api.ipify.org?format=json"
                );
                const ipData = await ipResponse.json();
                const locationResponse = await fetch(
                    `https://ipapi.co/${ipData.ip}/json/`
                );
                const locationData = await locationResponse.json();
                locationInfo = `${locationData.city}, ${locationData.region}, ${locationData.country_name} (${locationData.country_code})`;
            } catch {
                console.log("Could not fetch location data");
            }

            const discordMessage = {
                content: "🚨 **New Contact Form Submission** 🚨",
                embeds: [
                    {
                        title: "💬 Contact Form Submission",
                        description: `**${formData.name}** has submitted a new contact form`,
                        color: 0x2958ec, // Primary color
                        fields: [
                            {
                                name: "👤 Contact Information",
                                value: `**Name:** ${formData.name}\n**Email:** ${formData.email}`,
                                inline: false,
                            },
                            {
                                name: "💌 Message",
                                value:
                                    formData.message.length > 1000
                                        ? formData.message.substring(0, 1000) +
                                          "..."
                                        : formData.message,
                                inline: false,
                            },
                            {
                                name: "🌍 Location & Device",
                                value: `**Location:** ${locationInfo}\n**Browser:** ${browser}\n**OS:** ${os}\n**Resolution:** ${screenResolution}`,
                                inline: true,
                            },
                            {
                                name: "🕒 Submission Details",
                                value: `**Time:** <t:${Math.floor(
                                    Date.now() / 1000
                                )}:F>\n**Timezone:** ${timezone}\n**Language:** ${language}`,
                                inline: true,
                            },
                        ],
                        footer: {
                            text: "Cartorimedia Contact Form",
                            icon_url:
                                "https://cdn.discordapp.com/emojis/737036659784376320.png",
                        },
                        timestamp: new Date().toISOString(),
                        thumbnail: {
                            url: "https://cdn.discordapp.com/emojis/860492606098243584.png",
                        },
                    },
                ],
            };

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(discordMessage),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full px-4 py-4 border-1 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors text-lg"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-4 border-1 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors text-lg"
                    />
                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                        rows={6}
                        className="w-full px-4 py-4 border-1w border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors text-lg resize-none"
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    {isSubmitting ? "Sending..." : "Get In Touch"}
                </motion.button>

                {submitStatus === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 text-center font-medium"
                    >
                        Message sent successfully! We&apos;ll get back to you
                        soon.
                    </motion.div>
                )}

                {submitStatus === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 text-center font-medium"
                    >
                        Failed to send message. Please try again or contact us
                        directly.
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
};

export default Contact;
