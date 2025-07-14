"use client";

export default function PricingSection() {
  return (
    <section className="bg-white text-center py-20 px-4">
      <span className="uppercase text-xs tracking-wide text-gray-600 mb-2 block">
        Preço sem surpresa
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Nossos planos para você
      </h2>

      <div
        className="max-w-md mx-auto bg-white rounded-xl p-8 border border-[#F6F7F9]"
        style={{ boxShadow: "0px 40px 60px 0px #E7E4EC80" }}
      >
        <h3 className="text-xl font-semibold mb-4">Consulta Fácil</h3>
        <div className="text-2xl font-bold mb-1">
          <span className="text-base font-normal">R$</span> 29,90{" "}
          <span className="text-base font-normal text-gray-600">/ mês</span>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          Ideal para quem busca agendar consultas de forma prática e sem
          complicações.
        </p>
        <button className="px-6 py-2 border border-primary-dark text-primary-dark rounded-md font-medium hover:bg-primary-dark hover:text-white transition">
          Assinar plano
        </button>
      </div>
    </section>
  );
}
