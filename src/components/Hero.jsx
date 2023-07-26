import { Swiper, SwiperSlide } from "swiper/react";

import { nextIcon, prevIcon, slide1, slide2 } from "../assets/data";
import { useState } from "react";

import "swiper/css";
import News from "./News";

export default function Hero() {

    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };


    return (

        <section data-aos="fade-up" className="mb-10">     
            <Swiper className="w-full relative cursor-pointer"
                slidesPerView={1}
                loop
                onInit={(ev) => {
                    set_swiper(ev);
                }}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    868: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide >
                    <img className="w-full h-auto p-0 m-0" src={slide1} alt="slide" />
                </SwiperSlide>

                <SwiperSlide >
                    <img className="w-full h-auto" src={slide2} alt="slide" />
                </SwiperSlide>

                <SwiperSlide >
                    <img className="w-full h-auto" src={slide1} alt="slide" />
                </SwiperSlide>

                <SwiperSlide >
                    <img className="w-full h-auto" src={slide2} alt="slide" />
                </SwiperSlide>

                <div className="control absolute w-full flex justify-between items-center left-0 top-0 bottom-0 right-0">
                    <button className="z-10" onClick={prevSlide}><img src={nextIcon} alt="control icon" /></button>
                    <button className="z-10" onClick={nextSlide}><img src={prevIcon} alt="control icon" /></button>
                </div>

            </Swiper>

            <News />

        </section>
    )
}
