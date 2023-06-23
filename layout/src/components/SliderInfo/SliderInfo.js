import React from 'react';
import Slider from 'react-slick';
import worldIcon from '../../assets/icons/world.svg';
import estoqueIcon from '../../assets/icons/estoque.svg';
import trocaIcon from '../../assets/icons/troca.svg';
import offIcon from '../../assets/icons/off.svg';
import freteIcon from '../../assets/icons/frete.svg';
import "./styles.css";

const FeatureSlider = () => {
  const features = [
    {
      icon: worldIcon,
      title: 'Produtos importados',
      description: 'Produto de Alta Qualidade',
    },
    {
      icon: estoqueIcon,
      title: 'Estoque no Brasil',
      description: 'Produtos mais perto de você!',
    },
    {
      icon: trocaIcon,
      title: 'Trocas Garantidas',
      description: 'Trocas em até 48 horas, veja as regras',
    },
    {
      icon: offIcon,
      title: 'Ganhe 5% off',
      description: 'Pagando à vista no Cartão',
    },
    {
      icon: freteIcon,
      title: 'Frete Grátis',
      description: 'Em compras acima de R$ 499,00',
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <section className="features-maeztra-title">
        <h2>Por que comprar na Maeztra?</h2>
      </section>
      <section className="features-maeztra-cards">
        <div className="features-maeztra-container">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <img src={feature.icon} alt={feature.title} className='iconsFeaturesSlider' />

                <div className="complement">
                  <h3 className="FaeatureH3">{feature.title}</h3>
                  <p className="FaeatureParagraph">{feature.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="features-mobile-container">
          <Slider
            {...settings}
            arrows={false}
            dots={false}
            slidesToShow={1} // Exibe 1 card em dispositivos móveis
            slidesToScroll={1}

            className="mobile-slider"
          >
            {features.map((feature, index) => (
              <div className='containerFeatMob'>
                <div className="feature" key={index}>
                  <img src={feature.icon} alt={feature.title}  className='iconsFeaturesSlider' />

                  <div className="complement">
                    <h3 className="FaeatureH3">{feature.title}</h3>
                    <p className="FaeatureParagraph">{feature.description}</p>
                  </div>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FeatureSlider;