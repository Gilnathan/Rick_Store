import styles  from "./Hearder.module.css";


export default function Heard(){
    return (

        <header className={styles.container_header}>
            <img src="/logo_Rick.png" alt="Logo" className={styles.logo} />
            
            <nav className={styles.Nav_bar}> 
                
                <a href="#Section_servicos" className={styles.bntNav}>Serviços</a>
                <a href="#Aparelhos_Novos" className={styles.bntNav}>Novos e Usados</a>
                <a href="#Local" className={styles.bntNav}>Endereço</a>
                <a href="#" className={styles.bntNav}>Dividas Frequentes</a>
                
            </nav>
            <a href="#" className={styles.bnt_Contato}> <img src="/whatsapp.png" alt="Logo" className={styles.bnt_Contato_icone}/> <span>Fale Conosco</span>  </a>

      </header>
    )
}