"use client";
import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import instance from "@/api";
import { useState, useEffect } from "react";

export default function Footer() {
  const [textos, setTextos] = useState<any[]>([]);

  useEffect(() => {
    async function fechApi() {
      try {
        const { data } = await instance.get("/SiteAberto/get-textos-site");
        setTextos(data);
      } catch (err) {
        console.error("Erro ao carregar textos:", err);
      }
    }
    fechApi();
  }, []);

  return (
    <footer className="bg-[#0C3632] text-white pt-[80px] md:pt-[150px] px-[40px] md:px-8">
      {/* Seção superior */}
      <div className="w-full bg-[#36544F] rounded-[24px] md:max-w-[1216px] md:h-[337px] md:mx-auto md:flex md:items-center md:px-[112px] md:relative">
        <div className="px-[24px] pt-[24px] relative z-10 max-w-xl space-y-6 text-center md:text-left">
          <p className="text-sm text-white/70">
            Leve saúde e economia no seu bolso
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug">
            {textos.find((value) => value.id === "TITULO4")?.texto}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <Image
              src="/appstore.png"
              alt="App Store"
              width={140}
              height={40}
              className="w-[140px] h-auto"
            />
            <Image
              src="/playstore.png"
              alt="Play Store"
              width={140}
              height={40}
              className="w-[140px] h-auto"
            />
          </div>
        </div>

        {/* Mockup do app fora do container */}
        <div className="md:absolute md:right-[20px] md:bottom-0">
          <img
            src="/mockup-app-cuidee.png"
            alt="App Cuidee"
            className="flex-shrink-0 w-full -ml-[13px] md:w-[260px] lg:w-[400px] h-auto lg:object-contain"
          />
        </div>
      </div>

      {/* Seção de links */}
      <div className="max-w-[1216px] mx-auto px-6 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-white/20 text-sm text-white text-center sm:text-left">
        <div>
          <h4 className="font-bold mb-2">Sou paciente</h4>
          <ul className="space-y-1 text-white/70">
            <li><a href="#">Fazer login</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Sou profissional de saúde</h4>
          <ul className="space-y-1 text-white/70">
            <li><a href="#">Fazer login</a></li>
            <li><a href="#">Quero ser um parceiro</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Sobre nós</h4>
          <ul className="space-y-1 text-white/70">
            <li><a href="#">Unidades</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Baixe o app</h4>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:block gap-3">
            <Image
              src="/appstore.png"
              alt="App Store"
              width={120}
              height={40}
              className="w-[120px] h-auto mx-auto sm:mx-0"
            />
            <Image
              src="/playstore.png"
              alt="Play Store"
              width={120}
              height={40}
              className="w-[120px] h-auto mx-auto sm:mx-0"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Nossas redes</h4>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#"><FaInstagram className="text-2xl text-white" /></a>
            <a href="#"><FaFacebookF className="text-2xl text-white" /></a>
          </div>
        </div>
      </div>

      {/* Seção final */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-6 text-xs sm:text-sm text-white/70 gap-4 max-w-[1216px] mx-auto text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <Image
            src="/logo-cuidee-white.png"
            alt="Logo Cuidee"
            width={24}
            height={24}
          />
          <span>Pague quando usar, use sempre que precisar.</span>
        </div>
        <p className="text-center order-3 lg:order-2">
          ©2025 Cuidee. Todos os direitos reservados.
        </p>
        <div className="flex justify-center lg:justify-end gap-4 order-2 lg:order-3">
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
