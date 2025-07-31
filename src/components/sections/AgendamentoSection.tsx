"use client";
import instance from "@/api";
import { useState, useEffect } from "react";

const items = [
    {
        id: 0,
        icon: "/agenda/facilidade.svg",
        title: "Facilidade para agendar consultas",
        text: "Escolha o médico ideal, defina o horário e agende direto pelo app, tudo de forma prática e rápida.",
    },
    {
        id: 1,
        icon: "/agenda/saude.svg",
        title: "Saúde acessível e de qualidade",
        text: "A Cuidee conecta pacientes a médicos com valores acessíveis, sem abrir mão da qualidade.",
    },
    {
        id: 2,
        icon: "/agenda/celular.svg",
        title: "Tudo na palma da sua mão",
        text: "Com poucos toques, você resolve sua consulta e recebe notificações sobre cada etapa.",
    },
];

export default function AppointmentSection() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
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

    // ANIMAÇÃO DO COLLAPSE -----------------------------
    const alturaItem = 85; // altura do bloco
    const intervalTime = 5000; // tempo total por item
    const stepTime = 50; // frequência de atualização

    useEffect(() => {
        setProgress(0);
        const step = stepTime / intervalTime;
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev + step >= 1) {
                    setActive((prevActive) => (prevActive + 2) % items.length);
                    return 0;
                }
                return prev + step;
            });
        }, stepTime);

        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="max-w-[1216px] mx-auto px-[24px] md:px-8 pt-[56px] md:pt-[100px] flex flex-col md:flex-row justify-between gap-10 lg:gap-[120px] ">
            <div className="flex-1">
                <img src="/consulta.png" alt="Consulta Cuidee" className="w-full md:w-[512px] md:h-[512px] rounded-xl" />
            </div>

            <div className="flex-1 relative">
                <span
                    className="self-stretch font-inter text-neutral-900 block mb-4 text-[14px] leading-[20px] tracking-[-0.084px] font-medium not-italic"
                    style={{ fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off" }}
                >
                    Mais de 100 mil pacientes já facilitaram a forma de agendar consultas
                </span>

                <h4
                    className="self-stretch font-raleway text-neutral-900 text-[26px] leading-[32px] tracking-[-0.26px] font-bold not-italic mb-[16px] sm:mb-10 sm:text-[28px] sm:leading-[34px] sm:tracking-[-0.28px] md:text-[30px] md:leading-[36px] md:tracking-[-0.3px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.32px]"
                    style={{
                        fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        fontVariantNumeric: "lining-nums proportional-nums",
                    }}
                >
                    {textos.find((value) => value.id === "TITULO1")?.texto}
                </h4>

                <div className="flex gap-6 mb-[40px]">
                    {/* Linha lateral */}
                    <div
                        className="hidden md:block relative w-0.5 bg-gray-300 rounded overflow-hidden"
                        style={{ height: `${items.length * alturaItem}px` }}
                    >
                        <div
                            className="absolute left-0 top-0 w-0.5 bg-primary-base rounded transition-[height] duration-100 ease-linear"
                            style={{
                                height: `${active * alturaItem + progress * alturaItem}px`,
                            }}
                        ></div>
                    </div>

                    {/* Lista */}
                    <div className="space-y-6">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={`cursor-pointer pl-3 transition-all duration-300 p-[16px] md:py-[10px] md:pl-[10px] ${
                                    active === index
                                        ? "border-b-[1px] border-primary-base md:border-b-0"
                                        : "border-b-[1px] border-neutral-300 md:border-b-0"
                                }`}
                                onClick={() => setActive(index)}
                            >
                                <div
                                    className={`flex-1 items-center gap-5 font-raleway font-bold not-italic transition-colors duration-300 text-[18px] leading-[24px] md:flex md:text-[20px] md:tracking-[-0.2px] mb-[8px] md:mb-2 ${
                                        active === index ? "text-primary-base" : "text-neutral-300"
                                    }`}
                                    style={{
                                        fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                        fontVariantNumeric: "lining-nums proportional-nums",
                                    }}
                                >
                                    <div className="w-full md:w-[31.916px] md:h-[24.941px] flex items-center mb-[16px] md:mb-0">
                                        <img
                                            src={item.icon}
                                            className={`max-w-full max-h-full object-contain transition duration-300 ${
                                                active === index ? "filter-green" : "filter-gray"
                                            }`}
                                            alt="icon"
                                        />
                                    </div>
                                    <span>{item.title}</span>
                                </div>

                                <div
                                    className={`transition-all duration-500 overflow-hidden ${
                                        active === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <p
                                        className="self-stretch font-inter text-neutral-400 font-normal not-italic max-w-md text-[14px] leading-[20px] tracking-[-0.154px] sm:text-[15px] sm:leading-[22px] sm:tracking-[-0.165px] md:text-[16px] md:leading-[24px] md:tracking-[-0.176px]"
                                        style={{
                                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="flex items-center justify-center gap-1 w-full md:w-[239px] px-[10px] py-[14px] rounded-[6px] bg-primary-base text-white font-inter text-[16px] leading-[24px] tracking-[-0.176px] font-medium shadow-[0_1px_2px_rgba(55,93,251,0.08)] transition-colors duration-200 md:absolute md:bottom-0 active:bg-primary-dark"
                    style={{
                        fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                    }}
                >
                    Experimentar agora
                </button>
            </div>
        </section>
    );
}
