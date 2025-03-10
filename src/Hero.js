import React from 'react';
import assets from './assets';

const Hero = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.navbar}>
                <div style={styles.logoContainer}>
                    <img src={assets.logo} alt="Franco Luna Logo" style={styles.logo} />
                </div>
                <div style={styles.menu}>
                    <span style={styles.menuItem}>Work</span>
                    <span style={styles.menuItem}>Expertise</span>
                    <span style={styles.menuItem}>About</span>
                    <span style={styles.menuItem}>Contact</span>
                </div>
            </nav>
            <section style={styles.heroSection}>
                <img src={assets.animationBottles} alt="Hero GIF" style={styles.gif} />
                <h1 style={styles.title}>Crafting Iconic Labels for World-Class Brands</h1>
                <p style={styles.subtitle}>
                    Elevating Wine & Spirits Across the USA and Australia.
                </p>
                <button style={styles.ctaButton}>Let’s Collaborate</button>
            </section>
        </header>
    );
};

const styles = {
    header: {
        position: 'relative',
        backgroundColor: '#2C2927',
        color: '#FFFFFF',
        height: '100vh',
        overflow: 'hidden',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
    },
    logoContainer: {
        flexGrow: 1,
    },
    logo: {
        width: '150px',
    },
    menu: {
        display: 'flex',
        gap: '15px',
    },
    menuItem: {
        color: '#F8A200',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    heroSection: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)', // Resta el espacio del header
    },
    gif: {
        maxWidth: '200px',
        marginBottom: '20px',
    },
    title: {
        fontSize: '3rem',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#F8A200',
        marginBottom: '20px',
    },
    ctaButton: {
        backgroundColor: '#F8A200',
        color: '#2C2927',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: '0.3s',
    },
    ctaButtonHover: {
        backgroundColor: '#FFFFFF',
        color: '#2C2927',
    },
};

export default Hero;
