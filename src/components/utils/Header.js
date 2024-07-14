
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/woovi.svg"; 

const Header = ({ cliente, texto }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img
            loading="lazy"
            src={logo}
            className={styles.logo}
            alt="Company logo"
          />
          <h1 className={styles.title}>{cliente.nome}, {texto}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
