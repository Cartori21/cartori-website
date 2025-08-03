"use client";
import Image from "next/image";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import AnimatedButton from "@/components/ui/animated-button";
import { Home, Image as ImageIcon, Video, Edit, FileText, ChevronDown, Youtube, Play, LucideIcon } from "lucide-react";

type NavItem = {
    label: string;
    href?: string;
    icon: LucideIcon;
    dropdown?: {
        label: string;
        href: string;
        icon: LucideIcon;
    }[];
};
import { motion } from "motion/react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const scrollToContact = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            const navbarHeight = 80; // h-20 = 80px
            const elementTop = contactForm.offsetTop;
            const elementHeight = contactForm.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate position to center the form in viewport, accounting for navbar
            const offsetPosition =
                elementTop - (windowHeight - navbarHeight - elementHeight) / 2;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setOpen(false); // Close mobile menu if open
    };
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navItems: NavItem[] = [
        { label: "Home", href: "/", icon: Home },
        { label: "Blog", href: "/blog", icon: FileText },
        {
            label: "Marketing",
            icon: Edit,
            dropdown: [
                { label: "YouTube", href: "/youtube", icon: Youtube },
                { label: "Short-Form", href: "/short-form", icon: Play },
            ],
        },
        {
            label: "Editing",
            icon: Video,
            dropdown: [
                { label: "Thumbnails", href: "/thumbnails", icon: ImageIcon },
                { label: "Shorts", href: "/shorts", icon: Video },
                { label: "Video Editing", href: "/videos", icon: Edit },
            ],
        },
    ];

    return (
        <>
            <motion.nav
                className="h-20 bg-background fixed top-0 left-0 right-0 z-50"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
            >
                <div className="flex items-center justify-between px-6 h-full max-w-[1500px] mx-auto">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <Link href="/" className="flex-shrink-0">
                            {/* Mobile: Icon only (sm and below) */}
                            <Image
                                src="/images/logos/icon-logo.svg"
                                alt="Cartorimedia Logo"
                                width={50}
                                height={50}
                                className="w-10 h-10 sm:hidden"
                                // priority
                            />
                            {/* Tablet: Text logo (sm to lg) */}
                            <Image
                                src="/images/logos/text-logo.svg"
                                alt="Cartorimedia Logo"
                                width={150}
                                height={50}
                                className="w-[120px] h-[40px] hidden sm:block lg:hidden"
                                // priority
                            />
                            {/* Desktop: Full text logo (lg and up) */}
                            <Image
                                src="/images/logos/text-logo.svg"
                                alt="Cartorimedia Logo"
                                width={150}
                                height={50}
                                className="w-[150px] h-[50px] hidden lg:block"
                                // priority
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation (lg and up) */}
                    <ul
                        className="hidden lg:flex items-center h-[50px] space-x-[20px]"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => (
                            <motion.li
                                key={item.label}
                                className="h-full flex items-center relative"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1,
                                    ease: "easeOut",
                                }}
                                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <motion.div
                                    className="h-full flex items-center"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.dropdown ? (
                                        <div className="flex items-center h-full px-4 text-primary font-bold text-lg relative overflow-hidden group cursor-pointer">
                                            <span className="relative z-10 flex items-center gap-1">
                                                {item.label}
                                                <ChevronDown className="w-4 h-4" />
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-primary/10 rounded-lg"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    transition: { duration: 0.2 },
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href || "/"}
                                            className="flex items-center h-full px-4 text-primary font-bold text-lg relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">
                                                {item.label}
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-primary/10 rounded-lg"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    transition: { duration: 0.2 },
                                                }}
                                            />
                                        </Link>
                                    )}
                                </motion.div>
                                
                                {/* Dropdown Menu */}
                                {item.dropdown && openDropdown === item.label && (
                                    <motion.div
                                        className="absolute top-full left-0 pt-2 z-50"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-background border border-primary/20 rounded-lg shadow-lg py-2 min-w-[180px]">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="flex items-center px-4 py-2 text-text hover:bg-primary/10 hover:text-primary transition-colors"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <subItem.icon className="w-4 h-4 mr-3" />
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Desktop Contact Button (lg and up) */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <AnimatedButton
                            className="w-[150px] h-[50px] !hidden lg:!block"
                            onClick={scrollToContact}
                        >
                            Contact Us
                        </AnimatedButton>
                    </motion.div>

                    {/* Mobile/Tablet: Contact Button and Hamburger (below lg) */}
                    <motion.div
                        className="!flex items-center gap-4 lg:!hidden"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <AnimatedButton
                            className="w-[120px] h-[40px] text-sm"
                            onClick={scrollToContact}
                        >
                            Contact
                        </AnimatedButton>
                        <Hamburger
                            rounded
                            toggled={isOpen}
                            toggle={setOpen}
                            size={40}
                            distance="md"
                            color="var(--text)"
                            easing="ease-in-out"
                            duration={0.35}
                            label="Toggle navigation menu"
                        />
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-background z-40 lg:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation menu"
                >
                    <div className="flex flex-col h-full px-6 pt-20">
                        <nav
                            className="flex flex-col space-y-2 w-full"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut",
                                        }}
                                        whileHover={{
                                            x: 10,
                                            transition: { duration: 0.2 },
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.dropdown ? (
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-4 text-left py-3 px-4">
                                                    <IconComponent className="text-primary/60 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                                                    <span className="text-lg sm:text-xl font-semibold text-primary/80 uppercase tracking-wide">
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <div className="ml-12 space-y-2">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.label}
                                                            href={subItem.href}
                                                            className="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <subItem.icon className="text-primary flex-shrink-0 w-5 h-5" />
                                                            <span className="text-lg font-medium text-text hover:text-primary transition-colors">
                                                                {subItem.label}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href || "/"}
                                                className="flex items-center space-x-4 text-left group py-4 px-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                                                onClick={() => setOpen(false)}
                                            >
                                                <motion.div
                                                    whileHover={{
                                                        rotate: 10,
                                                        scale: 1.1,
                                                        transition: {
                                                            duration: 0.2,
                                                        },
                                                    }}
                                                >
                                                    <IconComponent className="text-primary flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                                                </motion.div>
                                                <motion.span
                                                    className="text-xl sm:text-2xl md:text-3xl font-bold text-text group-hover:text-primary transition-colors"
                                                    whileHover={{
                                                        y: -2,
                                                        transition: {
                                                            duration: 0.2,
                                                        },
                                                    }}
                                                >
                                                    {item.label}
                                                </motion.span>
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default Navbar;
