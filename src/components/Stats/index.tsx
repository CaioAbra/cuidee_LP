"use client";
import { useEffect, useState } from "react";

const stats = [
    {
        id: 1,
        value: 20,
        suffix: " anos",
        prefix: "+ de ",
        description: "Levando saúde e confiança aos pacientes.",
    },
    {
        id: 2,
        value: 8000000,
        suffix: "",
        prefix: "+ ",
        description: "de usuários satisfeitos com a nossa plataforma.",
    },
    {
        id: 3,
        value: 19000,
        suffix: "",
        prefix: "+ de ",
        description: "Médicos prontos para atender você.",
    },
    {
        id: 4,
        value: 10000000,
        suffix: "",
        prefix: "+ de ",
        description: "De consultas realizadas com sucesso.",
    },
];

function formatValue(value: number): string {
    if (value >= 1000000) return `${Math.floor(value / 1000000)} milhões`;
    if (value >= 1000) return `${Math.floor(value / 1000)} mil`;
    return value.toString();
}

export default function Stats() {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const intervals = stats.map((stat, index) => {
            const increment = Math.ceil(stat.value / 50);
            return setInterval(() => {
                setCounts((prev) => {
                    const next = [...prev];
                    next[index] = Math.min(next[index] + increment, stat.value);
                    return next;
                });
            }, 30);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    return (
        <section className="bg-white pt-[56px] md:pt-[100px] lg:pt-[200px] px-[56px] md:px-8 bg-[url('/tecno.png')] bg-contain bg-no-repeat bg-top">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 text-center">
                {stats.map((stat, index) => (
                    <div key={stat.id} className="flex flex-col items-center">
                        <h3
                            className="font-raleway text-primary-base text-center text-[18px] leading-[22px] tracking-[-0.18px] font-bold not-italic inline-block pb-3 border-b-2 border-primary-light sm:text-[24px] sm:leading-[28px] sm:tracking-[-0.24px] md:text-[30px] md:leading-[34px] md:tracking-[-0.28px] lg:text-[34px] lg:leading-[38px] lg:tracking-[-0.34px]"
                            style={{
                                fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                                fontVariantNumeric: "lining-nums proportional-nums",
                            }}
                        >
                            {stat.prefix}
                            {formatValue(counts[index])}
                            {stat.suffix}
                        </h3>

                        <p
                            className=" mt-[10px] px-5 self-stretch font-inter text-neutral-400 text-center text-[14px] leading-[20px] tracking-[-0.176px] font-normal not-italicsm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px]"
                            style={{
                                fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                            }}
                        >
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
