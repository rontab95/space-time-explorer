import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SpaceTime Explorer. All rights reserved.</p>
      <p className="footer-sub">Crafted in the multiverse 🛸 | Powered by React & Leaflet</p>
    </footer>
  );
};

export default Footer;
