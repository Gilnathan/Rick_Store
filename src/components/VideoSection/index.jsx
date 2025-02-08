import React from "react";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <div className={styles.videoSection}>
      <img src="/bgreparo.jpg" alt="Logo" className={styles.imagem_bg} />
      
      <video  className={styles.video} controls autoPlay loop muted>
            <source src="/video reparo.mp4" type="video/mp4" />
      </video>

      <div className={styles.text}>
      <h1>Troca de Tela do Samsung S23 Ultra</h1>
      <h2>Nova vida para o Galaxy S23 Ultra! Confira o passo a passo da troca de tela.</h2>
      
      <p>Seu aparelho da linha Samsung S ou iPhone sofreu um acidente? A tela trincou ou parou de funcionar? Não se preocupe! <span className={styles.destque}>Na Riick Store, realizamos a troca de tela e reparos em diversos modelos</span>, utilizando peças originais e técnicos especializados para garantir a máxima qualidade e durabilidade do seu aparelho.</p>

      

      <ul>
        <li>Peças de alta qualidade</li>
        <li>Garantia do serviço</li>
        <li>Reparo rápido e seguro</li>
      </ul>

     </div>
      

    </div>
  );
};

export default VideoSection;
