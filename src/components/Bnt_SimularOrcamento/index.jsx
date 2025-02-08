import { useState } from "react";
import styles from "./Bnt_SimularOrcamento.module.css";

export default function Bnt_SimularOrcamento() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* Botão para abrir a janela flutuante */}
            <button onClick={() => setShowPopup(true)} className={styles.bnt_Contato}>
                <img src="/whatsapp.png" alt="Logo" className={styles.bnt_Contato_icone} />
                <span>Simular Orçamento</span>
            </button>

            {/* Fundo escuro com desfoque */}
            {showPopup && <div className={styles.overlay} onClick={() => setShowPopup(false)}></div>}

            {/* Janela flutuante */}
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popup_content}>
                        <p>Escolha um número para contato:</p>
                        <a href="https://wa.me/5573981879787" target="_blank" className={styles.popup_link}>WhatsApp Itabela</a>
                        <a href="https://api.whatsapp.com/send?phone=5573981392366" target="_blank" className={styles.popup_link}>WhatsApp Quaratinga</a>
                        <button onClick={() => setShowPopup(false)} className={styles.close_popup}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}
