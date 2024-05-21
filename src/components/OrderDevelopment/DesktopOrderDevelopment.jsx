import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import ErrorMessage from '../Modal/ErrorMessage'; 
import SuccessMessage from '../Modal/SuccessMessage';
import WarningMessage from '../Modal/WarningMessage'; 
import tgIcon from '../../assets/form-icon-tg.svg';
import skypeIcon from '../../assets/form-icon-skype.svg';
import phoneIcon from '../../assets/form-icon-phone.svg';
import rightArrowIcon from '../../assets/form-arrow-to-the-right.svg';
import leftArrowIcon from '../../assets/form-arrow-to-the-left.svg';
import '../../styles/OrderDevelopment.css';

const DesktopOrderDevelopment = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    if (value.trim().length < 4) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const handlePhoneChange = (value) => {
    const numericValue = value.replace(/[^\d]/g, '');
    const formattedPhone = `+7(${numericValue.slice(1, 4)})${numericValue.slice(4, 7)}-${numericValue.slice(7, 9)}-${numericValue.slice(9)}`;
    setPhone(formattedPhone);
    if (!formattedPhone.trim() || formattedPhone.replace(/[^\d]/g, '').length < 11) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  const handleBlur = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setNameError(!value.trim());
        break;
      case 'phone':
        setPhoneError(!value.trim() || value.replace(/[^\d]/g, '').length < 10);
        break;
      default:
        break;
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setNameError(!name.trim());
      setPhoneError(!phone.trim());
      setShowWarning(true);
    } else {
      setShowWarning(false);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', 'test@gmail.com');
      formData.append('source', 'LP форма заявки');
      try {
        const response = await fetch('https://webteamstorm.ru/api/ajax-send-order', {
          method: 'POST',
          body: formData,
        });
        const responseData = await response.json();
        if (response.ok) {
          console.log('Данные успешно отправлены:', responseData.message);
          setShowSuccess(true);
          window.ym(96769092, 'reachGoal', 'left_order');
        } else {
          console.error('Ошибка при отправке данных на сервер:', responseData.message);
          setShowError(true);
        }
      } catch (error) {
        console.error('Ошибка при отправке данных:', error.message);
        setShowError(true);
      }
    }
  };
  

  return (
    <div className="order-background" id="order-development">
      <div className="order-development-section">
      {showWarning && <WarningMessage onClose={() => setShowWarning(false)} />}
      {showError && <ErrorMessage onClose={() => setShowError(false)} />} 
      {showSuccess && <SuccessMessage onClose={() => setShowSuccess(false)} />} 
        <div className="order-section-title">
          <img src={rightArrowIcon} alt="Right Arrow" />
          <h2>Еще остались вопросы?</h2>
          <img src={leftArrowIcon} alt="Left Arrow" />
        </div>
        <div className="order-content">
          <div className="order-left-block">
            <p className="left-text">Напишите нам:</p>
            <p className="left-text left-text-1">company@wsteam.com.ru</p>
            <p className="left-text ">Ответим на все вопросы:</p>
            <div className="icons-container">
            <a href="https://t.me/severtain" target="_blank"><img src={tgIcon} alt="Telegram" /></a>
            <a href="skype:severtaindev?chat" target="_blank"><img src={skypeIcon} alt="Skype" /></a>
            <a href="https://wa.me/79896203189" target="_blank"><img src={phoneIcon} alt="Phone" /></a>
            </div>
          </div>
          <div className="right-block-form">
            <div className="form-container">
              <form className="form" onSubmit={handleFormSubmit}>
                <h3>Оставьте свой номер и мы с вами свяжемся в ближайшее время!</h3>
                <div className={`input-group `}>
                  <label htmlFor="phone" className={`input-label ${phoneError ? 'error' : ''}`}>
                    Ваш номер <span>*</span>
                  </label>
                  <PhoneInput
                    className={`input-field ${phoneError ? 'input-error' : ''}`}
                    country={'ru'}
                    value={phone}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: 'phone',
                      required: true,
                    }}
                  />
                </div>
                <div className={`input-group`}>
                  <label htmlFor="name" className={`input-label ${nameError ? 'error' : ''}`}>
                    Ваше имя <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="ФИО"
                    className={`input-field ${nameError ? 'input-error' : ''}`}
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" id="agree" className="checkbox-input" />
                  <label htmlFor="agree" className="checkbox-label">Соглашаюсь с правилами обработки персональных данных</label>
                </div>
                <div className="button-container">
                  <button type="submit" className="submit-button">Оставить заявку</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOrderDevelopment;
