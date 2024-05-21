import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal'; 
import basicTariffImage from '../../assets/basic-tariff.png';
import proTariffImage from '../../assets/pro-tariff.png';
import minTariffImage from '../../assets/minimalism-tariff.png';
import standartTariffImage from '../../assets/standart-tariff.png';
import '../../styles/AboutUs.css';

const TabletAboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal); 
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
            <><h2 className="about-us-section-title" id="tariff">Наши тарифы</h2>
            <div className="about-us-background">
              <div className="about-us-container">
      <div className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-details">
            <div className="about-us-block">
              <div className='title-tariff'>
              <h3>Базовый  <p>От 35 000 руб</p></h3>
              </div>
              <ul>
                <li>До 3-х информативных страниц</li>
                <li>Оригинальный дизайн от художника</li>
                <li>Адаптивная верстка (ПК / Моб / Планшет)</li>
                <li>Кроссбраузерная верстка</li>
                <li>Добавление анимации и эффектов</li>
                <li>Установка модулей и обработчиков форм</li>
                <li>Сопровождение и поддержка</li>
              </ul>
              <button className="call-back-button" onClick={toggleModal}>Оставить заявку</button>
            </div>
          </div>
          <div className="about-us-image about-us-image-basic">
            <img src={basicTariffImage} alt="Basic Tariff" />
          </div>
        </div>
      </div>
      <div className="about-us-standart-container">
      <div className="about-us-section">
        <div className="about-us-content">
        <div className="about-us-image about-us-image-standart">
            <img src={standartTariffImage} alt="Min Tariff" />
          </div>
          <div className="about-us-details">
            <div className="about-us-block">
              <div className='title-tariff'>
              <h3>Стандартный <p>От 70 000 руб  </p></h3>
              
              </div>
              <div className='list-tariff standart-list-tariff'>
              <ul>
              <li>До 7-х информативных страниц</li>
                <li>Адаптивная верстка (ПК / Моб / Планшет)</li>
                <li>Оригинальный дизайн от художника (4 концепта)</li>
                <li>Адаптивная верстка (ПК / Моб / Планшет)</li>
                <li>Кроссбраузерна верстка</li>
                <li>Добавление анимации и эффектов</li>
                <li>Установка модулей и обработчиков форм</li>
                <li>Сопровождение и поддержка</li>
              </ul>
              <ul>
              <li className='white-list'>Анализ рынка и конкурентов</li>
                <li className='white-list'>Изучение продукта и ЦА</li>
                <li className='white-list'>Подключение админ панели</li>
                <li className='white-list'>Настройка домена, сервера и почты</li>
                <li className='white-list'>Установка метрик и систем аналитики</li>
                <li className='white-list'>Настройка целей</li>
              </ul>
              <button className="call-back-button white-call-back-button" onClick={toggleModal}>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="about-us-pro-container">
      <div className="about-us-section about-us-section-pro">
        <div className="about-us-content">
          <div className="about-us-details">
            <div className="about-us-block">
              <div className='title-tariff'>
              <h3>Продвинутый <p>Индивидуально</p></h3>
              </div>
              <div className='list-tariff'>
              <ul>
                <li>До 3-х информативных страниц</li>
                <li>Оригинальный дизайн от художника</li>
                <li>Адаптивная верстка (ПК / Моб / Планшет)</li>
                <li>Кроссбраузерная верстка</li>
                <li>Добавление анимации и эффектов</li>
                <li>Установка модулей и обработчиков форм</li>
                <li>Сопровождение и поддержка</li>
                <li>Настройка целей</li>
              </ul>
              <ul>
                <li className='orange-list'>Написание текстов</li>
                <li className='orange-list'>Создание вариативности продающего контента</li>
                <li className='orange-list'>Доп. оптимизация ресурсов сайта</li>
                <li className='orange-list'>Настройка рекламы</li>
                <li>Анализ рынка и конкурентов</li>
                <li>Изучение продукта и ЦА</li>
                <li>Подключение админ панели</li>
                <li>Настройка домена, сервера и почты</li>
                <li>Установка метрик и систем аналитики</li>
              </ul>
              </div>
              <button className="call-back-button" onClick={toggleModal}>Оставить заявку</button>
            </div>
          </div>
          <div className="about-us-image about-us-image-pro">
            <img src={proTariffImage} alt="Pro Tariff" />
          </div>
        </div>
      </div>
      </div>
      <div className="about-us-min-container">
      <div className="about-us-section about-us-section-min">
        <div className="about-us-content">
        <div className="about-us-image about-us-image-min">
            <img src={minTariffImage} alt="Min Tariff" />
          </div>
          <div className="about-us-details">
            <div className="about-us-block">
              <div className='title-tariff'>
              <h3>Бюджетный <p>От 9999 руб </p></h3>
              </div>
              <ul>
                <li>Шаблонный дизайн</li>
                <li>Шаблонная админ панели</li>
                <li>Быстрая реализация (3-4 дня)</li>
              </ul>
              <button className="call-back-button" onClick={toggleModal}>Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {showModal && <Modal onClose={toggleModal} />}

    </div></>
  );
};

export default TabletAboutUs;
