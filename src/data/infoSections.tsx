export interface InfoSectionData {
    id: string;
    imageSrc: string;
    imageAlt: string;
    imageOrder: "left" | "right";
    content: string[];
    highlights: { [key: string]: string[] };
}

export const infoSectionsData: InfoSectionData[] = [
    {
        id: "youtube-strategy",
        imageSrc: "/images/illustrations/info_illustration2.svg",
        imageAlt: "YouTube growth strategy illustration",
        imageOrder: "left",
        content: [
            "At Cartori Media, we help creators and businesses grow on YouTube by handling strategy and editing, so you can focus on creating.",
            "Our services include YouTube analytics, growth strategy, SEO optimization, titling, scripting, and content planning - all designed to increase your visibility, boost retention, and generate high-quality leads.",
            "We take a data-driven approach to everything we do, from writing SEO-friendly titles that get clicks to developing content ideas that connect with your audience and drive engagement. Using real industry insight, we'll help guide your content in the right direction, making sure it performs well across platforms and reaches the right people.",
            "By working with us, you get a partner who's focused on growth. Our clients consistently see more views, better engagement, stronger subscriber growth, and improved lead generation.",
        ],
        highlights: {
            "0": ["strategy", "editing"],
            "1": ["increase"],
            "2": ["clicks", "insight"],
            "3": ["consistently"],
        },
    },
    {
        id: "content-creation",
        imageSrc: "/images/illustrations/info_illustration1.svg",
        imageAlt: "Content creation illustration",
        imageOrder: "right",
        content: [
            "We specialize in high-quality editing services, handling everything from thumbnails and short-form videos to long-form content and podcasts.",
            "Our services are designed to save you valuable time and elevate your content to professional standards, helping it stand out in an increasingly competitive landscape.",
            "We combine eye-catching thumbnails that reflect the true essence of your content, build trust, and are tailored to your niche, ensuring genuine engagement, with editing that keeps your audience hooked from start to finish - taking your content to the next level and maximizing its impact every step of the way.",
            "By working with us, you can focus on creating content, growing your business, and expanding your platform, while we handle the technical details. Our clients have seen significant improvements in content quality, reach, and audience engagement thanks to our services.",
        ],
        highlights: {
            "0": ["thumbnails", "short-form", "long-form", "podcasts"],
            "1": ["professional"],
            "2": ["engagement", "impact"],
            "3": ["significant"],
        },
    },
];
