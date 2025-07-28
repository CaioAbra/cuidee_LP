"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import instance from "@/api";

export default function Hero() {
    const [textos, setTextos] = useState<any[]>([]);

    useEffect(() => {
        async function fechApi() {
            try {
                const { data } = await instance.get(
                    "/SiteAberto/get-textos-site"
                );
                setTextos(data);
            } catch (err) {
                console.error("Erro ao carregar textos:", err);
            }
        }
        fechApi();
    }, []);

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
            <div className="relative z-10">
                {/* Header embutido */}
                <div className="flex items-center justify-between max-w-7/1 lg:w-[1216px] mx-auto mb-12 px-5 py-[13px]">
                    {/* Logo + Navbar */}
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <img
                                src="/logo-cuidee.svg"
                                alt="Cuidee"
                                className="w-32 md:w-[145px] md:h-[32px]"
                            />
                            <span className="text-white/40">|</span>
                            <img
                                src="/logo-crmpr.svg"
                                alt="CRM-PR"
                                className="w-32 md:w-[145px] md:h-[32px]"
                            />
                        </div>

                        {/* Navbar */}
                        <nav className="hidden md:flex gap-8 text-sm font-normal lg:ml-[100px]">
                            <a
                                href="#"
                                className="transition duration-200 hover:text-primary-base"
                            >
                                Como funciona
                            </a>
                            <a
                                href="#"
                                className="transition duration-200 hover:text-primary-base"
                            >
                                Perguntas frequentes
                            </a>
                        </nav>
                    </div>

                    {/* Botão */}
                    <button className="hidden border border-white text-white text-sm px-[24px] py-[10px] rounded-md -mt-1 md:block">
                        Área logada
                    </button>
                </div>

                {/* Hero principal */}
                <div className="text-center px-5 mb-10 mt-10 md:mt-20">
                    <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-md uppercase mb-4 tracking-widest">
                        Seja bem vindo
                    </span>

                    <h1 className="text-3xl md:text-[70px] font-raleway font-bold leading-tight lg:max-w-[850px] mx-auto mb-6 text-center">
                        {textos.find((value) => value.id === "TITULO")?.texto}
                    </h1>

                    <p className="max-w-xl mx-auto text-[18px] md:text-base text-white/90 mb-8">
                        {
                            textos.find((value) => value.id === "SUBTITULO")
                                ?.texto
                        }
                    </p>

                    <button className="bg-white text-primary-dark font-medium px-[24px] py-[14px] rounded-md hover:bg-gray-100 transition">
                        Quero assinar agora →
                    </button>
                </div>
                <img
                    src="/medicos/medicos.png"
                    alt="Médicos Cuidee"
                    className="hidden md:block mx-auto mt-[100px] md:w-[1449px] md:h-[292px]"
                />
                <img
                    src="/medicos/medicos-mobile.png"
                    alt="Médicos Cuidee"
                    className="block md:hidden mx-auto mt-[50px] w-full pb-[40px]"
                />
            </div>
        </section>
    );
}
