import React from "react";
import "./styles.css";
import iconMenuMobile from "../../assets/icons/icon-menu.svg";
import logoMaeztra from "../../assets/maeztra.svg";
import lupaMobile from "../../assets/icons/lupa-mobile.svg";
import closeIcon from "../../assets/icons/close.png";
import cartMobileIcon from "../../assets/icons/cart-mobile.svg";
import perfilIcon from "../../assets/icons/perfil.svg";
import coracaoIcon from "../../assets/icons/coração.svg";
import cartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  return (
    <section>
      <div className=" container">
        <div className="header__header">
          <div className="icon-search">
            <img className="menu-mobile" src={iconMenuMobile} alt="ícone-menu" title="Abrir menu" />

            <img src={logoMaeztra} alt="Logo-Maeztra" title="Logo-Maeztra" />

            <form className="searchForm">
              <label htmlFor="search">O que você busca</label>
              <input type="text" name="search" id="search" placeholder="O que você busca?" />

              <button className="search">Buscar</button>
            </form>
          </div>

          <div className="right-options">
            <div className="options-mobile">
              <img className="lupa" src={lupaMobile} alt="Pesquisar" title="Pesquisar" />
              <img className="close-search" src={closeIcon} alt="fechar" title="fechar" />
              <img className="cart" src={cartMobileIcon} alt="Carrinho" title="Carrinho" />
            </div>

            <div className="option">
              <img src={perfilIcon} alt="icon-perfil" title="perfil" />
              <p>Minha Conta</p>
            </div>

            <div className="option">
              <div className="option">
                <img src={coracaoIcon} alt="Icone-minha-conta" title="Icone-minha-conta" />
                <p>Minha Conta</p>
              </div>
            </div>

            <div className="option">
              <img src={cartIcon} alt="Icone-meu-carrinho" title="Icone-meu-carrinho" />
              <p>Meu Carrinho</p>
            </div>
          </div>
        </div>

        <div className="header__line"></div>
      </div>
    </section>
  );
};

export default Header;