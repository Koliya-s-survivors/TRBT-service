import React from 'react';

//styles
import './footer-download-app.css';
import './footer-download-app-media.css';

interface Props { }

const FooterDownloadApp:React.FC<Props> = () => {  
  return (
    <>
      <section className="footer-download-app">
        <h3>Download app</h3>
        <img src="./assets/img/footer-img/android.svg" alt="app"/>
        <img src="./assets/img/footer-img/appleinc.svg" alt="app"/>
      </section>
    </>
  );
}

export default FooterDownloadApp;