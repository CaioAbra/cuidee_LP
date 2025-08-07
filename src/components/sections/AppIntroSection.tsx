"use client";
import Image from "next/image";
import instance from "@/api";
import { useState, useEffect } from "react";

export default function AppIntroSection() {
    const [textos, setTextos] = useState<any[]>([]);

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
    }, []);

    return (
        <section data-animate="fade-up"  className="bg-white pt-[56px] md:pt-[100px]">
            <div className="max-w-[1216px] mx-auto px-[24px] md:px-8 flex flex-col lg:flex-row items-center justify-between gap-[40px] md:gap-[120px]">
                {/* Texto */}
                <div className="max-w-xl">
                    <p
                        className="font-inter text-neutral-900 font-medium not-italic block text-[14px] leading-[20px] tracking-[-0.084px] sm:text-[15px] sm:leading-[22px] sm:tracking-[-0.1px] md:text-[16px] md:leading-[24px] md:tracking-[-0.12px]"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        Aprovado por mais de 100 mil pacientes
                    </p>

                    <h1
                        className="text-neutral-900 font-raleway font-bold not-italic text-[26px] leading-[31.2px] tracking-[-0.26px] mt-[16px] sm:text-[28px] sm:leading-[34px] sm:tracking-[-0.28px] md:text-[30px] md:leading-[36px] md:tracking-[-0.3px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.32px]"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                            fontVariantNumeric: "lining-nums proportional-nums",
                        }}
                    >
                        {textos.find((value) => value.id === "TITULO2")?.texto}
                    </h1>

                    <p
                        className="font-inter text-neutral-400 text-[16px] leading-[24px] tracking-[-0.176px] font-normal not-italic block mt-[16px]"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        {textos.find((value) => value.id === "TEXTO1")?.texto}
                    </p>
                    <button
                        className="flex items-center justify-center gap-1 w-[239px] px-[10px] py-[12px] rounded-[8px] border border-primary-base bg-white text-primary-base font-inter font-medium text-[16px] leading-[24px] tracking-[-0.176px] shadow-[0_1px_2px_rgba(55,93,251,0.08)] mt-[24px] transition-colors duration-200 active:text-white active:bg-primary-base"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        Experimentar agora
                    </button>
                </div>

                {/* Imagem */}
                <img src="/app-mockup.png" alt="App Cuidee" className="mx-auto w-full md:w-[512px] md:h-[512px]" />
            </div>
        </section>
    );
}
