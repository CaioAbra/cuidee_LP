"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

const images = [
  { src: "/imagens/img1.png", alt: "Anuidade 2025" },
  { src: "/imagens/img2.png", alt: "Mulher Médica" },
  { src: "/imagens/img3.png", alt: "Hanseníase 1" },
  { src: "/imagens/img4.png", alt: "Hanseníase 2" },
  { src: "/imagens/img5.png", alt: "Hanseníase 3" },
];

export default function CuideeInformaSection() {
  return (
<section className="pt-[100px] pb-[100px] px-4">
  <h2 className="font-raleway text-center text-neutral-600 text-[32px] font-bold mb-[32px]">
    Cuidee informa
  </h2>

  <PhotoProvider>
    <div className="max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      {/* Imagem grande */}
      <div className="md:row-span-1">
        <PhotoView src={images[0].src}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={734}
            height={443}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
          />
        </PhotoView>
      </div>

      {/* Grid 2x2 das imagens pequenas */}
      <div className="grid grid-cols-2 gap-4">
        {images.slice(1).map((img, idx) => (
          <PhotoView key={idx} src={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              width={209}
              height={205.5}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
          </PhotoView>
        ))}
      </div>
    </div>
  </PhotoProvider>
</section>
  );
}
