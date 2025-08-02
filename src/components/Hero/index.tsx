"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import instance from "@/api";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Hero() {
    const [textos, setTextos] = useState<any[]>([]);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        async function fechApi() {
            try {
                const { data } = await instance.get("/SiteAberto/get-textos-site");
                setTextos(data);
            } catch (err) {
                console.error("Erro ao carregar textos:", err);
            }
        }
        fechApi();

        // Monitora o scroll
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useScrollAnimation()
    return (
        <section className="h-auto lg:h-[890px] relative text-white pt-4 pb-0 overflow-visible bg-[url('/hero-mobile.png')] bg-cover bg-no-repeat bg-top md:bg-[url('/hero.png')]">
            {/* Imagem sombra decorativa no fundo */}
            <Image
                src="/efeito-sombra.png"
                alt=""
                width={1600}
                height={900}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
            />

            {/* Conteúdo */}
            <div className="relative z-10" >
                {/* Header embutido */}
                <div
                    className={`w-full z-50 transition-all duration-110 ${
                        scrolled ? "md:fixed md:top-0 md:left-0 md:bg-white md:text-neutral-900 md:shadow-md" : "bg-transparent text-white"
                    }`}
                >
                    {" "}
                    <div className="flex items-center justify-between max-w-[1216px] mx-auto px-[56px] md:px-8 py-[13px]">
                        {/* Logo + Navbar */}
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <div>
                                {scrolled ? (
                                    <img src="/logo-cuidee-crm-black.svg" alt="Cuidee" />
                                ): (
                                    <img src="/logo-cuidee-crm.png" alt="Cuidee" />
                                )}
                            </div>

                            {/* Navbar */}
                            <nav className="hidden md:flex gap-8 text-sm font-normal absolute left-1/2 -translate-x-1/2">
                                <a
                                    href="#"
                                    className="font-inter text-[16px] not-italic font-normal leading-[24px] tracking-[-0.176px] transition duration-200 hover:text-primary-base"
                                >
                                    Como funciona
                                </a>
                                <a
                                    href="#"
                                    className="font-inter text-[16px] not-italic font-normal leading-[24px] tracking-[-0.176px] transition duration-200 hover:text-primary-base"
                                >
                                    Perguntas frequentes
                                </a>
                            </nav>
                        </div>

                        {/* Botão */}
                        <button
                            className={`hidden md:flex items-center justify-center gap-1 px-[24px] py-[10px] text-sm font-normal rounded-lg shadow-[0_1px_2px_rgba(82,88,102,0.06)] transition-colors duration-300 
                                ${ scrolled ? 
                                    "md:border md:border-neutral-300 md:text-neutral-900 md:bg-white md:hover:bg-neutral-100" 
                                    : "md:border md:border-white md:text-white md:bg-transparent md:hover:bg-white md:hover:text-neutral-900"
                                }
                            `}
                        >
                            Área logada
                        </button>
                    </div>
                </div>

                {/* Hero principal */}
                <div className={`text-center px-[56px] md:px-8 mb-10 ${
                    scrolled ? "mt-[50px] md:mt-[150px]" : "mt-[50px] md:mt-[80px]"
                }`}>
                    <span
                        data-animate="zoom-in" 
                        className="font-inter inline-flex items-center justify-center gap-[10px] px-4 py-1 rounded-[12px] bg-[#3A5D59] text-[14px] leading-[20px] tracking-[-0.084px] font-inter font-medium not-italic uppercase text-white text-center mb-[12px]"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        Seja bem vindo
                    </span>
                    <h1 data-animate="zoom-in" className="text-white text-center font-raleway font-bold not-italic text-[40px] leading-[48px] tracking-[-1px] lg:text-[70px] lg:leading-[84px] lg:max-w-[850px] mx-auto">
                        {textos.find((value) => value.id === "TITULO")?.texto}
                    </h1>
                    <p
                        data-animate="zoom-in" 
                        className="max-w-xl mx-auto mt-[24px] mb-[24px] text-center font-inter font-normal not-italic text-[18px] leading-[27px] tracking-[-0.198px] text-neutral-0"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        {textos.find((value) => value.id === "SUBTITULO")?.texto}
                    </p>
                    <button
                        data-animate="zoom-in"
                        className="w-full mx-auto flex items-center justify-center gap-1 px-4 py-2 mb-[48px] rounded-md border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(82,88,102,0.06)] text-neutral-600 font-inter font-medium not-italic text-[14px] leading-[20px] tracking-[-0.084px] transition-colors duration-200 hover:bg-neutral-50 hover:text-neutral-700 active:bg-neutral-100 sm:w-auto sm:px-5 sm:py-3 sm:text-[15px] sm:leading-[22px] sm:mb-[40px] md:px-6 md:py-3 md:text-[16px] md:leading-[24px]"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        Quero assinar agora <img src="/arrow.svg" alt="arrow" className="w-4 h-4" />
                    </button>
                </div>
                <img data-animate="zoom-in" src="/medicos/medicos.png" alt="Médicos Cuidee" className="hidden md:block mx-auto mt-[100px] md:w-[1449px] md:h-[292px]" />
                <img data-animate="zoom-in" src="/medicos/medicos-mobile.png" alt="Médicos Cuidee" className="block md:hidden mx-auto mt-[50px] w-full pb-[50px]" />
            </div>
        </section>
    );
}
