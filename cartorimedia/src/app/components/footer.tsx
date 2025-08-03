import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-background py-6 md:py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6">
                <Image
                    src="/images/logos/text-logo.svg"
                    alt="Cartori"
                    width={120}
                    height={40}
                    className="h-6 md:h-8 w-auto"
                />
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <p className="text-text text-sm md:text-base text-center">
                    Cartorimedia 2025 © All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
