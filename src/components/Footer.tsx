"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const content = {
        pt: {
            title: "Entre em Contato",
            subtitle: "Estamos aqui para ajudar",
            description: "Entre em contato conosco para saber mais sobre nossos serviços ou para solicitar um orçamento personalizado.",
            address: {
                title: "Endereço",
                street: "Rua das Flores, 123",
                city: "São Paulo, SP",
                zip: "01234-567",
            },
            contact: {
                title: "Contato",
                phone: "+55 (11) 99999-9999",
                email: "contato@qualitus.com.br",
            },
            form: {
                title: "Envie seu Interesse",
                name: "Nome Completo",
                email: "E-mail",
                phone: "Telefone",
                message: "Mensagem",
                submit: "Enviar Mensagem",
                placeholder: "Digite sua mensagem aqui...",
            },
            social: "Siga-nos nas redes sociais",
            copyright: "© 2024 Qualitus. Todos os direitos reservados.",
        },
        en: {
            title: "Get in Touch",
            subtitle: "We are here to help",
            description: "Contact us to learn more about our services or to request a personalized quote.",
            address: {
                title: "Address",
                street: "Rua das Flores, 123",
                city: "São Paulo, SP",
                zip: "01234-567",
            },
            contact: {
                title: "Contact",
                phone: "+55 (11) 99999-9999",
                email: "contact@qualitus.com.br",
            },
            form: {
                title: "Send Your Interest",
                name: "Full Name",
                email: "Email",
                phone: "Phone",
                message: "Message",
                submit: "Send Message",
                placeholder: "Type your message here...",
            },
            social: "Follow us on social media",
            copyright: "© 2024 Qualitus. All rights reserved.",
        },
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        console.log("Form submitted:", formData);
        alert(language === "pt" ? "Mensagem enviada com sucesso!" : "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Informações de Contato */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">{content[language].title}</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">{content[language].description}</p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-blue-400 mb-2">{content[language].address.title}</h4>
                                <p className="text-gray-300">
                                    {content[language].address.street}
                                    <br />
                                    {content[language].address.city}
                                    <br />
                                    {content[language].address.zip}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-blue-400 mb-2">{content[language].contact.title}</h4>
                                <p className="text-gray-300">
                                    📞 {content[language].contact.phone}
                                    <br />
                                    ✉️ {content[language].contact.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Formulário de Interesse */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6">{content[language].form.title}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        {content[language].form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        {content[language].form.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    {content[language].form.phone}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    {content[language].form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder={content[language].form.placeholder}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                                {content[language].form.submit}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Redes Sociais e Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">{content[language].copyright}</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                📘 Facebook
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                📷 Instagram
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                💼 LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
