"use client";
import { useState } from 'react';
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            if (sectionId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const offset = 40;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <nav className="w-full px-8 py-4">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <button
                            onClick={(e) => scrollToSection(e, 'contact')} 
                            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                            احجز موعد الأن
                        </button>
                        
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer"
                        >
                            <span className={`block mr-auto w-full h-[3px] bg-blue-600 rounded-[3px] transition-all duration-300 ease ${isMobileMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
                            <span className={`block mr-auto w-full h-[3px] bg-blue-600 rounded-[3px] transition-all duration-300 ease ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block mr-auto w-full h-[3px] bg-blue-600 rounded-[3px] transition-all duration-300 ease ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        <a 
                            href="#contact"
                            onClick={(e) => scrollToSection(e, 'contact')} 
                            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            اتصل بنا
                        </a>
                        <a 
                            href="#about"
                            onClick={(e) => scrollToSection(e, 'about')} 
                            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            من نحن
                        </a>
                        <a 
                            href="#services"
                            onClick={(e) => scrollToSection(e, 'services')} 
                            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            خدماتنا
                        </a>
                        <a 
                            href="#home"
                            onClick={(e) => scrollToSection(e, 'home')} 
                            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            الرئيسية
                        </a>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">تيم باور اكس</h1>
                            <p className="text-sm text-gray-600 text-right">للتبريد والتكييف</p>
                        </div>
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Image
                                src="/Assets/TransLogo.png"
                                alt="logo"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="px-4 py-2 space-y-3">
                            <a 
                                href="#home"
                                onClick={(e) => scrollToSection(e, 'home')} 
                                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 border-b border-gray-100"
                            >
                                الرئيسية
                            </a>
                            <a 
                                href="#services"
                                onClick={(e) => scrollToSection(e, 'services')} 
                                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 border-b border-gray-100"
                            >
                                خدماتنا
                            </a>
                            <a 
                                href="#about"
                                onClick={(e) => scrollToSection(e, 'about')} 
                                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 border-b border-gray-100"
                            >
                                من نحن
                            </a>
                            <a 
                                href="#contact"
                                onClick={(e) => scrollToSection(e, 'contact')} 
                                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 border-b border-gray-100"
                            >
                                اتصل بنا
                            </a>
                            <button
                                onClick={(e) => scrollToSection(e, 'contact')} 
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer mt-4">
                                احجز موعد الأن
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
      </header>
    )
}