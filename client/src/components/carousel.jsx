import React from 'react';
import Card from'./card.jsx';
import CardContent from './card_content.jsx';
import '../styles/styles.css';

const carouselStyle = {
  "display": "flex",
  "flex-direction": "row",
  "height": 200,
  "width": 750,
  "overflow": "scroll"
};

const Carousel = ({ dishes }) => {
  return (
    <div className="carousel" style={carouselStyle}>
      {dishes && dishes.map((dish, index) => {
        return (
          <div>
            <Card content={<CardContent key={index} image={dish.image} name={dish.name} reviews={dish.reviews} />}/>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;