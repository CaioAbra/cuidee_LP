"use client";
import Image from "next/image";

export default function AppIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="max-w-xl">
          <p className="text-xs text-gray-700 font-medium uppercase mb-2">
            Aprovado por mais de 100 mil pacientes
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Cuidee é a evolução da consulta médico
          </h2>

          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            O Cuidee é um aplicativo inovador disponível para PC e smartphones,
            que permite buscar médicos por especialidade, localização e preço em
            uma interface muito mais bonita e agradável de se navegar.
          </p>

          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Com mais de 100 mil pacientes, oferece agendamento em tempo real,
            benefícios exclusivos como descontos em farmácias e carteirinha
            digital.
          </p>

          <button className="px-6 py-2 rounded-md border border-primary-base text-primary-base font-semibold hover:bg-primary-base hover:text-white transition">
            Experimentar agora
          </button>
        </div>

        {/* Imagem */}
        <div className="relative w-full max-w-md">
          <Image
            src="/app-mockup.png" // substitua pelo nome correto da imagem
            alt="App Cuidee"
            width={500}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
