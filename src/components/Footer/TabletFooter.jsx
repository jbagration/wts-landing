import React from 'react';
import '../../styles/Footer.css';
import footerLogo from '../../assets/footer-logo.svg';
import tgIcon from '../../assets/tg-icon.svg';
import vkIcon from '../../assets/vk-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import mailIcon from '../../assets/mail-icon.svg';
import skypeIcon from '../../assets/skype-icon.svg';

const TabletFooter = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <footer className="footer">
        <div className='footer-section'>
      <div className="top">
        <div className="left">
          <div className='footer-brand-names'>
          <div className="brand-name-footer brand-name-white">          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
WebTeamStorm</div>
<p>Профессиональный коллектив по разработке веб- и моб- приложений, систем управления, сайтов, игр. Оказываем полный комплекс услуг от прототипирования до SEO-оптимизации.</p>

</div>
<div className="bottom-left">
          <p>Severtain © 2017-2024 | Все права защищены</p>
        </div>
          </div>
        <div className="right">
        <div className="icons desktop-icons">
        <a href="https://t.me/severtain" target="_blank"><img src={tgIcon} alt="Telegram Icon" className="icon" /></a>
              <a href="https://vk.com/webteamstorm" target="_blank"><img src={vkIcon} alt="VK Icon" className="icon" /></a>
              <a href="skype:severtaindev?chat" target="_blank"><img src={skypeIcon} alt="Skype Icon" className="icon" /></a>
              <a href="mailto:webteamstorm@gmail.com"><img src={mailIcon} alt="Mail Icon" className="icon" /></a>
              <a href="https://wa.me/79896203189" target="_blank"><img src={phoneIcon} alt="Phone Icon" className="icon" /></a>
          </div>
          <div className="texts">
            <p className="text">Режим работы:</p>
            <p className="text">пн-пт 09:00-18:00</p>
            <p className="text text-start ">Номер телефона:</p>
            <p className="text"><a className='menu-list-icon-text-pointer' href="tel:+79289566198">+7 (928) 956-61-98</a></p>
            <p className="text text-start">Email:</p>
            <p className="text"><a className='menu-list-icon-text-pointer' href="mailto:webteamstorm@gmail.com">webteamstorm@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-right">
          <ul className="bottom-list">
         <li  onClick={() => scrollToSection('projects')}>Портфолио</li>  
          <a href="https://webteamstorm.ru/docs/" target="_blank"> <li>Соглашения о сборе данных</li></a>
          <a href="https://webteamstorm.ru/team/" target="_blank">   <li>О нас</li></a>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default TabletFooter;
