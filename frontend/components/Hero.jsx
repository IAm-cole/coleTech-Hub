// import Slider from "react-slick";
// //  const settings = {
// //         dots: true,
// //         infinite: true,
// //         speed: 500,
// //         slidesToShow: 1,
// //         slideToScroll: 1
// //     };

// export const Hero = () => {

//   return (
//     <div>
//         <div>
//             <div>
//                 <Slider>

//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                     <h3 className="w-full">1</h3>
//                 </Slider>

//                 </div></div></div>
//   )
// };

import { HeroSlide } from "../src/data/NavbarData";

// import { useState } from "react";
import "../src/index.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "./Shared/Button";

export const Hero = ({handleOrderPop}) => {
  return (
    <div className=" mb-4 mx-8   ">
      {/* <button className="arrow-btn  " onClick={prevSlide} >⇽</button> */}
      <div className=" overflow-hidden rounded-3xl p-8 sm:min-h-96 h-   w-full hero-bg-color ">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {HeroSlide.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                <div className=" flex flex-col justify-center items-center sm:items-start  gap-2 sm:py-20  sm:text-left  order-2 sm:order-1 relative z-10 ">
                  <h1 data-aos="zoom-out"
                  data-aos-duration="300"
                  data-aos-once="true"

                  className="text-2xl sm:text-6xl lg:text-2xl font-bold ">
                    {data.subtitle}
                  </h1>
                  <h1 data-aos="zoom-out"
                  data-aos-duration="300"
                  data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                    {data.title}
                  </h1>
                  <h1 className="text-5xl uppercase text-white  dark:text-white/5  sm:text-7xl md:text-8xl xl:text-9xl font-bold ">
                    {data.title2}
                  </h1>
                  <div data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-delay="300"
                  >
                    <Button text="Shop Now By category" className="bg-red-500 text-white px-6 " handler={handleOrderPop} />
                  </div>
                </div>
                <div className="order-1 sm:order-2 ">
                  <div>
                    <img
                      src={data.image}
                      alt=""
                      className="w-472 h-72  mx-auto sm:w-65 sm:h-65 sm:scale-105 lg:scale-110   object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0.4)]  relative z-40"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button className="arrow-btn right-arrow" onClick={nextSlide}>→</button> */}
      </div>
    </div>
  );
};
