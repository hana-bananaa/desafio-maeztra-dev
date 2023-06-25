import React, { useState } from 'react';
import emailIcon from '../../assets/icons/email.svg';
import bannerImage from '../../assets/image 4.png';
import enviarIcon from "../../assets/icons/enviar.svg"
import "./styles.css";
const Modal = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const closeModal = () => {
      setIsOpen(false);
      document.querySelector('body').style.overflowY = 'scroll';
    };
  
    const images = [
      { src: bannerImage, alt: 'Banner Modal', className: 'banner-modal' },
    ];
  
    const icons = [
      { src: emailIcon, alt: 'Email Icon' },
    ];
  
    return (
      <>
        {isOpen && (
          <div className={`modal-overlay ${isOpen ? 'show' : 'hide'}`}>
            <div className={`modal-wrapper ${isOpen ? '' : 'hide'}`}>
              <div className="modal-content">
                <div className="close" onClick={closeModal}>
                  <p>Fechar</p>
                </div>
  
                {images.map((image, index) => (
                  <img key={index} className={image.className} src={image.src} alt={image.alt} />
                ))}
  
                <div className="modal-email">
                  <div className="modal-title">
                    {icons.map((icon, index) => (
                      <img key={index} src={icon.src} alt={icon.alt} />
                    ))}
  
                    <h2  className="modal-title">Bem vindo à Maeztra</h2>
                  </div>
  
                  <div className="modal-text">
                    <p className="modal-text-p">
                      Receba em Primeira mão <br />
                      <span className="modal-text-span">descontos e ofertas exclusivas</span>
                    </p>
                  </div>
  
                  <form className="modal-form">
                    <input  className="modal-form-input" type="email" name="" id="Newsletter" placeholder="Digite seu email" />
                    <button className="modal-search search">
                      Enviar <img src={enviarIcon} alt="enviar" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;