import React from 'react';
import './Fim.css';
import woovi from '../public/woovi.png'; // Caminho para sua imagem

const Fim = () => {
    return (
        <div className="fim-container">
            <p>Pagamento realizado !</p>
            <img src={woovi} alt="Woovi Logo" className="fim-image" />
        </div>
    );
}

export default Fim;
