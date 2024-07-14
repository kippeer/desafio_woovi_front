import React from "react";
import styles from "./PaymentScreen.module.css";
import PaymentDetails from "../utils/PaymentDetails";
import PaymentTotal from "../utils/PaymentTotal";

const PaymentPlan = ({ total,parcelas }) => (
  <div className={styles.mainContent}>
    

    
    <PaymentTotal total={total} />
    
    
    <PaymentDetails />
  </div>
);

export default PaymentPlan;
