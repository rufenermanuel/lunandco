import React from 'react';
import './styles.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className={`hamburger-button ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
        </button>
    );
};

export default HamburgerMenu;
