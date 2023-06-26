import React from "react";
import "./styles.css";
import facebookLogo from "../../assets/facebook.com.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import instagramLogo from "../../assets/instagram.svg";
import youtubeLogo from "../../assets/youtube.svg";
import visaLogo from "../../assets/icons/visa.svg";
import mastercardLogo from "../../assets/icons/mastercard.svg";
import vtexLogo from "../../assets/icons/vtex.svg";
import maeztraLogo from "../../assets/maeztra-footer.svg";

const FooterLogos = () => {
  return (
    <section>
      <footer className="footer">
        <div className="footer__container container">
          <div className="networking">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="facebook" />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="linkedin" />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="instagram" />
            </a>

            <a href="/">
              <img src={youtubeLogo} alt="youtube" />
            </a>
          </div>

          <div className="payment-methods">
            <img src={visaLogo} alt="cartão-visa" />
            <img src={mastercardLogo} alt="cartão-mastercard" />
            <img src={visaLogo} alt="cartão-visa" />
            <img src={mastercardLogo} alt="cartão-mastercard" />
          </div>

          <div className="copyright">
            <div className="copyright-wrapper">
              <h4>Powered by</h4>
              <img src={vtexLogo} alt="powered-by-vtex" />
            </div>

            <div className="copyright-wrapper">
              <h4>Developed by</h4>
              <img src={maeztraLogo} alt="developed-by-maeztria" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterLogos;