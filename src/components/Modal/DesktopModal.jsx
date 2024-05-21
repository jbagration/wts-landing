import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import ErrorMessage from './ErrorMessage'; 
import SuccessMessage from './SuccessMessage';
import WarningMessage from './WarningMessage'; 
import closeModalIcon from '../../assets/close-modal.svg';
import '../../styles/Modal.css';

const DesktopModal = ({ onClose, selectedTariff }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [project, setProject] = useState('');
  const [projectError, setProjectError] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };
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
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (!value.includes('@')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleProjectChange = (event) => {
    const value = event.target.value;
    setProject(value);
  };
  const handleBlur = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setNameError(!value.trim());
        break;
      case 'email':
        setEmailError(!value.includes('@'));
        break;
      case 'phone':
        setPhoneError(!value.trim() || value.replace(/[^\d]/g, '').length < 10);
        break;
      case 'project':
        setProjectError(!value.trim());
        break;
      default:
        break;
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !email.includes('@') || !phone.trim() || !project.trim() || !checkboxChecked) {
      setNameError(!name.trim());
      setEmailError(!email.includes('@'));
      setPhoneError(!phone.trim());
      setProjectError(!project.trim());
      setShowWarning(true);
    } else {
      setShowWarning(false);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      let message = project;
      if (selectedTariff) {
          message = `Пользователь выбрал тариф ${selectedTariff.name} - ${selectedTariff.price}. ${project}`;
      }
      formData.append('message', message);
            formData.append('source', 'LP консультация');
      try {
        const response = await fetch('https://webteamstorm.ru/api/ajax-send-order', {
          method: 'POST',
          body: formData,
        });
        const responseData = await response.json();
if (response.ok) {
  console.log('Данные успешно отправлены:', responseData.message);
  setShowSuccess(true);
  if (selectedTariff) {
    window.ym(96769092, 'reachGoal', 'left_order_tarif');
  } else {
    window.ym(96769092, 'reachGoal', 'left_order');
  }
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
    <div className="overlay">
      {showWarning && <WarningMessage onClose={() => setShowWarning(false)} />}
      {showError && <ErrorMessage onClose={() => setShowError(false)} />} 
      {showSuccess && <SuccessMessage onClose={() => setShowSuccess(false)} />} 
      <div className="modal">
        <img src={closeModalIcon} alt="Close" className="close-modal-icon" onClick={onClose} />
        <div className="order-content">
          <div className="block-modal">
            <div className="form-container">
              <form className="form" onSubmit={handleFormSubmit}>
                <h3>Оставьте заявку на <span>бесплатную</span> консультацию прямо сейчас!</h3>
                {selectedTariff && (
                  <div className='form-container-tariff'>  
                  <p className='form-container-tariff-name'>Тариф: {selectedTariff.name}</p><p className='form-container-tariff-price'>{selectedTariff.price}</p></div>)}
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
                <div className={`input-group ${emailError ? 'input-group-error' : ''}`}>
                  <label htmlFor="email" className={`input-label ${emailError ? 'error' : ''}`}>
                    {emailError ? 'Ошибка*' : 'Ваша почта'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className={`input-field ${emailError ? 'input-error' : ''}`}
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className={`input-group`}>
                  <label htmlFor="project" className="input-label">О проекте <span>*</span></label>
                  <input
                    type="text"
                    id="project"
                    placeholder="Пару слов о проекте"
                    className={`input-field ${projectError ? 'input-error' : ''}`}
                    value={project}
                    onChange={handleProjectChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" id="agree" className="checkbox-input" checked={checkboxChecked} onChange={handleCheckboxChange} />
                  <label htmlFor="agree" className="checkbox-label">
                    Соглашаюсь с правилами обработки персональных данных
                  </label>
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

export default DesktopModal;
