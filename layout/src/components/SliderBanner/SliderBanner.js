import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImg from '../../assets/banner.png';
import SliderImgMobile from '../../assets/banner-mobile.png';
import SliderLeft from '../../assets/icons/carousel-arrow-left.png';
import SliderRight from '../../assets/icons/carousel-arrow-right.png';
import "./styles.css";

const SliderBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { url: SliderImg, title: 'img-Slider' },
    { url: SliderImg, title: 'img-Slider' },
    { url: SliderImg, title: 'img-Slider' },
  ];

  const imagesMobile = [
    { url: SliderImgMobile, title: 'img-Slider-mobile' },
    { url: SliderImgMobile, title: 'img-Slider-mobile' },
    { url: SliderImgMobile, title: 'img-Slider-mobile' },
    { url: SliderImgMobile, title: 'img-Slider-mobile' },
    { url: SliderImgMobile, title: 'img-Slider-mobile' }
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    prevArrow: <img src={SliderLeft} alt="Arrow Left" />,
    nextArrow: <img src={SliderRight} alt="Arrow Right" />,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <div className="fullSlider">
      <div className="desktop">
        <Slider {...settings}>
          {images.map(({ url, title }, index) => (
            <div className="slider-section desktop" key={index}>
              <img src={url} alt={title} className="bannerSlide"/>
              <div className="slider-content">
                <div className="slider-text">
                  <h3 className="promotion">Promoções de Outono</h3>
                  <p>Confira os melhores looks para combinar com você neste Outono</p>
                  <a href="/" className="normalButton">Conferir</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mobile">
        <Slider
          {...settings}
          arrows={false}
          dots={true}
          className="mobile-slider"
        >
          {imagesMobile.map(({ url, title }, index) => (
            <div className="slider-section mobile" key={index}>
              <img src={url} alt={title} />
              <div className="slider-content">
                <div className="slider-text">
                  <h3 className="promotion">Promoções de Outono</h3>
                  <p>Confira os melhores looks para combinar com você neste Outono</p>
                  <a href="/" className="normalButton">Conferir</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBanner;