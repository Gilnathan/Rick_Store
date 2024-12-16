import styles from "./servicos.module.css"

export default function Servicos(){
    return (
        <section className={styles.container_servicos} id="Section_servicos">
            <h1> Serviços </h1>
            <p> Realizamos Todos os Serviços para seu Aparelho. Nossa missão é Deixa-lo novo de novo </p>

            <div>
                <div className={styles.container_cards_left}>
                        <div className={styles.servicos_card}>
                            <h2>Reparo de Placa</h2>
                            <p> Alguns Reparos mais graves na placa dos dispositivos são corrigidos por meio de reparos avançados na placa</p>
                          
                        </div>
                        <div className={styles.servicos_card}>
                            <h2>Troca de outros componentes </h2>
                            <p> troca de demais componentes dos dispositivos como
                                câmera, botões, sensores, campainha, dentro outros
                                </p>
                           
                        </div>
                        <div className={styles.servicos_card}>
                            <h2>
                                Troca de carcaça
                            </h2>
                            <p> 
                                carcaça empenada, arranhada, com algum dano físico, realizamos a troca completa, deixando o dispositivo com aparência de novo!
                            </p>
                            
                        </div>
                </div>

                
                    <img src="/iphone_quebrado.png" alt="" className={styles.img_iphone_quebrado}  />
                

                <div className={styles.container_cards_right}>
                        <div className={styles.servicos_card}>
                            <h2>
                                Toca de Vidro traseiro
                            </h2>
                            <p> 
                                Realizamos a troca de vidro traseiro, ultizando uma tecnologia avançada a laser para remoçao do vidro.
                            </p>
                        </div>
                        <div className={styles.servicos_card}>
                        <h2>
                                Troca da Bateria
                            </h2>
                            <p> 
                                Bateria durando pouco, aparelho decarregando rapido, aparelho reniciando. Relaxa, resolvemos para você!
                            </p>
                        </div>
                        <div className={styles.servicos_card}>
                        <h2>
                                Troca de Tela
                            </h2>
                            <p> 
                                Defeito como tela quebrada, teka com listra, tela com manchas, touch falhando são resolvidos com a troca de tela.
                            </p>
                        </div>
                </div>
            </div>

            
        </section>
    )
}