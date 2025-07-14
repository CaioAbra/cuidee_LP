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
    <section
      className="bg-[#F8F9FB] py-20 px-4"
      style={{
        backgroundImage: 'url("/Bg-techno.png")',
        // backgroundColor: "rgba(7, 44, 40, 1)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* ESQUERDA */}
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase text-gray-500 font-medium">
              Preço sem surpresa
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-gray-500 max-w-sm">
              Não achou sua dúvida? Converse com nosso time de especialistas.
            </p>
          </div>

          {/* Suporte */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo-big.svg" alt="logo" width={48} height={48} />
              <div>
                <p className="font-medium">Suporte Cartão da saúde</p>
                <p className="text-green-600 text-sm">• Online agora</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/faq-woman.png"
                alt="suporte"
                width={361}
                height={291}
                className="rounded-lg"
              />
            </div>

            <button
              className="w-fit border-2 border-Secundary-600 text-Secundary-600 px-5 py-2 rounded-md font-medium hover:bg-Secundary-600 hover:text-white transition flex items-center gap-2"
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
              className="bg-white rounded-lg shadow px-6 py-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900">{item.question}</p>
                <ChevronUpIcon
                  className={`h-5 w-5 text-white transform transition duration-300 bg-primary-base rounded-lg ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && item.answer && (
                <p className="text-sm text-gray-500 mt-3">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
