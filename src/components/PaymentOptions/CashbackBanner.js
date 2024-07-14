import React from "react";
import styles from "./CashbackBanner.module.css";

const CashbackBanner = ({ boldText, normalText}) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBackground}>
        <div className={styles.bannerContent}>
          <span className={styles.extraBoldText}>{boldText}</span>
          <span className={styles.textNormal}>{normalText}</span>
        </div>
        
      </div>
      
    </div>
  );
};

export default CashbackBanner;
