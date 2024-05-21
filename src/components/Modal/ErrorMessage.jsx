import React from 'react';
import warningIcon from '../../assets/icon-error.svg';
import closeIcon from '../../assets/wrapper.svg';
import '../../styles/Modal.css';

const ErrorMessage = ({ onClose }) => {
  return (
    <div className="warning-message">
      <img src={warningIcon} alt="Warning" className="warning-icon" />
      <div className="warning-text">
        <p>Ошибка</p>
        <span>Произошла ошибка сети</span>
      </div>
      <img src={closeIcon} alt="Warning" className="close-icon" onClick={onClose} />
    </div>
  );
};

export default ErrorMessage;
