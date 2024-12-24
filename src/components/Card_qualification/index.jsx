import styles  from "./Card_qualification.module.css";

export default function Card(){
    return(
    <section className={styles.container_certificado} >
      
        <div className={styles.certificado_Card}>
            <img src="/reparar.png" alt="Logo" className={styles.certificado_icone}/>
            <div>
              <h2>Reparo Avançado </h2>
              <p> Realizamos Reparos Avançados <br /> em Plcas e componentes <br />  </p>
            </div>
       </div>


       <div className={styles.certificado_Card}>
            <img src="/certificado.png" alt="Logo" className={styles.certificado_icone}/>
            <div>
              <h2>Reparo Avançado </h2>
              <p> Realizamos Reparos Avançados <br /> em Plcas e componentes <br />  </p>
            </div>
       </div>

       <div className={styles.certificado_Card}>
            <img src="/escudo-seguro.png" alt="Logo" className={styles.certificado_icone}/>
            <div>
              <h2>Reparo Avançado </h2>
              <p> Realizamos Reparos Avançados <br /> em Plcas e componentes <br />  </p>
            </div>
       </div>



    </section>
    )
}