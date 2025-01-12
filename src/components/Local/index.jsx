import styles from './Local.module.css';

const Local = () => {
    return (

    
          <div className={styles.Container_Local} id='Local'>
              <div><img src="/imagem-map.png" alt="Logo" className={styles.imagem_map} /></div>
              <div className={styles.Title_Local}>
                <h1>Visite nossas lojas físicas </h1>
                <p>Quer saber mais sobre nossos produtos e serviços? Visite-nos em uma de nossas lojas físicas <br />  em Itabela - BA ou Guarainga - BA! Não deixe de conferir as novidades <br /> e aproveitar as ofertas exclusivas em nossa loja. Estamos esperando por você </p>
              </div>
              <div className={styles.Container_Mapa}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.0116043704606!2d-39.5602699111902!3d-16.575339425877015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x735d91205862ac1%3A0xabf5549c735cd5d2!2sRiick%20store!5e0!3m2!1spt-BR!2sbr!4v1736698441621!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3823.8106095093103!2d-39.7847651!3d-16.5860381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x735e3d0cfdeb591%3A0x98514e177fdfdfac!2sRiickstore!5e0!3m2!1spt-BR!2sbr!4v1736699003627!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
              
        </div>
    
    );
  };
  
  export default Local;
  