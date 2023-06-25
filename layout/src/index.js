import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import PreHeader from "../src/components/preHeader/PreHeader";
import Header from "../src/components/Header/Header";
import CategoryHeader from "../src/components/CategorysHeader/CategoryHeader";
import  SliderBanner from "../src/components/SliderBanner/SliderBanner"
import FeatureSlider from "../src/components/SliderInfo/SliderInfo"
import SliderLogo from './components/SliderLogos/SliderLogos';
import SliderShelf from "./components/SliderShelf/SliderShelf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PreHeader/>
    <Header/>
    <CategoryHeader/>
    <SliderBanner/>
    <FeatureSlider/>
    <SliderLogo/>
    <SliderShelf/>
  </React.StrictMode>
)
