import React from 'react';

//styles
import './footer-logo.css';
import './footer-logo-media.css';

interface Props { }

const FooterLogo:React.FC<Props> = () => {
  return (
    <section className="footer-logo">
      <img src="./assets/img/footer-img/logo.svg" alt="Telesens"/>
    </section>
  );
}

export default FooterLogo;
