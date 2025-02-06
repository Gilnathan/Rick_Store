import styles  from "./Hearder.module.css";


export default function Heard(){
    return (

        <header className={styles.container_header}>
            <a href="#"><img src="/logo_Rick.png" alt="Logo" className={styles.logo} />
            </a>
            <nav className={styles.Nav_bar}> 
                
                <a href="#Section_servicos" className={styles.bntNav}>Serviços</a>
                <a href="#Aparelhos_Novos" className={styles.bntNav}>Novos e Usados</a>
                <a href="#Local" className={styles.bntNav}>Endereço</a>
                <a href="#contatos" className={styles.bntNav}>Contatos</a>
                
            </nav>
            <a href='https://wa.me/5573981879787?text=' target='_black' className={styles.bnt_Contato}> <img src="/whatsapp.png" alt="Logo" className={styles.bnt_Contato_icone}/> <span>Fale Conosco</span>  </a>

      </header>
    )
}