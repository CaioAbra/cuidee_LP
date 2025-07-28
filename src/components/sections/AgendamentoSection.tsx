"use client";
import instance from "@/api";
import { useState, useEffect } from "react";
import { FaBolt, FaPlus, FaMobileAlt } from "react-icons/fa";

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
        <section className="max-w-[1216px] mx-auto px-4 pb-[80px] md:pb-[100px] flex flex-col md:flex-row justify-between gap-10 lg:gap-0">
            {/* Imagem */}
            <div className="flex-1">
                <img
                    src="/consulta.png"
                    alt="Consulta Cuidee"
                    className="w-full md:w-[540px] md:h-[536px] rounded-xl"
                />
            </div>

            {/* Conteúdo */}
            <div className="flex-1">
                <span className="font-inter text-[14px] text-neutral-900 block mb-[16px]">
                    Mais de 100 mil pacientes já facilitaram a forma de agendar
                    consultas
                </span>
                <h4 className="text-[32px] font-raleway font-bold leading-snug text-gray-900 mb-[40px]">
                    {textos.find((value) => value.id === "TITULO1")?.texto}
                </h4>

                <div className="flex gap-6 mb-[40px]">
                    {/* Linha lateral com barra verde */}
                    <div className="relative w-0.5 bg-gray-300 rounded">
                        <div
                            className="absolute left-0 top-0 w-0.5 bg-[#199A8E] rounded transition-all duration-300"
                            style={{
                                height: `${(active + 1) * 64}px`,
                            }}
                        ></div>
                    </div>

                    {/* Lista de opções */}
                    <div className="space-y-6">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={`group cursor-pointer pl-[10px] ${
                                    active === index
                                        ? "py-[16.3px] pr-[10px]"
                                        : "py-[8px]"
                                }`}
                                onMouseEnter={() => setActive(index)}
                            >
                                <div
                                    className={`flex items-center gap-5 text-[20px] font-raleway font-bold mb-[8px] transition-colors duration-200 ${
                                        active === index
                                            ? "text-[#199A8E]"
                                            : "text-[#BCC0C7]"
                                    }`}
                                >
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        {typeof item.icon === "string" ? (
                                            <img
                                                src={item.icon}
                                                className={`max-w-full max-h-full object-contain ${
                                                    active === index
                                                        ? "filter-green"
                                                        : "filter-gray"
                                                }`}
                                                alt="icon"
                                            />
                                        ) : (
                                            item.icon
                                        )}
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                                {active === index && (
                                    <p className="text-[16px] text-neutral-400 max-w-md">
                                        {item.text}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-[239px] h-[52px] bg-[#199A8E] text-white text-sm font-medium rounded-md">
                    Experimentar agora
                </button>
            </div>
        </section>
    );
}
