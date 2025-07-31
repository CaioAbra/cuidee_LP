"use client";

import instance from "@/api";
import { useState, useEffect } from "react";

export default function PricingSection() {
    const [planType, setPlanType] = useState<"mensal" | "anual">("mensal");

    const [planos, setPlanos] = useState<any[]>([]);

    useEffect(() => {
        async function fechApi() {
            try {
                const { data } = await instance.get("/SiteAberto/get-planos-site");
                setPlanos(data);
            } catch (err) {
                console.error("Erro ao carregar planos:", err);
            }
        }
        fechApi();
    }, []);

    return (
        <section className="bg-[#F5F6F7] text-center pt-[56px] md:pt-[100px] pl-[32px] pr-[32px]">
            <span
                className="block text-center font-inter font-medium not-italic text-[14px] leading-[20px] tracking-[-0.084px] text-[#0F172A] uppercase"
                style={{
                    fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                }}
            >
                Preço sem surpresa
            </span>

            <h2
                className="text-center font-raleway font-bold not-italic text-[32px] leading-[38px] tracking-[-0.32px] text-neutral-900 mt-[16px]"
                style={{
                    fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                    fontVariantNumeric: "lining-nums proportional-nums",
                }}
            >
                Nossos planos para você
            </h2>

            {/* Toggle Mensal / Anual */}
            <div className="w-[200px] h-[44px] inline-flex bg-neutral-200 rounded-full p-[4px] mt-[32px] md:mt-[48px]">
                <button
                    onClick={() => setPlanType("mensal")}
                    className={`w-[99px] h-[36px] rounded-full text-sm font-poppins transition-all duration-500 ease-in-out ${
                        planType === "mensal" ? "bg-white text-[#0A0D14] font-medium" : "bg-transparent text-[#868C98] font-normal"
                    }`}
                >
                    Mensal
                </button>
                <button
                    onClick={() => setPlanType("anual")}
                    className={`w-[99px] h-[36px] rounded-full text-sm font-poppins transition-all duration-500 ease-in-out ${
                        planType === "anual" ? "bg-white text-[#0A0D14] font-medium" : "bg-transparent text-[#8A8F98] font-normal"
                    }`}
                >
                    Anual
                </button>
            </div>

            {/* Card de plano */}
            <div className="mt-[48px]">
                {planType &&
                    planos.map((plano, index) => {
                        return (
                            <div key={`${index}-${planType}`} className="flex flex-wrap justify-center">
                                <div className="animation-enter w-[389.333px] bg-white rounded-2xl p-[56px] border border-[#F6F7F9] shadow-[0_30px_50px_rgba(231,228,236,0.5)]">
                                    <h3
                                        className="text-center font-raleway font-bold not-italic text-[24px] leading-[28.8px] tracking-[-0.24px] text-[#0A0D14]"
                                        style={{
                                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                            fontVariantNumeric: "lining-nums proportional-nums",
                                        }}
                                    >
                                        {plano?.titulo}
                                    </h3>
                                    <div
                                        className="text-center font-raleway font-bold not-italic text-[20px] leading-[24px] tracking-[-0.2px] sm:text-[24px] sm:leading-[28.8px] sm:tracking-[-0.24px] md:text-[28px] md:leading-[33.6px] md:tracking-[-0.28px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.32px] text-neutral-900 mt-[24px]"
                                        style={{
                                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                            fontVariantNumeric: "lining-nums proportional-nums",
                                        }}
                                    >
                                        {" "}
                                        <span
                                            className="font-inter text-neutral-900 text-[18px] leading-[24px] tracking-[-0.27px] font-medium not-italic text-center sm:text-[20px] sm:leading-[26px] sm:tracking-[-0.28px] md:text-[22px] md:leading-[28px] md:tracking-[-0.29px] lg:text-[24px] lg:leading-[30px] lg:tracking-[-0.3px]"
                                            style={{
                                                fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                            }}
                                        >
                                            R$
                                        </span>{" "}
                                        {(planType === "mensal" ? plano?.valorMensal : plano?.valorAnual).toString().replace(".", ",")}
                                        <span
                                            className="font-inter text-neutral-900 text-[18px] leading-[24px] tracking-[-0.27px] font-medium not-italic text-center"
                                            style={{
                                                fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                            }}
                                        >
                                            / {planType === "mensal" ? "mês" : "ano"}
                                        </span>
                                    </div>
                                    <p
                                        className="font-inter text-[#868C98] text-[16px] leading-[24px] tracking-[-0.176px] font-normal not-italic mt-[12px] text-center"
                                        style={{
                                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                        }}
                                    >
                                        {plano?.descricao}
                                    </p>{" "}
                                    <button
                                        className="mt-[32px] flex items-center justify-center gap-1 w-full px-[10px] py-[12px] rounded-[8px] border border-primary-base bg-white text-primary-base font-inter text-[16px] leading-[24px] tracking-[-0.176px] font-medium shadow-[0_1px_2px_rgba(55,93,251,0.08)] transition-colors duration-200 active:bg-[#D6E6FF] active:border-transparent"
                                        style={{
                                            fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                        }}
                                    >
                                        Assinar plano
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}
