import React, { useState } from 'react';
import '../../styles/FAQ.css';
import faqs from './constants';
import faqArrow from '../../assets/faq-arrow.svg';
import faqImage from '../../assets/faq.png';

const DesktopFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="faq-section">
      <h2 className="section-title title-purple">Вопрос - ответ</h2>
      <div className="faq-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-block ${index === expandedIndex ? 'expanded' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <div className="question">
              <p className={index === expandedIndex ? 'expanded' : ''}>{faq.question}</p>
                <img src={faqArrow} alt="Arrow" className={`arrow ${index === expandedIndex ? 'expanded' : ''}`} />
              </div>
              {index === expandedIndex && (
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      
        <div className="faq-image">
        <img src={faqImage} alt="FAQ" />
      </div>
      </div>
    </div>
  );
};

export default DesktopFAQ;
