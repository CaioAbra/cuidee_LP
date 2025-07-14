"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  "/carrossel/carousel2-slide1.png",
  "/carrossel/carousel2-slide2.png",
  "/carrossel/carousel2-slide3.png",
  "/carrossel/carousel2-slide4.png",
  "/carrossel/carousel2-slide5.png",
];

export default function HighlightsCarousel() {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet w-2 h-2 bg-[#E2E4E9] rounded-full inline-block mx-1 transition-all",
          bulletActiveClass:
            "swiper-pagination-bullet-active !w-5 !rounded-[6px] !bg-[#375DFB]",
        }}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`Destaque ${index + 1}`}
              width={864}
              height={266}
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
