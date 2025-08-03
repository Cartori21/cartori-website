"use client";

import React from "react";
import { BlogPost, BlogContent } from "@/types/blog";
import { motion } from "motion/react";
import Image from "next/image";
import Contact from "@/app/components/contactForm";
import Socials from "@/app/components/socials";
import "../../styles/blog-post.css";

interface BlogPostProps {
    post: BlogPost;
}

const BlogPostComponent = ({ post }: BlogPostProps) => {
    // Function to apply highlights to text
    const applyHighlights = (text: string, highlights?: string[]): React.JSX.Element => {
        if (!highlights || highlights.length === 0) {
            return <span>{text}</span>;
        }

        let lastIndex = 0;
        const elements: React.JSX.Element[] = [];

        // Create a regex pattern that matches any of the highlight terms
        const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
        const matches = Array.from(text.matchAll(pattern));

        matches.forEach((match, index) => {
            const matchStart = match.index!;
            const matchEnd = matchStart + match[0].length;

            // Add text before the match
            if (matchStart > lastIndex) {
                elements.push(<span key={`text-${index}`}>{text.slice(lastIndex, matchStart)}</span>);
            }

            // Add the highlighted match
            elements.push(
                <span key={`highlight-${index}`} className="highlight">
                    {match[0]}
                </span>
            );

            lastIndex = matchEnd;
        });

        // Add remaining text after the last match
        if (lastIndex < text.length) {
            elements.push(<span key="text-end">{text.slice(lastIndex)}</span>);
        }

        return <>{elements}</>;
    };

    const renderContent = (content: BlogContent, index: number) => {
        switch (content.type) {
            case 'paragraph':
                return (
                    <p key={index}>
                        {applyHighlights(content.content as string, content.highlights)}
                    </p>
                );
            
            case 'heading':
                const HeadingTag = `h${content.level || 2}` as keyof React.JSX.IntrinsicElements;
                return (
                    <HeadingTag key={index}>
                        {applyHighlights(content.content as string, content.highlights)}
                    </HeadingTag>
                );
            
            case 'list':
                const items = Array.isArray(content.content) ? content.content : [content.content];
                return (
                    <ul key={index}>
                        {items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                {applyHighlights(item, content.highlights)}
                            </li>
                        ))}
                    </ul>
                );

            case 'quote':
                return (
                    <blockquote key={index}>
                        {applyHighlights(content.content as string, content.highlights)}
                    </blockquote>
                );

            case 'image':
                return (
                    <div key={index} className="blog-image">
                        <Image
                            src={content.src!}
                            alt={content.alt || ''}
                            width={800}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                );

            case 'code':
                return (
                    <pre key={index}>
                        <code className={content.language ? `language-${content.language}` : ''}>
                            {content.content as string}
                        </code>
                    </pre>
                );
            
            case 'tip-box':
                return (
                    <div key={index} className="tip-box">
                        <p>{applyHighlights(content.content as string, content.highlights)}</p>
                    </div>
                );
            
            case 'example-box':
                return (
                    <div key={index} className="example-box">
                        <p>{applyHighlights(content.content as string, content.highlights)}</p>
                    </div>
                );
            
            case 'warning-box':
                return (
                    <div key={index} className="warning-box">
                        <p>{applyHighlights(content.content as string, content.highlights)}</p>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <main className="blog-post-main">
                <div className="blog-container">
                    {/* Blog Header */}
                    <div className="blog-header">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="read-time">{post.readTime}</div>
                            <h1 className="blog-title">{post.title}</h1>
                            <div className="blog-date">{post.date}</div>
                            <div className="blog-tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="blog-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Portfolio Section */}
                    {post.portfolio && (
                        <motion.div
                            className="portfolio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {post.portfolio.type === 'youtube' ? (
                                <iframe
                                    src={post.portfolio.src}
                                    style={{ width: '100%', aspectRatio: '16/9', borderRadius: '10px', border: 'none' }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            ) : (
                                <Image
                                    src={post.portfolio.src}
                                    alt={post.portfolio.alt || post.title}
                                    width={800}
                                    height={450}
                                    style={{ width: '100%', aspectRatio: '16/9', borderRadius: '10px' }}
                                />
                            )}
                        </motion.div>
                    )}

                    {/* Blog Content */}
                    <motion.div
                        className="blog-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {post.content.map((content, index) => renderContent(content, index))}
                    </motion.div>
                </div>
            </main>

            {/* Contact Section */}
            <section className="py-8 md:py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
                        <Socials />
                        <Contact />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPostComponent;