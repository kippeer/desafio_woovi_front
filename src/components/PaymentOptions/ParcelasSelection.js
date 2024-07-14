import React, { useState } from "react";
import { ValorParcelaDTO } from '../utils/dados/valorParcela.dto';
import styles from "./ParcelasSelection.module.css";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CashbackBanner from "./CashbackBanner";
import Modal from "./Modal";

const ParcelasSelection = () => {
  const [selectedParcela, setSelectedParcela] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [valorParcela, setValorParcela] = useState(null); // Estado para armazenar o valor da parcela selecionada

  const parcelas = Object.values(ValorParcelaDTO);

  const handleParcelaClick = (parcela) => {
    setSelectedParcela(parcela.id);
    setValorParcela(parcela); // Define a parcela selecionada para o modal
    setShowModal(true);
  };

  const confirmSelection = () => {
    setShowModal(false);
    // Redirecionar para a página page1 com o ID da parcela
    window.location.href = `/page1/${valorParcela.id}`;
  };

  const cancelSelection = () => {
    setSelectedParcela(null);
    setShowModal(false);
  };

  return (
    <>
    <div className={styles.parcelasContainer}>
      {parcelas.map((parcela) => (
        <div
          key={parcela.id}
          className={`${styles.parcela} ${
            selectedParcela === parcela.id ? styles.selected : ""
          }`}
          onClick={() => handleParcelaClick(parcela)}
        >
          <div className={styles.empilhamento}>
            <span className={styles.parcelaText}>
              <span className={styles.parcelaIdText}>{parcela.id}x</span>
              <span className={styles.parcelaAmountText}>
                {" "}
                {parcela.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </span>
            {parcela.id === 1 && (
              <>
                <span className={styles.cashbackText}>
                  Ganhe 3% de Cashback
                </span>
                <CashbackBanner
                  boldText="🤑 R$ 300,00"
                  normalText=" de volta no seu Pix na hora"
                  
                />
              </>
            )}
            {parcela.id !== 1 && (
              <span className={styles.totalText}>
                Total:{" "}
                {parcela.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            )}
            {parcela.id === 4 && (
              <CashbackBanner
                boldText="-3% de juros:"
                normalText=" Melhor opção de parcelamento"
                
              />
            )}
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={
                <CheckCircleIcon style={{ color: "#4caf50" }} />
              }
              checked={selectedParcela === parcela.id}
              onChange={() => handleParcelaClick(parcela)}
            />
          </div>
          {parcela.id === 1 && (
            <div className={styles.pix}>
              Pix
            </div>
          )}
          {parcela.id === 2 && (
            <div className={styles.pixParcelado}>
              Pix Parcelado
            </div>
          )}
        </div>
      ))}
      {showModal && (
        <Modal
          confirmSelection={confirmSelection}
          cancelSelection={cancelSelection}
          valorParcela={valorParcela}
        />
      )}
    </div>
    </>
  );
};

export default ParcelasSelection;
