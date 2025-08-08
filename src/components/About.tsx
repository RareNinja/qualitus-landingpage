"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { language } = useLanguage();

    const content = {
        pt: {
            title: "Sobre Nós",
            subtitle: "Nossa História e Missão",
            description:
                "A Qualittus nasceu da paixão por excelência e inovação. Somos uma empresa comprometida em entregar soluções de qualidade que transformam negócios e criam valor real para nossos clientes.",
            mission:
                "Oferecer soluções de consultoria, treinamentos e conformidade regulatória de forma assertiva e objetiva, auxiliando empresas de diferentes segmentos a alcançarem padrões elevados de qualidade e segurança",
            vision: "Ser reconhecida nacionalmente como referência em consultoria e treinamentos que impulsionam resultados e garantem conformidade regulatória, contribuindo para o crescimento sustentável das indústrias.",
            values: [
                {
                    title: "Compromisso com a qualidade",
                    description: "entregar serviços com excelência e atenção aos detalhes;",
                },
                {
                    title: "Objetividade",
                    description: "orientar de forma clara, prática e eficiente;",
                },
                {
                    title: "Integridade",
                    description: "atuar com ética, transparência e responsabilidade;",
                },
                {
                    title: "Foco no cliente",
                    description: "compreender as necessidades e oferecer soluções personalizadas;",
                },
                {
                    title: "Inovação",
                    description: "buscar constantemente novas metodologias e melhoria contínua nos processos.",
                },
            ],
            stats: [
                { number: "500+", label: "Projetos Concluídos" },
                { number: "50+", label: "Clientes Satisfeitos" },
                { number: "10+", label: "Anos de Experiência" },
                { number: "100%", label: "Compromisso com Qualidade" },
            ],
        },
        en: {
            title: "About Us",
            subtitle: "Our Story and Mission",
            description:
                "Qualittus was born from a passion for excellence and innovation. We are a company committed to delivering quality solutions that transform businesses and create real value for our clients.",
            mission:
                "To offer consulting solutions, training, and regulatory compliance in an assertive and objective manner, helping companies from different segments achieve high standards of quality and safety",
            vision: "To be nationally recognized as a reference in consulting and training that drive results and ensure regulatory compliance, contributing to the sustainable growth of industries.",
            values: [
                {
                    title: "Commitment to quality",
                    description: "deliver services with excellence and attention to detail;",
                },
                {
                    title: "Objectivity",
                    description: "guide in a clear, practical, and efficient manner;",
                },
                {
                    title: "Integrity",
                    description: "act with ethics, transparency, and responsibility;",
                },
                {
                    title: "Customer focus",
                    description: "understand needs and offer personalized solutions;",
                },
                {
                    title: "Innovation",
                    description: "constantly seek new methodologies and continuous improvement in processes.",
                },
            ],
            stats: [
                { number: "500+", label: "Completed Projects" },
                { number: "50+", label: "Satisfied Clients" },
                { number: "10+", label: "Years of Experience" },
                { number: "100%", label: "Quality Commitment" },
            ],
        },
    };

    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
                    <h3 className="text-xl text-blue-600 font-semibold mb-4">{content[language].subtitle}</h3>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{content[language].description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">{language === "pt" ? "Nossa Missão" : "Our Mission"}</h4>
                        <p className="text-gray-600 leading-relaxed mb-8">{content[language].mission}</p>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">{language === "pt" ? "Nossa Visão" : "Our Vision"}</h4>
                        <p className="text-gray-600 leading-relaxed">{content[language].vision}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h4 className="text-2xl font-semibold text-gray-900 mb-6">{language === "pt" ? "Nossos Valores" : "Our Values"}</h4>
                        <div className="space-y-4">
                            {content[language].values.map((value, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-1">{value.title}</h5>
                                        <p className="text-gray-600 text-sm">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {content[language].stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
