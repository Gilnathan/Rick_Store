import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Importando o estilo do autoplay
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './Carousel.module.css'; // Importando os estilos

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Incluindo o módulo Autoplay
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500, // Tempo de delay entre os slides (em milissegundos)
          disableOnInteraction: false, // O autoplay não será desativado se o usuário interagir
        }}
      >
        <SwiperSlide className={styles.slide}> <img src="/img-iphones.png" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="/loja3.jpg" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="/aparelho-1.webp" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}><img src="/aparelho-2.webp" alt=""/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
