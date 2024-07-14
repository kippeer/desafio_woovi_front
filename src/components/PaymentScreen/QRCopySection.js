import React from "react";
import { Link } from "react-router-dom";
import styles from "./PaymentScreen.module.css";
import FileCopyIcon from "@mui/icons-material/FileCopy"; // Importa o ícone de copiar do Material-UI

const QRCopySection = () => (
  <Link to="/page2" className={styles.qrCopyContainer}>
    <div className={styles.qrCopyText}>Clique para copiar QR CODE</div>
    <FileCopyIcon className={styles.qrIcon} />
  </Link>
);

export default QRCopySection;
