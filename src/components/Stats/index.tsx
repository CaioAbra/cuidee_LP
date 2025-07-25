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
    description: "de consultas realizadas com sucesso.",
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
  <section className="bg-white pt-15 md:pt-[140px] lg:pt-[190px] mb-20 px-6 bg-[url('/tecno.png')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
        {stats.map((stat, index) => (
          <div key={stat.id}>
            <h3
              className="font-raleway text-primary-base lg:text-[25px] xl:text-[34px] font-bold inline-block pb-1 pt-2 border-b-2"
            >
              {stat.prefix}
              {formatValue(counts[index])}
              {stat.suffix}
            </h3>
            <p className="text-[16px] text-[#868C98] max-w-[20ch] mx-auto leading-snug mt-2">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
