import  styles from './Rodape.module.css'

export default function Rodape(){
    return(
        <section className={styles.rodape}>
                <footer>
                <p>&copy; 2025 Riick Store. Todos os direitos reservados.</p>
                
                <p>Desenvolvido por  <a href="https://www.instagram.com/grcode.dev/" target='_blank'> <strong className={styles.GRcode}>GRCode.dev</strong> </a></p>
                </footer>

        </section>
    )
}