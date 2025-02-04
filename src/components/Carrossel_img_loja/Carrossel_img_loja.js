import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Importando o estilo do autoplay
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './Carrossel_img_loja.module.css'; // Importando os estilos

const Carrossel_img_loja = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Incluindo o módulo Autoplay
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4500, // Tempo de delay entre os slides (em milissegundos)
          disableOnInteraction: false, // O autoplay não será desativado se o usuário interagir
        }}
      >
        <SwiperSlide className={styles.slide}> <img src="imagens/promo1.png" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="imagens/promo2.png" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="imagens/promo3.png" alt=""/> <a href='https://wa.me/5573981879787?text=' target='_black' >  <button className={styles.Bnt_fazerPedido}> Fazer Pedido </button> </a> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="imagens/promo4.png" alt=""/> </SwiperSlide>
        <SwiperSlide className={styles.slide}> <img src="imagens/assistencia-2.png" alt=""/> </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Carrossel_img_loja;
