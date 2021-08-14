import React from 'react';

//components
import FooterLogo from "../footer-logo";
import FooterInfo from '../footer-info';
import FooterDownloadApp from '../footer-download-app';

//styles
import './footer.css';
import './footer-media.css';


interface Props { }

const Footer:React.FC<Props> = () => {
  return (
      <footer className="footer">
        <FooterLogo/>
        <FooterInfo/>
        <FooterDownloadApp/>
      </footer>
  );
}


export default Footer;