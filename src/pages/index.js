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
import Card_vendas from "@/components/Cards_vendas"
import Carousel from "@/components/Carousel/Carousel"
import Carrossel_img_loja from "@/components/Carrossel_img_loja/Carrossel_img_loja"
import Local from "@/components/Local";



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
        <meta name="description" content="Assistência técnica especializada em Itabela-BA e Guaratinga-BA! Consertamos celulares, tablets e notebooks, realizamos troca de tela, venda de aparelhos novos e seminovos, além de acessórios. Serviço rápido, confiável e com garantia. Traga seu dispositivo para o melhor atendimento da região!" />
        <meta name="keywords" content="Assistência técnica Itabela, Conserto de celular Guaratinga, Troca de tela, Assistência de notebook, Venda de celulares" />
        <meta name="author" content="Nome da sua assistência" />
        <link rel="icon" href="/favicon.ico" />

        
      </Head>
      <div className={styles.container}>

      <img src="/imagens/loja.png" alt="Imagem de uma assistência técnica" className={styles.img_assistencia} />
    
      <main className={styles.container_main}>
      
      
      <Topo />
      <Title_main />
      <Carrossel_img_loja />
      <Sobre />
      <Servicos />
      <Card_vendas />
      <Local />
      </main>
      </div>
      
      
 

    </>
  );
}
