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
    <section className="py-10 px-4">
      <h2 className="text-center text-neutral-600 text-xl md:text-2xl font-semibold mb-6">
        Cuidee informa
      </h2>

      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(0,1fr)] gap-4 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg overflow-hidden ${
                idx === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <PhotoView src={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
