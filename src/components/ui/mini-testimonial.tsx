"use client";

import Image from "next/image";

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
    verified = true,
}: MiniTestimonialProps) => {
    return (
        <div className="flex items-center justify-center px-6 py-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:pr-0! sm:p-6 mx-auto shadow-sm inline-flex">
                {/* Mobile Layout */}
                <div className="flex flex-col space-y-3 sm:hidden">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="relative flex-shrink-0">
                            <Image
                                src={avatar}
                                alt={name}
                                width={80}
                                height={80}
                                className="w-16 h-16 rounded-xl object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-semibold text-gray-900 text-base">
                                    {name}
                                </h4>
                                {verified && (
                                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-600 text-sm">
                                {subscribers}
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-700 font-medium text-base">
                            &quot;{quote}&quot;
                        </p>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex items-center space-x-4">
                    <div className="relative flex-shrink-0">
                        <Image
                            src={avatar}
                            alt={name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-xl object-cover"
                        />
                    </div>
                    <div className="flex items-center">
                        <div className="text-left flex-shrink-0">
                            <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-gray-900 text-lg">
                                    {name}
                                </h4>
                                {verified && (
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-600 text-base">
                                {subscribers}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="text-gray-700 font-medium text-lg px-8">
                                &quot;{quote}&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
