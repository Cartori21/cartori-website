"use client";

import { SectionBadge } from "./section-badge";
import { VideoIcon } from "lucide-react";

interface ShortsBeforeAfterCompareProps {
    beforeShortUrl: string;
    afterShortUrl: string;
}

export const ShortsBeforeAfterCompare = ({
    beforeShortUrl,
    afterShortUrl,
}: ShortsBeforeAfterCompareProps) => {
    return (
        <section className="py-8 md:py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Badge */}
                <div className="flex justify-center mb-8">
                    <SectionBadge
                        icon={<VideoIcon className="w-4 h-4" />}
                        text="Sketch Progress"
                    />
                </div>

                <div className="text-center mb-8 md:col-span-2">
                    <p className="text-lg md:text-xl text-primary font-light">
                        Captions{" "}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-2 align-middle"></span>{" "}
                        Motion{" "}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-2 align-middle"></span>{" "}
                        B rolls{" "}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-2 align-middle"></span>{" "}
                        Transitions{" "}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-2 align-middle"></span>{" "}
                        Motion Graphics{" "}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-2 align-middle"></span>{" "}
                        Music
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 mx-auto md:max-w-2xl lg:max-w-3xl">
                    <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100 shadow-lg w-full relative">
                        <iframe
                            src={beforeShortUrl}
                            title="Before Short"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100 shadow-lg w-full relative">
                        <iframe
                            src={afterShortUrl}
                            title="After Short"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
