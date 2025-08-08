import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Qualittus - Excelência em Qualidade e Inovação",
    description:
        "Transformamos ideias em soluções excepcionais. Nossa missão é entregar produtos e serviços que superam as expectativas e criam valor real para nossos clientes.",
    keywords: "qualidade, inovação, consultoria, gestão de projetos, tecnologia",
    authors: [{ name: "Qualittus" }],
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
