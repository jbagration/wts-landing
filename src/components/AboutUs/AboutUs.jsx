import React from 'react';
import DesktopAboutUs from './DesktopAboutUs';

const AboutUs = () => {
  const isTablet = window.innerWidth <= 1023;

  return isTablet ? <DesktopAboutUs /> : <DesktopAboutUs />;
};

export default AboutUs;
