import React from 'react';
import DesktopModal from './DesktopModal';

const Modal = ({ onClose, selectedTariff }) => {
  const isTablet = window.innerWidth <= 1023;

  return isTablet ? <DesktopModal onClose={onClose} selectedTariff={selectedTariff} /> : <DesktopModal onClose={onClose} selectedTariff={selectedTariff} />;
};

export default Modal;
