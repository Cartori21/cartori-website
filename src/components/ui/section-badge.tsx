"use client";

import { ImageIcon } from "lucide-react";

interface SectionBadgeProps {
    icon?: React.ReactNode;
    text: string;
    className?: string;
}

export const SectionBadge = ({ icon, text, className = "" }: SectionBadgeProps) => {
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 font-medium text-sm ${className}`}>
            {icon || <ImageIcon className="w-4 h-4" />}
            {text}
        </div>
    );
};