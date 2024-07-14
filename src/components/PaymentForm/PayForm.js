import React, { useState } from "react";
import { Grid, TextField, Select, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import { ValorParcelaDTO } from "../utils/dados/valorParcela.dto";

const PayForm = ({ onTextoChange, onTotalChange }) => {
  const [parcelaSelecionada, setParcelaSelecionada] = useState("1");

  const handleChangeParcela = (event) => {
    const novaParcelaSelecionada = event.target.value;
    setParcelaSelecionada(novaParcelaSelecionada);
    const novoTexto = `Pague o restante em x${novaParcelaSelecionada} no cartão`;
    onTextoChange(novoTexto); // Atualiza o texto do header
    onTotalChange(novaParcelaSelecionada); // Atualiza o total exibido
  };

  return (
    <form>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            required
            id="nomeCompleto"
            label="Nome Completo"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cpf"
            label="CPF"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="numeroCartao"
            label="Número do Cartão"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="vencimento"
            label="Vencimento"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            required
            id="parcelas"
            value={parcelaSelecionada}
            onChange={handleChangeParcela}
            variant="outlined"
            fullWidth
          >
            {Object.keys(ValorParcelaDTO).map((key) => (
              <MenuItem key={key} value={key}>
                {`${key}x de ${ValorParcelaDTO[key].amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Link to="/fim" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#133A6F", color: "#FFFFFF" }} // Estilo com a cor de fundo e texto
              fullWidth
            >
              Pagar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default PayForm;
