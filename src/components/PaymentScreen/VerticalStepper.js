import React from "react";
import Stepper from "@keyvaluesystems/react-stepper"; 
import ParceladoDTO from "../utils/dados/ParceladoDTO";

const VerticalStepper = ({ currentPage }) => {
  // Obtém as parcelas correspondentes à página atual do ParceladoDTO
  const parcelas = ParceladoDTO[currentPage];

  if (!parcelas) {
    return null; // Retorna null se não houver parcelas correspondentes
  }

  // Mapeia os dados para o formato exigido pelo componente Stepper
  const stepsArray = parcelas.map((parcela, index) => ({
    stepLabel: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span>{parcela.texto}</span>
        <span>{parcela.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</span>
      </div>
    ),
    completed: index === 0, // Marca como concluído apenas a primeira etapa
  }));

  return (
    <Stepper
      steps={stepsArray}
      currentStepIndex={currentPage}
      orientation="vertical"
      labelPosition="right"
      showDescriptionsForAllSteps={true}
      styles={{
        
        CompletedNode: () => ({
          backgroundColor: "#03D69D",
        }),
        LineSeparator: () => ({
          backgroundColor: "#03D69D",
        }),
        LabelTitle: () => ({
          display: 'flex',
          justifyContent: 'space-between',
          width: '500px', 
        }),
       InactiveLineSeparator: () => ({
          backgroundColor: "#ccc", 
        })
      }}
    />
  );
};

export default VerticalStepper;
