"use client";

import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "Quanto tempo leva para agendar minha consulta?",
    answer:
      "Com o Cartão da Saúde, você pode agendar consultas em poucos minutos, garantindo rapidez e praticidade no cuidado com sua saúde.",
  },
  {
    question: "Preciso de CNPJ para usar os serviços?",
    answer: "",
  },
  {
    question: "Há mensalidades ou taxas de adesão?",
    answer: "",
  },
  {
    question: "Posso usar o serviço em mais de uma cidade?",
    answer: "",
  },
  {
    question: "É possível incluir outros membros da família?",
    answer: "",
  },
  {
    question: "Vou ter um gerente de conta?",
    answer: "",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[url('/tecno-3.png')] bg-cover pt-[120px] pb-[120px] pl-[32px] pr-[32px]">
      <div className="max-w-[1216px] mx-auto grid md:grid-cols-2 px-4">
        {/* ESQUERDA */}
        <div className="space-y-6">
          <div>
            <p className="text-[14px] uppercase text-[#0F172A] font-medium mb-[16px]">
              Preço sem surpresa
            </p>
            <h2 className="font-raleway text-neutral-900 text-[32px] font-bold mb-[16px]">
              Perguntas frequentes
            </h2>
            <p className="text-neutral-400 text-[16px] max-w-sm mb-[64px]">
              Não achou sua dúvida? Converse com nosso time de especialistas.
            </p>
          </div>

          {/* Suporte */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image src="/logo-big.svg" alt="logo" width={48} height={48} />
              <div>
                <p className="font-bold font-raleway text-[18px] text-[#212529]">Suporte Cartão da saúde</p>
                <p className="font-raleway font-bold text-[#2B8A3E] text-[#2B8A3E] text-[16px]">• Online agora</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-[40px]">
              <Image
                src="/faq-woman.png"
                alt="suporte"
                width={361.514}
                height={291.12}
                className="rounded-lg"
              />
            </div>

            <button
              className="w-fit border-[1px] border-Secundary-600 text-Secundary-600 text-[14px] px-8 py-4 rounded-[6px] font-medium flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Conversar com a equipe
            </button>
          </div>
        </div>

        {/* DIREITA - FAQ */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-[32px] cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-raleway font-bold text-[#18171D] text-[18px]">{item.question}</p>
                <img src="/section-cursor.svg"
                  className={`w-[32px] h-[32px] ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && item.answer && (
                <p className="text-[16px] text-neutral-400 mt-3">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
