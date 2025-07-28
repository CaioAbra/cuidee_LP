"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function SimpleStepsSection() {
    return (
        <section className="bg-[url('/bg-simple.png')] text-white py-[120px] px-[32px]">
            <div className="max-w-[1216px] mx-auto px-4 flex flex-col md:flex-row items-center gap-[80px]">
                {/* Imagem lado esquerdo */}
                <div>
                    <Image
                        src="/video-celular.png"
                        alt="App em uso"
                        width={550}
                        height={570}
                        className="rounded-2xl w-full max-w-[550px] h-auto"
                    />
                </div>

                {/* Conteúdo texto lado direito */}
                <div className="flex-1">
                    <span className="block text-[14px] mb-2 text-white mb-[16px]">
                        Aprovado por mais de 100 mil pacientes
                    </span>
                    <h2 className="text-[32px] font-raleway font-bold text-white mb-[16px] leading-[38px]">
                        Veja como é simples marcar uma consulta!
                    </h2>
                    <p className="text-neutral-300 text-[16px] mb-[48px] max-w-xl">
                        Quer encontrar médicos e economizar em consultas?
                        Assista ao vídeo ao lado! Com o Cartão da Saúde, você
                        agenda em tempo real, aproveita descontos em farmácias e
                        acessa sua carteirinha digital com facilidade. Já são
                        mais de 100 mil usuários simplificando a vida. Confira!
                    </p>

                    <ul>
                        {[
                            "Entre no app e Pesquise por especialidade do médico",
                            "Escolha o médico que mais lhe agradar",
                            "Agende sua consulta",
                            "Agora é só aguardar o médico continuar o processo",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-3 border-b border-white/10 pb-3 ${
                                    index === 0
                                        ? "pb-[24px]"
                                        : "pt-[24px] pb-[24px]"
                                }`}
                            >
                                <img
                                    src="/check.svg"
                                    className="min-w-[24px]"
                                />
                                <span className="font-raleway text-[18px] font-bold">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
