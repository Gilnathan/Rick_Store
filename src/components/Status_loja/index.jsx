import styles from "./Status.module.css"


export default function Status_loja(){
    return(
        
        <div className={styles.container_status_loja}  data-aos="fade-up">
            <div className={styles.status_Card}>
                <h2> + de 3.000 </h2>
                <p> Reparos de Tela</p>
            </div>

            <div className={styles.status_Card}>
                <h2> + de 20.000 </h2>
                <p>Clientes Atendidos </p>
            </div>
            <div className={styles.status_Card}>
                <h2> + de 5.000 </h2>
                <p> Trocas de bateria </p>
            </div>
        </div>
    )
}