import React from 'react';
import NewColectionIMG from "../../assets/novacolecao.png"
import "./styles.css";

const NewColection = () => {
  const features = [
    {
      img: NewColectionIMG,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.',
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
      <section>
        <div className="colection-mobile-container">
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