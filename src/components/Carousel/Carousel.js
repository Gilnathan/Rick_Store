import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Carousel.module.css'; // Importando os estilos

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className={styles.slide}> <img src="/img-iphones.png" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="/aparelho-1.webp" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}><img src="/aparelho-2.webp" alt=""/></SwiperSlide>
      </Swiper>
    </div> 
  );
};

export default Carousel;
