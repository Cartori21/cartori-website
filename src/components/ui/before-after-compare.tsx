"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionBadge } from "./section-badge";
import { Edit } from "lucide-react";

interface BeforeAfterCompareProps {
    beforeImage: string;
    afterImage: string;
    title?: string;
    className?: string;
}

export const BeforeAfterCompare = ({
    beforeImage,
    afterImage,
    title = "Sketch Progress",
    className = ""
}: BeforeAfterCompareProps) => {
    const [dividerPosition, setDividerPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const updatePosition = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
        const container = document.getElementById('before-after-container');
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setDividerPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
        updatePosition(e);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
        const touch = e.touches[0];
        const mouseEvent = {
            clientX: touch.clientX,
            clientY: touch.clientY
        } as MouseEvent;
        updatePosition(mouseEvent);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            e.preventDefault();
            updatePosition(e);
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (isDragging) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = {
                clientX: touch.clientX,
                clientY: touch.clientY
            } as MouseEvent;
            updatePosition(mouseEvent);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        snapToEdges();
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        snapToEdges();
    };

    const snapToEdges = () => {
        // Snap to edges if close
        if (dividerPosition <= 15) {
            // Animate to 0
            const startPos = dividerPosition;
            const startTime = Date.now();
            const duration = 300; // ms
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentPos = startPos + (0 - startPos) * easeOut;
                
                setDividerPosition(currentPos);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        } else if (dividerPosition >= 85) {
            // Animate to 100
            const startPos = dividerPosition;
            const startTime = Date.now();
            const duration = 300; // ms
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentPos = startPos + (100 - startPos) * easeOut;
                
                setDividerPosition(currentPos);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    };

    // Global mouse and touch handlers for smooth dragging
    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                e.preventDefault();
                updatePosition(e);
            }
        };

        const handleGlobalTouchMove = (e: TouchEvent) => {
            if (isDragging) {
                e.preventDefault();
                const touch = e.touches[0];
                const mouseEvent = {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                } as MouseEvent;
                updatePosition(mouseEvent);
            }
        };

        const handleGlobalMouseUp = () => {
            setIsDragging(false);
        };

        const handleGlobalTouchEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);
            document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
            document.addEventListener('touchend', handleGlobalTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('touchmove', handleGlobalTouchMove);
            document.removeEventListener('touchend', handleGlobalTouchEnd);
        };
    }, [isDragging]);

    return (
        <section className={`py-8 md:py-16 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Badge */}
                <div className="flex justify-center mb-8">
                    <SectionBadge 
                        icon={<Edit className="w-4 h-4" />}
                        text={title} 
                    />
                </div>

                {/* Before/After Comparison */}
                <div 
                    id="before-after-container"
                    className="relative rounded-2xl overflow-hidden bg-gray-100 cursor-ew-resize select-none"
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ aspectRatio: "16/9" }}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0">
                        <Image
                            src={afterImage}
                            alt="After"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg font-semibold text-gray-800">
                            AFTER
                        </div>
                    </div>

                    {/* Before Image (Clipped) */}
                    <div 
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }}
                    >
                        <Image
                            src={beforeImage}
                            alt="Before"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg font-semibold text-gray-800">
                            BEFORE
                        </div>
                    </div>

                    {/* Divider Line and Handle */}
                    <div 
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                        style={{ left: `${dividerPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        {/* Drag Handle */}
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <div className="flex items-center -space-x-1">
                                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};