import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal'; 
import background1 from '../../assets/content-tablet.jpg';
import background2 from '../../assets/bg.jpg'; 
import '../../styles/LandingPage.css'; 

const TabletLandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="landing-page-section">
      <div className="left-block">
        <div className="image-container">
          <div className="landing-title-block">
            <h1 className="landing-title">
              Лендинг для вашего бизнеса <span>за 10 дней</span>
            </h1>                
            <h2 className="landing-subtitle">Гарантируем увеличение выручки!</h2>
            <button className="call-back-button" onClick={toggleModal}>Оставить заявку</button>
          </div>
          <img src={background1} alt="landing page" className="landing-image" />
        </div>
        
      <div className="right-block">
      <img src={background2} alt="landing page" className="landing-image" />

      </div>
      </div>

      
      <div className="bottom-block">
          <div className="block-text">Более <span>7</span> лет на рынке</div>
          <div className="block-text"><span>100+</span> реализованных проектов</div>
          <div className="block-text"><span>10%</span> минимальный рост выручки</div>
        </div>
      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default TabletLandingPage;
