

import styles from "./PaymentOptions.module.css";

import Header from "../utils/Header";

import SecurityFooter from "../utils/SecurityFooter";
import ParcelasSelection from "./ParcelasSelection";

const PaymentOptions = () => {
 
  const cliente = { nome: 'João' };
  const texto = 'como você quer pagar?';

  

  return (
    <section className={styles.container}>
      <Header
        cliente={cliente}
        texto={texto}
        
      />
      
      <ParcelasSelection/>
      
      
      <SecurityFooter />
    </section>
  );
};

export default PaymentOptions;
