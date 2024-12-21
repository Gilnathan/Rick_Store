import styles from "./Title_main.module.css";
import Bnt_SimularOrcamento from "@/components/Bnt_SimularOrcamento"
import Card_qualification from "@/components/Card_qualification"

export default  function Title_main(){

    return(
        <section className={styles.container_title}>
          <div className={styles.title_conteudo} >
            <h2> Assistêcia técnica Especializada <br /> </h2>
            <h1> Tá precisando de uma força <br /> com seu dispositivo ? </h1>
            <p> Caiu, Quebrou, parou de funcionar ?! traga Seu equipamento <br /> para quem realmente entende do Assunto.</p>
            <Bnt_SimularOrcamento />
          </div>
          <img src="/img-troca-tela.png" alt="Logo" className={styles.imagem_reparo}/>
          <Card_qualification />
     </section>
    )

}