"use client";
import Image from "next/image";

export default function AppIntroSection() {
  return (
    <section className="bg-white md:py-16 pb-[80px] md:pb-[120px]">
      <div className="max-w-[1216px] mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="max-w-xl">
          <p className="font-inter text-[14px] text-neutral-900 block mb-[16px]">
            Aprovado por mais de 100 mil pacientes
          </p>

          <h1 className="text-[32px] font-raleway font-bold leading-snug text-gray-900 mb-[16px]">
            Cuidee é a evolução da consulta médica
          </h1>

          <p className="text-neutral-400 text-[16px] mb-4 leading-relaxed">
            O Cuidee é um aplicativo inovador disponível para PC e smartphones,
            que permite buscar médicos por especialidade, localização e preço em
            uma interface muito mais bonita e agradável de se navegar.
          </p>

          <p className="text-neutral-400 text-[16px] mb-4 leading-relaxed mb-[24px]">
            Com mais de 100 mil pacientes, oferece agendamento em tempo real,
            benefícios exclusivos como descontos em farmácias e carteirinha
            digital.
          </p>

          <button className="w-[239px] h-[48px] px-6 py-2 rounded-md border border-primary-base text-primary-base font-semibold">
            Experimentar agora
          </button>
        </div>

        {/* Imagem */}
        <div className="relative w-full">
          <Image
            src="/app-mockup.png" // substitua pelo nome correto da imagem
            alt="App Cuidee"
            width={512}
            height={512}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
