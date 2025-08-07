"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import instance from "@/api";
import { useState, useEffect } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function CuideeInformaSection() {
  const [slides, setSlides] = useState<any>();

  useEffect(() => {
      async function fechApi() {
          try {
              const { data } = await instance.get("/SiteAberto/get-banner-publicidade-site");
              setSlides(data);
          } catch (err) {
              console.error("Erro ao carregar planos:", err);
          }
      }
      fechApi();
  }, []);

  useScrollAnimation();
  return (
    <section className="py-[56px] md:py-[100px] px-[24px] md:px-8" data-animate="fade-up">
      <h2 className="font-raleway text-neutral-600 text-[32px] font-bold leading-[38px] tracking-[-0.32px] text-center">
        Patrocínio
      </h2>

      <PhotoProvider>
        <div className=" mt-[32px] max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          {/* Imagem grande */}
          <div className="md:row-span-1">
            <PhotoView src={slides?.master?.foto}>
              <div className="relative w-full h-[213px] md:h-[430px] overflow-hidden">
                <img
                  src={slides?.master?.foto}
                  alt="master"
                  className="w-full object-cover rounded-lg cursor-pointer"
                />
              </div>
            </PhotoView>
          </div>

          {/* Grid 2x2 das imagens pequenas */}
          <div className="grid grid-cols-2 gap-4">
            {slides?.ouro?.map((img:any, idx:any) => (
              <PhotoView key={idx} src={img.src}>
                <div className="relative w-full h-[98.75px] md:h-[205px] overflow-hidden">
                  <img
                    src={img.foto}
                    alt="ouro"
                    className="w-full object-cover rounded-lg cursor-pointer"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </div>
      </PhotoProvider>
    </section>
  );
}
