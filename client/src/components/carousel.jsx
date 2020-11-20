import React from 'react';
import Card from'./card.jsx';
import CardContent from './card_content.jsx';
import ScrollButton from './scroll_button.jsx'
import '../styles/styles.css';

const arrow = require('../styles/arrow.js');


const carouselStyle = {
  "display": "flex",
  "flex-direction": "row",
  "height": 200,
  "width": 725,
  "overflow": "scroll"
};

const leftButtonStyle = {
  "position": "absolute",
  "top": "75px",
  "left": "-5px"
};

const rightButtonStyle = {
  "position": "absolute",
  "top": "75px",
  "left": "715px"
};

const Carousel = ({ dishes, changeDish }) => {

  const cardStyle = (array, index) => {
    if (index === 0) {
      return "first";
    } else if (index === array.length - 1) {
      return "last";
    } else {
      return "middle";
    }
  };

  return (
    <div style={{"position": "relative", padding: "0 20px"}}>
      <ScrollButton style={leftButtonStyle} elementId={"carousel"} direction={'left'} ammount={750}/>
      <ScrollButton style={rightButtonStyle} elementId={"carousel"} direction={'right'} ammount={750}/>
      <div className="carousel" id="carousel" style={carouselStyle}>
        {dishes && dishes.map((dish, index) => {
          return (
            <Card className={cardStyle(dishes, index)}>
              <CardContent
              changeDish={changeDish}
              dish={dish}
              key={index}
              image={dish.picture}
              name={dish.name}
              reviews={dish.reviews.length}/>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;