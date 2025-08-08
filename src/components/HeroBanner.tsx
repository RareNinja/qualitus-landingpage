"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroBanner() {
    const { language } = useLanguage();

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
        <section id="home" className="bg-gradient-primary text-white pt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="text-center">
                    <h1 className="text-gradient text-4xl md:text-6xl font-bold mb-6">{content[language].title}</h1>
                    <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300">{content[language].subtitle}</h2>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">{content[language].description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-gradient transform hover:scale-105" onClick={() => window.open("https://wa.me/554198166129", "_blank")}>
                            {content[language].cta}
                        </button>
                        {/* <button className="btn-outline">{content[language].secondaryCta}</button> */}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-16 text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
