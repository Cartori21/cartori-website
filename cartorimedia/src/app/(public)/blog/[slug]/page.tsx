"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import BlogPostComponent from "@/components/ui/blog-post";

export default function BlogPostPage() {
    const params = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/blog-data/${params.slug}.json`);
                
                if (!response.ok) {
                    throw new Error('Blog post not found');
                }
                
                const postData = await response.json();
                setPost(postData);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load blog post');
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchPost();
        }
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-gray-900 text-xl">
                    Loading...
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-600 mb-8">
                        {error || "The blog post you're looking for doesn't exist."}
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <BlogPostComponent post={post} />
    );
}