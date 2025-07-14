"use client";
import { useState } from "react";
import { FaBolt, FaPlus, FaMobileAlt } from "react-icons/fa";

const items = [
  {
    id: 0,
    icon: <FaBolt />,
    title: "Facilidade para agendar consultas",
    text: "Escolha o médico ideal, defina o horário e agende direto pelo app, tudo de forma prática e rápida.",
  },
  {
    id: 1,
    icon: <FaPlus />,
    title: "Saúde acessível e de qualidade",
    text: "A Cuidee conecta pacientes a médicos com valores acessíveis, sem abrir mão da qualidade.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Tudo na palma da sua mão",
    text: "Com poucos toques, você resolve sua consulta e recebe notificações sobre cada etapa.",
  },
];

export default function AppointmentSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-center">
      {/* Imagem */}
      <div className="flex-1">
        <img
          src="/consulta.png"
          alt="Consulta Cuidee"
          className="w-full rounded-xl"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <span className="text-sm text-neutral-900 block mb-4">
          Mais de 100 mil pacientes já facilitaram a forma de agendar consultas
        </span>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900 mb-6">
          Agenda de consultas particulares com preços diferenciados
        </h2>

        <div className="flex gap-6">
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
                className="group cursor-pointer"
                onMouseEnter={() => setActive(index)}
              >
                <div
                  className={`flex items-center gap-2 font-semibold mb-1 transition-colors duration-200 ${
                    active === index ? "text-[#199A8E]" : "text-[#BCC0C7]"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                {active === index && (
                  <p className="text-sm text-gray-600 max-w-md">{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="mt-8 bg-[#199A8E] border border-primary-base text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-primary-base transition">
          Experimentar agora
        </button>
      </div>
    </section>
  );
}
