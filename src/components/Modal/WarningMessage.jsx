import React from 'react';
import warningIcon from '../../assets/icon.svg';
import closeIcon from '../../assets/wrapper.svg';
import '../../styles/Modal.css';

const WarningMessage = ({ onClose }) => {
  return (
    <div className="warning-message">
      <img src={warningIcon} alt="Warning" className="warning-icon" />
      <div className="warning-text">
        <p>Заполните поля с «*»</p>
        <span>Необходимо заполнить все поля с «*»</span>
      </div>
      <img src={closeIcon} alt="Warning" className="close-icon" onClick={onClose} />
    </div>
  );
};

export default WarningMessage;
