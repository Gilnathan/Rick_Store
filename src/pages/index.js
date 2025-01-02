import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';






import Topo from "@/components/Topo/Topo";
import Title_main from "@/components/Title_main";
import Card_qualification from "@/components/Card_qualification";
import Bnt_SimularOrcamento from "@/components/Bnt_SimularOrcamento";
import Sobre from "@/components/Sobre"
import Servicos from "@/components/Servicos";
import Status_loja from "@/components/Status_loja";
import Card_vendas from "@/components/Cards_vendas"
import Carousel from "@/components/Carousel/Carousel"
import Carrossel_img_loja from "@/components/Carrossel_img_loja/Carrossel_img_loja"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        
      </Head>
      
      <main className={styles.container_main}>
      
      
      <Topo />
      <Title_main />
      <Carrossel_img_loja />
      <Sobre />
      <Servicos />
      <Status_loja/>
      <Card_vendas />
      
      
      </main>
 

    </>
  );
}
