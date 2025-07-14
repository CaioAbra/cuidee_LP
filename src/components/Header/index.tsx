"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full  text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + CRM-PR */}
        <div className="flex items-center gap-4">
          <Image src="/logo-cuidee.svg" alt="Cuidee" width={100} height={40} />
          <span className="text-white/40">|</span>
          <Image src="/logo-crmpr.svg" alt="CRM-PR" width={60} height={30} />
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition">
            Como funciona
          </a>
          <a href="#" className="hover:text-primary transition">
            Perguntas frequentes
          </a>
        </nav>

        {/* Botão */}
        <div>
          <button className="border border-white text-white text-sm px-5 py-2 rounded-md hover:bg-white hover:text-neutral-900 transition">
            Área logada
          </button>
        </div>
      </div>
    </header>
  );
}
