import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from '../Modal/Modal'; 
import WebsiteModal from '../Modal/WebsiteModal';
import arrowRightImage from '../../assets/arrow-circle-right-tablet.svg'; 
import arrowLeftImage from '../../assets/arrow-circle-left-tablet.svg';
import symbolsOutlineImage from '../../assets/symbols-outline.svg';
import slides from './constants';
import '../../styles/OurWork.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = ({ onClick, isFirst }) => {
  return (
    <div className={`arrow left-arrow ${isFirst ? 'hidden' : ''}`} onClick={onClick}>
      <img src={arrowLeftImage} alt="Previous" />
    </div>
  );
};
const NextArrow = ({ onClick, isLast }) => {
  return (
    <div className={`arrow right-arrow ${isLast ? 'hidden' : ''}`} onClick={onClick}>
      <img src={arrowRightImage} alt="Next" />
    </div>
  );
};
const MobileOurWorkSection = () => {
  const [showModal, setShowModal] = useState(false); 
  const [showWebsiteModal, setShowWebsiteModal] = useState(false);
  const [currentSiteUrl, setCurrentSiteUrl] = useState('');
  const toggleModal = () => {
    setShowModal(!showModal); 
  };
  const toggleWebsiteModal = () => {
    setShowWebsiteModal(!showWebsiteModal);
  };
  const closeModal = () => {
    setShowModal(false);
    setShowWebsiteModal(false);
  };
const handleProjectButtonClick = (projectLink) => {
  window.open(projectLink, '_blank');
};
const handleSymbolsImageClick = (imageModal) => {
  setCurrentSiteUrl(imageModal);
  toggleWebsiteModal();
};
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const secondSettings = {
    ...settings,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
  };

  return (
    <div className="our-work-section"id='projects'>
      <h2 className="section-title">Наши проекты</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="first-slide-content">
              <div className="image-container">
              <img src={slide.imageMobile} alt={slide.alt} />
<img src={symbolsOutlineImage} alt="Symbols" className="image-symbol" onClick={() => handleSymbolsImageClick(slide.imageModal)}/>
              </div>
              <div className="info-container">
                <div className="logo-container">
                  <h3>{slide.logoText}</h3> 
                </div>
                <div className="tasks-container">
                  <h3>{slide.tasksTitle}</h3>
                  <ul>
                    {slide.tasksList.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                  <p>{slide.duration}<span>{slide.date}</span></p>
                  <button className="call-back-button" onClick={toggleModal}>{slide.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
     </Slider>
     <div className="second-slider">
  <Slider {...secondSettings}>
    {slides.map((slide, index) => (
      <div className="slide" key={index} style={{ backgroundImage: `url(${slide.imageMobile})` }}>
        <div className="second-info-container">
          <div className="image-container">
            <img src={slide.image} alt={slide.alt} />
          </div>
          <div className="button-container">
          <button className="view-project-button" onClick={() => handleProjectButtonClick(slide.projectLink)}>Смотреть проект</button>
          </div>
          <div className="text-container">
            <h3>{slide.logoText}</h3>
            <p>{slide.duration}{slide.date}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
{showModal && <Modal onClose={closeModal} />}
{showWebsiteModal && <WebsiteModal url={currentSiteUrl} onClose={closeModal} />}
</div>
  );
};

export default MobileOurWorkSection;