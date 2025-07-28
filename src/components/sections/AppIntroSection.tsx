"use client";
import Image from "next/image";
import instance from "@/api";
import { useState, useEffect } from "react";

export default function AppIntroSection() {
    const [textos, setTextos] = useState<any[]>([]);

    useEffect(() => {
        async function fechApi() {
            try {
                const { data } = await instance.get(
                    "/SiteAberto/get-textos-site"
                );
                setTextos(data);
            } catch (err) {
                console.error("Erro ao carregar textos:", err);
            }
        }
        fechApi();
    }, []);

    return (
        <section className="bg-white md:py-16 pb-[80px] md:pb-[120px]">
            <div className="max-w-[1216px] mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                {/* Texto */}
                <div className="max-w-xl">
                    <p className="font-inter text-[14px] text-neutral-900 block mb-[16px]">
                        Aprovado por mais de 100 mil pacientes
                    </p>

                    <h1 className="text-[32px] font-raleway font-bold leading-snug text-gray-900 mb-[16px]">
                        {textos.find((value) => value.id === "TITULO2")?.texto}
                    </h1>

                    <p className="text-neutral-400 text-[16px] mb-4 leading-relaxed">
                        {textos.find((value) => value.id === "TEXTO1")?.texto}
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
