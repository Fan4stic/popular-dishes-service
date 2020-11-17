import React from 'react';
import Carousel from './carousel.jsx';
const sampleDishes = require('../sample_dishes.js');

const PopularDishes = () => {
  return (
    <Carousel dishes={sampleDishes}/>
  );
};

export default PopularDishes;