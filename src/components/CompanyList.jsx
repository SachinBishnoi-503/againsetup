import React from 'react';
import { COMPANY_NAME } from '../Utils/Helper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const CompanyList = () => {
    return (
        <div className='mt-[54px]'>
            <div className='container'>
                <div>
                    <p className='!leading-custom-lg max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-custom-4xl max-w-[548px] text-oxford-blue max-lg:max-w-full'>More than <span className='font-bold text-sky-blue'> 80,000+ </span> companies trust bill central </p>
                    <div className='flex items-center justify-between mt-[64px]'>
                        {COMPANY_NAME.map((item, index) => (
                            <img src={item.logo} key={index} className='' alt="{item.alt}" />
                        ))}
                    </div>
                    <div>
                            
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyList