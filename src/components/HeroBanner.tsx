"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function HeroBanner() {
    const { language } = useLanguage();
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScrollIndicator(false);
        }, 20000); // 20 segundos

        return () => clearTimeout(timer);
    }, []);

    const content = {
        pt: {
            title: "Qualittus",
            subtitle: "Excelência em Qualidade e Inovação",
            description:
                "Transformamos ideias em soluções excepcionais. Nossa missão é entregar produtos e serviços que superam as expectativas e criam valor real para nossos clientes.",
            cta: "Conheça Nossos Serviços",
            secondaryCta: "Saiba Mais",
        },
        en: {
            title: "Qualittus",
            subtitle: "Excellence in Quality and Innovation",
            description:
                "We transform ideas into exceptional solutions. Our mission is to deliver products and services that exceed expectations and create real value for our clients.",
            cta: "Discover Our Services",
            secondaryCta: "Learn More",
        },
    };

    return (
        <section id="home" className="bg-gradient-primary text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
                <div className="text-center">
                    <h1 className="text-gradient text-4xl md:text-6xl font-bold mb-6">{content[language].title}</h1>
                    <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300">{content[language].subtitle}</h2>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">{content[language].description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="btn-gradient transform hover:scale-105 transition-all duration-300"
                            onClick={() => window.open("https://wa.me/554198166129", "_blank")}
                        >
                            {content[language].cta}
                        </button>
                        {/* <button className="btn-outline">{content[language].secondaryCta}</button> */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            {showScrollIndicator && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            )}
        </section>
    );
}
