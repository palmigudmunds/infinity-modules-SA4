import React from "react";
import PropTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children }) => isOpen ? 
    <div className={ styles['modal']}>
        <div className={styles["modal-content"]}>
            <button type="button" className={styles["close"]} data-dismiss="modal" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
            {children}
        </div>
    </div>
    : null;

Modal.Title = ({ children }) => <header className={ styles['modal-title']}>{children}</header>;
Modal.Body = ({ children }) => <div className={ styles['modal-body']}>{children}</div>;
Modal.Footer = ({ children }) => <footer className={ styles['modal-footer']}>{children}</footer>;


Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}

Modal.defaultProps = {
    isOpen: false,
}

export default Modal;