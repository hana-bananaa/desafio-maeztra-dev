import React from 'react';
import Slider from 'react-slick';
import comma from '../../assets/comma.svg';
import melissa from '../../assets/melissa.svg';
import forever21 from '../../assets/forever21.svg';
import zara from '../../assets/zara.svg';
import anntaylor from '../../assets/anntaylor.svg';
import "./styles.css";

const Sliderlogo = () => {
  const logos = [
    {
      icon: comma,
    },
    {
      icon: melissa,

    },
    {
      icon: forever21,
    },
    {
      icon: zara,
    },
    {
      icon: anntaylor,
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
      <section className="logos-maeztra-title">
        <h2>Marcas Parceiras</h2>
      </section>
      <section className="logos-maeztra-cards">
        <div className="logos-maeztra-container">
          <Slider {...settings}>
            {logos.map((feature, index) => (
              <div className="logos" key={index}>
                <img src={feature.icon} alt={feature.title} className='iconslogosSlider' />
              </div>
            ))}
          </Slider>
        </div>

        <div className="logos-mobile-container">
          <Slider
            {...settings}
            arrows={false}
            dots={false}
            slidesToShow={1} // Exibe 1 card em dispositivos móveis
            slidesToScroll={1}

            className="mobile-slider"
          >
            {logos.map((feature, index) => (
              <div className='containerFeatMob'>
                <div className="logos" key={index}>
                  <img src={feature.icon} alt={feature.title} className='iconslogosSlider' />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Sliderlogo;