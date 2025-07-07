import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
            }}
            className="max-w-6xl mx-auto"
        >
            <SwiperSlide>
                <img src="/assets/upload/site/f0427f4ed113b690ce91faf91b66a8ca.png" alt="Banner" />
            </SwiperSlide>
            <div className="swiper-pagination"></div>
        </Swiper>
    );
};

export default Carousel;