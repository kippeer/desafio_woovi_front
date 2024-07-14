
import React from "react";
import styles from "../utils/SecurityFooter.module.css";
import logo from "../../assets/woovigray.svg"; 
import secure from "../../assets/secure.svg";
const SecurityFooter = () => {
  return (
    <footer className={styles.securityInfo}>
      <img
        loading="lazy"
        src={secure}
        className={styles.lockIcon}
        alt=""
      />
      <p className={styles.securityText}>Pagamento 100% seguro via:</p>
      <img
        loading="lazy"
        src={logo}
        className={styles.paymentLogo}
        alt="Payment provider logo"
      />
    </footer>
  );
};

export default SecurityFooter;
