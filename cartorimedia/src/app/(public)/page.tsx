import Contact from "../components/contactForm";
import Facts from "../components/facts";
import Faq from "../components/faq";
import Hero from "../components/hero";
import InfoSection from "../components/infoSection";
import Socials from "../components/socials";
import CompanyCarousel from "../components/companyCarousel";
import { homeFaqItems } from "@/data/faq";
import { infoSectionsData } from "@/data/infoSections";
import TestimonialCarousel from "../components/testimonialCarousel";
import VideoShowcase from "../components/videoShowcase";

export default function Home() {
    return (
        <>
            <Hero />
            <CompanyCarousel />
            <VideoShowcase />
            <TestimonialCarousel />
            {infoSectionsData.map((section) => (
                <InfoSection
                    key={section.id}
                    id={section.id}
                    imageSrc={section.imageSrc}
                    imageAlt={section.imageAlt}
                    imageOrder={section.imageOrder}
                    content={section.content}
                    highlights={section.highlights}
                />
            ))}
            <Facts />
            <section id="contact" className="py-8 md:py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
                        <Socials />
                        <Contact />
                    </div>
                </div>
            </section>
            <Faq items={homeFaqItems} />
        </>
    );
}
