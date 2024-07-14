import React from "react";
import styles from "./PaymentScreen.module.css";
import qrCodeImage from "../utils/img/qrcode.png"; // Importe a imagem do QR Code

const QRCodeSection = () => (
  <div className={styles.paymentImage}>
    <img
      loading="lazy"
      src={qrCodeImage} 
      alt="QR Code" 
      className={styles.qrScan}
    />
  </div>
);

export default QRCodeSection;
