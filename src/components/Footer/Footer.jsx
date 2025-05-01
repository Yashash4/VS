import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="social-icons">
      <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
      <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
      <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
    </div>
    <p>&copy; 2025 Victoria's Secret Clone</p>
  </footer>
);

export default Footer;
