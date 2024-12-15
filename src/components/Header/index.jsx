import styles  from "./Hearder.module.css";

export default function Heard(){
    return (

        <header className={styles.container_header}>
            <img src="/favicon.ico" alt="Logo" className={styles.logo} />
            <button popovertarget="MenuFlutuante" className={styles.BntMenu}> X </button>
            <nav className={styles.Nav_bar}> 
                <a href="#" className={styles.bntNav}>Serviços</a>
                <a href="#" className={styles.bntNav}>Depoimentos</a>
                <a href="#" className={styles.bntNav}>Endereço</a>
                <a href="#" className={styles.bntNav}>Dividas Frequentes</a>
                <a href="#" className={styles.bnt_Contato}> <img src="/whatsapp.png" alt="Logo" className={styles.bnt_Contato_icone}/> Fale Conosco </a>
            </nav>


      </header>
    )
}