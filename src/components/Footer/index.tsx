import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C3632] text-white pt-[150px]">
      {/* Seção superior */}
      <div className="relative max-w-[1216px] bg-[#36544F] rounded-[20px] mx-auto px-[112px] py-[32px] overflow-visible mb-[48px]">
        <div className="relative z-10 max-w-xl space-y-6">
          <p className="text-sm text-white/70">
            Leve saúde e economia no seu bolso
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
            Baixe o app Cuidee e agende consultas particulares com preços
            diferenciados.
          </h2>
          <div className="flex gap-3 mt-8">
            <Image
              src="/appstore.png"
              alt="App Store"
              width={130}
              height={130}
            />
            <Image
              src="/playstore.png"
              alt="Play Store"
              width={130}
              height={130}
            />
          </div>
        </div>

        {/* Mockup do app fora do container */}
        <div className="hidden lg:block absolute right-[112px] bottom-0 z-0">
          <Image
            src="/mockup-app-cuidee.png"
            alt="App Cuidee"
            width={320}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      {/* Seção de links */}
      <div className="max-w-[1216px] mx-auto px-6 lg:px-20 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-white/20 text-sm text-white">
        <div>
          <h4 className="font-bold mb-2">Sou paciente</h4>
          <ul className="space-y-1 text-white/70">
            <li>
              <a href="#">Fazer login</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Sou profissional de saúde</h4>
          <ul className="space-y-1 text-white/70">
            <li>
              <a href="#">Fazer login</a>
            </li>
            <li>
              <a href="#">Quero ser um parceiro</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Sobre nós</h4>
          <ul className="space-y-1 text-white/70">
            <li>
              <a href="#">Unidades</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Baixe o app</h4>
          <div className="space-y-2">
            <Image
              src="/appstore.png"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="/playstore.png"
              alt="Play Store"
              width={120}
              height={40}
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Nossas redes</h4>
          <div className="flex gap-4">
            <a href="#">
              <FaInstagram className="text-2xl text-white" />
            </a>
            <a href="#">
              <FaFacebookF className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Seção final */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-6 text-sm text-white/70 gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-cuidee-white.png"
            alt="Logo Cuidee"
            width={24}
            height={24}
          />
          <span>Pague quando usar, use sempre que precisar.</span>
        </div>
        <p className="text-center">
          ©2025 Cuidee. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Termos de Uso
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
