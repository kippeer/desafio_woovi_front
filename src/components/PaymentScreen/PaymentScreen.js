import React from "react";
import { Link, useParams } from "react-router-dom";
import QRCodeSection from "./QRCodeSection";
import QRCopySection from "./QRCopySection";
import PaymentDeadline from "../utils/PaymentDeadline";
import PaymentPlan from "./PaymentPlan"; // Importe o componente PaymentPlan correto
import FooterSection from "../utils/SecurityFooter";
import styles from "./PaymentScreen.module.css";
import Header from "../utils/Header";
import { ValorParcelaDTO } from '../utils/dados/valorParcela.dto';
import VerticalStepper from "./VerticalStepper";

const PaymentScreen = () => {
  const { valorParcelaId } = useParams();

  // Verifica se o valorParcelaId existe no objeto ValorParcelaDTO
  const parcela = ValorParcelaDTO[valorParcelaId];

  // Determina a página atual com base no valorParcelaId
  const currentPage = parseInt(valorParcelaId, 10);

  // Monta o texto baseado na parcela selecionada
  const texto = parcela
    ? `Como você quer pagar a entrada de ${parcela.amount.toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      )} pelo Pix`
    : null; // Retorna null para redirecionamento

  return (
    <main className={styles.container}>
      {texto ? (
        <Header cliente={{ nome: "João" }} texto={texto} />
      ) : (
        <div>
          <p>Error 404.</p>
          <Link to="/">Voltar para a página inicial</Link>
        </div>
      )}
      {texto && (
        <>
          <QRCodeSection />
          <QRCopySection />
          <PaymentDeadline />
          <VerticalStepper parcelas={Object.values(ValorParcelaDTO)} currentPage={currentPage} />
          <PaymentPlan parcelas={Object.values(ValorParcelaDTO)} total={parcela.total} />
          <FooterSection />
        </>
      )}
    </main>
  );
};

export default PaymentScreen;
