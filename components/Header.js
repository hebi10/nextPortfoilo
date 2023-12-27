import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styleHeader from '@/components/Header.module.css'


export default function Header (){
    const slideData = [
        {
          id: 1,
          text: '테스트 01',
        },
        {
          id: 2,
          text: '테스트 02',
        },
        {
          id: 3,
          text: '테스트 03',
        },
        {
          id: 4,
          text: '테스트 04',
        },
        {
          id: 5,
          text: '테스트 05',
        },
        {
          id: 6,
          text: '테스트 06',
        },
        {
          id: 7,
          text: '테스트 07',
        }
      ];

      SwiperCore.use([Navigation, Scrollbar, Autoplay, FreeMode]);

    return (
        <header className={styleHeader.header}>
            <div className="swiper-container">
                <Swiper
                    className={styleHeader.slide}
                    freeMode={true}
                    loop={true}
                    slidesPerView={'auto'}
                >
                    {slideData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div>
                                <div>{slide.text}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <p>Header</p>
        </header>
    );
}