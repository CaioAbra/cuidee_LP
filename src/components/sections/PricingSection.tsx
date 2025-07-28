"use client";

import { useState } from "react";

export default function PricingSection() {
    const [planType, setPlanType] = useState<"mensal" | "anual">("mensal");

    return (
        <section className="bg-[#F5F6F7] text-center pt-[100px] pb-[100px]  pl-[32px] pr-[32px]">
            <span className="uppercase font-medium text-[14px] text-[#0F172A] block mb-[16px]">
                Preço sem surpresa
            </span>

            <h2 className="text-[32px] font-bold text-neutral-900 mb-[32px]">
                Nossos planos para você
            </h2>

            {/* Toggle Mensal / Anual */}
            <div className="w-[200px] h-[44px] inline-flex bg-neutral-200 rounded-full p-[4px] mb-[48px]">
                <button
                    onClick={() => setPlanType("mensal")}
                    className={`w-[99px] h-[36px] rounded-full text-sm transition font-medium font-poppins ${
                        planType === "mensal"
                            ? "bg-white text-[#0A0D14]"
                            : "bg-transparent text-[#868C98] font-normal"
                    }`}
                >
                    Mensal
                </button>
                <button
                    onClick={() => setPlanType("anual")}
                    className={`w-[99px] h-[36px] rounded-full text-sm transition font-medium font-poppins ${
                        planType === "anual"
                            ? "bg-white text-[#0A0D14]"
                            : "bg-transparent text-[#8A8F98] font-normal"
                    }`}
                >
                    Anual
                </button>
            </div>

            {/* Card de plano */}
            <div className="flex flex-wrap justify-center">
                <div className="w-[389.333px] bg-white rounded-2xl p-[56px] border border-[#F6F7F9] shadow-[0_30px_50px_rgba(231,228,236,0.5)]">
                    <h3 className="text-[24px] font-bold font-raleway text-[#0A0D14] mb-[24px]">
                        Consulta Fácil
                    </h3>
                    <div className="text-[32px] font-raleway font-bold text-neutral-900 mb-[12px]">
                        <span className="font-inter text-neutral-900 text-[18px] font-normal">R$</span>{" "}
                        29,90
                        <span className="font-raleway text-[18px] font-normal text-neutral-900">
                            / {planType === "mensal" ? "mês" : "ano"}
                        </span>
                    </div>
                    <p className="text-[#868C98] text-[18px] mb-[32px]">
                        Ideal para quem busca agendar consultas de forma prática
                        e sem complicações.
                    </p>
                    <button className="w-full pt-[12px] pb-[12px] pl-[10px] pr-[10px] border border-primary-base text-primary-base rounded-[8px] text-[14px] font-medium">
                        Assinar plano
                    </button>
                </div>
            </div>
        </section>
    );
}
