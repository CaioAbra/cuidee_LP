"use client";
import Image from "next/image";
import instance from "@/api";
import { useState, useEffect } from "react";

export default function SimpleStepsSection() {
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

    const options = [
        "Entre no app e Pesquise por especialidade do médico",
        "Escolha o médico que mais lhe agradar",
        "Agende sua consulta",
        "Agora é só aguardar o médico continuar o processo",
    ];
    
    return (
        <section className="bg-[url('/bg-simple.png')] bg-cover text-white mt-[56px] md:mt-[120px] py-[56px] md:py-[120px] ">
            <div className="max-w-[1216px] mx-auto px-[56px] md:px-8 flex flex-col-reverse md:flex-ccol md:flex-row items-center gap-[40px] md:gap-[80px]">
                {/* Imagem lado esquerdo */}
                <div>
                    <img src="/video-celular.png" alt="App em uso" className="rounded-2xl w-full md:w-[552px] md:h-[573px]" />
                </div>

                {/* Conteúdo texto lado direito */}
                <div className="flex-1">
                    <span
                        className="block font-inter text-white text-[14px] leading-[20px] tracking-[-0.084px] font-medium not-italic "
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        Aprovado por mais de 100 mil pacientes
                    </span>
                    <h2
                        className="font-raleway text-white font-bold not-italic mt-[16px] text-[26px] leading-[31.2px] tracking-[-0.26px] sm:text-[28px] sm:leading-[34px] sm:tracking-[-0.28px] md:text-[30px] md:leading-[36px] md:tracking-[-0.3px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.32px]"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                            fontVariantNumeric: "lining-nums proportional-nums",
                        }}
                    >
                        {textos.find((value) => value.id === "TITULO3")?.texto}
                    </h2>

                    <p
                        className="text-neutral-300 font-inter font-normal not-italic text-[14px] leading-[20px] tracking-[-0.154px] mt-[16px] max-w-md sm:text-[15px] sm:leading-[22px] sm:tracking-[-0.165px] md:text-[16px] md:leading-[24px] md:tracking-[-0.176px] md:max-w-xl"
                        style={{
                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                    >
                        {textos.find((value) => value.id === "TEXTO2")?.texto}
                    </p>
                    <ul className="mt-[48px]">
                        {options.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-3 border-b border-white/10 ${index === 0 ? "pb-[24px]" : "pt-[24px] pb-[24px]"}`}
                            >
                                <img src="/check.svg" className="min-w-[24px]" alt="check" />
                                <span
                                    className="font-raleway font-bold not-italic text-white text-[18px] leading-[24px] tracking-[-0.2px]"
                                    style={{
                                        fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                        fontVariantNumeric: "lining-nums proportional-nums",
                                    }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
