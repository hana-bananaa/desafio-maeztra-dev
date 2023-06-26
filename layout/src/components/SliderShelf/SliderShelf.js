import React from 'react';
import Slider from 'react-slick';
import SliderLeft from '../../assets/icons/carousel-arrow-left.png';
import SliderRight from '../../assets/icons/carousel-arrow-right.png';
import Photo1 from "../../assets/icons/produto1.svg";
import Photo2 from "../../assets/icons/produto2.svg";
import "./styles.css";

const SliderShelf = () => {
  const features = [
    {
      image: Photo1,
      price: 'R$ 500,00',
      title: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      color1: "colorsdiv beige-color",
      color2: "colorsdiv pink-color",
      color3: "colorsdiv lblue-color",
      color4: "colorsdiv blue-color"
    },
    {
      image: Photo2,
      price: 'R$ 320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      color1: "colorsdiv black-color",
      color2: "colorsdiv pinkdark-color",
      color3: "colorsdiv sand-color",
      color4: "colorsdiv white-color"
    },
    {
      image: Photo1,
      price: 'R$ 500,00',
      title: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      color1: "colorsdiv beige-color",
      color2: "colorsdiv pink-color",
      color3: "colorsdiv lblue-color",
      color4: "colorsdiv blue-color"
    },
    {
      image: Photo2,
      price: 'R$ 320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      color1: "colorsdiv black-color",
      color2: "colorsdiv pinkdark-color",
      color3: "colorsdiv sand-color",
      color4: "colorsdiv white-color"
    },
    {
      image: Photo1,
      price: 'R$ 500,00',
      title: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      color1: "colorsdiv beige-color",
      color2: "colorsdiv pink-color",
      color3: "colorsdiv lblue-color",
      color4: "colorsdiv blue-color"
    },
    {
      image: Photo2,
      price: 'R$ 320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      color1: "colorsdiv black-color",
      color2: "colorsdiv pinkdark-color",
      color3: "colorsdiv sand-color",
      color4: "colorsdiv white-color"
    },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <img src={SliderLeft} alt="Arrow Left" className="ArrowLeftShelf" />,
    nextArrow: <img src={SliderRight} alt="Arrow Right" className="ArrowRightShelf" />,
  };

  return (
    <>
      <section className="logos-maeztra-title">
        <h2>As Mais Pedidas</h2>
      </section>
      <section className="features-maeztra-cards">
        <div className="features-maeztra-container">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div className="SliderShelf-container" key={index}>
                <img src={feature.image} alt={feature.title} className='imgShelSlider' />
                <div className="complementShelfSlider">
                  <div class="colorsShelfSlider">
                    <div class={feature.color1}></div>
                    <div class={feature.color2}></div>
                    <div class={feature.color3}></div>
                    <div class={feature.color4}></div>
                  </div>
                  <h1 className="shelfPrice">{feature.price}</h1>
                  <h3 className="FaeatureH3Shelf">{feature.title}</h3>
                  <p className="FaeatureParagraphShelf">{feature.description}</p>
                  <a href="/" className="normalButtonShelf">Adicionar</a>
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
            slidesToShow={1}
            slidesToScroll={1}

            className="mobile-slider"
          >
            {features.map((feature, index) => (
              <div className="SliderShelf-container" key={index}>
                <img src={feature.image} alt={feature.title} className='imgShelSlider' />
                <div className="complementShelfSlider">
                  <div class="colorsShelfSlider">
                    <div class={feature.color1}></div>
                    <div class={feature.color2}></div>
                    <div class={feature.color3}></div>
                    <div class={feature.color4}></div>
                  </div>
                  <h1 className="shelfPrice">{feature.price}</h1>
                  <h3 className="FaeatureH3Shelf">{feature.title}</h3>
                  <p className="FaeatureParagraphShelf">{feature.description}</p>
                  <a href="/" className="normalButtonShelf">Adicionar</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SliderShelf;