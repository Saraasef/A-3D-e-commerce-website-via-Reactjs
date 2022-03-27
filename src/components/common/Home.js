import React from 'react';
// import { Row } from 'react-bootstrap';
import HomeCarousel from './HomeCarousel';
import Category from './Category';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
    <HomeCarousel />
    <Category/>
    <Footer/>
    </div>
      
  );
};

export default Home;