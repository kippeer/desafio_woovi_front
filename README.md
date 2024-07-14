# Desafio Woovi Frontend

Este é o repositório para o Desafio Woovi Frontend, uma aplicação frontend desenvolvida utilizando React.js e outras tecnologias modernas.

# VISITE 
(https://desafio-woovi-front.vercel.app/)

## Funcionalidade

A aplicação é estruturada em várias etapas:

### Home

- Na página inicial, você pode selecionar o número de parcelas desejadas.

### Page1/{id}

- Após selecionar o número de parcelas, você é redirecionado para uma página que exibe um QR Code para copiar. Cada seleção de parcela possui um identificador único `{id}`.

### Page2

- Após copiar o QR Code, você é redirecionado para um formulário onde deve preencher informações como nome completo, CPF, número do cartão, data de vencimento e CVV.

### /fim

- Após o pagamento ser realizado no formulário, você é redirecionado para a página de conclusão `/fim`, onde uma mensagem "Pagamento realizado!" é exibida juntamente com o ícone do Woovi no centro da tela, em um fundo verde `#03D69D`.

## Tecnologias Utilizadas

- React
- React DOM
- React Router DOM
- Material-UI
- Emotion
- react-form-stepper
- react-icons
- @keyvaluesystems/react-stepper
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- TypeScript
- web-vitals

## Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos:

### `npm install`

Instala as dependências do projeto.

### `npm start`

Inicia a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.