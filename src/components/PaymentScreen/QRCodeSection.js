import React from "react";
import styles from "./PaymentScreen.module.css";
import qrCodeImage from "../../assets/qrcode.png"

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
