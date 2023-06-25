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
import  NewColection from "./components/NewColection/NewColection"
import Newsletter from "./components/NewsLetter/NewsLetter"
import  Modal from "./components/Modal/Modal"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Modal/>
    <PreHeader/>
    <Header/>
    <CategoryHeader/>
    <SliderBanner/>
    <FeatureSlider/>
    <SliderLogo/>
    <SliderShelf/>
    <NewColection/>
    <Newsletter/>
  </React.StrictMode>
)
