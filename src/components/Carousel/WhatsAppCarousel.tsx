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
        <div className="max-w-[1216px] mx-auto px-4 pb-[80px] md:pb-[100px]">
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
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
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination bullets abaixo do slide */}
            <div className="custom-swiper-pagination mt-5 flex justify-center" />

            <style jsx global>
                {`
                    .custom-swiper-pagination .swiper-pagination-bullet {
                        height: 0.5rem; /* h-2 */
                        width: 0.5rem; /* w-2 */
                        margin: 0 0.25rem; /* mx-1 */
                        border-radius: 9999px; /* rounded-full */
                        background-color: #b3b4b6ff;
                        transition: all 0.3s ease;
                    }

                    .custom-swiper-pagination .swiper-pagination-bullet-active {
                        width: 1.5rem; /* w-6 */
                        background-color: #375dfb;
                    }
                `}
            </style>
        </div>
    );
}
