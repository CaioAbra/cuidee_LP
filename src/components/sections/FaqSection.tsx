"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import instance from "@/api";
import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const [faq, setFaq] = useState<any[]>([]);

    useEffect(() => {
        async function fechApi() {
            try {
                const { data } = await instance.get("/SiteAberto/get-faq-site");
                setFaq(data);
            } catch (err) {
                console.error("Erro ao carregar textos:", err);
            }
        }
        fechApi();
    }, []);

    return (
        <section className="bg-[url('/tecno-3.png')] bg-cover md:pt-[120px] pb-[80px] md:pb-[120px] pl-[32px] pr-[32px]">
            <div className="max-w-[1216px] mx-auto grid grid-cols-2 justify-center items-start">
                {/* ESQUERDA */}
                <div className="space-y-9">
                    <div>
                        <p className="text-[14px] uppercase text-[#0F172A] font-medium mb-[16px]">
                            Preço sem surpresa
                        </p>
                        <h2 className="font-raleway text-neutral-900 text-[32px] font-bold mb-[16px]">
                            Perguntas frequentes
                        </h2>
                        <p className="text-neutral-400 text-[16px] mb-[64px]">
                            Não achou sua dúvida? Converse com nosso time de
                            especialistas.
                        </p>
                    </div>

                    {/* Suporte */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo-big.svg"
                                alt="logo"
                                width={48}
                                height={48}
                            />
                            <div>
                                <p className="font-bold font-raleway text-[18px] text-[#212529]">
                                    Suporte Cartão da saúde
                                </p>
                                <p className="font-raleway font-bold text-[#2B8A3E] text-[#2B8A3E] text-[16px]">
                                    • Online agora
                                </p>
                            </div>
                        </div>

                        {/* FAQ ATENDIMENTO */}
                        <div className="max-w-[361.514px] max-h-[291.12px] relative">
                            <img
                                src="https://img.freepik.com/fotos-gratis/giggly-mulher-usando-fone-de-ouvido-e-segurando-laptop_23-2148434738.jpg"
                                className="rounded-xl"
                            />
                            <div className="w-[275px] h-[250px] bg-white absolute -top-[30px] -right-[46.486px] flex items-center rounded-2xl shadow-md p-8">
                                <div className="block">
                                    <p className="font-inter text-[#212529] text-[16px] font-bold leading-[20px] tracking-[-0.14px]">
                                        Atendimento das
                                        <span className="block">
                                            <span className="text-[#F9A817] text-[16px] font-bold leading-[20px] tracking-[-0.16px]">
                                                08:30
                                            </span>
                                            {" "}às{" "}
                                            <span className="text-[#F9A817] text-[16px] font-bold leading-[20px] tracking-[-0.16px]">
                                                18:00
                                            </span>
                                        </span>
                                    </p>

                                    <div className="mt-[14px]">
                                        <p className="font-inter text-[#868E96] text-[14px] font-medium leading-[16px] mb-[7px]">
                                            Curitiba e região metropolitana:
                                        </p>
                                        <div className="flex gap-[10.66px]">
                                            <img src="/whatsapp.svg" alt="whatsapp" />
                                            <div className="block">
                                                <div className="flex items-center gap-2 text-[#212529] font-inter text-[14px] font-bold leading-[14.4px] tracking-[-0.12px] mb-[7px]">
                                                    (31) 3373-9396
                                                </div>
                                                <div className="flex items-center gap-2 text-[#212529] font-inter text-[14px] font-bold leading-[14.4px] tracking-[-0.12px] mb-[7px]">
                                                    (31) 3373-6374
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[14px]">
                                        <p className="font-inter text-[#868E96] text-[14px] font-medium leading-[16px] mb-[7px]">
                                            Outras localidades:
                                        </p>
                                        <div className="flex items-center gap-[10.66px] text-[#212529] font-inter text-[14px] font-bold leading-[14.4px] tracking-[-0.12px]">
                                            <img src="/phone.svg" alt="phone" />
                                            0800 001 3002
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="border-[1px] border-Secundary-600 text-Secundary-600 text-[14px] px-8 py-4 rounded-[6px] font-medium flex items-center gap-2">
                            <FaWhatsapp className="text-xl" />
                            Conversar com a equipe
                        </button>
                    </div>
                </div>

                {/* DIREITA - FAQ */}
                <div className="space-y-4">
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow p-[32px] cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-raleway font-bold text-[#18171D] text-[18px]">
                                    {item?.pergunta}
                                </p>
                                <img
                                    src="/section-cursor.svg"
                                    className={`w-[32px] h-[32px] ${activeIndex === index
                                        ? "rotate-180"
                                        : ""
                                        }`}
                                />
                            </div>
                            {activeIndex === index && item.pergunta && (
                                <p className="text-[16px] text-neutral-400 mt-3">
                                    {item?.resposta}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
