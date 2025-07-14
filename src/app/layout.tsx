import "./globals.css";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhatsAppCarousel from "@/components/Carousel/WhatsAppCarousel";
import AgendamentoSection from "@/components/sections/AgendamentoSection";
import AppIntroSection from "@/components/sections/AppIntroSection";
import HighlightsCarousel from "@/components/Carousel/HighlightsCarousel";
import SimpleStepsSection from "@/components/sections/SimpleStepsSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsGallery from "@/components/sections/NewsGallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cuidee",
  description: "Aplicação de clínica moderna",
};

export default function RootLayout() {
  return (
    <html lang="pt-BR">
      <body>
        {/* <Header /> */}

        <main>
          {" "}
          <Hero />
          <Stats />
          <WhatsAppCarousel />
          <AgendamentoSection />
          <AppIntroSection />
          <HighlightsCarousel />
          <SimpleStepsSection />
          <PricingSection />
          <FaqSection />
          <NewsGallery />
          <Footer />
          {/* {children} */}
        </main>
      </body>
    </html>
  );
}
