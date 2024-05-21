import React from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import OurWork from './components/OurWork/OurWork';
import Reviews from './components/Reviews/Reviews';
import AboutUs from './components/AboutUs/AboutUs';
import FAQSection from './components/FAQ/FAQ';
import OrderDevelopmentSection from './components/OrderDevelopment/OrderDevelopment';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <OurWork />
      <Reviews sliderClassName="reviews-slider" />
      <AboutUs />
      <FAQSection />
      <OrderDevelopmentSection />
      <Footer />
    </div>
  );
}

export default App;

