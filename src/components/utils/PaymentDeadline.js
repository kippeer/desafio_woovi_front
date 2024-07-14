import React from "react";
import styles from "../PaymentScreen/PaymentScreen.module.css";

const PaymentDeadline = () => {
  // Calcula a data atual
  const currentDate = new Date();

  // Adiciona 30 dias à data atual
  const deadlineDate = new Date(currentDate);
  deadlineDate.setDate(deadlineDate.getDate() + 30);

  // Formata a data para o formato desejado (dd/mm/yyyy - hh:mm)
  const formattedDeadline = `${deadlineDate.getDate().toString().padStart(2, '0')}/${(deadlineDate.getMonth() + 1).toString().padStart(2, '0')}/${deadlineDate.getFullYear()} - ${deadlineDate.getHours().toString().padStart(2, '0')}:${deadlineDate.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className={styles.paymentDeadline}>
      <span className={styles.deadlineLabel}>Prazo de pagamento:</span>
      <br />
      <span className={styles.deadlineValue}>{formattedDeadline}</span>
    </div>
  );
};

export default PaymentDeadline;
