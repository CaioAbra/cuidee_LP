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
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
        {stats.map((stat, index) => (
          <div key={stat.id}>
            <h3
              className="lg:text-[25px] xl:text-[34px] font-semibold inline-block pb-2 mb-2 border-b-2"
              style={{ color: "#ADEBCC", borderColor: "#ADEBCC" }}
            >
              {stat.prefix}
              {formatValue(counts[index])}
              {stat.suffix}
            </h3>
            <p className="text-[16px] text-[#868C98] max-w-[20ch] mx-auto leading-snug">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
