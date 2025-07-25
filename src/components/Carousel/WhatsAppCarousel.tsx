"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/carrossel/slide-1.png",
  "/carrossel/slide-2.png",
  "/carrossel/slide-3.png",
  "/carrossel/slide-4.png",
  "/carrossel/slide-5.png",
];

export default function WhatsAppCarousel() {
  return (
    <div className="max-w-7/1 lg:w-[1216px] mx-auto px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1440}
              height={340}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-bullet {
          @apply inline-block w-2 h-2 rounded-full bg-[#E2E4E9] mx-1 transition-all;
        }
        .swiper-bullet-active {
          @apply w-4 bg-[#375DFB];
        }
      `}</style>
    </div>
  );
}
