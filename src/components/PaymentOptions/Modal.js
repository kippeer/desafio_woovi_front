import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.css';

const Modal = ({ confirmSelection, cancelSelection, valorParcela }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Você confirma a opção escolhida?</h2>
                <div className={styles.modalButtons}>
                    <button onClick={cancelSelection} className={styles.cancelButton}>Cancelar</button>
                    <Link to={`/page1/${valorParcela}`} className={styles.linkRedirect}>
                        <button onClick={confirmSelection} className={styles.confirmButton}>Confirmar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Modal;
