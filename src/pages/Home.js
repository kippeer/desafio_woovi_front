import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link se estiver usando react-router-dom

const Home = () => {
  return (
    <div>
      <Link to="/inicio" className="button welcome-button">Bem-vindo</Link>
      {/* Outros componentes ou conteúdo da página */}
    </div>
  );
}

export default Home;
