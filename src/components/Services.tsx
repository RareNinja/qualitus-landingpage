"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
    const { language } = useLanguage();

    const services = {
        pt: [
            {
                title: "Consultoria em Qualidade",
                description: "Oferecemos consultoria especializada para melhorar a qualidade dos seus processos e produtos.",
                icon: "🎯",
                color: "bg-blue-500",
            },
            {
                title: "Gestão de Projetos",
                description: "Gerenciamento completo de projetos com metodologias ágeis e tradicionais.",
                icon: "📊",
                color: "bg-green-500",
            },
            {
                title: "Inovação Tecnológica",
                description: "Desenvolvimento de soluções inovadoras para otimizar seus negócios.",
                icon: "💡",
                color: "bg-purple-500",
            },
            {
                title: "Treinamento Corporativo",
                description: "Programas de capacitação personalizados para sua equipe.",
                icon: "🎓",
                color: "bg-orange-500",
            },
        ],
        en: [
            {
                title: "Quality Consulting",
                description: "We offer specialized consulting to improve the quality of your processes and products.",
                icon: "🎯",
                color: "bg-blue-500",
            },
            {
                title: "Project Management",
                description: "Complete project management with agile and traditional methodologies.",
                icon: "📊",
                color: "bg-green-500",
            },
            {
                title: "Technology Innovation",
                description: "Development of innovative solutions to optimize your business.",
                icon: "💡",
                color: "bg-purple-500",
            },
            {
                title: "Corporate Training",
                description: "Customized training programs for your team.",
                icon: "🎓",
                color: "bg-orange-500",
            },
        ],
    };

    const content = {
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
    };

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
                    <h3 className="text-xl text-blue-600 font-semibold mb-4">{content[language].subtitle}</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language].description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services[language].map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-4`}>{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                        {language === "pt" ? "Ver Todos os Serviços" : "View All Services"}
                    </button>
                </div>
            </div>
        </section>
    );
}
