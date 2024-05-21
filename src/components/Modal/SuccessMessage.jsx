import React from 'react';
import warningIcon from '../../assets/icon-success.svg';
import closeIcon from '../../assets/wrapper.svg';
import '../../styles/Modal.css';

const SuccessMessage = ({ onClose }) => {
  return (
    <div className="warning-message">
      <img src={warningIcon} alt="Warning" className="warning-icon" />
      <div className="warning-text">
        <p>Заявка успешно отправлена</p>
        <span>Мы свяжемся с вами в ближайшее время</span>
      </div>
      <img src={closeIcon} alt="Warning" className="close-icon" onClick={onClose} />
    </div>
  );
};

export default SuccessMessage;
