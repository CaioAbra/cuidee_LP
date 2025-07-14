"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative text-white pt-4 pb-0 overflow-visible mb-11 md:mb-35 lg:mb-36"
      style={{
        backgroundImage: 'url("/Bg-techno.png")',
        backgroundColor: "rgba(7, 44, 40, 1)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Imagem sombra decorativa no fundo */}
      <Image
        src="/efeito-sombra.png"
        alt=""
        width={1600}
        height={900}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
      />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Header embutido */}
        <div className="flex justify-between items-center max-w-7xl mx-auto mb-12 px-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-cuidee.svg"
              alt="Cuidee"
              width={145}
              height={32}
            />
            <span className="text-white/40">|</span>
            <Image src="/logo-crmpr.svg" alt="CRM-PR" width={112} height={32} />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#"
              className="transition duration-200 hover:text-primary-base hover:underline"
            >
              Como funciona
            </a>
            <a
              href="#"
              className="transition duration-200 hover:text-primary-base hover:underline"
            >
              Perguntas frequentes
            </a>
          </nav>

          <button className="border border-white text-white text-sm px-5 py-2 rounded-md hover:bg-white hover:text-primary-base transition">
            Área logada
          </button>
        </div>

        {/* Hero principal */}
        <div className="text-center px-4 mb-10 mt-20">
          <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-xs uppercase mb-4 tracking-widest">
            Seja bem vindo
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto mb-6">
            Consulte com médicos particulares com preços ao seu alcance
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-base text-white/90 mb-8">
            Agende sua consulta particular de forma rápida e fácil. Com o Cartão
            da Saúde, você paga menos e cuida da sua saúde sem complicação.
          </p>

          <button className="bg-white text-primary-dark font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition">
            Quero assinar agora →
          </button>
        </div>

        {/* Médicos: agora invadindo o branco com translate */}
        <div className="flex justify-center relative z-20 translate-y-1/2">
          <Image
            src="/medicos/medicos.png"
            alt="Médicos Cuidee"
            width={1449}
            height={292}
            priority
          />
        </div>
      </div>
    </section>
  );
}
