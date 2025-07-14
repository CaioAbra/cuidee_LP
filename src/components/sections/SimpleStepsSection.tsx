"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function SimpleStepsSection() {
  return (
    <section className="bg-[#062C28] text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagem lado esquerdo */}
        <div className="flex-shrink-0">
          <Image
            src="/video-celular.png" // Substituir pelo caminho correto
            alt="App em uso"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>

        {/* Conteúdo texto lado direito */}
        <div className="flex-1">
          <span className="block text-sm mb-2 text-white/80">
            Aprovado por mais de 100 mil pacientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Veja como é simples marcar uma consulta!
          </h2>
          <p className="text-white/80 mb-8 max-w-xl">
            Quer encontrar médicos e economizar em consultas? Assista ao vídeo
            ao lado! Com o Cartão da Saúde, você agenda em tempo real, aproveita
            descontos em farmácias e acessa sua carteirinha digital com
            facilidade. Já são mais de 100 mil usuários simplificando a vida.
            Confira!
          </p>

          <ul className="space-y-4">
            {[
              "Entre no app e Pesquise por especialidade do médico",
              "Escolha o médico que mais lhe agradar",
              "Agende sua consulta",
              "Agora é só aguardar o médico continuar o processo",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 border-b border-white/10 pb-3"
              >
                <CheckCircle
                  className="text-[#5CF1BA] min-w-[24px]"
                  size={24}
                />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
