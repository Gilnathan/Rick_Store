import { useState } from "react";
import styles from "./Hearder.module.css";

export default function Heard() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <header className={styles.container_header}>
                <a href="#">
                    <img src="/logo_Rick.png" alt="Logo" className={styles.logo} />
                </a>
                <nav className={styles.Nav_bar}> 
                    <a href="#Section_servicos" className={styles.bntNav}>Serviços</a>
                    <a href="#Aparelhos_Novos" className={styles.bntNav}>Novos e Usados</a>
                    <a href="#Local" className={styles.bntNav}>Endereço</a>
                    <a href="#contatos" className={styles.bntNav}>Contatos</a>
                </nav>
                
                {/* Botão para abrir a janela flutuante */}
                <button onClick={() => setShowPopup(true)} className={styles.bnt_Contato}>
                    <img src="/whatsapp.png" alt="Logo" className={styles.bnt_Contato_icone}/> 
                    <span>Fale Conosco</span>
                </button>
            </header>

            {/* Fundo escuro com desfoque */}
            {showPopup && <div className={styles.overlay} onClick={() => setShowPopup(false)}></div>}

            {/* Janela flutuante */}
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popup_content}>
                        <p>Escolha um número para contato:</p>
                        <a href="https://wa.me/5573981879787" target="_blank" className={styles.popup_link}>WhatsApp Itabela</a>
                        <a href="https://api.whatsapp.com/send?phone=5573981392366" target="_blank" className={styles.popup_link}>WhatsApp Guaratinga</a>
                        <button onClick={() => setShowPopup(false)} className={styles.close_popup}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}
