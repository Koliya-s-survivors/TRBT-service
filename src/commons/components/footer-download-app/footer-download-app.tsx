import React from 'react';
//CSS
import './footer-download-app.css';
import './footer-download-app-media.css';

const FooterDownloadApp:React.FC = () => {
  // @ts-ignore
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