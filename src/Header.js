import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburguerMenu';
import assets from './assets';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(true);

    // Manejar el estado del scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50); // Header comprimido después de 50px
            setIsLogoVisible(scrollY <= 100); // El logo desaparece al pasar 100px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Control del menú hamburguesa
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-fixed">
                <h1 className="studio-name">LUNA & COMPANY</h1>
                <div className="menu-container">
                    <HamburgerMenu onMenuToggle={toggleMenu} />
                </div>
                <div className={`header-logo-container ${isLogoVisible ? '' : 'hidden'}`}>
                    <img src={assets.giflogo} alt="Franco Luna Logo" className="header-logo" />
                </div>
            </div>
            {isMenuOpen && (
                <div className="hamburger-menu-overlay">
                    <nav className="menu-options">
                        <a href="#work" className="menu-option">Work</a>
                        <a href="#expertise" className="menu-option">Expertise</a>
                        <a href="#about" className="menu-option">About</a>
                        <a href="#contact" className="menu-option">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

