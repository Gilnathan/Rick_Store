import styles from './Contatos.module.css';

export default function Contatos(){
    return (
            <div className={styles.Container_Contatos}>
                <h1>Contatos</h1>
                <div className={styles.Contatos}>
                
                <div>
                    </div> 
                        <div className={styles.Contatos_Itabela}>
                            <h2>Itabela</h2>
                            <h3>whatsapp:</h3>
                            <p>+55 73 98187-9787</p>
                            <h3>Instagram</h3>
                            <p>@riickstore.itabela</p>
                        </div>

                        <div className={styles.Contatos_Guaratinga}>
                            <h2>Guaratinga</h2>
                            <h3>whatsapp:</h3>
                            <p>+55 73 98187-9787</p>
                            <h3>Instagram</h3>
                            <p>@riickstore.itabela</p>
                        </div>
                    </div>
                </div>
    )
    
    
}