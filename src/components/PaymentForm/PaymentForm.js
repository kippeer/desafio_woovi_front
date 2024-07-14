import React, { useState, useEffect } from "react";
import PaymentDeadline from "../utils/PaymentDeadline";
import styles from "./PaymentForm.module.css";
import PayForm from "./PayForm";
import Header from "../utils/Header";
import PaymentDetails from "../utils/PaymentDetails";
import PaymentTotal from "../utils/PaymentTotal";
import FooterSection from "../utils/SecurityFooter";
import { ValorParcelaDTO } from "../utils/dados/valorParcela.dto";
import VerticalStepper from "../PaymentScreen/VerticalStepper";

function PaymentForm() {
  const [texto, setTexto] = useState("Pague o restante em x1 no cartão");
  const [total, setTotal] = useState(ValorParcelaDTO["1"].total);
  const [currentPage, setCurrentPage] = useState(0); // Inicializa currentPage com 0 (primeira parcela)

  const handleTextoChange = (novoTexto) => {
    setTexto(novoTexto);
  };

  const handleTotalChange = (novaParcelaSelecionada) => {
    const novoTotal = ValorParcelaDTO[novaParcelaSelecionada].total;
    setTotal(novoTotal);
    setCurrentPage(parseInt(novaParcelaSelecionada) ); // Atualiza currentPage com base na parcela selecionada
  };

  // Efeito para garantir que currentPage inicie em 0 ao carregar o componente
  useEffect(() => {
    setCurrentPage(0);
  }, []);

  return (
    <div className={styles.paymentFormContainer}>
      <Header cliente={{ nome: "João" }} texto={texto} />
      <PayForm onTextoChange={handleTextoChange} onTotalChange={handleTotalChange} />
      <VerticalStepper parcelas={Object.values(ValorParcelaDTO)} currentPage={currentPage} />
      <PaymentDeadline />
      <PaymentTotal total={total} />
      <PaymentDetails />
      <FooterSection />
    </div>
  );
}

export default PaymentForm;
