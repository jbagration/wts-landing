import React from 'react';
import DesktopFAQ from './DesktopFAQ';
import TabletFAQ from './TabletFAQ';

const FAQ = () => {
  const isTablet = window.innerWidth <= 768;

  return isTablet ? <TabletFAQ /> : <DesktopFAQ />;
};

export default FAQ;
