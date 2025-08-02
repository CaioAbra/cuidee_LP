"use client";

import Image from "next/image";
import instance from "@/api";
import { useState, useEffect } from "react";

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const [faq, setFaq] = useState<any[]>([]);
    const [atendimento, setAtendimento] = useState<any>();

    useEffect(() => {
        async function faq() {
            try {
                const { data } = await instance.get("/SiteAberto/get-faq-site");
                setFaq(data);
            } catch (err) {
                console.error("Erro ao carregar textos:", err);
            }
        }
        async function atendimento() {
            try {
                const { data } = await instance.get("/SiteAberto/get-info-atendimento-site");
                setAtendimento(data);
            } catch (err) {
                console.error("Erro ao carregar atendimentos:", err);
            }
        }
        faq();
        atendimento();
    }, []);

    return (
        <section className="bg-[url('/tecno-3.png')] bg-cover p-[56px] md:px-[32px] md:py-[100px]">
            <div className="max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                {/* ESQUERDA */}
                <div className="space-y-9">
                    <div>
                        <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] text-[#0F172A] md:text-[14px] md:leading-[20px] md:tracking-[-0.006em]">
                            Preço sem surpresa
                        </p>
                        <h2 className="font-raleway font-bold text-[26px] leading-[120%] tracking-[-0.016em] text-[#0A0D14] mt-[16px] md:text-[32px] md:leading-[38px] md:tracking-[-0.01em]">
                            Perguntas frequentes
                        </h2>
                        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.011em] text-[#868C98] mt-[16px] md:text-neutral-400">
                            Não achou sua dúvida? Converse com nosso time de especialistas.
                        </p>
                    </div>

                    {/* Suporte */}
                    <div className="flex flex-col mt-[64px]">
                        <div className="flex items-center gap-[12px]">
                            <Image
                                src="/logo-big.svg"
                                alt="logo"
                                width={48}
                                height={48}
                            />
                            <div>
                                <p className="font-raleway font-bold text-[18px] leading-[24px] text-[#212529]">
                                    Suporte Cartão da saúde
                                </p>
                                <p className="font-raleway font-bold text-[16px] leading-[20px] tracking-[-0.01em] text-[#2B8A3E] mt-[3px]">
                                    • Online agora
                                </p>
                            </div>
                        </div>

                        {/* FAQ ATENDIMENTO */}
                        <div className="w-full md:max-w-[361.514px] md:max-h-[291.12px] relative mt-[40px]">
                            <img
                                src="/faq-woman.png"
                                className="rounded-xl"
                            />
                            <div className="w-[210px] md:w-[275px] h-[250px] bg-white absolute -top-[30px] right-0 md:-right-[65px] flex items-center rounded-2xl shadow-md p-8">
                                <div className="block">
                                    <p className="font-inter text-[#212529] text-[16px] font-bold leading-[20px] tracking-[-0.14px]">
                                        Atendimento das
                                        <span className="block">
                                            <span className="text-[#F9A817] text-[16px] font-bold leading-[20px] tracking-[-0.16px]">
                                                {atendimento?.horarioInicio}
                                            </span>
                                            {" "}às{" "}
                                            <span className="text-[#F9A817] text-[16px] font-bold leading-[20px] tracking-[-0.16px]">
                                                {atendimento?.horarioFim}
                                            </span>
                                        </span>
                                    </p>

                                    <div className="mt-[14px]">
                                        <p className="font-inter text-[#868E96] text-[14px] font-medium leading-[16px] mb-[7px]">
                                            Curitiba e região metropolitana:
                                        </p>
                                        <div className="flex gap-[10.66px]">
                                            <img src="/whatsapp.svg" alt="whatsapp" className="w-[15px] h-[15px]" />
                                            <div className="block">
                                                <div className="flex items-center gap-2 text-[#212529] font-inter text-[14px] font-bold leading-[14.4px] tracking-[-0.12px] mb-[7px]">
                                                    {atendimento?.whats}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[14px]">
                                        <p className="font-inter text-[#868E96] text-[14px] font-medium leading-[16px] mb-[7px]">
                                            Outras localidades:
                                        </p>
                                        <div className="flex items-center gap-[10.66px] text-[#212529] font-inter text-[14px] font-bold leading-[14.4px] tracking-[-0.12px]">
                                            <img src="/phone.svg" alt="phone" className="w-[15px] h-[15px]"/>
                                            {atendimento?.telefone}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 w-full md:w-[360px] h-[52px] mt-[40px] px-6 py-4 rounded-[6px] border border-[#00647E] text-[#00647E] font-inter font-medium text-[14px] leading-[21px] transition-colors duration-300 ease-in-out hover:bg-[#00647E] hover:text-white">
                            <img src="/whatsapp.svg" alt="whatsapp" />
                            Conversar com a equipe
                        </button>


                    </div>
                </div>

                {/* DIREITA - FAQ */}
                <div className="space-y-4 mt-[40px] md:mt-[0px]">
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[20px] shadow p-[24px] md:p-[32px] cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-raleway font-bold text-[18px] leading-[24px] text-[#18171D] md:text-[20px] md:leading-[28px]">
                                    {item?.pergunta}
                                </p>
                                <img
                                    src="/section-cursor.svg"
                                    className={`w-[32px] h-[32px] transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-[1000px] mt-[16px]" : "max-h-0"
                                    }`}
                            >
                                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.011em] text-[#868C98] md:leading-[28px] md:text-neutral-500">
                                    {item?.resposta}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
