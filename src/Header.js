import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburguerMenu';
import assets from './assets';
import './styles.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50); // Activa animación al hacer scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                {/* Primer bloque: Nombre de la empresa y menú */}
                <div className="header-top">
                    <h1 className="studio-name">LUNA & COMPANY</h1>
                    <div className="menu-container">
                        {/* Usa el componente HamburgerMenu */}
                        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    </div>
                </div>
                {/* Segundo bloque: Logo */}
                <div className={`header-logo-container ${isScrolled ? 'hidden' : ''}`}>
                    <img src={assets.giflogo} alt="Franco Luna Logo" className="header-logo" />
                </div>
            </header>

            {/* Menú hamburguesa */}
            <div className={`hamburger-menu-content ${isMenuOpen ? 'visible' : ''}`}>
                <div className="hamburger-menu-item">Inicio</div>
                <div className="hamburger-menu-item">Servicios</div>
                <div className="hamburger-menu-item">Contacto</div>
            </div>
        </>
    );
};

export default Header;
