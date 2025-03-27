import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo.jpg'

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer Logo"/>
        </div>
        
        <div className="footer-copyright">
            <p>Copyright @ 2025 - All Rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;