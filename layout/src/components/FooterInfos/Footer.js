import React from "react";
import "./styles.css";
import Accordion from "./Acordion";

const Footer = () => {
    return (
        <>
            <section className="firstRowFooter desktop">

                <div className="firstColumn">
                    <h3>Informações</h3>
                    <a href="/quem-somos">Quem Somos</a>
                    <a href="/prazo-de-envio">Prazo de Envio</a>
                    <a href="/trocas-e-devolucoes">Trocas e Devoluções</a>
                    <a href="/promocoes-e-cupons">Promoções e Cupons</a>
                </div>

                <div className="secondColumn">
                    <h3>Minha Conta</h3>
                    <a href="/minha-conta">Minha Conta</a>
                    <a href="/meus-pedidos">Meus Pedidos</a>
                    <a href="/cadastre-se">Cadastre-se</a>
                </div>

                <div className="thirdColumn">
                    <h3>Onde nos Encontrar</h3>
                    <a href="/lojas">Lojas</a>
                    <a href="/endereco">Endereço</a>
                </div>
            </section>
            <section className="firstRowAccordion mobile">

                <div className="firstColumn">
                    <Accordion title="Informações" children={
                        [
                            'Quem Somos',
                            'Prazo de Envio',
                            'Trocas e Devoluções',
                            'Promoções e Cupons'
                        ]
                    } />
                </div>

                <div className="secondColumn">
                    <Accordion title="Minha Conta" children={
                        [
                            'Minha Conta',
                            'Meus Pedidos',
                            'Cadastre-se'
                        ]
                    } />
                </div>

                <div className="thirdColumn">
                    <Accordion title="Onde nos Encontrar" children={
                        [
                            'Lojas',
                            'Endereço'
                        ]
                    } />
                </div>

            </section>
        </>
    )
}

export default Footer;