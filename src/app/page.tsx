import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Team from "@/components/Team";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroBanner />
                <Services />
                <Team />
                <About />
            </main>
            <Footer />
        </div>
    );
}
