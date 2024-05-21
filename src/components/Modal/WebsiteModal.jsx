import React, { useRef, useEffect } from 'react';
import closeModalIcon from '../../assets/close-modal.svg';
import downArrowIcon from '../../assets/down-arrow-icon.svg';
import '../../styles/Modal.css';

const WebsiteModal = ({ url, onClose }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [url]);

  return (
    <div className="overlay">
      <div className="website-modal">
        <img src={closeModalIcon} alt="Close" className="close-modal-icon" onClick={onClose} />
        <div className="modal-content" ref={contentRef}>
          <div className="address-bar">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="url-container">
              <div className="url-text">http://website.url</div>
            </div>
          </div>
          <div className="website-image-container" style={{ overflowY: 'auto', maxHeight: '1100px' }}>
            <img src={url} alt="Website" className="website-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteModal;
