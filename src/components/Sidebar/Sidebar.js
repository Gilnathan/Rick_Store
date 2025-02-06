import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false); // Fecha a sidebar ao clicar no link
  };

  return (
    <>
      <div className={styles.menuIcon} onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#Section_servicos" className={styles.navLink} onClick={closeSidebar}>
              Serviços
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#Aparelhos_Novos" className={styles.navLink} onClick={closeSidebar}>
              Novos e Usados
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#Local" className={styles.navLink} onClick={closeSidebar}>
              Endereço
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contatos" className={styles.navLink} onClick={closeSidebar}>
              Contatos
            </a>
          </li>
         
        </ul>
      </div>

      {/* Background overlay */}
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
