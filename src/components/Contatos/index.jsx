import styles from './Contatos.module.css';

export default function Contatos(){
    return (
            <section className={styles.ContainerContatos} id='contatos'>    
                <div className={styles.Contatos}>
                    <div className={styles.CRedesSociais}>
                        <h1 className={styles.tituloContatos}> Contatos </h1>
                        <div className={styles.Cidades}>
                            <div className={styles.itabela}>
                            <h1>Iatebla</h1>
                            <h2>whatsapp</h2>
                            <p>+55 73 98187-9787</p>
                            <h2>instagram</h2>  
                            <p>@Riickstore.Itabela</p>
                            </div>
                            <div className={styles.guaratinga}>
                            <h1>Guaratinga</h1>
                            <h2>whatsapp</h2>
                            <p>+55 73 98205-3957</p>
                            <h2>instagram</h2>
                            <p>@riickstoree.guaratinga</p>
                            </div>
                        </div>
                        <h1 className={styles.tituloContatos}> cnpj : 41.805.560/0001-09</h1>
                    </div>
                   
                </div>
            </section>
    )
    
    
}