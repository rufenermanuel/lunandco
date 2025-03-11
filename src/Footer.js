import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Slogan */}
        <div className="footer-slogan">
          <p className="footer-text">
            Crafted in fine quantity with honest quality.
          </p>
        </div>
        {/* Email */}
        <div className="footer-email">
          <p className="footer-label">Inquiries</p>
          <p className="email">
            <a className="social-link" href="mailto:hey@francoluna.com">hey@francoluna.com</a>
          </p>
        </div>
        {/* Redes Sociales */}
        <div className="footer-socials">
          <h3 className="footer-label">Follow</h3>
          <a href="https://www.instagram.com" className="social-link">
            Instagram
          </a>
          <a href="https://www.linkedin.com" className="social-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
