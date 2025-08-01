"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface MiniTestimonialProps {
    name: string;
    subscribers: string;
    quote: string;
    avatar: string;
    verified?: boolean;
}

export const MiniTestimonial = ({
    name,
    subscribers,
    quote,
    avatar,
    verified = true
}: MiniTestimonialProps) => {
    return (
        <div className="flex items-center justify-center px-6 py-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-md mx-auto shadow-sm">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Image
                            src={avatar}
                            alt={name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{name}</h4>
                            {verified && (
                                <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                            )}
                        </div>
                        <p className="text-gray-600 text-sm">{subscribers}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-700 font-medium">"{quote}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};