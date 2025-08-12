"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useMemo } from "react";

export default function Services() {
    const { language } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const systemImages = useMemo(
        () => [
            "/assets/images/system/dashboard-1.jpg",
            "/assets/images/system/dashboard-2.jpg",
            "/assets/images/system/reports-1.jpg",
            "/assets/images/system/approvals-1.jpg",
            "/assets/images/system/upload-1.jpg",
            "/assets/images/system/logs-1.jpg",
        ],
        []
    );

    const services = useMemo(
        () => ({
            pt: [
                {
                    title: "Consultoria",
                    description: "Auditorias, revisão de procedimentos e certificação para sua empresa.",
                    icon: "🎯",
                    color: "bg-gradient-to-br from-blue-500 to-blue-600",
                    details: [
                        "Auditorias: Analisamos as normas às quais a empresa está regimentada e preparamos a empresa para tal vistoria, seja bombeiros, Anvisa, INMETRO, etc.",
                        "Revisão de procedimentos: Adequamos os procedimentos da empresa às normas e à realidade do usuário, seguindo o padrão ABNT.",
                        "Certificação: Auxiliamos as empresas a alcançarem as certificações desejadas seja para a empresa ou para produtos.",
                    ],
                },
                {
                    title: "Gestão de Projetos",
                    description: "Melhoria contínua, redução de não conformidades e diagnóstico Six Sigma.",
                    icon: "📊",
                    color: "bg-gradient-to-br from-purple-500 to-purple-600",
                    details: [
                        "Melhoria Continua: aprimorados os processos da empresa.",
                        "Redução de não conformidades: análise técnica dos principais desvios e realizamos um plano de ação estratégico para resolução.",
                        "Redução de desvios: aplicação de técnicas de qualidade para conformidade do processos.",
                        "Diagnóstico Six Sigma: Elevação do padrão de qualidade de todo o sistema de gestão da empresa.",
                    ],
                },
                {
                    title: "Treinamentos",
                    description: "Auditoria de sucesso, implementação 5S, SIPAT e treinamentos personalizados.",
                    icon: "🎓",
                    color: "bg-gradient-to-br from-green-500 to-green-600",
                    details: [
                        "Auditoria de sucesso: pensado em preparar sua equipe para auditorias internas e de órgãos fiscalizadores.",
                        "Implantação de 5S: O que é? Como implementar? Quais os resultados?",
                        "SIPAT: Semana Interna de Prevenção de Acidentes de Trabalho.",
                        "Treinamentos personalizados: Programas sob medida para sua equipe.",
                    ],
                },
                {
                    title: "Gestão da Qualidade on-line",
                    description: "Software exclusivo para gestão de documentos, não conformidades e análise de dados.",
                    icon: "💻",
                    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
                    details: ["Um software exclusivo de gestão de documentos, gestão de não conformidades, aprovação de documentos, análise de dados em alguns cliques."],
                    hasImages: true,
                },
            ],
            en: [
                {
                    title: "Consulting",
                    description: "Audits, procedure review and certification for your company.",
                    icon: "🎯",
                    color: "bg-gradient-to-br from-blue-500 to-blue-600",
                    details: [
                        "Audits: We analyze the regulations to which the company is subject and prepare the company for such inspections, be it firefighters, Anvisa, INMETRO, etc.",
                        "Procedure Review: We adapt the company's procedures to the norms and the user's reality, following the ABNT standard.",
                        "Certification: We help companies achieve the desired certifications, whether for the company or for products.",
                    ],
                },
                {
                    title: "Project Management",
                    description: "Continuous improvement, reduction of non-conformities and Six Sigma diagnosis.",
                    icon: "📊",
                    color: "bg-gradient-to-br from-purple-500 to-purple-600",
                    details: [
                        "Continuous Improvement: improved company processes.",
                        "Non-conformity Reduction: technical analysis of main deviations and we carry out a strategic action plan for resolution.",
                        "Deviation Reduction: application of quality techniques for process conformity.",
                        "Six Sigma Diagnosis: Raising the quality standard of the entire company's management system.",
                    ],
                },
                {
                    title: "Training",
                    description: "Successful audit, implementation 5S, SIPAT and personalized training.",
                    icon: "🎓",
                    color: "bg-gradient-to-br from-green-500 to-green-600",
                    details: [
                        "Successful Audit: designed to prepare your team for internal audits and those by regulatory bodies.",
                        "5S Implementation: What is it? How to implement? What are the results?",
                        "SIPAT: Internal Week for Accident Prevention at Work.",
                        "Personalized Training: Custom programs for your team.",
                    ],
                },
                {
                    title: "Online Quality Management",
                    description: "Exclusive software for document management, non-conformities and data analysis.",
                    icon: "💻",
                    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
                    details: ["An exclusive software for document management, non-conformity management, document approval, data analysis in a few clicks."],
                    hasImages: true,
                },
            ],
        }),
        []
    );

    const content = useMemo(
        () => ({
            pt: {
                title: "Nossos Serviços",
                subtitle: "Soluções completas para o seu negócio",
                description: "Oferecemos uma ampla gama de serviços para ajudar sua empresa a crescer e se destacar no mercado.",
            },
            en: {
                title: "Our Services",
                subtitle: "Complete solutions for your business",
                description: "We offer a wide range of services to help your company grow and stand out in the market.",
            },
        }),
        []
    );

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % services[language].length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [language, services]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services[language].length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services[language].length) % services[language].length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const openImageModal = (index: number) => {
        setSelectedImageIndex(index);
        setShowImageModal(true);
    };

    const closeImageModal = () => {
        setShowImageModal(false);
    };

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % systemImages.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + systemImages.length) % systemImages.length);
    };

    return (
        <>
            {/* Wave effect above services for smooth transition */}
            <div className="relative -mt-1">
                <svg className="w-full h-20 text-gray-900 bg-gray-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
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

            <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
                        <h3 className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">{content[language].subtitle}</h3>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">{content[language].description}</p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative overflow-hidden">
                        {/* Carousel Track */}
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {services[language].map((service, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
                                        <div className="text-center mb-6">
                                            <div className={`${service.color} w-20 h-20 rounded-lg flex items-center justify-center text-3xl mb-4 shadow-lg mx-auto`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                                        </div>

                                        {/* Service details */}
                                        <div className="space-y-3">
                                            {service.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-start">
                                                    <span className="text-blue-500 mr-3 mt-2 text-lg">•</span>
                                                    <p className="text-gray-700 leading-relaxed">{detail}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* System Images Gallery */}
                                        {service.hasImages && (
                                            <div className="mt-6">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                                                    {language === "pt" ? "Conheça Nosso Sistema" : "Discover Our System"}
                                                </h4>
                                                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                                                    {/* First two visible images */}
                                                    <div className="relative group cursor-pointer" onClick={() => openImageModal(0)}>
                                                        <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
                                                            Dashboard
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white text-sm font-medium">
                                                                {language === "pt" ? "Clique para ver mais" : "Click to see more"}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="relative group cursor-pointer" onClick={() => openImageModal(1)}>
                                                        <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
                                                            Relatórios
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white text-sm font-medium">
                                                                {language === "pt" ? "Clique para ver mais" : "Click to see more"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center mt-3">
                                                    <button
                                                        onClick={() => openImageModal(0)}
                                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                                                    >
                                                        {language === "pt" ? "Ver todas as imagens" : "View all images"}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {services[language].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">{language === "pt" ? "Galeria do Sistema" : "System Gallery"}</h3>
                            <button onClick={closeImageModal} className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="relative">
                            {/* Main Image */}
                            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                                {selectedImageIndex === 0 && "Dashboard Principal"}
                                {selectedImageIndex === 1 && "Relatórios e Estatísticas"}
                                {selectedImageIndex === 2 && "Sistema de Aprovações"}
                                {selectedImageIndex === 3 && "Upload de Documentos"}
                                {selectedImageIndex === 4 && "Logs do Sistema"}
                                {selectedImageIndex === 5 && "Gestão de Usuários"}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex space-x-2 overflow-x-auto">
                                {systemImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg transition-all duration-300 ${
                                            index === selectedImageIndex ? "ring-2 ring-blue-500 scale-110" : "hover:scale-105"
                                        } ${
                                            index === 0
                                                ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                                                : index === 1
                                                ? "bg-gradient-to-br from-purple-500 to-pink-600"
                                                : index === 2
                                                ? "bg-gradient-to-br from-green-500 to-teal-600"
                                                : index === 3
                                                ? "bg-gradient-to-br from-orange-500 to-red-600"
                                                : index === 4
                                                ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                                                : "bg-gradient-to-br from-gray-500 to-gray-700"
                                        }`}
                                    >
                                        <span className="text-white text-xs font-medium">{index + 1}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
