"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BlogCard } from "@/components/ui/blog-card";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import { BlogPost } from "@/types/blog";

export default function BlogPage() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                // List of blog post IDs (you can expand this list as you add more JSON files)
                const blogIds = [
                    "blog-a7f2k9",
                    "blog-b3x8m4",
                    "blog-c9p4n7",
                    "blog-e8j6r3",
                    "blog-d5k2w8",
                    "blog-f1m9q4",
                    // Add more blog IDs here as you create more JSON files
                ];

                const posts = await Promise.all(
                    blogIds.map(async (id) => {
                        try {
                            const response = await fetch(
                                `/blog-data/${id}.json`
                            );
                            if (response.ok) {
                                return await response.json();
                            }
                            return null;
                        } catch (error) {
                            console.error(
                                `Failed to fetch blog post ${id}:`,
                                error
                            );
                            return null;
                        }
                    })
                );

                // Filter out any failed fetches and sort by date (newest first)
                const validPosts = posts.filter((post) => post !== null);
                setBlogPosts(validPosts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <motion.div
                    className="text-gray-900 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Loading blog posts...
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Blog Grid */}
            <section className="py-8 md:py-16 px-6">
                <div className="max-w-7xl mx-auto pt-20">
                    <div className="flex flex-wrap gap-8 justify-center items-stretch">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] flex"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <BlogCard
                                    id={post.id}
                                    title={post.title}
                                    description={post.description}
                                    image={post.image}
                                    tags={post.tags}
                                />
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
        </div>
    );
}
