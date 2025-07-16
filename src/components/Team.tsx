"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
    const { language } = useLanguage();

    const team = {
        pt: [
            {
                name: "João Silva",
                position: "CEO - Chief Executive Officer",
                photo: "/api/placeholder/400/400",
                quote: "Nossa missão é transformar a qualidade em um diferencial competitivo para nossos clientes. Acreditamos que a excelência não é um destino, mas uma jornada contínua de melhoria e inovação.",
                linkedin: "#",
                email: "joao.silva@qualitus.com.br",
            },
            {
                name: "Maria Santos",
                position: "CTO - Chief Technology Officer",
                photo: "/api/placeholder/400/400",
                quote: "A tecnologia é o motor da inovação. Nossa abordagem combina soluções cutting-edge com metodologias comprovadas para entregar resultados excepcionais que impulsionam o crescimento dos nossos clientes.",
                linkedin: "#",
                email: "maria.santos@qualitus.com.br",
            },
        ],
        en: [
            {
                name: "João Silva",
                position: "CEO - Chief Executive Officer",
                photo: "/api/placeholder/400/400",
                quote: "Our mission is to transform quality into a competitive advantage for our clients. We believe that excellence is not a destination, but a continuous journey of improvement and innovation.",
                linkedin: "#",
                email: "joao.silva@qualitus.com.br",
            },
            {
                name: "Maria Santos",
                position: "CTO - Chief Technology Officer",
                photo: "/api/placeholder/400/400",
                quote: "Technology is the engine of innovation. Our approach combines cutting-edge solutions with proven methodologies to deliver exceptional results that drive our clients growth.",
                linkedin: "#",
                email: "maria.santos@qualitus.com.br",
            },
        ],
    };

    const content = {
        pt: {
            title: "Nossa Liderança",
            subtitle: "Conheça quem está à frente da Qualitus",
            description: "Nossa equipe executiva combina experiência sólida com visão inovadora para conduzir a Qualitus rumo ao futuro da qualidade e tecnologia.",
        },
        en: {
            title: "Our Leadership",
            subtitle: "Meet the people leading Qualitus",
            description: "Our executive team combines solid experience with innovative vision to lead Qualitus toward the future of quality and technology.",
        },
    };

    return (
        <section id="team" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
                    <h3 className="text-xl text-blue-600 font-semibold mb-4">{content[language].subtitle}</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language].description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {team[language].map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                {/* Placeholder para foto */}
                                <div className="h-80 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-6xl mb-4">👤</div>
                                        <p className="text-lg font-medium">Foto do {member.name.split(" ")[0]}</p>
                                    </div>
                                </div>

                                {/* Badge de cargo */}
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {member.position.split(" - ")[0]}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                                </div>

                                {/* Quote */}
                                <div className="mb-6">
                                    <div className="relative">
                                        <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                                        <blockquote className="text-gray-600 italic text-lg leading-relaxed pl-6">{member.quote}</blockquote>
                                        <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                                    </div>
                                </div>

                                {/* Contatos */}
                                <div className="flex justify-center space-x-4">
                                    <a href={`mailto:${member.email}`} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                                        <span className="mr-2">✉️</span>
                                        {language === "pt" ? "Email" : "Email"}
                                    </a>
                                    <a href={member.linkedin} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                                        <span className="mr-2">💼</span>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                        {language === "pt" ? "Conheça Toda a Equipe" : "Meet the Full Team"}
                    </button>
                </div>
            </div>
        </section>
    );
}
