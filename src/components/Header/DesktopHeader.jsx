import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal'; 
import arrowIcon from '../../assets/arrow.svg';
import logoIcon from '../../assets/logo.svg';
import '../../styles/Header.css'; 

const DesktopHeader = () => {
  const [showServices, setShowServices] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [servicesContainerStyle, setServicesContainerStyle] = useState({});

  const toggleServices = () => {
    setShowServices(!showServices);
    setServicesContainerStyle({
      backgroundColor: showServices ? 'white' : '#F1F3FF',
    });
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', '#' + sectionId);
    }
  };
  useEffect(() => {
    const sectionId = window.location.hash.replace('#', '');
    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, []);
  

  const toggleModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  return (<div className='header-section'>
    <div className="header-container">
      <div className="logo-container">
        <img src={logoIcon} alt="Logo" className="logo" />
        <div className="brand-info">
          <div className="brand-name">WebTeamStorm</div>
          <div className="tagline">Режим работы: пн-пт 09:00-18:00</div>
        </div>
      </div>

      <div className="menu">
        <div className="menu-list">
        <div className={showServices ? 'menu-item menu-item-services active' : 'menu-item menu-item-services'} onClick={toggleServices}>
        <span className={showServices ? 'active' : ''}>Услуги
        <img
          src={arrowIcon}
          alt="Arrow"
          className={`arrow-icon ${showServices ? 'rotate' : ''}`}
        /></span>
        {showServices && (
          <div className="services-container">
            <ul className="services-list">
            <a href="https://mobapp.webteamstorm.ru/" target="_blank"> <li>Разработка моб. приложений</li></a>
            <a href="https://lp.webteamstorm.ru/" target="_blank"> <li>Разработка одностраничников</li></a>
                </ul>
              </div>
            )}
          </div>
          <div className="menu-item menu-item-large" onClick={() => scrollToSection('projects')}>Портфолио</div>    
          <div className="menu-item menu-item-large" onClick={() => scrollToSection('reviews')}>Преимущества</div>          
            <div className="menu-item menu-item-large" onClick={() => scrollToSection('tariff')}>Цены</div>          
          <div className="menu-item" onClick={() => scrollToSection('order-development')}>Контакты</div>
</div>
      </div>
      <button className="menu-item request-button" onClick={toggleModal}>Связаться с нами</button>
      {showModal && <Modal onClose={closeModal} />}
    </div>
    </div>
  );
};

export default DesktopHeader;