import React from "react";
import styles from "../PaymentScreen/PaymentScreen.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PaymentDetails = () => (
  <div>
    <div className={styles.separator} />
    <div className={styles.infoContainer}>
      <div className={styles.infoText}>Como funciona?</div>
      <ExpandMoreIcon />
    </div>
    <div className={styles.separator} />
    <div className={styles.identifierContainer}>
      <span className={styles.identifierTitle}>Identificador:</span>
      <br />
      <span className={styles.identifierValue}>
        2c1b951f356c4680b13ba1c9fc889c47
      </span>
    </div>
  </div>
);

export default PaymentDetails;
