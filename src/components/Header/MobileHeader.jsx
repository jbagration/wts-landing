import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal'; 
import logoIcon from '../../assets/logo.svg';
import logoWhiteIcon from '../../assets/logo-white.svg';
import menuIcon from '../../assets/menu.svg';
import closeIcon from '../../assets/close.svg';
import arrowIcon from '../../assets/arrow-mobile.svg';
import tgIcon from '../../assets/tg-icon-mobile.svg';
import vkIcon from '../../assets/vk-icon-mobile.svg';
import phoneIcon from '../../assets/phone-icon-mobile.svg';
import mailIcon from '../../assets/mail-icon-mobile.svg';
import skypeIcon from '../../assets/skype-icon-mobile.svg';
import '../../styles/Header.css'; 

const MobileHeader = () => {
  const [showServices, setShowServices] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [servicesContainerStyle, setServicesContainerStyle] = useState({});

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showBrandInfo, setShowBrandInfo] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowBrandInfo(!showMenu); 
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMenu]);

  return (
    <div className={`mobile-header ${showMenu ? 'menu-open' : ''}`}>
    <div className='mobile-header-container'>
    <div className={`logo-container  ${showBrandInfo ? 'white' : ''}`}>
        <img src={showMenu ? logoWhiteIcon : logoIcon} alt="Logo" className="logo" />
        <div className={`brand-info`}> 
          <div className="brand-name ">WebTeamStorm</div>
          <div className="tagline">Режим работы: пн-пт 09:00-18:00</div>
        </div>
      </div>
      <div className="menu-icon-container" onClick={toggleMenu}>
        <img src={showMenu ? closeIcon : menuIcon} alt="Menu" className="menu-icon" />
      </div>
      {showMenu && (
        <div className="menu-overlay">
      <div className="menu">
        <div className="menu-list">
          <div className="menu-item" onClick={toggleServices} style={servicesContainerStyle}>
            Услуги
            <img
              src={arrowIcon}
              alt="Arrow"
              className={`arrow-icon ${showServices ? 'rotate' : ''}`} />
          </div>
                      {showServices && (
          <>
          <a href="https://mobapp.webteamstorm.ru/" target="_blank"><div className="menu-item ">Разработка моб. приложений</div>
          </a>
          <a href="https://lp.webteamstorm.ru/" target="_blank"><div className="menu-item ">Разработка одностраничников</div></a>
       </>
            )}
<div className="menu-item" onClick={() => { scrollToSection('projects'); toggleMenu(); }}>Портфолио</div>   
<div className="menu-item" onClick={() => { scrollToSection('reviews'); toggleMenu(); }}>Преимущества</div>          
<div className="menu-item" onClick={() => { scrollToSection('tariff'); toggleMenu(); }}>Цены</div>          
<div className="menu-item" onClick={() => { scrollToSection('order-development'); toggleMenu(); }}>Контакты</div>
          <button className="menu-item request-button" onClick={toggleModal}>Связаться с нами</button>
        
          <div className="menu-list-mobile">
        <div className="menu-list-icons">
        <a href="https://t.me/severtain" target="_blank"><img src={tgIcon} alt="Telegram Icon" className="menu-list-icon" /></a>
        <a href="https://vk.com/webteamstorm" target="_blank"><img src={vkIcon} alt="VK Icon" className="menu-list-icon" /></a>
        <a href="skype:severtaindev?chat" target="_blank">  <img src={skypeIcon} alt="Mail Icon" className="menu-list-icon" /></a>
        <a href="mailto:webteamstorm@gmail.com">  <img src={mailIcon} alt="Mail Icon" className="menu-list-icon" /></a>
        <a href="https://wa.me/79896203189" target="_blank"><img src={phoneIcon} alt="Phone Icon" className="menu-list-icon" /></a>
          </div>
          <div className="menu-list-icon-texts">
            <p className="menu-list-icon-text menu-list-icon-text-first">Режим работы:</p>
            <p className="menu-list-icon-text">пн-пт 09:00-18:00</p>
            <p className="menu-list-icon-text menu-list-icon-text-first">Номер телефона: </p>
            <p className="menu-list-icon-text"><a className='menu-list-icon-text-pointer' href="tel:+79289566198">+7 (928) 956-61-98</a></p>
            <p className="menu-list-icon-text menu-list-icon-text-first">Email:</p>
            <p className="menu-list-icon-text"><a className="menu-list-icon-text-pointer" href="mailto:webteamstorm@gmail.com">webteamstorm@gmail.com</a>
</p>
          </div>
        </div>
        </div>
      </div>
        </div>
        
      )}
      </div>
      {showModal && <Modal onClose={() => {toggleModal()}} />}
    </div>
  );
};

export default MobileHeader;
