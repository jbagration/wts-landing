import React from 'react';
import DesktopReviews from './DesktopReviews';
import TabletReviews from './TabletReviews';
import MobileReviews from './MobileReviews';

const Reviews = () => {
  const screenWidth = window.innerWidth;
  let reviewsComponent;

  if (screenWidth <= 375) {
    reviewsComponent = <MobileReviews />;
  } else if (screenWidth <= 768) {
    reviewsComponent = <TabletReviews />;
  } else {
    reviewsComponent = <DesktopReviews />;
  }

  return reviewsComponent;
};

export default Reviews;

