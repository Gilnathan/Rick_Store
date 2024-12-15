import styles from "./Sobre.module.css"
import Bnt_SimularOrcamento from "../Bnt_SimularOrcamento"

export default function Sobre(){
    return(
        <section className={styles.container_Sobre}>
            <div className={styles.card_Sobre_img}>
            <img src="/imagem_assistencia_reparo.jpg" alt="" className={styles.Sobre_img} />
            </div>
            <div className={styles.card_Sobre_texto}>
                <h2> Sobre Nós </h2>
                <p>
                sua assistência técnica de confiança! Estamos aqui para cuidar dos seus dispositivos com profissionalismo, rapidez e qualidade. Nossa missão é garantir que seus equipamentos estejam sempre funcionando como novos. <br/ >
                
                Com uma equipe altamente qualificada e experiência em consertos de smartphones, computadores, tablets e outros eletrônicos, a Rick Store combina tecnologia de ponta com um atendimento personalizado.
                </p>
                <Bnt_SimularOrcamento />
            </div>
        </section>
    )
}