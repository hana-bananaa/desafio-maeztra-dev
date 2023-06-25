import React from 'react';
import NewColectionIMG from "../../assets/novacolecao.jpg"

import "./styles.css";

const NewColection = () => {
  const features = [
    {
      img: NewColectionIMG,
      title: 'Produtos importados',
      description: 'Produto de Alta Qualidade',
    }
  ];

  return (
    <>
      <section className="features-maeztra-cards">
        <div className="features-maeztra-container">
            {features.map((feature, index) => (
              <div className="featureNewColection" key={index}>
                <div className="complementNewColection">
                  <h3 className="FaeatureH3NewColection">{feature.title}</h3>
                  <p className="FaeatureParagraph-NewColection">{feature.description}</p>
                </div>
                <div className='NewColecitonIMG' style={{ backgroundImage: `url(${feature.img})` }}></div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default NewColection;