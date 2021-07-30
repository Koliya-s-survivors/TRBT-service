import React from 'react';
//CSS
import './footer.css';
import './footer-media.css';
//components
import FooterLogo from "../footer-logo";
import FooterInfo from '../footer-info';
import FooterDownloadApp from '../footer-download-app';

const Footer = () => {
  return (
      <footer className="footer">
        <FooterLogo/>
        <FooterInfo/>
        <FooterDownloadApp/>
      </footer>
  );
}


export default Footer;