import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </button>
            <div className={`hamburger-menu-content ${isOpen ? 'visible' : ''}`}>
                <span className="hamburger-menu-item">Work</span>
                <span className="hamburger-menu-item">Expertise</span>
                <span className="hamburger-menu-item">About</span>
                <span className="hamburger-menu-item">Contact</span>
            </div>
        </div>
    );
};

export default HamburgerMenu;
