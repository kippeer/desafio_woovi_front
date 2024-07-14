import React from "react";
import styles from "./CashbackBanner.module.css";

const CashbackBanner = ({ boldText, normalText, className }) => {
  return (
    <div className={`${className} ${styles.bannerContainer}`}>
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
