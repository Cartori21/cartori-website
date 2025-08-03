"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
export const ThreeDMarquee = ({
    images,
    className,
    aspectRatio = "16/9",
}: {
    images: string[];
    className?: string;
    aspectRatio?: "16/9" | "9/16";
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Split the images array into 4 equal parts
    const chunkSize = Math.ceil(images.length / 4);
    const chunks = Array.from({ length: 4 }, (_, colIndex) => {
        const start = colIndex * chunkSize;
        return images.slice(start, start + chunkSize);
    });
    return (
        <div
            className={cn(
                "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
                className
            )}
        >
            <div className="flex size-full items-center justify-center">
                <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
                    <div
                        style={{
                            transform:
                                "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
                        }}
                        className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid w-[120%] h-[120%] origin-center grid-cols-4 gap-8"
                    >
                        {chunks.map((subarray, colIndex) => (
                            <motion.div
                                animate={{ y: isMounted && isMobile ? 0 : (colIndex % 2 === 0 ? 100 : -100) }}
                                transition={{
                                    duration: colIndex % 2 === 0 ? 10 : 15,
                                    repeat: isMounted && isMobile ? 0 : Infinity,
                                    repeatType: "reverse",
                                }}
                                key={colIndex + "marquee"}
                                className="flex flex-col items-start gap-8"
                                style={{
                                    transform: isMounted && isMobile ? 'translateZ(0)' : undefined
                                }}
                            >
                                <GridLineVertical
                                    className="-left-4"
                                    offset="80px"
                                />
                                {subarray.map((image, imageIndex) => (
                                    <div
                                        className="relative"
                                        key={imageIndex + image}
                                    >
                                        <GridLineHorizontal
                                            className="-top-4"
                                            offset="20px"
                                        />
                                        <motion.img
                                            initial={{ 
                                                opacity: 0, 
                                                scale: 0.8,
                                                rotateX: isMounted && isMobile ? 0 : 90
                                            }}
                                            animate={{ 
                                                opacity: 1, 
                                                scale: 1,
                                                rotateX: 0
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: (colIndex * 0.1) + (imageIndex * 0.2),
                                                ease: "easeOut",
                                            }}
                                            whileHover={isMounted && !isMobile ? {
                                                y: -10,
                                            } : {}}
                                            key={imageIndex + image}
                                            src={image}
                                            alt={`Image ${imageIndex + 1}`}
                                            className={cn(
                                                `aspect-[${aspectRatio}]`,
                                                "rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl bg-gray-200 pointer-events-none sm:pointer-events-auto"
                                            )}
                                            width={970}
                                            height={700}
                                            loading="lazy"
                                            style={{
                                                willChange: isMounted && isMobile ? "auto" : "transform",
                                                backfaceVisibility: "hidden",
                                                WebkitBackfaceVisibility: "hidden",
                                                transform: isMounted && isMobile ? 'translateZ(0)' : undefined
                                            }}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const GridLineHorizontal = ({
    className,
    offset,
}: {
    className?: string;
    offset?: string;
}) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "rgba(41, 88, 236, 0.3)",
                    "--height": "1px",
                    "--width": "5px",
                    "--fade-stop": "90%",
                    "--offset": offset || "200px", //-100px if you want to keep the line inside
                    "--color-dark": "rgba(41, 88, 236, 0.4)",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={cn(
                "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
                "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
                "[background-size:var(--width)_var(--height)]",
                "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
                "[mask-composite:exclude]",
                "z-30",
                "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
                className
            )}
        ></div>
    );
};

const GridLineVertical = ({
    className,
    offset,
}: {
    className?: string;
    offset?: string;
}) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "rgba(41, 88, 236, 0.3)",
                    "--height": "5px",
                    "--width": "1px",
                    "--fade-stop": "90%",
                    "--offset": offset || "150px", //-100px if you want to keep the line inside
                    "--color-dark": "rgba(41, 88, 236, 0.4)",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={cn(
                "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
                "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
                "[background-size:var(--width)_var(--height)]",
                "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
                "[mask-composite:exclude]",
                "z-30",
                "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
                className
            )}
        ></div>
    );
};
