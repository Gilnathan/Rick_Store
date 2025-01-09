import styles from "./Card_vendas.module.css"
import Bnt_SimularOrcamento from "../Bnt_SimularOrcamento"
import Carousel from "@/components/Carousel/Carousel"

export default function Card_vendas(){
    return(
        <section className={styles.container_Card_vendas} id="Aparelhos_Novos">
            
            <div className={styles.Card_vendas_texto}>
                <h2> Aparelhos Novos e Usados</h2>
                <p>
                sua assistência técnica de confiança! Estamos aqui para cuidar dos seus dispositivos com profissionalismo, rapidez e qualidade. Nossa missão é garantir que seus equipamentos estejam sempre funcionando como novos. <br/ >
                
                Com uma equipe altamente qualificada e experiência em consertos de smartphones, computadores, tablets e outros eletrônicos, a Rick Store combina tecnologia de ponta com um atendimento personalizado.
                </p>
                <Bnt_SimularOrcamento />
            </div>

            <div className={styles.Card_vendas_img}>
            <Carousel />
            </div>

        </section>
    )
}
