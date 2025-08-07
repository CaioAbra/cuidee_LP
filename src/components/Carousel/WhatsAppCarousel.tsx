"use client";
import { useRouter } from "next/navigation";
import instance from "@/api";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function WhatsAppCarousel() {
    const router = useRouter();
    const [slides, setSlides] = useState<any[]>([]);

    useEffect(() => {
        async function fechApi() {
            try {
                const { data } = await instance.get(
                    "/SiteAberto/get-banner-site"
                );
                setSlides(data);
            } catch (err) {
                console.error("Erro ao carregar bannners:", err);
            }
        }
        fechApi();
    }, []);

    return (
        <div data-animate="fade-up" className="max-w-[1216px] mx-auto px-[24px] md:px-8 pt-[32px] md:pt-[64px]">
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
                        <img
                            src={src?.foto}
                            onClick={() => {
                                router.push(src?.urlRedirecionamento);
                            }}
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
