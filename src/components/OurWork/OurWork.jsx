import React from 'react';
import MobileOurWork from './MobileOurWork';
import DesktopOurWork from './DesktopOurWork';
import TabletOurWork from './TabletOurWork';

const OurWork = () => {
  const screenWidth = window.innerWidth;
  let ourWorkComponent;

  if (screenWidth <= 425) {
    ourWorkComponent = <MobileOurWork />;
  } else if (screenWidth <= 768) {
    ourWorkComponent = <TabletOurWork />;
  } else {
    ourWorkComponent = <DesktopOurWork />;
  }

  return ourWorkComponent;
};

export default OurWork;
