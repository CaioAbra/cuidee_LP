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
    <footer data-animate="fade-up" className="bg-[#0C3632] text-white p-[40px] md:pt-[100px] md:pb-[40px] px-[56px] md:px-8">
      {/* Seção superior */}
      <div className="w-full bg-[#36544F] rounded-[24px] py-[24px] md:mt-[48px] md:max-w-[1216px] md:h-[337px] md:mx-auto md:flex md:items-center md:px-[112px] md:py-0 md:relative">
        <div className="px-[24px] relative z-10 max-w-xl text-left">
          <p className="font-medium text-[16px] leading-[24px] tracking-[-0.011em] text-white md:text-[18px] md:leading-[28px]">
            Leve saúde e economia no seu bolso
          </p>
          <h2 className="font-raleway font-bold text-[26px] leading-[31.2px] tracking-[-0.01em] text-white md:text-[32px] md:leading-[38px] md:tracking-[-0.01em] mt-[16px]"  >
            {textos.find((value) => value.id === 'TITULO4')?.texto}
          </h2>
          <div className="flex sm:flex-row justify-start gap-4 mt-[32px]">
            <img
              src="/appstore.png"
              alt="App Store"
              className="w-[133px] h-auto"
            />
            <img
              src="/playstore.png"
              alt="Play Store"
              className="w-[133px] h-auto"
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
      <div className="max-w-[1216px] mx-auto grid grid-cols-2 gap-[48px] self-stretch mt-[24px] md:mt-[48px] pt-[24px] pb-[24px] md:pb-[48px] border-b border-white/15 md:flex md:flex-row md:flex-row md:justify-between ">
        <div>
          <h4 className="font-raleway font-bold text-[16px] leading-[20px] tracking-[-0.01em] text-[#F2F3F6] uppercase">
            Sou paciente
          </h4>
          <ul className="mt-[16px] flex flex-col gap-[16px]">
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Fazer login
              </a>
            </li>
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-raleway font-bold text-[16px] leading-[20px] tracking-[-0.01em] text-[#F2F3F6] uppercase">
            Sou profissional de saúde
          </h4>
          <ul className="mt-[16px] flex flex-col gap-[16px]">
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Fazer login
              </a>
            </li>
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Quero ser um parceiro
              </a>
            </li>
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-raleway font-bold text-[16px] leading-[20px] tracking-[-0.01em] text-[#F2F3F6] uppercase">
            Sobre nós
          </h4>
          <ul className="mt-[16px] flex flex-col gap-[16px]">
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Unidades
              </a>
            </li>
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E]">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-raleway font-bold text-[16px] leading-[20px] tracking-[-0.01em] text-[#F2F3F6] uppercase">
            Baixe o app
          </h4>
          <div className="flex flex-col gap-[12px] mt-[16px]">
            <div className="block">
              <img
                src="/appstore.png"
                alt="App Store"
                className="w-[133px] h-auto"
              />
            </div>
            <div className="block">
              <img
                src="/playstore.png"
                alt="Play Store"
                className="w-[133px] h-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-raleway font-bold text-[16px] leading-[20px] tracking-[-0.01em] text-[#F2F3F6] uppercase">
            Nossas redes
          </h4>
          <div className="flex justify-start lg:justify-start gap-4 mt-[16px]">
            <a href="#">
              <img src="/instagram.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Seção final */}
      <div className="max-w-[1216px] flex flex-col justify-center md:flex-row md:justify-between items-center pt-[48px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-[16px] order-1">
          <img
            src="/logo-cuidee-white.png"
            alt="Logo Cuidee"
            className="w-[40px] h-[40px]"
          />
          <span className="block max-w-[160px] font-inter font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#F2F3F6] text-center md:text-start">
            Pague quando usar, use sempre que precisar.
          </span>
        </div>

        <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#E2E4E9] text-center order-2 my-[32px] md:my-0">
          ©2025 Cuidee. Todos os direitos reservados.
        </p>

        <div className="flex justify-center lg:justify-end gap-4 order-3">
          <a
            href="#"
            className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E] hover:text-white"
          >
            Termos de Uso
          </a>
          <span>|</span>
          <a
            href="#"
            className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#199A8E] hover:text-white"
          >
            Política de Privacidade
          </a>
        </div>
      </div>

    </footer>
  );
}
