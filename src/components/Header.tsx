"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
    const { language, setLanguage } = useLanguage();

    const navigation = {
        pt: {
            home: "Home",
            services: "Serviços",
            properties: "Liderança",
            about: "Sobre Nós",
        },
        en: {
            home: "Home",
            services: "Services",
            properties: "Leadership",
            about: "About Us",
        },
    };

    const toggleLanguage = () => {
        setLanguage(language === "pt" ? "en" : "pt");
    };

    return (
        <header className="bg-black shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo e Nome da Marca */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">Q</span>
                            </div>
                        </div>
                        <div className="ml-3">
                            <h1 className="text-xl font-bold text-white">Qualittus</h1>
                        </div>
                    </div>

                    {/* Navegação Central */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            {navigation[language].home}
                        </a>
                        <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            {navigation[language].services}
                        </a>
                        <a href="#team" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            {navigation[language].properties}
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            {navigation[language].about}
                        </a>
                    </nav>

                    {/* Seletor de Idioma */}
                    <div className="flex items-center gap-2">
                        <button onClick={toggleLanguage} className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-300 transition-colors">
                            {language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
                        </button>

                        <button
                            className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-gradient-to-r from-blue-500 to-purple-600"
                            onClick={() => window.open("https://www.google.com", "_blank")}
                        >
                            {language === "pt" ? "Login" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
