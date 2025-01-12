import { motion } from 'framer-motion'; // Importando o Framer Motion
import styles from "./servicos.module.css";
import Status_loja from '../Status_loja';

export default function Servicos() {
  return (
    <motion.section
      className={styles.container_servicos}
      id="Section_servicos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} // A animação só acontece quando estiver visível na tela
      transition={{ duration: 1 }}
    >
      {/* Animando o título */}
      <motion.h1
        className={styles.titulo}
        initial={{ opacity: 0, y: -20 }}  // Começa invisível e um pouco acima
        whileInView={{ opacity: 1, y: 0 }}    // Animação só acontece quando estiver visível
        transition={{ duration: 1, delay: 0.2 }} // Atraso para dar ênfase
      >
        Serviços
      </motion.h1>

      {/* Animando o parágrafo */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Só aparece quando estiver na tela
        transition={{ duration: 1, delay: 0.4 }}
      >
        Realizamos todos os serviços para seu aparelho. Nossa missão é deixá-lo novo de novo.
      </motion.p>

      <div>
        <motion.div
          className={styles.container_cards_left}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Só aparece quando estiver na tela
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Animando os cards à esquerda */}
          <motion.div
            className={styles.servicos_card}
            initial={{ opacity: 0, x: -100 }}  // Começa da esquerda
            whileInView={{ opacity: 1, x: 0 }}     // Só anima quando entra na tela
            transition={{ duration: 0.8 }}
          >
            <h2>Reparo de Placa</h2>
            <p>
              Alguns reparos mais graves na placa dos dispositivos são corrigidos por meio de reparos avançados na placa.
            </p>
          </motion.div>

          <motion.div
            className={styles.servicos_card}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} // Só anima quando entra na tela
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Troca de outros componentes</h2>
            <p>
              Troca de componentes dos dispositivos como câmera, botões, sensores, campainha, entre outros.
            </p>
          </motion.div>

          <motion.div
            className={styles.servicos_card}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} // Só anima quando entra na tela
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Troca de carcaça</h2>
            <p>
              Carcaça empenada, arranhada, com algum dano físico, realizamos a troca completa, deixando o dispositivo com aparência de novo!
            </p>
          </motion.div>
        </motion.div>

        {/* Imagem animada */}
        <motion.img
          src="/iphone_quebrado.png"
          alt=""
          className={styles.img_iphone_quebrado}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }} // A animação só acontece quando a imagem entra na tela
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.div
          className={styles.container_cards_right}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Só anima quando entra na tela
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Animando os cards à direita */}
          <motion.div
            className={styles.servicos_card}
            initial={{ opacity: 0, x: 100 }}  // Começa da direita
            whileInView={{ opacity: 1, x: 0 }} // Só anima quando entra na tela
            transition={{ duration: 0.8 }}
          >
            <h2>Troca de Vidro traseiro</h2>
            <p>
              Realizamos a troca de vidro traseiro, utilizando uma tecnologia avançada a laser para remoção do vidro.
            </p>
          </motion.div>

          <motion.div
            className={styles.servicos_card}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} // Só anima quando entra na tela
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Troca da Bateria</h2>
            <p>
              Bateria durando pouco, aparelho descarregando rápido, aparelho reiniciando. Relaxa, resolvemos para você!
            </p>
          </motion.div>

          <motion.div
            className={styles.servicos_card}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} // Só anima quando entra na tela
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Troca de Tela</h2>
            <p>
              Defeito como tela quebrada, tela com listra, tela com manchas, touch falhando são resolvidos com a troca de tela.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Status_loja />
      {/* Componente de status da loja */}
    </motion.section>
  );
}