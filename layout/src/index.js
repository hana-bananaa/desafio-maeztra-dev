import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import PreHeader from "../src/components/preHeader/PreHeader"
import Header from "../src/components/Header/Header"
import CategoryHeader from "../src/components/CategorysHeader/CategoryHeader"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PreHeader/>
    <Header/>
    <CategoryHeader/>
  </React.StrictMode>
)
