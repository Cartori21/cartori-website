"use client";

// Visit https://kaif-ui.vercel.app/ for more components like this

import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "motion/react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: "horizontal" | "vertical";
    reverse?: boolean;
    className?: string;
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    direction = "horizontal",
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);

    useEffect(() => {
        const size = direction === "horizontal" ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        const controls = animate(translation, [from, to], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls?.stop;
    }, [translation, duration, width, height, gap, direction, reverse]);

    return (
        <div className={cn("overflow-hidden", className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === "horizontal"
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection:
                        direction === "horizontal" ? "row" : "column",
                }}
                ref={ref}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
