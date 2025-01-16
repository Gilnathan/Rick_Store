import styles from "./Card_vendas.module.css"
import Bnt_SimularOrcamento from "../Bnt_SimularOrcamento"
import Carousel from "@/components/Carousel/Carousel"

export default function Card_vendas(){
    return(
        <section className={styles.container_Card_vendas} id="Aparelhos_Novos">
            
            <div className={styles.Card_vendas_texto}>
                <h2> Aparelhos Novos e Usados</h2>
                <p>
                Procurando um novo aparelho? Temos a solução perfeita para você!

Vendemos dispositivos novos e usados de qualidade, com garantia de confiança. Além disso, aceitamos o seu aparelho antigo como parte do pagamento, facilitando ainda mais sua troca.

Renove seu dispositivo sem complicação e com economia! Venha conferir nossas opções. 
               </p>
                <Bnt_SimularOrcamento />
            </div>

            <div className={styles.Card_vendas_img}>
            <Carousel />
            </div>

        </section>
    )
}
