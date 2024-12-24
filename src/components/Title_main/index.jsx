import { motion } from 'framer-motion'; // Importando o Framer Motion
import styles from "./Title_main.module.css";
import Bnt_SimularOrcamento from "@/components/Bnt_SimularOrcamento";
import Card_qualification from "@/components/Card_qualification";
import Carousel from "../Carousel/Carousel";

export default function Title_main() {

  return (
    // Aplicando animação diretamente na section
    <motion.section
      className={styles.container_title}
      initial={{ opacity: 0, x: 50 }} // Começa com opacidade 0 e um pequeno deslocamento para baixo
      animate={{ opacity: 1, x: 0 }}   // Finaliza com opacidade 1 e posição original
      transition={{ duration: 0.5 }}     // A duração da animação é de 1 segundo
    >
      <div className={styles.title_conteudo}>
        <h2> Assistência técnica Especializada <br /> </h2>
        <h1> Tá precisando de uma força <br /> com seu dispositivo ? </h1>
        <p> Caiu, Quebrou, parou de funcionar ?! Traga seu equipamento <br /> para quem realmente entende do Assunto.</p>
        <Bnt_SimularOrcamento />
      </div>
      <img src="/img-troca-tela.png" alt="Logo" className={styles.imagem_reparo} />
      <Card_qualification />
    </motion.section>
  );
}
