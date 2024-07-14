import React from "react";
import styles from "../PaymentScreen/PaymentScreen.module.css";

const PaymentTotal = ({ total }) => {
  // Verifica se o total está definido antes de usar toLocaleString
  const formattedTotal = total ? total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }) : '';

  return (
    <div>
      <div className={styles.separator} />
      <div className={styles.totalContainer}>
        <div className={styles.totalDetails}>CET: 0,5%</div>
        <div className={styles.totalAmount}>Total: {formattedTotal}</div>
      </div>
    </div>
  );
};

export default PaymentTotal;
